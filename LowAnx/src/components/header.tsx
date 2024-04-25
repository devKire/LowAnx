import { Link, useLocation } from "react-router-dom";
import { routes } from "../router/routes";
import { useEffect } from "react";

function Header() {
  const location = useLocation();

  useEffect(() => {
    console.log("Active Route:", location.pathname);
  }, [location.pathname]);
  
  return (
    <>
      <h1 className="visually-hidden">dividindo</h1>

      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to={routes.home}
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="80" height="50">
              <use xlinkHref="/src/assets/svg/lowanx.svg#lowanx" />
            </svg>
            <span className="fs-4 fw-bold">LowAnx</span>
          </Link>

          <ul className="nav nav-pills">
            <li className={`nav-item ${location.pathname === routes.principal ? 'show active' : ''}`}>
              <Link to={routes.principal} className="nav-link" aria-current="page">Inicio</Link>
            </li>
            <li className={`nav-item ${location.pathname === routes.book ? 'show active' : ''}`}>
              <Link to={routes.book} className="nav-link">Livros</Link>
            </li>
            <li className={`nav-item ${location.pathname === routes.guide ? 'show active' : ''}`}>
              <Link to={routes.guide} className="nav-link">Guias</Link>
            </li>
            <li className={`nav-item ${location.pathname === routes.search ? 'show active' : ''}`}>
              <Link to={routes.search} className="nav-link">Pesquisar</Link>
            </li>
          </ul>

          <div className="flex-shrink-0 dropdown">
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://media.istockphoto.com/id/1345149081/pt/vetorial/a-frustrated-man-sits-and-hugs-his-knees-nervous-problem-anxiety-and-confusion-in-thoughts.jpg?s=612x612&w=0&k=20&c=wqDH7BJsVBfLStoEXtF4w8pPdmTK1NDsFI48GuIGcn0="
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
            <ul className="dropdown-menu text-small shadow">
              <li className="nav-item"><Link className="dropdown-item" to={routes.profile}>Perfil</Link></li>
              <li className="nav-item"><Link className="dropdown-item" to={routes.config}>Configurações</Link></li>
              <li className="nav-item"><Link className="dropdown-item" to={routes.about}>Sobre</Link></li>
              <li className="nav-item">
                <hr className="dropdown-divider" />
              </li>
              <li className="nav-item"><Link className="dropdown-item color-red" to={routes.login}>Sair</Link></li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
