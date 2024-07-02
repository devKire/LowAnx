import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../router/routes";
import Footer from "../../components/footer";
import Divider from "../../components/divider";
import Waves from "../../components/waves";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/firebaseConfig";
import Spinner from "../../components/Spinner";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const [
    signInWithEmailAndPassword,
    user,
    loading,
  ] = useSignInWithEmailAndPassword(auth);

  const handleSignIn = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    if (user) {
      navigate(routes.principal);
    }
  }, [user, navigate]);

  if (loading) {
    return <Spinner />
  }

  return (
    <>
      <Divider />
      <main className="container py-5">
        <div className="form-signin w-100 m-auto glass">
          <form>
            <Link to={routes.home} type="button" className="d-flex justify-content-start mb-4">
              <img src="/assets/img/logoLowAnx.jpg" alt="" className="border border-secondary" width="72" height="72" />
            </Link>

            <h1 className="h3 mb-3 fw-normal">Informações de login</h1>

            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
              <label htmlFor="floatingInput">Seu endereço de e-mail</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
              <label htmlFor="floatingPassword">Sua senha</label>
            </div>
            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Lembrar meu login
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit" onClick={handleSignIn}>Sign in</button>
            <p className="mt-5 mb-3 text-body-secondary">LowAnx. Sem Ansiedade!</p>
          </form>
        </div>
      </main>
      <Footer />
      <Waves />
    </>
  );
}

export default LoginPage;
