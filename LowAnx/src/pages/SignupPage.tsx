import { Link } from "react-router-dom";
import { routes } from "../router/routes";
import Footer from "../components/footer";
import Divider from "../components/divider";

export default function SignupPage() {
  return (
    <>
      <Divider />
      <main className="container py-5">
        <div className="form-signup w-100 m-auto">
          <form>
            <Link to={routes.home} type="button" className="d-flex justify-content-start mb-4">
              <img src="/src/assets/img/logoLowAnx.jpg" alt="" className="border border-secondary" width="72" height="72" />
            </Link>

            <h1 className="h3 mb-3 fw-normal">Registro de Usuário</h1>

            <div className="row g-3">
              <div className="col-12">
                <label htmlFor="username" className="form-label">Nome de Usuário</label>
                <div className="input-group has-validation">
                  <span className="input-group-text">@</span>
                  <input type="text" className="form-control" id="username" placeholder="Nome de usuário" required />
                  <div className="invalid-feedback">
                    Your username is required.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" placeholder="seu_email@exemplo.com" required />
                <div className="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="password" className="form-label">Senha</label>
                <input type="password" className="form-control" id="password" placeholder="sua_senha123@#!*." required />
                <div className="invalid-feedback">
                  Please enter a valid password.
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="passwordConfirm" className="form-label">Confirme sua Senha</label>
                <input type="password" className="form-control" id="passwordConfirm" placeholder="sua_senha123@#!*." required />
                <div className="invalid-feedback">
                  Please enter a valid password.
                </div>
              </div>

              <hr className="my-4" />

              <button className="w-100 btn btn-primary btn-lg" type="submit">Sign-up</button>

            </div>

            <p className="mt-5 mb-3 text-body-secondary">LowAnx. Sem Ansiedade!</p>
          </form>
        </div>
      </main>
      <Footer />
      <Divider />
    </>
  );
}
