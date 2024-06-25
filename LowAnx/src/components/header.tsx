import { Link, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../router/routes";
import { useEffect } from "react";
import { splitTextIntoSpans } from "../scripts";
import { auth } from "../services/firebaseConfig"; // Importando o Firebase Auth

function Header() {
  const location = useLocation();
  const navigate = useNavigate(); // Adicionando o useNavigate para redirecionar

  useEffect(() => {
    console.log("Active Route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    splitTextIntoSpans('.bubble-text');
  }, []);

  // Função de logout
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate(routes.login); // Redirecionando para a página de login após o logout
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <>
      <h1 className="visually-hidden">dividindo</h1>

      <div className="container">
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <Link
            to={routes.home}
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2 pulse" width="80" height="50">
              <use xlinkHref="/assets/svg/lowanx.svg#lowanx" />
            </svg>
            <span className="fs-2 fw-bold bubble-text text">LowAnx</span>
          </Link>

          <ul className="nav nav-pills">
            <li className={`pulse nav-item ${location.pathname === routes.principal ? 'show active' : ''}`}>
              <Link to={routes.principal} className="nav-link" aria-current="page">Inicio</Link>
            </li>
            <li className={`pulse nav-item ${location.pathname === routes.book ? 'show active' : ''}`}>
              <Link to={routes.book} className="nav-link">Leituras</Link>
            </li>
            <li className={`pulse nav-item ${location.pathname === routes.guide ? 'show active' : ''}`}>
              <Link to={routes.guide} className="nav-link">Guias</Link>
            </li>
            <li className={`pulse nav-item ${location.pathname === routes.minigames ? 'show active' : ''}`}>
              <Link to={routes.minigames} className="nav-link">Minigames</Link>
            </li>
            <li className={`pulse nav-item ${location.pathname === routes.chatbot ? 'show active' : ''}`}>
              <Link to={routes.chatbot} className="nav-link">Chat Bot</Link>
            </li>
            <li className={`pulse nav-item ${location.pathname === routes.search ? 'show active' : ''}`}>
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
              <li className="nav-item">
                <button className="dropdown-item color-red" onClick={handleLogout}>Sair</button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
