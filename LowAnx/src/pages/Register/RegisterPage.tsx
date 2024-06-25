import React, { useState, useEffect } from 'react';
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import Footer from "../../components/footer";
import Divider from "../../components/divider";
import Waves from "../../components/waves";
import { auth } from "../../services/firebaseConfig";
import { signOut } from 'firebase/auth';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Adicionando o useNavigate para redirecionar

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  function handleSignOut(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
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
    return <p>Carregando...</p>;
  }

  return (
    <>
      <Divider />
      <main className="container py-5">
        <div className="form-signup w-100 mx-auto px-4 glass">
          <form>
            <Link
              to={routes.home}
              type="button"
              className="d-flex justify-content-start mb-4"
            >
              <img
                src="/assets/img/logoLowAnx.jpg"
                alt=""
                className="border border-secondary"
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
                  className="form-control"
                  id="email"
                  placeholder="seu_email@exemplo.com"
                  onChange={(e) => setEmail(e.target.value)}
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
                  className="form-control"
                  id="password"
                  placeholder="sua_senha123@#!*."
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="invalid-feedback">
                  Por favor, insira uma senha válida.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="passwordConfirm" className="form-label">
                  Confirme sua Senha
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="passwordConfirm"
                  placeholder="sua_senha123@#!*."
                  required
                />
                <div className="invalid-feedback">As senhas não coincidem.</div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleSignOut}>
                Registrar
              </button>
            </div>

            <p className="mt-5 mb-3 text-body-secondary">
              LowAnx. Sem Ansiedade!
            </p>
          </form>
        </div>
      </main>
      <Footer />
      <Divider />
      <Waves />
    </>
  );
}
