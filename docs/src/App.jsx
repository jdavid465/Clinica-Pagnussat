
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
    <svg
      viewBox="0 0 420 300"
      role="img"
      aria-label="Ilustração de um cachorro e um gato recebendo cuidados veterinários"
      style={{
        width: '100%',
        maxWidth: '370px',
        height: 'auto'
      }}
    >
      <circle cx="210" cy="145" r="118" fill="#fef3c7" />
      <circle cx="65" cy="70" r="13" fill="#fed7aa" />
      <circle cx="350" cy="85" r="10" fill="#fed7aa" />

      <path
        d="M55 205 Q70 190 85 205"
        fill="none"
        stroke="#fdba74"
        strokeWidth="5"
        strokeLinecap="round"
      />

      <path
        d="M335 220 Q350 205 365 220"
        fill="none"
        stroke="#fdba74"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Cachorro */}
      <ellipse cx="135" cy="225" rx="72" ry="35" fill="#d97745" />
      <ellipse cx="135" cy="155" rx="58" ry="60" fill="#f5c28b" />

      <ellipse
        cx="88"
        cy="142"
        rx="20"
        ry="39"
        transform="rotate(-25 88 142)"
        fill="#a85d36"
      />

      <ellipse
        cx="182"
        cy="142"
        rx="20"
        ry="39"
        transform="rotate(25 182 142)"
        fill="#a85d36"
      />

      <ellipse cx="135" cy="177" rx="35" ry="25" fill="#fff1dc" />
      <circle cx="116" cy="151" r="5" fill="#3f2930" />
      <circle cx="154" cy="151" r="5" fill="#3f2930" />
      <ellipse cx="135" cy="171" rx="8" ry="6" fill="#49343a" />

      <path
        d="M126 181 Q135 190 144 181"
        fill="none"
        stroke="#49343a"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M90 220 Q72 237 82 253"
        fill="none"
        stroke="#a85d36"
        strokeWidth="12"
        strokeLinecap="round"
      />

      {/* Gato */}
      <ellipse cx="282" cy="225" rx="62" ry="34" fill="#8c9aa8" />

      <path d="M235 145 L230 82 Q260 92 270 120 Z" fill="#9caab7" />
      <path d="M285 120 Q300 92 330 82 L325 145 Z" fill="#9caab7" />
      <path d="M242 124 L239 98 L259 121 Z" fill="#f7b6a8" />
      <path d="M297 121 L317 98 L313 124 Z" fill="#f7b6a8" />

      <ellipse cx="280" cy="158" rx="53" ry="52" fill="#aebbc6" />
      <ellipse cx="280" cy="178" rx="30" ry="20" fill="#eef2f5" />
      <ellipse cx="263" cy="153" rx="5" ry="7" fill="#344454" />
      <ellipse cx="297" cy="153" rx="5" ry="7" fill="#344454" />
      <path d="M274 173 L286 173 L280 179 Z" fill="#d97979" />

      <path
        d="M280 179 Q272 188 266 181 M280 179 Q288 188 294 181"
        fill="none"
        stroke="#52616d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M252 180 L224 175 M252 188 L226 193 M308 180 L336 175 M308 188 L334 193"
        stroke="#657582"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Estetoscópio */}
      <path
        d="M194 105 Q205 75 225 105 L225 135 Q225 157 245 157"
        fill="none"
        stroke="#0f766e"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <circle cx="247" cy="157" r="9" fill="#0f766e" />
      <circle cx="247" cy="157" r="4" fill="#ccfbf1" />

      {/* Detalhes */}
      <path
        d="M205 45 L205 61 M197 53 L213 53"
        stroke="#f59e0b"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <path
        d="M365 145 L365 161 M357 153 L373 153"
        stroke="#f59e0b"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
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
