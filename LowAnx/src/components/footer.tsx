import { Link } from "react-router-dom";
import { routes } from "../router/routes"

function Footer() {
  return (
    <>
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to={routes.home}
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="bi custom-icon" width="50" height="50">
                <use xlinkHref="/src/assets/svg/lowanx.svg#lowanx" fill="currentColor" />
              </svg>
            </Link>
            <span className="mb-3 mb-md-0 text-body-secondary">
              &copy; 2024 LowAnx. Todos os direitos reservados.
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="/src/assets/svg/twitter.svg#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="/src/assets/svg/instagram.svg#instagram" />
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-body-secondary" href="#">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="/src/assets/svg/facebook.svg#facebook" />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

export default Footer