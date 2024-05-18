import { Link } from "react-router-dom";
import { routes } from "../router/routes"

function Footer() {
  return (
    <>
        <div className="container mt-3 mb-3 glass">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to={routes.home}
              className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1"
            >
              <svg className="pulse" width="50" height="50">
                <use xlinkHref="/assets/svg/lowanx.svg#lowanx" fill="currentColor" />
              </svg>
            </Link>
            <span className="mb-3 mb-md-0 text-body-secondary">
              &copy; 2024 LowAnx. Todos os direitos reservados.
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3 pulse">
              <a className="text-body-secondary" href="https://x.com/Low_Anx?t=u5BxsRBIXDaX2hFFZCayMQ&s=09">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="/assets/svg/twitter.svg#twitter" />
                </svg>
              </a>
            </li>
            <li className="ms-3 pulse">
              <a className="text-body-secondary" href="https://www.instagram.com/lowanx2024?igsh=MXUzZHBwbGN3dmZkZA==">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="/assets/svg/instagram.svg#instagram" />
                </svg>
              </a>
            </li> 
            <li className="ms-3 pulse">
              <a className="text-body-secondary" href="https://www.linkedin.com/company/lowanx/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3B4EvV9IOuRxOpZ7DLOBq9Nw%3D%3D">
                <svg className="bi" width="24" height="24">
                  <use xlinkHref="/assets/svg/linkedin.svg#linkedin" />
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