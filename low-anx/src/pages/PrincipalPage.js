import Theme from './components/Theme';
export default function pgPrincipal() {
    return (
      <body>
        <div className="b-divider background-gradient"></div>
        <header className="container">
          <div className="row justify-content-end py-3 my-4 border-top">
            <div className="col-md-3 text-end mt-2">
              <a
                href="#"
                type="button"
                className="btn btn-outline-primary"
              >
                Login
              </a>
              <a
                href="#"
                type="button"
                className="btn btn-primary"
              >
                Sign-up
              </a>
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
                <a href="paginas/pgPrincipal.html" type="button">
                  <img
                    src="././public/assets/img/logoLowAnx.jpg"
                    alt=""
                    className="border border-secondary rounded-circle btIndex"
                  />
                </a>
                <p className="lead my-3">Clique na imagem para começar!</p>
              </div>
            </div>
          </div>
        </header>
  
        <div className="container">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
              >
                <svg className="bi custom-icon" width="50" height="50">
                  <use xlinkHref="#lowanx" fill="currentColor" />
                </svg>
              </a>
              <span className="mb-3 mb-md-0 text-body-secondary">
                &copy; 2024 LowAnx. Todos os direitos reservados.
              </span>
            </div>
  
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-body-secondary" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#twitter" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#instagram" />
                  </svg>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-body-secondary" href="#">
                  <svg className="bi" width="24" height="24">
                    <use xlinkHref="#facebook" />
                  </svg>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </body>
    );
  }
  