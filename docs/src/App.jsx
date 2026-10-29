
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

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

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#fffdfa',
    minHeight: '100vh',
    color: '#1f2937'
  },

  brand: {
    backgroundColor: '#f97316',
    color: '#fff',
    padding: '9px 15px',
    borderRadius: '12px',
    fontWeight: 'bold',
    fontSize: '16px',
    display: 'inline-block'
  },

  primaryButton: {
    padding: '15px 28px',
    backgroundColor: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '16px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 8px 15px rgba(249, 115, 22, 0.22)'
  },

  secondaryButton: {
    padding: '15px 28px',
    backgroundColor: '#fff',
    color: '#f97316',
    border: '2px solid #f97316',
    borderRadius: '16px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },

  input: {
    width: '100%',
    padding: '13px 15px',
    boxSizing: 'border-box',
    border: '1px solid #d1d5db',
    borderRadius: '12px',
    fontSize: '14px',
    outline: 'none'
  }
};

function PetIllustration() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}pets-vet.png`}
      alt="Cachorro e gato unidos por um estetoscópio em formato de coração"
      style={{
        display: 'block',
        width: '100%',
        maxWidth: '370px',
        height: 'auto',
        margin: '0 auto'
      }}
    />
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [clinicData, setClinicData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('home');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Monitoramento da sessão Firebase
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        try {
          const clinicDocRef = doc(db, 'clinics', currentUser.uid);
          const clinicSnap = await getDoc(clinicDocRef);

          if (clinicSnap.exists()) {
            setClinicData(clinicSnap.data());
          } else {
            setClinicData({
              name: 'Minha Clínica Veterinária'
            });
          }
        } catch (err) {
          console.error('Erro ao buscar dados da clínica:', err);

          setClinicData({
            name: 'VetSystem'
          });
        }

        setCurrentView('dashboard');
      } else {
        setClinicData(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error('Erro no login:', err);

      setError(
        'Não foi possível entrar. Confira seu e-mail e sua senha.'
      );
    }
  };

  // Carregamento
  if (loading) {
    return (
      <div
        style={{
          textAlign: 'center',
          marginTop: '100px',
          fontFamily: 'Arial, sans-serif',
          fontSize: '18px',
          color: '#9a3412'
        }}
      >
        Carregando SISTEMA VET...
      </div>
    );
  }

  // PAINEL DA CLÍNICA
  if (user) {
    return (
      <div
        style={{
          ...styles.page,
          padding: '30px 40px',
          boxSizing: 'border-box'
        }}
      >
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            borderBottom: '1px solid #f3e8ff',
            paddingBottom: '20px',
            marginBottom: '40px'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}
          >
            <span style={styles.brand}>🐾 SISTEMA VET</span>

            <h2
              style={{
                margin: 0,
                color: '#1f2937',
                fontSize: '20px'
              }}
            >
              {clinicData?.name || 'Painel da Clínica'}
            </h2>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '15px',
              flexWrap: 'wrap'
            }}
          >
            <span
              style={{
                color: '#4b5563',
                fontSize: '14px'
              }}
            >
              {user.email}
            </span>

            <button
              onClick={() => signOut(auth)}
              style={{
                padding: '9px 17px',
                backgroundColor: '#ef4444',
                color: '#fff',
                border: 'none',
                borderRadius: '9px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Sair
            </button>
          </div>
        </header>

        <div
          style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
            padding: '55px 30px',
            backgroundColor: '#fff7ed',
            borderRadius: '24px',
            border: '1px solid #ffedd5'
          }}
        >
          <div
            style={{
              fontSize: '55px',
              marginBottom: '15px'
            }}
          >
            🐾
          </div>

          <h1
            style={{
              color: '#9a3412',
              fontSize: '30px',
              marginBottom: '15px'
            }}
          >
            Bem-vindo ao SISTEMA VET!
          </h1>

          <p
            style={{
              color: '#c2410c',
              fontSize: '16px',
              lineHeight: '1.6'
            }}
          >
            Seu ambiente da clínica está conectado.
            Estamos preparando as ferramentas para facilitar
            sua rotina veterinária.
          </p>
        </div>
      </div>
    );
  }

  // TELA DE LOGIN
  if (currentView === 'login') {
    return (
      <div
        style={{
          minHeight: '100vh',
          fontFamily: 'Arial, sans-serif',
          backgroundColor: '#fb923c',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '25px',
          boxSizing: 'border-box'
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '420px',
            padding: '40px',
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            borderRadius: '24px',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
          }}
        >
          <div style={{ marginBottom: '25px' }}>
            <span style={styles.brand}>🐾 SISTEMA VET</span>
          </div>

          <h2
            style={{
              color: '#1f2937',
              fontSize: '26px',
              marginBottom: '8px',
              fontWeight: '800'
            }}
          >
            Bem-vindo de volta!
          </h2>

          <p
            style={{
              color: '#6b7280',
              fontSize: '14px',
              lineHeight: '1.5',
              marginBottom: '25px'
            }}
          >
            Acesse o painel administrativo da sua clínica.
          </p>

          {error && (
            <p
              style={{
                color: '#dc2626',
                backgroundColor: '#fee2e2',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '13px',
                marginBottom: '20px'
              }}
            >
              {error}
            </p>
          )}

          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '20px' }}>
              <label
                style={{
                  display: 'block',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#374151',
                  fontSize: '14px'
                }}
              >
                E-mail
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={styles.input}
                placeholder="seu@email.com"
                autoComplete="email"
              />
            </div>

            <div style={{ marginBottom: '25px' }}>
              <label
                style={{
                  display: 'block',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#374151',
                  fontSize: '14px'
                }}
              >
                Senha
              </label>

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={styles.input}
                placeholder="Sua senha"
                autoComplete="current-password"
              />
            </div>

            <button
              type="submit"
              style={{
                ...styles.primaryButton,
                width: '100%'
              }}
            >
              Entrar no sistema
            </button>
          </form>

          <div
            style={{
              textAlign: 'center',
              marginTop: '22px'
            }}
          >
            <button
              onClick={() => {
                setError('');
                setCurrentView('home');
              }}
              style={{
                background: 'none',
                border: 'none',
                color: '#9ca3af',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              ← Voltar à página inicial
            </button>
          </div>
        </div>
      </div>
    );
  }

  // PÁGINA INICIAL
  return (
    <div
      style={{
        ...styles.page,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 60px',
          borderBottom: '1px solid #fef3c7'
        }}
      >
        <span style={styles.brand}>🐾 SISTEMA VET</span>
      </header>

      <main
        style={{
          display: 'flex',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '40px 60px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
          gap: '45px',
          flexWrap: 'wrap'
        }}
      >
        {/* TEXTO PRINCIPAL */}
        <div
          style={{
            flex: '1 1 400px',
            minWidth: 0
          }}
        >
          <span
            style={{
              backgroundColor: '#fef3c7',
              color: '#d97706',
              padding: '7px 15px',
              borderRadius: '20px',
              fontSize: '13px',
              fontWeight: 'bold',
              display: 'inline-block',
              marginBottom: '20px'
            }}
          >
            Plataforma para clínicas veterinárias
          </span>

          <h1
            style={{
              fontSize: 'clamp(38px, 5vw, 52px)',
              color: '#1f2937',
              lineHeight: '1.12',
              marginBottom: '20px',
              fontWeight: '900'
            }}
          >
            Cuidar dos pets{' '}
            <span style={{ color: '#f97316' }}>
              fica mais leve.
            </span>
          </h1>

          <p
            style={{
              color: '#4b5563',
              fontSize: '16px',
              lineHeight: '1.7',
              marginBottom: '35px',
              maxWidth: '480px'
            }}
          >
            Cada clínica tem seu próprio espaço.
            Organize a rotina, os atendimentos e os cuidados
            dos pacientes em um só lugar.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '15px',
              flexWrap: 'wrap'
            }}
          >
            <button
              onClick={() => {
                setError('');
                setCurrentView('login');
              }}
              style={styles.primaryButton}
            >
              Acessar Sistema
            </button>

            {/* SOLICITAR ACESSO - TEMPORARIAMENTE INDISPONÍVEL */}
            <button
              type="button"
              disabled
              title="Solicitações de acesso ainda não estão disponíveis"
              aria-label="Solicitar acesso. Indisponível no momento."
              style={{
                ...styles.secondaryButton,
                opacity: 0.5,
                cursor: 'not-allowed',
                backgroundColor: '#f3f4f6',
                color: '#9ca3af',
                border: '2px solid #d1d5db',
                boxShadow: 'none'
              }}
            >
              Solicitar acesso
            </button>
          </div>

          <p
            style={{
              color: '#9ca3af',
              fontSize: '12px',
              marginTop: '12px'
            }}
          >
            Solicitações de acesso estarão disponíveis em breve.
          </p>
        </div>

        {/* CARD LATERAL COM ILUSTRAÇÃO */}
        <div
          style={{
            flex: '1 1 350px',
            display: 'flex',
            justifyContent: 'center',
            minWidth: 0
          }}
        >
          <div
            style={{
              backgroundColor: '#fffbeb',
              padding: '30px',
              borderRadius: '32px',
              border: '1px solid #fef3c7',
              textAlign: 'center',
              width: '100%',
              maxWidth: '450px',
              boxSizing: 'border-box',
              boxShadow: '0 20px 25px -5px rgba(252, 211, 77, 0.1)'
            }}
          >
            <PetIllustration />

            <h3
              style={{
                color: '#9a3412',
                fontSize: '21px',
                margin: '12px 0 10px'
              }}
            >
              Por quem cuida de quem não sabe falar.
            </h3>

            <p
              style={{
                color: '#b45309',
                fontSize: '14px',
                lineHeight: '1.6',
                margin: 0
              }}
            >
              Tecnologia e organização para transformar
              a rotina veterinária.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
