import React, { useState, useEffect } from 'react';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZMATRwyxZU0ud2bzKV3AyZ3kAVtK2W-0",
  authDomain: "banco-de-dados-clinica-23b42.firebaseapp.com",
  projectId: "banco-de-dados-clinica-23b42",
  storageBucket: "banco-de-dados-clinica-23b42.firebasestorage.app",
  messagingSenderId: "119527584560",
  appId: "1:119527584560:web:948e30109a2fa0ec0f0ef5",
  measurementId: "G-2H9BCVKXGZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export default function App() {
  const [user, setUser] = useState(null);
  const [clinicData, setClinicData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('home'); // 'home', 'login', 'register'
  
  // Campos do formulário
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [clinicName, setClinicName] = useState(''); // Nome da clínica no cadastro
  const [error, setError] = useState('');

  // Monitorizar sessão do utilizador e buscar dados da clínica (Multi-tenant)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Buscar os dados da clínica associada a este utilizador no Firestore
        try {
          const clinicDocRef = doc(db, "clinics", currentUser.uid);
          const clinicSnap = await getDoc(clinicDocRef);
          if (clinicSnap.exists()) {
            setClinicData(clinicSnap.data());
          } else {
            // Clínica padrão caso criada por outro método
            setClinicData({ name: "Minha Clínica Veterinária" });
          }
        } catch (err) {
          console.error("Erro ao buscar dados da clínica:", err);
          setClinicData({ name: "VetSystem" });
        }
        setCurrentView('dashboard');
      } else {
        setClinicData(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (currentView === 'register') {
        // 1. Criar utilizador no Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;

        // 2. Criar o registo da clínica exclusiva para este inquilino (Multi-tenant)
        const finalClinicName = clinicName.trim() ? clinicName : "Clínica Veterinária";
        await setDoc(doc(db, "clinics", newUser.uid), {
          name: finalClinicName,
          ownerEmail: email,
          createdAt: new Date().toISOString()
        });

        setClinicData({ name: finalClinicName });
      } else {
        // Apenas login
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', marginTop: '100px', fontFamily: 'sans-serif', fontSize: '18px' }}>A carregar VetSystem...</div>;
  }

  // 1. PAINEL DA CLÍNICA (DASHBOARD MULTI-TENANT)
  if (user) {
    return (
      <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fffdfa', minHeight: '100vh', padding: '40px', boxSizing: 'border-box' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f3e8ff', paddingBottom: '20px', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <span style={{ backgroundColor: '#f97316', color: '#fff', padding: '8px 14px', borderRadius: '10px', fontWeight: 'bold' }}>🐾 VetSystem</span>
            <h2 style={{ margin: 0, color: '#1f2937', fontSize: '20px' }}>{clinicData?.name || 'Painel da Clínica'}</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span style={{ color: '#4b5563', fontSize: '14px' }}>{user.email}</span>
            <button 
              onClick={() => signOut(auth)} 
              style={{ padding: '8px 16px', backgroundColor: '#ef4444', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Sair
            </button>
          </div>
        </header>

        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '60px', backgroundColor: '#fff7ed', borderRadius: '24px', border: '1px solid #ffedd5' }}>
          <h1 style={{ color: '#9a3412', fontSize: '32px', marginBottom: '15px' }}>Bem-vindo ao sistema da {clinicData?.name}!</h1>
          <p style={{ color: '#c2410c', fontSize: '16px', lineHeight: '1.5' }}>
            Ambiente isolado e configurado com sucesso. Prontuários, agenda e caixa desta unidade estão prontos para uso.
          </p>
        </div>
      </div>
    );
  }

  // 2. TELA DE LOGIN / CADASTRO COM NOME DA CLÍNICA
  if (currentView === 'login' || currentView === 'register') {
    return (
      <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fb923c', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, boxSizing: 'border-box' }}>
        <div style={{ width: '100%', maxWidth: '420px', padding: '40px', backgroundColor: '#fff', borderRadius: '24px', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '25px' }}>
            <span style={{ backgroundColor: '#ea580c', color: '#fff', padding: '8px 12px', borderRadius: '10px', fontWeight: 'bold', fontSize: '14px' }}>🐾 VetSystem</span>
          </div>
          
          <h2 style={{ color: '#1f2937', fontSize: '26px', marginBottom: '8px', fontWeight: '800' }}>
            {currentView === 'register' ? 'Registar nova Clínica' : 'Bem-vindo de volta'}
          </h2>
          <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '25px' }}>
            {currentView === 'register' ? 'Cadastre sua clínica para ter seu ambiente exclusivo.' : 'Acesse o painel administrativo da sua clínica.'}
          </p>

          {error && <p style={{ color: '#dc2626', backgroundColor: '#fee2e2', padding: '10px', borderRadius: '8px', fontSize: '13px', marginBottom: '20px' }}>{error}</p>}

          <form onSubmit={handleAuth}>
            {currentView === 'register' && (
              <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151', fontSize: '14px' }}>Nome da Clínica</label>
                <input 
                  type="text" 
                  value={clinicName} 
                  onChange={(e) => setClinicName(e.target.value)} 
                  required 
                  style={{ width: '100%', padding: '12px 16px', boxSizing: 'border-box', border: '1px solid #d1d5db', borderRadius: '12px', fontSize: '14px', outline: 'none' }}
                  placeholder="Ex: Clínica Pagnussat"
                />
              </div>
            )}
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151', fontSize: '14px' }}>E-mail</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                style={{ width: '100%', padding: '12px 16px', boxSizing: 'border-box', border: '1px solid #d1d5db', borderRadius: '12px', fontSize: '14px', outline: 'none' }}
                placeholder="seu@email.com"
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151', fontSize: '14px' }}>Senha</label>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                style={{ width: '100%', padding: '12px 16px', boxSizing: 'border-box', border: '1px solid #d1d5db', borderRadius: '12px', fontSize: '14px', outline: 'none' }}
                placeholder="••••••••"
              />
            </div>
            <button type="submit" style={{ width: '100%', padding: '14px', backgroundColor: '#f97316', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', boxShadow: '0 4px 6px rgba(249, 115, 22, 0.3)' }}>
              {currentView === 'register' ? 'Criar Clínica' : 'Entrar'}
            </button>
          </form>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button 
              onClick={() => setCurrentView(currentView === 'register' ? 'login' : 'register')} 
              style={{ background: 'none', border: 'none', color: '#f97316', cursor: 'pointer', fontWeight: '600', fontSize: '14px' }}
            >
              {currentView === 'register' ? 'Já tem uma clínica? Entrar' : 'Não tem conta? Cadastrar clínica'}
            </button>
            <br />
            <button 
              onClick={() => setCurrentView('home')} 
              style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer', fontSize: '13px', marginTop: '12px' }}
            >
              ← Voltar à página inicial
            </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. PÁGINA INICIAL (LANDING PAGE - Sem o botão solto no topo)
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fffdfa', minHeight: '100vh', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
      {/* Cabeçalho limpo (Botão do topo removido conforme solicitado) */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 60px', borderBottom: '1px solid #fef3c7' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ backgroundColor: '#f97316', color: '#fff', padding: '8px 14px', borderRadius: '12px', fontWeight: 'bold', fontSize: '15px' }}>🐾 VetSystem</span>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <div style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'space-between', padding: '40px 80px', maxWidth: '1200px', margin: '0 auto', width: '100%', boxSizing: 'border-box', gap: '40px' }}>
        <div style={{ flex: 1 }}>
          <span style={{ backgroundColor: '#fef3c7', color: '#d97706', padding: '6px 14px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold', display: 'inline-block', marginBottom: '20px' }}>
            Plataforma Multi-clínicas Veterinárias
          </span>
          <h1 style={{ fontSize: '52px', color: '#1f2937', lineHeight: '1.1', marginBottom: '20px', fontWeight: '900' }}>
            Cuidar dos pets <span style={{ color: '#f97316' }}>fica mais leve.</span>
          </h1>
          <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.6', marginBottom: '35px', maxWidth: '480px' }}>
            Cada clínica tem o seu próprio espaço exclusivo. Prontuários, vacinas, internações, caixa e estoque em um só lugar.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button 
              onClick={() => setCurrentView('login')}
              style={{ padding: '16px 32px', backgroundColor: '#f97316', color: '#fff', border: 'none', borderRadius: '16px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 15px -3px rgba(249, 115, 22, 0.3)' }}
            >
              Acessar Sistema
            </button>
            <button 
              onClick={() => setCurrentView('register')}
              style={{ padding: '16px 32px', backgroundColor: '#fff', color: '#f97316', border: '2px solid #f97316', borderRadius: '16px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              Cadastrar Clínica
            </button>
          </div>
        </div>

        {/* Ilustração / Card Lateral */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#fffbeb', padding: '40px', borderRadius: '32px', border: '1px solid #fef3c7', textAlign: 'center', width: '100%', maxWidth: '450px', boxShadow: '0 20px 25px -5px rgba(252, 211, 77, 0.1)' }}>
            <div style={{ fontSize: '70px', marginBottom: '20px' }}>🐶 🐱 🩺</div>
            <h3 style={{ color: '#9a3412', fontSize: '20px', marginBottom: '10px' }}>Gestão Multi-Tenant</h3>
            <p style={{ color: '#b45309', fontSize: '14px', lineHeight: '1.5' }}>
              Isolamento total de dados por clínica. O padrão dos melhores softwares do mercado.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}