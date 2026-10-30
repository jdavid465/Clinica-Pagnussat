
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

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '43px' }}>
      <span style={styles.eyebrow}>{eyebrow}</span>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <p style={styles.sectionText}>{text}</p>
    </div>
  );
}

function StatusLabel({ children = 'Em desenvolvimento' }) {
  return (
    <span style={{
      display: 'inline-block',
      color: '#9a3412',
      background: '#fff7ed',
      border: '1px solid #fed7aa',
      padding: '6px 9px',
      borderRadius: '20px',
      fontSize: '10px',
      fontWeight: 'bold'
    }}>
      {children}
    </span>
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
  const [openFaq, setOpenFaq] = useState(0);

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
            setClinicData({ name: 'Minha Clínica Veterinária' });
          }
        } catch (err) {
          console.error('Erro ao buscar dados da clínica:', err);
          setClinicData({ name: 'VET MAX' });
        }

        setCurrentView('dashboard');
      } else {
        setClinicData(null);
      }

      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.error('Erro no login:', err);
      setError('Não foi possível entrar. Confira seu e-mail e sua senha.');
    }
  };

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((previous) => ({ ...previous, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus(null);

    if (website.trim()) {
      setContactStatus({
        type: 'success',
        message: 'Mensagem recebida. Obrigado pelo contato!'
      });
      return;
    }

    setSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `VET MAX - ${contact.subject}`,
          from_name: 'Site VET MAX',
          name: contact.name,
          email: contact.email,
          assunto: contact.subject,
          message: contact.message,
          botcheck: ''
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Não foi possível enviar a mensagem.');
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
      console.error('Erro ao enviar contato:', err);
      setContactStatus({
        type: 'error',
        message: 'Não foi possível enviar sua mensagem agora. Tente novamente.'
      });
    } finally {
      setSending(false);
    }
  };

  const goToContact = () => {
    document.getElementById('contato')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#fffdfa',
        color: '#c2410c',
        fontFamily: 'Arial, sans-serif'
      }}>
        Carregando VET MAX...
      </div>
    );
  }

  // PAINEL AUTENTICADO
  if (user) {
    return (
      <div style={{
        ...styles.page,
        padding: '30px 25px',
        boxSizing: 'border-box'
      }}>
        <header style={{
          ...styles.container,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          borderBottom: '1px solid #f5e7d8',
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
              fontSize: '20px',
              color: '#292524'
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
            <span style={{ fontSize: '14px', color: '#78716c' }}>
              {user.email}
            </span>
            <button
              onClick={() => signOut(auth)}
              style={{
                ...styles.primaryButton,
                background: '#dc2626',
                padding: '10px 17px'
              }}
            >
              Sair
            </button>
          </div>
        </header>

        <div style={{
          ...styles.card,
          maxWidth: '800px',
          margin: '0 auto',
          padding: '55px 30px',
          textAlign: 'center',
          background: '#fff7ed',
          borderColor: '#fed7aa'
        }}>
          <div style={{ fontSize: '55px', marginBottom: '15px' }}>🐾</div>
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
            lineHeight: 1.7
          }}>
            Seu ambiente da clínica está conectado.
            Estamos preparando as ferramentas para facilitar
            sua rotina veterinária.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  // LOGIN
  if (currentView === 'login') {
    return (
      <div className="vet-login-page">
        <style>{`
          * { box-sizing: border-box; }
          html { scroll-behavior: smooth; }
          .vet-login-page {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            font-family: Arial, sans-serif;
            color: #292524;
            background: linear-gradient(135deg, #fff7ed 0%, #fffdfa 58%, #ffedd5 100%);
          }
          .vet-login-main {
            width: 100%;
            max-width: 1160px;
            flex: 1;
            margin: 0 auto;
            padding: 34px 25px 28px;
            display: grid;
            grid-template-columns: minmax(320px, 0.88fr) minmax(0, 1.12fr);
            align-items: center;
            gap: clamp(35px, 6vw, 82px);
          }
          .vet-login-card {
            width: 100%;
            max-width: 410px;
            justify-self: center;
            padding: 30px 32px;
            background: #fff;
            border: 1px solid #fed7aa;
            border-radius: 22px;
            box-shadow: 0 18px 45px rgba(124, 45, 18, 0.10);
            transition: transform .25s ease, box-shadow .25s ease;
          }
          .vet-login-card:hover {
            transform: translateY(-3px);
            box-shadow: 0 22px 48px rgba(124, 45, 18, 0.14);
          }
          .vet-login-brand-panel {
            min-width: 0;
            padding: 20px 5px;
          }
          .vet-login-kicker {
            display: inline-block;
            margin-bottom: 18px;
            padding: 7px 12px;
            border-radius: 30px;
            background: #ffedd5;
            color: #c2410c;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: .7px;
            text-transform: uppercase;
          }
          .vet-login-title {
            max-width: 590px;
            margin: 0 0 17px;
            color: #292524;
            font-size: clamp(30px, 4vw, 46px);
            line-height: 1.12;
            letter-spacing: -1.1px;
          }
          .vet-login-title span { color: #ea580c; }
          .vet-login-description {
            max-width: 570px;
            margin: 0 0 25px;
            color: #78716c;
            font-size: 15px;
            line-height: 1.75;
          }
          .vet-login-points {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            max-width: 590px;
          }
          .vet-login-point {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 13px 14px;
            border: 1px solid rgba(251, 146, 60, .20);
            border-radius: 13px;
            background: rgba(255,255,255,.72);
            color: #57534e;
            font-size: 13px;
            line-height: 1.45;
          }
          .vet-login-point-icon {
            flex: 0 0 auto;
            display: grid;
            place-items: center;
            width: 27px;
            height: 27px;
            border-radius: 9px;
            background: #fff1e6;
            color: #c2410c;
            font-size: 14px;
          }
          .vet-login-tagline {
            margin-top: 25px;
            color: #9a3412;
            font-size: 13px;
            font-weight: 700;
          }
          .vet-login-footer {
            padding: 13px 20px 16px;
            border-top: 1px solid #f5e7d8;
            color: #a8a29e;
            background: rgba(255,253,250,.78);
            text-align: center;
            font-size: 11px;
            line-height: 1.65;
          }
          .vet-login-back {
            margin-top: 17px;
            padding: 7px;
            border: 0;
            background: transparent;
            color: #a8a29e;
            cursor: pointer;
            font-size: 13px;
          }
          .vet-login-back:hover { color: #c2410c; }
          @media (max-width: 760px) {
            .vet-login-main {
              max-width: 520px;
              grid-template-columns: 1fr;
              gap: 18px;
              padding: 25px 20px 22px;
            }
            .vet-login-card {
              grid-row: 1;
              max-width: 440px;
              padding: 27px 25px;
            }
            .vet-login-brand-panel {
              grid-row: 2;
              padding: 8px 3px 16px;
              text-align: center;
            }
            .vet-login-title { margin-left: auto; margin-right: auto; font-size: 30px; }
            .vet-login-description { margin-left: auto; margin-right: auto; font-size: 14px; }
            .vet-login-points { text-align: left; }
            .vet-login-tagline { margin-top: 17px; }
          }
          @media (max-width: 420px) {
            .vet-login-main { padding: 18px 14px; }
            .vet-login-card { padding: 24px 20px; border-radius: 18px; }
            .vet-login-points { grid-template-columns: 1fr; gap: 9px; }
            .vet-login-title { font-size: 27px; }
          }
          @media (prefers-reduced-motion: reduce) {
            html { scroll-behavior: auto !important; }
            .vet-login-card { transition: none; }
            .vet-login-card:hover { transform: none; }
          }
        `}</style>

        <main className="vet-login-main">
          <section className="vet-login-card" aria-label="Acesso ao VET MAX">
            <div style={{ marginBottom: '20px' }}>
              <span style={styles.brand}>🐾 VET MAX</span>
            </div>

            <h2 style={{
              color: '#292524',
              fontSize: '25px',
              margin: '0 0 8px',
              fontWeight: 800
            }}>
              Bem-vindo de volta!
            </h2>
            <p style={{
              color: '#78716c',
              fontSize: '13px',
              lineHeight: 1.55,
              margin: '0 0 21px'
            }}>
              Acesse o ambiente de gestão da sua clínica.
            </p>

            {error && (
              <p style={{
                color: '#b91c1c',
                background: '#fee2e2',
                padding: '11px 12px',
                borderRadius: '9px',
                fontSize: '12px',
                lineHeight: 1.5,
                margin: '0 0 17px'
              }}>
                {error}
              </p>
            )}

            <form onSubmit={handleLogin}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 'bold',
                  marginBottom: '7px',
                  fontSize: '13px',
                  color: '#44403c'
                }}>
                  E-mail
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  placeholder="seu@email.com"
                  style={styles.input}
                />
              </div>

              <div style={{ marginBottom: '19px' }}>
                <label style={{
                  display: 'block',
                  fontWeight: 'bold',
                  marginBottom: '7px',
                  fontSize: '13px',
                  color: '#44403c'
                }}>
                  Senha
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  placeholder="Sua senha"
                  style={styles.input}
                />
              </div>

              <button
                type="submit"
                style={{ ...styles.primaryButton, width: '100%', padding: '13px 18px' }}
              >
                Entrar no sistema
              </button>
            </form>

            <div style={{ textAlign: 'center' }}>
              <button
                className="vet-login-back"
                onClick={() => {
                  setError('');
                  setCurrentView('home');
                }}
              >
                ← Voltar à página inicial
              </button>
            </div>
          </section>

          <section className="vet-login-brand-panel" aria-label="Sobre o VET MAX">
            <span className="vet-login-kicker">Gestão veterinária preparada para crescer</span>
            <h1 className="vet-login-title">
              Sua clínica evolui.<br />
              <span>Sua gestão acompanha.</span>
            </h1>
            <p className="vet-login-description">
              Uma plataforma pensada para clínicas, hospitais e redes veterinárias.
              Organize a operação de hoje e prepare sua estrutura para crescer,
              com informações integradas e gestão conforme as permissões de cada equipe.
            </p>

            <div className="vet-login-points">
              <div className="vet-login-point">
                <span className="vet-login-point-icon">👥</span>
                <span>Cadastros organizados de tutores e pacientes</span>
              </div>
              <div className="vet-login-point">
                <span className="vet-login-point-icon">🏥</span>
                <span>Estrutura preparada para várias unidades</span>
              </div>
              <div className="vet-login-point">
                <span className="vet-login-point-icon">🔗</span>
                <span>Módulos planejados para trabalhar de forma integrada</span>
              </div>
              <div className="vet-login-point">
                <span className="vet-login-point-icon">🛡️</span>
                <span>Segurança e organização como prioridades</span>
              </div>
            </div>

            <p className="vet-login-tagline">
              Uma clínica hoje. Uma rede amanhã.
            </p>
          </section>
        </main>

        <footer className="vet-login-footer">
          © 2026 VET MAX. Todos os direitos reservados.<br />
          by Jonathan D. Andrade
        </footer>
      </div>
    );
  }

  // PÁGINA INICIAL COMERCIAL
  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 78px; }
        section[id] { scroll-margin-top: 78px; }
        button, input, textarea, select { font-family: Arial, sans-serif; }
        button:hover { filter: brightness(0.97); }
        a { color: inherit; }
        .vet-nav a {
          text-decoration: none;
          color: #57534e;
          font-size: 13px;
          font-weight: 600;
        }
        .vet-nav a:hover { color: #ea580c; }
        .vet-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }
        .vet-two {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .vet-three {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        .vet-module {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          will-change: transform;
        }
        .vet-module:hover,
        .vet-module:focus-within {
          transform: translateY(-4px) scale(1.01);
          border-color: #fed7aa;
          box-shadow: 0 16px 36px rgba(120,53,15,.11);
        }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto !important; }
          .vet-module { transition: none !important; will-change: auto; }
          .vet-module:hover,
          .vet-module:focus-within { transform: none; }
        }
        .vet-faq {
          width: 100%;
          text-align: left;
          background: #fff;
          border: 1px solid #f5e7d8;
          border-radius: 12px;
          padding: 18px 20px;
          cursor: pointer;
          color: #292524;
          font-size: 14px;
          font-weight: bold;
        }
        .vet-contact-input:focus {
          border-color: #fb923c !important;
          outline: 2px solid #ffedd5;
        }
        @media(max-width: 900px) {
          .vet-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .vet-three { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .vet-header { flex-wrap: wrap !important; row-gap: 10px !important; }
          .vet-nav { order: 3; width: 100%; justify-content: center; flex-wrap: wrap; gap: 18px !important; padding: 4px 0 8px; }
        }
        @media(max-width: 600px) {
          .vet-two, .vet-three { grid-template-columns: 1fr; }
          .vet-grid { grid-template-columns: 1fr; }
          .vet-section { padding-top: 60px !important; padding-bottom: 60px !important; }
          .vet-hero { padding-top: 55px !important; }
          .vet-header { padding: 8px 18px !important; row-gap: 8px !important; }
          .vet-nav { justify-content: flex-start; flex-wrap: nowrap; overflow-x: auto; white-space: nowrap; gap: 20px !important; padding: 5px 0 8px; scrollbar-width: thin; }
          .vet-nav a { font-size: 12px !important; }
          .vet-header > a span { padding: 8px 12px !important; font-size: 15px !important; }
          .vet-header > button { padding: 9px 12px !important; font-size: 12px !important; }
        }
      `}</style>

      {/* CABEÇALHO */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(255,253,250,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #f5e7d8'
      }}>
        <div className="vet-header" style={{
          ...styles.container,
          minHeight: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <a href="#inicio" style={{ textDecoration: 'none' }}>
            <span style={styles.brand}>🐾 VET MAX</span>
          </a>

          <nav className="vet-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}>
            <a href="#sobre">Sobre</a>
            <a href="#recursos">Recursos</a>
            <a href="#estrutura">Estrutura</a>
            <a href="#planos">Planos</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>

          <button
            onClick={() => setCurrentView('login')}
            style={{
              ...styles.primaryButton,
              padding: '11px 18px',
              fontSize: '13px'
            }}
          >
            Acessar sistema
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="vet-hero" style={{
          padding: '75px 0 85px',
          background: 'linear-gradient(135deg, #fff7ed 0%, #fffdfa 58%, #ffedd5 100%)'
        }}>
          <div style={{
            ...styles.container,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px'
          }}>
            <div style={{ flex: '1 1 440px', minWidth: 0 }}>
              <span style={styles.eyebrow}>
                Gestão veterinária preparada para crescer
              </span>

              <h1 style={{
                fontSize: 'clamp(38px, 5.5vw, 61px)',
                lineHeight: 1.08,
                color: '#292524',
                letterSpacing: '-1.8px',
                margin: '0 0 23px',
                fontWeight: 900
              }}>
                Sua clínica evolui.
                <br />
                <span style={{ color: '#f97316' }}>
                  Sua gestão acompanha.
                </span>
              </h1>

              <p style={{
                color: '#57534e',
                fontSize: '17px',
                lineHeight: 1.8,
                maxWidth: '570px',
                marginBottom: '30px'
              }}>
                Uma plataforma de gestão veterinária pensada para
                clínicas, hospitais e redes que desejam organizar
                sua operação e crescer com estrutura, integração
                e segurança.
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <button onClick={goToContact} style={styles.primaryButton}>
                  Quero conhecer o VET MAX
                </button>
                <a href="#recursos" style={styles.secondaryButton}>
                  Conhecer a plataforma
                </a>
              </div>

              <div style={{
                display: 'flex',
                gap: '22px',
                flexWrap: 'wrap',
                marginTop: '30px',
                color: '#78716c',
                fontSize: '12px'
              }}>
                <span>✓ Arquitetura integrada</span>
                <span>✓ Estrutura multiunidade</span>
                <span>✓ Evolução modular</span>
              </div>
            </div>

            <div style={{
              flex: '1 1 350px',
              minWidth: 0,
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '460px',
                background: '#fff',
                border: '1px solid #fed7aa',
                borderRadius: '30px',
                padding: '25px',
                boxShadow: '0 25px 65px rgba(154,52,18,.09)'
              }}>
                <PetIllustration />
                <div style={{
                  textAlign: 'center',
                  padding: '12px 5px 5px'
                }}>
                  <h3 style={{
                    color: '#9a3412',
                    fontSize: '21px',
                    margin: '5px 0 10px'
                  }}>
                    Tecnologia para cuidar melhor.
                  </h3>
                  <p style={{
                    color: '#a16207',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Organização para quem cuida de quem não sabe falar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APRESENTAÇÃO */}
        <section id="sobre" className="vet-section" style={styles.section}>
          <div style={styles.container}>
            <SectionHeading
              eyebrow="Conheça o VET MAX"
              title="Mais estrutura para acompanhar o crescimento da sua operação."
              text="O VET MAX está sendo desenvolvido para conectar os principais processos de uma operação veterinária em uma plataforma organizada, modular e preparada para crescer."
            />

            <div className="vet-three">
              {[
                {
                  icon: '🏥',
                  title: 'Para clínicas',
                  text: 'Uma estrutura pensada para organizar a operação de uma clínica independente.'
                },
                {
                  icon: '🩺',
                  title: 'Para hospitais',
                  text: 'Uma base preparada para integrar diferentes rotinas e processos veterinários.'
                },
                {
                  icon: '🏢',
                  title: 'Para redes',
                  text: 'Uma arquitetura planejada para administrar várias unidades dentro da mesma organização.'
                }
              ].map((item) => (
                <div key={item.title} style={{
                  ...styles.card,
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '37px', marginBottom: '16px' }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    color: '#9a3412',
                    fontSize: '19px',
                    margin: '0 0 11px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: '#78716c',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    margin: 0
                  }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROPOSTA DE VALOR */}
        <section style={{
          ...styles.section,
          background: '#fff7ed'
        }}>
          <div style={{
            ...styles.container,
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '40px'
          }}>
            <div style={{ flex: '1 1 380px' }}>
              <span style={styles.eyebrow}>Uma plataforma integrada</span>
              <h2 style={styles.sectionTitle}>
                Uma clínica hoje.
                <br />
                Uma rede amanhã.
              </h2>
              <p style={{
                color: '#57534e',
                fontSize: '15px',
                lineHeight: 1.85
              }}>
                A estrutura do VET MAX considera o crescimento desde
                o início. A proposta é permitir que uma organização
                comece com uma unidade e amplie sua operação sem
                precisar tratar cada estabelecimento como um sistema
                independente.
              </p>
              <button
                onClick={goToContact}
                style={{ ...styles.primaryButton, marginTop: '12px' }}
              >
                Fale com a equipe
              </button>
            </div>

            <div style={{
              flex: '1 1 380px',
              display: 'grid',
              gap: '14px'
            }}>
              {[
                {
                  number: '01',
                  title: 'Organização',
                  text: 'A estrutura principal da clínica, hospital ou rede.'
                },
                {
                  number: '02',
                  title: 'Unidades',
                  text: 'Estabelecimentos com operações e rotinas próprias.'
                },
                {
                  number: '03',
                  title: 'Usuários',
                  text: 'Colaboradores com acessos e permissões definidos.'
                }
              ].map((item) => (
                <div key={item.number} style={{
                  display: 'flex',
                  gap: '18px',
                  alignItems: 'center',
                  background: '#fff',
                  border: '1px solid #fed7aa',
                  borderRadius: '15px',
                  padding: '20px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    flexShrink: 0,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: '14px',
                    background: '#ffedd5',
                    color: '#c2410c',
                    fontWeight: 'bold'
                  }}>
                    {item.number}
                  </div>
                  <div>
                    <h3 style={{
                      color: '#9a3412',
                      margin: '0 0 6px',
                      fontSize: '17px'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: '#78716c',
                      margin: 0,
                      fontSize: '13px',
                      lineHeight: 1.6
                    }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÓDULOS */}
        <section id="recursos" className="vet-section" style={styles.section}>
          <div style={styles.container}>
            <SectionHeading
              eyebrow="Ecossistema VET MAX"
              title="Os processos da gestão veterinária, conectados."
              text="A plataforma está sendo desenvolvida em módulos integrados. Cada recurso será disponibilizado gradualmente, após sua implementação e validação."
            />

            <div className="vet-grid">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className="vet-module"
                  style={{
                    ...styles.card,
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '230px'
                  }}
                >
                  <div style={{
                    fontSize: '31px',
                    marginBottom: '15px'
                  }}>
                    {module.icon}
                  </div>
                  <h3 style={{
                    fontSize: '17px',
                    color: '#9a3412',
                    margin: '0 0 10px'
                  }}>
                    {module.title}
                  </h3>
                  <p style={{
                    color: '#78716c',
                    fontSize: '13px',
                    lineHeight: 1.7,
                    margin: '0 0 17px',
                    flex: 1
                  }}>
                    {module.description}
                  </p>
                  <div>
                    <StatusLabel />
                  </div>
                </div>
              ))}
            </div>

            <p style={{
              textAlign: 'center',
              color: '#a8a29e',
              fontSize: '12px',
              lineHeight: 1.6,
              marginTop: '25px'
            }}>
              Os recursos apresentados representam o planejamento da plataforma
              e não significam que todos já estejam disponíveis para uso.
            </p>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section id="estrutura" className="vet-section" style={{
          ...styles.section,
          background: '#fff7ed'
        }}>
          <div style={styles.container}>
            <SectionHeading
              eyebrow="Pensado para crescer"
              title="Uma base construída com visão de longo prazo."
              text="Mais do que reunir telas, o objetivo é conectar informações e processos para que a gestão acompanhe a evolução da organização."
            />

            <div className="vet-two">
              {[
                {
                  icon: '🔗',
                  title: 'Integração entre módulos',
                  text: 'Os módulos deverão compartilhar os mesmos cadastros centrais, reduzindo duplicidade e referências desconectadas.'
                },
                {
                  icon: '🏢',
                  title: 'Gestão multiunidade',
                  text: 'Operações independentes por unidade, com informações consolidadas para gestores autorizados.'
                },
                {
                  icon: '🔐',
                  title: 'Isolamento e permissões',
                  text: 'A arquitetura prevê separação dos dados entre organizações e controle de acesso por usuário e unidade.'
                },
                {
                  icon: '📈',
                  title: 'Evolução modular',
                  text: 'Novos recursos poderão ser incorporados gradualmente, respeitando a integração com a estrutura existente.'
                }
              ].map((item) => (
                <div key={item.title} style={{
                  display: 'flex',
                  gap: '18px',
                  padding: '23px',
                  background: '#fff',
                  border: '1px solid #fed7aa',
                  borderRadius: '17px'
                }}>
                  <div style={{ fontSize: '30px' }}>{item.icon}</div>
                  <div>
                    <h3 style={{
                      color: '#9a3412',
                      margin: '0 0 9px',
                      fontSize: '17px'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{
                      color: '#78716c',
                      fontSize: '13px',
                      lineHeight: 1.75,
                      margin: 0
                    }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PLANOS E PREÇOS */}
        <section id="planos" className="vet-section" style={styles.section}>
          <div style={styles.container}>
            <SectionHeading
              eyebrow="Planos e condições"
              title="Uma solução que acompanha o tamanho da sua operação."
              text="Os planos comerciais do VET MAX estão em formação. A proposta é estruturar condições adequadas para diferentes tamanhos e necessidades de operação."
            />

            <div className="vet-three">
              {[
                {
                  icon: '🐾',
                  title: 'Clínica',
                  subtitle: 'Para operações independentes',
                  description: 'Uma estrutura para acompanhar a organização e a rotina de uma clínica veterinária.'
                },
                {
                  icon: '🏥',
                  title: 'Hospital',
                  subtitle: 'Para operações ampliadas',
                  description: 'Uma proposta voltada a operações com diferentes rotinas e necessidades de gestão.'
                },
                {
                  icon: '🏢',
                  title: 'Rede',
                  subtitle: 'Para múltiplas unidades',
                  description: 'Uma estrutura pensada para organizações que precisam acompanhar várias unidades.'
                }
              ].map((plan) => (
                <div key={plan.title} style={{
                  ...styles.card,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '300px'
                }}>
                  <div style={{ fontSize: '35px', marginBottom: '14px' }}>
                    {plan.icon}
                  </div>
                  <h3 style={{
                    color: '#9a3412',
                    fontSize: '21px',
                    margin: '0 0 7px'
                  }}>
                    {plan.title}
                  </h3>
                  <p style={{
                    color: '#a16207',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    margin: '0 0 17px'
                  }}>
                    {plan.subtitle}
                  </p>
                  <p style={{
                    color: '#78716c',
                    fontSize: '13px',
                    lineHeight: 1.7,
                    flex: 1
                  }}>
                    {plan.description}
                  </p>
                  <div style={{
                    background: '#fff7ed',
                    color: '#9a3412',
                    padding: '13px',
                    borderRadius: '11px',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    marginBottom: '15px'
                  }}>
                    Valores em formação
                  </div>
                  <button
                    onClick={() => {
                      setContact((previous) => ({
                        ...previous,
                        subject: `Interesse no VET MAX - ${plan.title}`
                      }));
                      goToContact();
                    }}
                    style={styles.secondaryButton}
                  >
                    Tenho interesse
                  </button>
                </div>
              ))}
            </div>

            <p style={{
              color: '#a8a29e',
              textAlign: 'center',
              fontSize: '12px',
              marginTop: '24px'
            }}>
              Planos, preços, limites e condições serão divulgados após definição comercial.
            </p>
          </div>
        </section>

        {/* SEGURANÇA */}
        <section style={{
          ...styles.section,
          background: '#fff7ed'
        }}>
          <div style={{
            ...styles.container,
            textAlign: 'center'
          }}>
            <span style={styles.eyebrow}>Compromisso do projeto</span>
            <h2 style={styles.sectionTitle}>
              Evoluir. Integrar. Proteger.
            </h2>
            <p style={{
              ...styles.sectionText,
              marginBottom: '35px'
            }}>
              A confiança na gestão começa pela organização e pelo cuidado
              com as informações. Segurança, integridade dos registros e
              controle de acesso fazem parte dos requisitos fundamentais
              do VET MAX.
            </p>

            <div className="vet-three">
              {[
                ['🛡️', 'Proteção', 'Isolamento entre organizações e controle de permissões.'],
                ['🔍', 'Integridade', 'Confirmação das operações antes de informar que um registro foi salvo.'],
                ['⚙️', 'Monitoramento', 'Planejamento de acompanhamento da infraestrutura e dos serviços.']
              ].map(([icon, title, text]) => (
                <div key={title} style={{
                  background: '#fff',
                  border: '1px solid #fed7aa',
                  borderRadius: '16px',
                  padding: '25px'
                }}>
                  <div style={{ fontSize: '34px', marginBottom: '12px' }}>
                    {icon}
                  </div>
                  <h3 style={{
                    color: '#9a3412',
                    margin: '0 0 9px',
                    fontSize: '17px'
                  }}>
                    {title}
                  </h3>
                  <p style={{
                    color: '#78716c',
                    fontSize: '13px',
                    lineHeight: 1.7,
                    margin: 0
                  }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CHAMADA */}
        <section style={{
          padding: '65px 0',
          background: 'linear-gradient(120deg, #c2410c, #f97316)',
          color: '#fff'
        }}>
          <div style={{
            ...styles.container,
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: 'clamp(27px, 4vw, 39px)',
              margin: '0 0 15px',
              lineHeight: 1.2
            }}>
              Sua gestão pode evoluir junto com sua clínica.
            </h2>
            <p style={{
              fontSize: '15px',
              lineHeight: 1.7,
              maxWidth: '650px',
              margin: '0 auto 25px',
              color: '#ffedd5'
            }}>
              Conheça a proposta do VET MAX e acompanhe o desenvolvimento
              de uma plataforma preparada para crescer.
            </p>
            <button
              onClick={goToContact}
              style={{
                ...styles.primaryButton,
                background: '#fff',
                color: '#c2410c'
              }}
            >
              Entre em contato
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="vet-section" style={styles.section}>
          <div style={{
            ...styles.container,
            maxWidth: '850px'
          }}>
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title="Tire suas dúvidas."
              text="Algumas respostas sobre a proposta, a estrutura e o desenvolvimento do VET MAX."
            />

            <div style={{ display: 'grid', gap: '11px' }}>
              {faqs.map((faq, index) => (
                <div key={faq.question}>
                  <button
                    className="vet-faq"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '15px'
                    }}>
                      {faq.question}
                      <span style={{
                        color: '#f97316',
                        fontSize: '20px',
                        flexShrink: 0
                      }}>
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </span>
                  </button>

                  {openFaq === index && (
                    <div style={{
                      padding: '15px 20px 19px',
                      color: '#78716c',
                      fontSize: '13px',
                      lineHeight: 1.8,
                      background: '#fff',
                      border: '1px solid #f5e7d8',
                      borderTop: 'none',
                      borderRadius: '0 0 12px 12px'
                    }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="vet-section" style={{
          ...styles.section,
          background: '#fff7ed'
        }}>
          <div style={styles.container}>
            <SectionHeading
              eyebrow="Fale com a equipe"
              title="Vamos conversar sobre sua operação?"
              text="Envie sua mensagem para conhecer melhor o VET MAX, demonstrar interesse ou acompanhar as novidades do projeto."
            />

            <div className="vet-two" style={{
              alignItems: 'start',
              maxWidth: '950px',
              margin: '0 auto'
            }}>
              <div style={{ padding: '15px 5px' }}>
                <h3 style={{
                  color: '#9a3412',
                  fontSize: '23px',
                  margin: '0 0 15px'
                }}>
                  Estamos construindo uma nova forma de organizar a gestão veterinária.
                </h3>
                <p style={{
                  color: '#78716c',
                  fontSize: '14px',
                  lineHeight: 1.85
                }}>
                  Quer saber mais sobre a plataforma, os módulos previstos
                  ou as futuras condições comerciais? Deixe seus dados e
                  conte um pouco sobre o que procura.
                </p>

                <div style={{
                  marginTop: '27px',
                  display: 'grid',
                  gap: '16px'
                }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ fontSize: '22px' }}>📩</span>
                    <div>
                      <strong style={{ color: '#9a3412', fontSize: '14px' }}>
                        Contato
                      </strong>
                      <p style={{
                        color: '#78716c',
                        margin: '5px 0 0',
                        fontSize: '13px'
                      }}>
                        Envie sua mensagem pelo formulário.
                      </p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ fontSize: '22px' }}>🐾</span>
                    <div>
                      <strong style={{ color: '#9a3412', fontSize: '14px' }}>
                        VET MAX
                      </strong>
                      <p style={{
                        color: '#78716c',
                        margin: '5px 0 0',
                        fontSize: '13px'
                      }}>
                        Gestão veterinária preparada para crescer.
                      </p>
                    </div>
                  </div>
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

      {/* RODAPÉ */}
      <Footer />
    </div>
  );
}
