import React, { useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  sendPasswordResetEmail 
} from "firebase/auth";
import { auth } from "../firebase"; // Importando a autenticação que configuramos

export default function Login({ onLoginSuccess }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      if (isRegistering) {
        // Criar Nova Conta
        await createUserWithEmailAndPassword(auth, email, password);
        setMessage('Conta criada com sucesso! Verifique seu e-mail de confirmação.');
      } else {
        // Fazer Login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setMessage('Login efetuado com sucesso!');
        if (onLoginSuccess) onLoginSuccess(userCredential.user);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Por favor, digite seu e-mail acima para recuperar a senha.');
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('E-mail de recuperação de senha enviado com sucesso! Verifique sua caixa de entrada.');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {isRegistering ? 'Criar Conta - VetSystem' : 'Login - VetSystem'}
        </h2>

        {error && <div className="mb-4 p-3 bg-red-100 text-red-700 text-sm rounded">{error}</div>}
        {message && <div className="mb-4 p-3 bg-green-100 text-green-700 text-sm rounded">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">E-mail</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="seu_email@clinica.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            {isRegistering ? 'Cadastrar' : 'Entrar'}
          </button>
        </form>

        <div className="mt-4 flex items-center justify-between text-sm">
          <button 
            type="button" 
            onClick={() => setIsRegistering(!isRegistering)}
            className="text-indigo-600 hover:underline"
          >
            {isRegistering ? 'Já tem uma conta? Faça login' : 'Não tem conta? Criar conta'}
          </button>

          {!isRegistering && (
            <button 
              type="button" 
              onClick={handleForgotPassword}
              className="text-gray-600 hover:underline"
            >
              Esqueci a senha
            </button>
          )}
        </div>
      </div>
    </div>
  );
}