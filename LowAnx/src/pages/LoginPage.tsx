import { Link } from "react-router-dom";
import { routes } from "../router/routes";
import Footer from "../components/footer";
import Divider from "../components/divider";
import Waves from "../components/waves";

export default function LoginPage() {
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
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
              <label htmlFor="floatingInput">Seu endereço de e-mail</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
              <label htmlFor="floatingPassword">Sua senha</label>
            </div>
            <div className="form-check text-start my-3">
              <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Lembrar meu login
              </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-body-secondary">LowAnx. Sem Ansiedade!</p>
          </form>
        </div>
      </main>
      <Footer />
      <Waves />
    </>
  );
}
