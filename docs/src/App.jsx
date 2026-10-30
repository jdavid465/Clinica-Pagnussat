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

const WEB3FORMS_ACCESS_KEY = 'dd383332-8636-4d2c-97d8-1f7cfb318b75';

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    background: '#fffdfa',
    minHeight: '100vh',
    color: '#292524',
    overflowX: 'clip'
  },
  container: {
    width: '100%',
    maxWidth: '1160px',
    margin: '0 auto',
    padding: '0 25px',
    boxSizing: 'border-box'
  },
  brand: {
    background: '#f97316',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '12px',
    fontWeight: '800',
    fontSize: '17px',
    display: 'inline-block',
    whiteSpace: 'nowrap'
  },
  primaryButton: {
    padding: '14px 23px',
    background: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.2s'
  },
  secondaryButton: {
    padding: '13px 22px',
    background: '#fff',
    color: '#c2410c',
    border: '1px solid #fed7aa',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  section: {
    padding: '85px 0'
  },
  eyebrow: {
    display: 'inline-block',
    color: '#c2410c',
    background: '#ffedd5',
    padding: '7px 13px',
    borderRadius: '30px',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    marginBottom: '17px'
  },
  sectionTitle: {
    fontSize: 'clamp(28px, 4vw, 40px)',
    lineHeight: '1.15',
    color: '#292524',
    margin: '0 0 16px',
    fontWeight: '800'
  },
  sectionText: {
    color: '#78716c',
    fontSize: '16px',
    lineHeight: '1.75',
    maxWidth: '690px',
    margin: '0 auto'
  },
  card: {
    background: '#fff',
    border: '1px solid #f5e7d8',
    borderRadius: '18px',
    padding: '25px',
    boxShadow: '0 8px 28px rgba(120, 53, 15, 0.045)'
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '13px 14px',
    border: '1px solid #e7e5e4',
    borderRadius: '10px',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    outlineColor: '#fb923c',
    background: '#fff'
  }
};

const modules = [
  {
    icon: '👥',
    title: 'Tutores e pacientes',
    description: 'Cadastros centralizados para manter as informações dos tutores e seus animais organizadas.'
  },
  {
    icon: '🩺',
    title: 'Atendimento veterinário',
    description: 'Estrutura planejada para consultas, anamnese, registros clínicos e histórico do paciente.'
  },
  {
    icon: '📋',
    title: 'Receitas e prescrições',
    description: 'Criação de receitas vinculadas ao atendimento, com geração de documentos em PDF prevista.'
  },
  {
    icon: '🏥',
    title: 'Internamento',
    description: 'Acompanhamento de pacientes internados, evolução clínica, cuidados e procedimentos.'
  },
  {
    icon: '💉',
    title: 'Vacinação',
    description: 'Organização do histórico vacinal, lotes, validade e próximos reforços.'
  },
  {
    icon: '📦',
    title: 'Estoque',
    description: 'Controle planejado de produtos, medicamentos, entradas, saídas e movimentações por unidade.'
  },
  {
    icon: '💰',
    title: 'Financeiro',
    description: 'Estrutura para caixa, contas, recebimentos e acompanhamento financeiro.'
  },
  {
    icon: '📊',
    title: 'Relatórios',
    description: 'Indicadores para acompanhar a operação e apoiar decisões de gestão.'
  }
];

const faqs = [
  {
    question: 'O VET MAX é destinado apenas a clínicas pequenas?',
    answer: 'Não. A proposta é atender clínicas independentes, hospitais veterinários e organizações com várias unidades, permitindo uma evolução gradual da estrutura.'
  },
  {
    question: 'É possível administrar mais de uma unidade?',
    answer: 'Essa é uma das bases da arquitetura planejada. Uma organização poderá possuir várias unidades, com operações próprias e gestão consolidada conforme as permissões.'
  },
  {
    question: 'Os módulos já estão todos disponíveis?',
    answer: 'Não. O VET MAX está em desenvolvimento. Os módulos serão disponibilizados gradualmente, depois de implementados, integrados e validados.'
  },
  {
    question: 'Como funcionam os planos e os preços?',
    answer: 'As condições comerciais ainda estão em formação. Entre em contato para acompanhar as novidades e demonstrar seu interesse.'
  },
  {
    question: 'Como posso solicitar informações?',
    answer: 'Utilize o formulário desta página. Sua mensagem será encaminhada para a equipe responsável pelo VET MAX.'
  },
  {
    question: 'O sistema protege os dados de cada clínica?',
    answer: 'O isolamento entre organizações, o controle de permissões e a proteção das informações são requisitos centrais da arquitetura do projeto.'
  }
];

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #f5e7d8',
      background: '#fffdfa',
      padding: '27px 20px',
      textAlign: 'center'
    }}>
      <div style={{
        color: '#a8a29e',
        fontSize: '12px',
        lineHeight: 1.8
      }}>
        © 2026 VET MAX. Todos os direitos reservados.
        <br />
        by Jonathan D. Andrade
      </div>
    </footer>
  );
}

function PetIllustration() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}pets-vet.png`}
      alt="Ilustração de cachorro e gato representando o cuidado veterinário"
      style={{
        width: '100%',
        maxWidth: '390px',
        height: 'auto',
        display: 'block',
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

  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'Quero conhecer o VET MAX',
    message: ''
  });
  const [website, setWebsite] = useState('');
  const [sending, setSending] = useState(false);
  const [contactStatus, setContactStatus] = useState(null);

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

  useEffect(() => {
    const style = document.createElement('style');

    style.innerHTML = `
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 78px;
      }

      section[id] {
        scroll-margin-top: 78px;
      }

      .vet-header {
        position: sticky;
        top: 0;
        z-index: 1000;
        width: 100%;
        box-sizing: border-box;
        background: rgba(255, 253, 250, 0.97);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid #f5e7d8;
        box-shadow: 0 3px 14px rgba(120, 53, 15, 0.045);
      }

      .vet-nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
      }

      .vet-nav a {
        color: #57534e;
        text-decoration: none;
        font-size: 13px;
        font-weight: 700;
        white-space: nowrap;
        transition: color 0.2s ease;
      }

      .vet-nav a:hover {
        color: #ea580c;
      }

      .vet-header a,
      .vet-header button {
        -webkit-tap-highlight-color: transparent;
      }

      @media (max-width: 900px) {
        .vet-header {
          flex-wrap: wrap !important;
          row-gap: 10px !important;
        }

        .vet-nav {
          order: 3;
          width: 100%;
          justify-content: center;
          flex-wrap: wrap;
          gap: 18px !important;
          padding: 4px 0 8px;
        }
      }

      @media (max-width: 600px) {
        .vet-header {
          padding: 8px 18px !important;
          row-gap: 8px !important;
        }

        .vet-nav {
          justify-content: flex-start;
          flex-wrap: nowrap;
          overflow-x: auto;
          white-space: nowrap;
          gap: 20px !important;
          padding: 5px 0 8px;
          scrollbar-width: thin;
        }

        .vet-nav a {
          font-size: 12px !important;
        }

        .vet-header > a span {
          padding: 8px 12px !important;
          font-size: 15px !important;
        }

        .vet-header > button {
          padding: 9px 12px !important;
          font-size: 12px !important;
        }
      }

      .vet-contact-input:focus {
        border-color: #fb923c !important;
        box-shadow: 0 0 0 3px rgba(251, 146, 60, 0.13);
        outline: none;
      }
    `;

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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

  const handleContactChange = (e) => {
    const { name, value } = e.target;

    setContact((previous) => ({
      ...previous,
      [name]: value
    }));

    if (contactStatus) {
      setContactStatus(null);
    }
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();

    if (sending) return;

    if (website.trim()) {
      setContactStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso.'
      });
      return;
    }

    setSending(true);
    setContactStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: contact.name.trim(),
          email: contact.email.trim(),
          subject: `[VET MAX] ${contact.subject}`,
          message: contact.message.trim()
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || 'Não foi possível enviar a mensagem.'
        );
      }

      setContactStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.'
      });

      setContact({
        name: '',
        email: '',
        subject: 'Quero conhecer o VET MAX',
        message: ''
      });
    } catch (err) {
      console.error('Erro ao enviar formulário:', err);

      setContactStatus({
        type: 'error',
        message: 'Não foi possível enviar sua mensagem. Tente novamente mais tarde.'
      });
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div style={{
        textAlign: 'center',
        marginTop: '100px',
        fontFamily: 'Arial, sans-serif',
        color: '#9a3412',
        fontSize: '18px'
      }}>
        Carregando VET MAX...
      </div>
    );
  }

  if (user) {
    return (
      <div style={{
        ...styles.page,
        padding: '30px 40px',
        boxSizing: 'border-box'
      }}>
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          borderBottom: '1px solid #f3e8ff',
          paddingBottom: '20px',
          marginBottom: '40px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px'
          }}>
            <span style={styles.brand}>🐾 VET MAX</span>

            <h2 style={{
              margin: 0,
              color: '#1f2937',
              fontSize: '20px'
            }}>
              {clinicData?.name || 'Painel da Clínica'}
            </h2>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              color: '#4b5563',
              fontSize: '14px'
            }}>
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

        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '55px 30px',
          backgroundColor: '#fff7ed',
          borderRadius: '24px',
          border: '1px solid #ffedd5'
        }}>
          <div style={{
            fontSize: '55px',
            marginBottom: '15px'
          }}>
            🐾
          </div>

          <h1 style={{
            color: '#9a3412',
            fontSize: '30px',
            marginBottom: '15px'
          }}>
            Bem-vindo ao VET MAX!
          </h1>

          <p style={{
            color: '#c2410c',
            fontSize: '16px',
            lineHeight: '1.6'
          }}>
            Seu ambiente da clínica está conectado.
            Estamos preparando as ferramentas para facilitar
            sua rotina veterinária.
          </p>
        </div>
      </div>
    );
  }

  if (currentView === 'login') {
    return (
      <div style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '35px 20px 0',
        boxSizing: 'border-box'
      }}>
        <div style={{
          width: '100%',
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div style={{
            width: '100%',
            maxWidth: '420px',
            padding: '40px',
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            borderRadius: '24px',
            boxShadow: '0 20px 25px -5px rgba(120, 53, 15, 0.10)',
            border: '1px solid #ffedd5'
          }}>
            <div style={{ marginBottom: '25px' }}>
              <span style={styles.brand}>🐾 VET MAX</span>
            </div>

            <h2 style={{
              color: '#1f2937',
              fontSize: '26px',
              marginBottom: '8px',
              fontWeight: '800'
            }}>
              Bem-vindo de volta!
            </h2>

            <p style={{
              color: '#6b7280',
              fontSize: '14px',
              lineHeight: '1.5',
              marginBottom: '25px'
            }}>
              Acesse o painel administrativo da sua clínica.
            </p>

            {error && (
              <p style={{
                color: '#dc2626',
                backgroundColor: '#fee2e2',
                padding: '12px',
                borderRadius: '8px',
                fontSize: '13px',
                marginBottom: '20px'
              }}>
                {error}
              </p>
            )}

            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{
                  display: 'block',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#374151',
                  fontSize: '14px'
                }}>
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
                <label style={{
                  display: 'block',
                  fontWeight: '600',
                  marginBottom: '8px',
                  color: '#374151',
                  fontSize: '14px'
                }}>
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

            <div style={{
              textAlign: 'center',
              marginTop: '22px'
            }}>
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

        <div style={{
          width: '100%',
          marginTop: '30px'
        }}>
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div style={{
      ...styles.page,
      display: 'flex',
      flexDirection: 'column'
    }}>
      <header
        className="vet-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '8px 35px',
          minHeight: '64px',
          gap: '20px'
        }}
      >
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          aria-label="VET MAX - voltar ao início"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <span style={{
            ...styles.brand,
            padding: '8px 14px',
            fontSize: '16px'
          }}>
            🐾 VET MAX
          </span>
        </a>

        <nav className="vet-nav" style={{
          flex: 1,
          gap: '32px'
        }}>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#recursos">Recursos</a>
          <a href="#estrutura">Estrutura</a>
          <a href="#planos">Planos</a>
          <a href="#duvidas">Dúvidas</a>
          <a href="#contato">Contato</a>
        </nav>

        <button
          onClick={() => {
            setError('');
            setCurrentView('login');
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}
          style={{
            ...styles.primaryButton,
            padding: '10px 18px',
            fontSize: '13px',
            flexShrink: 0
          }}
        >
          Entrar
        </button>
      </header>

      <main style={{
        flex: 1
      }}>
        <section
          id="inicio"
          style={{
            ...styles.section,
            padding: '75px 0 85px',
            background: 'linear-gradient(180deg, #fffdfa 0%, #fff7ed 100%)'
          }}
        >
          <div style={{
            ...styles.container,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            alignItems: 'center',
            gap: '50px'
          }}>
            <div>
              <span style={styles.eyebrow}>
                Gestão veterinária preparada para crescer
              </span>

              <h1 style={{
                fontSize: 'clamp(38px, 5vw, 56px)',
                lineHeight: 1.1,
                color: '#292524',
                margin: '0 0 22px',
                fontWeight: '900'
              }}>
                Sua clínica evolui.
                <br />
                <span style={{ color: '#f97316' }}>
                  Sua gestão acompanha.
                </span>
              </h1>

              <p style={{
                color: '#78716c',
                fontSize: '17px',
                lineHeight: 1.8,
                maxWidth: '560px',
                margin: '0 0 28px'
              }}>
                Uma plataforma pensada para organizar a rotina veterinária,
                integrar informações e acompanhar o crescimento da sua clínica,
                hospital ou rede.
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '13px'
              }}>
                <a href="#contato" style={styles.primaryButton}>
                  Conhecer o VET MAX
                </a>

                <a href="#recursos" style={styles.secondaryButton}>
                  Conhecer recursos
                </a>
              </div>

              <p style={{
                color: '#a8a29e',
                fontSize: '12px',
                lineHeight: 1.6,
                marginTop: '18px'
              }}>
                Plataforma em desenvolvimento, com disponibilização gradual
                dos módulos após implementação e validação.
              </p>
            </div>

            <div style={{
              ...styles.card,
              padding: '35px 25px',
              background: '#fffbeb',
              borderColor: '#fef3c7',
              textAlign: 'center'
            }}>
              <PetIllustration />

              <h2 style={{
                color: '#9a3412',
                fontSize: '23px',
                margin: '20px 0 10px'
              }}>
                Tecnologia para quem cuida.
              </h2>

              <p style={{
                color: '#a16207',
                fontSize: '14px',
                lineHeight: 1.7,
                margin: 0
              }}>
                Organização, integração e informação para apoiar
                o trabalho de quem dedica sua rotina à saúde animal.
              </p>
            </div>
          </div>
        </section>

        <section id="sobre" style={{
          ...styles.section,
          background: '#fffdfa'
        }}>
          <div style={{
            ...styles.container,
            textAlign: 'center'
          }}>
            <span style={styles.eyebrow}>Sobre o projeto</span>

            <h2 style={styles.sectionTitle}>
              Uma gestão que acompanha o crescimento.
            </h2>

            <p style={styles.sectionText}>
              O VET MAX está sendo desenvolvido para atender desde uma clínica
              independente até organizações com várias unidades. A proposta é
              integrar cadastros, rotinas e informações em uma estrutura
              preparada para crescer com segurança.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
              gap: '18px',
              marginTop: '45px',
              textAlign: 'left'
            }}>
              <div style={styles.card}>
                <div style={{ fontSize: '30px', marginBottom: '12px' }}>🏥</div>
                <h3 style={{ color: '#9a3412', margin: '0 0 10px' }}>
                  Para clínicas e hospitais
                </h3>
                <p style={{
                  color: '#78716c',
                  lineHeight: 1.7,
                  fontSize: '14px',
                  margin: 0
                }}>
                  Uma estrutura pensada para diferentes portes e rotinas
                  veterinárias.
                </p>
              </div>

              <div style={styles.card}>
                <div style={{ fontSize: '30px', marginBottom: '12px' }}>🔗</div>
                <h3 style={{ color: '#9a3412', margin: '0 0 10px' }}>
                  Módulos integrados
                </h3>
                <p style={{
                  color: '#78716c',
                  lineHeight: 1.7,
                  fontSize: '14px',
                  margin: 0
                }}>
                  Cadastros compartilhados e fluxos conectados para evitar
                  informações duplicadas.
                </p>
              </div>

              <div style={styles.card}>
                <div style={{ fontSize: '30px', marginBottom: '12px' }}>📈</div>
                <h3 style={{ color: '#9a3412', margin: '0 0 10px' }}>
                  Preparado para crescer
                </h3>
                <p style={{
                  color: '#78716c',
                  lineHeight: 1.7,
                  fontSize: '14px',
                  margin: 0
                }}>
                  Arquitetura planejada para organizações com uma ou várias
                  unidades.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="recursos" style={{
          ...styles.section,
          background: '#fff7ed'
        }}>
          <div style={{
            ...styles.container,
            textAlign: 'center'
          }}>
            <span style={styles.eyebrow}>Recursos planejados</span>

            <h2 style={styles.sectionTitle}>
              As ferramentas para uma rotina mais organizada.
            </h2>

            <p style={{
              ...styles.sectionText,
              marginBottom: '42px'
            }}>
              Os módulos serão desenvolvidos e disponibilizados gradualmente,
              respeitando as integrações e validações necessárias.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 235px), 1fr))',
              gap: '18px',
              textAlign: 'left'
            }}>
              {modules.map((item) => (
                <div key={item.title} style={styles.card}>
                  <div style={{
                    fontSize: '30px',
                    marginBottom: '15px'
                  }}>
                    {item.icon}
                  </div>

                  <h3 style={{
                    color: '#9a3412',
                    fontSize: '17px',
                    margin: '0 0 10px'
                  }}>
                    {item.title}
                  </h3>

                  <p style={{
                    color: '#78716c',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="estrutura" style={{
          ...styles.section,
          background: '#fffdfa'
        }}>
          <div style={{
            ...styles.container,
            textAlign: 'center'
          }}>
            <span style={styles.eyebrow}>Estrutura do sistema</span>

            <h2 style={styles.sectionTitle}>
              Uma organização. Várias possibilidades.
            </h2>

            <p style={{
              ...styles.sectionText,
              marginBottom: '42px'
            }}>
              A arquitetura do VET MAX prevê três níveis de organização,
              com vínculos e permissões definidos.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
              gap: '18px',
              textAlign: 'left'
            }}>
              <div style={{
                ...styles.card,
                borderTop: '4px solid #f97316'
              }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>🏢</div>
                <h3 style={{
                  color: '#9a3412',
                  margin: '0 0 10px'
                }}>
                  Organização
                </h3>
                <p style={{
                  color: '#78716c',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  Representa a clínica, hospital ou rede que utiliza
                  a plataforma.
                </p>
              </div>

              <div style={{
                ...styles.card,
                borderTop: '4px solid #fb923c'
              }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>🏥</div>
                <h3 style={{
                  color: '#9a3412',
                  margin: '0 0 10px'
                }}>
                  Unidades
                </h3>
                <p style={{
                  color: '#78716c',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  Cada estabelecimento poderá possuir operações próprias,
                  respeitando as permissões da organização.
                </p>
              </div>

              <div style={{
                ...styles.card,
                borderTop: '4px solid #fcd34d'
              }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>👥</div>
                <h3 style={{
                  color: '#9a3412',
                  margin: '0 0 10px'
                }}>
                  Usuários
                </h3>
                <p style={{
                  color: '#78716c',
                  fontSize: '14px',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  Colaboradores terão acessos definidos conforme suas
                  responsabilidades e unidades autorizadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="planos" style={{
          ...styles.section,
          background: '#fff7ed'
        }}>
          <div style={{
            ...styles.container,
            textAlign: 'center'
          }}>
            <span style={styles.eyebrow}>Planos e condições</span>

            <h2 style={styles.sectionTitle}>
              Uma solução que poderá acompanhar sua estrutura.
            </h2>

            <p style={{
              ...styles.sectionText,
              marginBottom: '30px'
            }}>
              Os planos e as condições comerciais ainda estão em formação.
              A proposta é permitir opções compatíveis com diferentes portes
              e necessidades de operação.
            </p>

            <div style={{
              ...styles.card,
              maxWidth: '650px',
              margin: '0 auto',
              padding: '35px 25px'
            }}>
              <div style={{
                fontSize: '38px',
                marginBottom: '15px'
              }}>
                🐾
              </div>

              <h3 style={{
                color: '#9a3412',
                fontSize: '22px',
                margin: '0 0 12px'
              }}>
                Em breve
              </h3>

              <p style={{
                color: '#78716c',
                fontSize: '14px',
                lineHeight: 1.7,
                margin: '0 0 22px'
              }}>
                Entre em contato para demonstrar seu interesse e acompanhar
                as novidades sobre os planos do VET MAX.
              </p>

              <a href="#contato" style={styles.primaryButton}>
                Tenho interesse
              </a>
            </div>
          </div>
        </section>

        <section id="duvidas" style={{
          ...styles.section,
          background: '#fffdfa'
        }}>
          <div style={{
            ...styles.container,
            textAlign: 'center'
          }}>
            <span style={styles.eyebrow}>Dúvidas frequentes</span>

            <h2 style={styles.sectionTitle}>
              Algumas respostas para começar.
            </h2>

            <div style={{
              maxWidth: '800px',
              margin: '35px auto 0',
              display: 'grid',
              gap: '13px',
              textAlign: 'left'
            }}>
              {faqs.map((item) => (
                <details
                  key={item.question}
                  style={{
                    ...styles.card,
                    padding: '20px 22px'
                  }}
                >
                  <summary style={{
                    color: '#9a3412',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    lineHeight: 1.5
                  }}>
                    {item.question}
                  </summary>

                  <p style={{
                    color: '#78716c',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    margin: '13px 0 0'
                  }}>
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" style={{
          ...styles.section,
          background: '#fff7ed'
        }}>
          <div style={{
            ...styles.container
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              alignItems: 'start',
              gap: '35px'
            }}>
              <div>
                <span style={styles.eyebrow}>Fale conosco</span>

                <h2 style={{
                  ...styles.sectionTitle,
                  maxWidth: '480px'
                }}>
                  Vamos conversar sobre a evolução da sua gestão?
                </h2>

                <p style={{
                  color: '#78716c',
                  fontSize: '15px',
                  lineHeight: 1.8,
                  maxWidth: '480px'
                }}>
                  Envie sua mensagem para conhecer melhor o VET MAX,
                  acompanhar o desenvolvimento ou demonstrar interesse
                  na plataforma.
                </p>

                <div style={{
                  marginTop: '25px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  color: '#9a3412',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  <span style={{ fontSize: '22px' }}>✉️</span>
                  vetmaxgestao@gmail.com
                </div>
              </div>

              <form
                onSubmit={handleContactSubmit}
                style={{
                  ...styles.card,
                  padding: '28px'
                }}
              >
                <h3 style={{
                  color: '#9a3412',
                  fontSize: '20px',
                  margin: '0 0 22px'
                }}>
                  Envie sua mensagem
                </h3>

                <div style={{
                  position: 'absolute',
                  left: '-10000px',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden'
                }} aria-hidden="true">
                  <label>
                    Não preencha este campo
                    <input
                      type="text"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </label>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    marginBottom: '7px',
                    color: '#57534e'
                  }}>
                    Nome
                  </label>

                  <input
                    className="vet-contact-input"
                    name="name"
                    value={contact.name}
                    onChange={handleContactChange}
                    required
                    maxLength="100"
                    placeholder="Seu nome"
                    style={styles.input}
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    marginBottom: '7px',
                    color: '#57534e'
                  }}>
                    E-mail
                  </label>

                  <input
                    className="vet-contact-input"
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleContactChange}
                    required
                    maxLength="150"
                    placeholder="seu@email.com"
                    style={styles.input}
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    marginBottom: '7px',
                    color: '#57534e'
                  }}>
                    Assunto
                  </label>

                  <select
                    className="vet-contact-input"
                    name="subject"
                    value={contact.subject}
                    onChange={handleContactChange}
                    style={styles.input}
                  >
                    <option>Quero conhecer o VET MAX</option>
                    <option>Interesse em planos e preços</option>
                    <option>Tenho uma clínica veterinária</option>
                    <option>Tenho um hospital veterinário</option>
                    <option>Tenho uma rede de unidades</option>
                    <option>Outra dúvida</option>
                  </select>
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    marginBottom: '7px',
                    color: '#57534e'
                  }}>
                    Mensagem
                  </label>

                  <textarea
                    className="vet-contact-input"
                    name="message"
                    value={contact.message}
                    onChange={handleContactChange}
                    required
                    maxLength="3000"
                    rows="5"
                    placeholder="Conte como podemos ajudar..."
                    style={{
                      ...styles.input,
                      resize: 'vertical',
                      lineHeight: 1.6
                    }}
                  />
                </div>

                {contactStatus && (
                  <div role="status" style={{
                    padding: '12px',
                    borderRadius: '9px',
                    marginBottom: '15px',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: contactStatus.type === 'success' ? '#166534' : '#991b1b',
                    background: contactStatus.type === 'success' ? '#dcfce7' : '#fee2e2'
                  }}>
                    {contactStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    ...styles.primaryButton,
                    width: '100%',
                    opacity: sending ? 0.7 : 1,
                    cursor: sending ? 'wait' : 'pointer'
                  }}
                >
                  {sending ? 'Enviando mensagem...' : 'Enviar mensagem'}
                </button>

                <p style={{
                  color: '#a8a29e',
                  fontSize: '11px',
                  lineHeight: 1.6,
                  margin: '13px 0 0',
                  textAlign: 'center'
                }}>
                  Seus dados serão utilizados para responder à sua solicitação.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}