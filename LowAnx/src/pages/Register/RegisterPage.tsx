import React, { useState, useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import Footer from "../../components/footer";
import Divider from "../../components/divider";
import Waves from "../../components/waves";
import { auth } from "../../services/firebaseConfig";
import { signOut } from 'firebase/auth';
import Spinner from "../../components/Spinner";

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const navigate = useNavigate(); // Adicionando o useNavigate para redirecionar

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
  ] = useCreateUserWithEmailAndPassword(auth);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleSignOut(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (password.length < 6 || password !== passwordConfirm) {
      setPasswordError(true);
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError(true);
      return;
    }
    createUserWithEmailAndPassword(email, password);
  }

  // Redirecionar para a tela de login após o cadastro com sucesso
  useEffect(() => {
    if (user) {
      signOut(auth) // Deslogar o usuário após o cadastro
        .then(() => {
          navigate(routes.login); // Redirecionar para a página de login
        })
        .catch((error) => {
          console.error("Erro ao deslogar o usuário", error);
        });
    }
  }, [user, navigate]);

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <Divider />
      <main className="container py-5">
        <div className="form-signup w-100 mx-auto glass p-4">
          <form>
            <Link
              to={routes.home}
              type="button"
              className="d-block mb-4 text-center"
            >
              <img
                src="/assets/img/logoLowAnx.jpg"
                alt="Logo"
                className="border border-secondary rounded-circle"
                width="72"
                height="72"
              />
            </Link>

            <h1 className="h3 mb-3 fw-normal">Registro de Usuário</h1>

            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="username" className="form-label">
                  Nome de Usuário
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Nome de usuário"
                    required
                  />
                  <div className="invalid-feedback">
                    Seu nome de usuário é obrigatório.
                  </div>
                </div>
              </div>
              
              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  id="email"
                  placeholder="seu_email@exemplo.com"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(!emailRegex.test(e.target.value)); // Atualiza o estado de erro baseado na validação do email
                  }}
                  onBlur={(e) => {
                    setEmailError(!emailRegex.test(e.target.value)); // Valida o email ao perder o foco do campo
                  }}
                  required
                />
                <div className="invalid-feedback">
                  Por favor, insira um endereço de email válido.
                </div>
              </div>


              <div className="col-12">
                <label htmlFor="password" className="form-label">
                  Senha
                </label>
                <input
                  type="password"
                  className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                  id="password"
                  placeholder="sua_senha123@#!*."
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setPasswordError(e.target.value.length < 6); // Atualiza o estado de erro baseado no comprimento da senha
                  }}
                  required
                />
                <div className="invalid-feedback">
                  A senha deve ter pelo menos 6 caracteres.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="passwordConfirm" className="form-label">
                  Confirme sua Senha
                </label>
                <input
                  type="password"
                  className={`form-control ${password !== passwordConfirm || passwordError ? 'is-invalid' : ''}`}
                  id="passwordConfirm"
                  placeholder="sua_senha123@#!*."
                  onChange={(e) => {
                    setPasswordConfirm(e.target.value);
                    if (password !== e.target.value) {
                      setPasswordError(true);
                    } else {
                      setPasswordError(false);
                    }
                  }}
                  required
                />
                <div className="invalid-feedback">
                  {password !== passwordConfirm ? 'As senhas não coincidem.' : 'A senha deve ter pelo menos 6 caracteres.'}
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleSignOut}>
                Registrar
              </button>
            </div>

            <p className="mt-5 mb-3 text-body-secondary">Já tem uma conta? <Link to={routes.login}>Entrar</Link></p>
          </form>
        </div>
      </main>
      <Footer />
      <Divider />
      <Waves />
    </>
  );
}
