import { Link } from "react-router-dom"
import { routes } from "../router/routes"
import Footer from "../components/footer"
import Divider from "../components/divider"
import Waves from "../components/waves"

export default function HomePage() {
  return (
    <>
      <Divider />
      <header className="container">
        <div className="row justify-content-end py-3 my-4 border-top">
            <div className="col-md-3 text-end mt-2">
                <Link to={routes.login} type="button" className="btn btn-outline-primary m-1">Login</Link>
                <Link to={routes.signup} type="button" className="btn btn-primary" >Sign-up</Link>
            </div>
        </div>
        <div className="p-4 p-md-1 mb-4 rounded text-body-emphasis bg-body-primary">
          <div className="row">
            <div className="col-lg-6 px-0">
              <h1 className="display-1 fst-italic">LowAnx</h1>
              <p className="lead my-3">
                Oferecemos apoio e informações valiosas para pessoas com
                Ansiedade, totalmente GRATUITO!
              </p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-xxl-4 my-4 text-center">
              <Link to={routes.principal} relative="path" type="button">
                <img
                  src="/src/assets/img/logoLowAnx.jpg"
                  alt=""
                  className="border border-secondary rounded-circle btIndex"
                />
              </Link>
              <p className="lead my-3">Clique na imagem para começar!</p>
            </div>
          </div>
        </div>
      </header>
      <Footer />
      <Divider />
      <Waves />
    </>
  );
}
