import { Link } from "react-router-dom";
import { routes } from "../router/routes"

function Footer02() {
    return (
        <>
            <footer>
                <div className="background">
                    <svg
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        xlinkHref="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        width="100%"
                        height="100%"
                        viewBox="0 0 1600 900"
                    >
                        <defs>
                            <path
                                id="wave"
                                fill="#094bce"
                                d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
      s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
                            />
                        </defs>
                        <g>
                            <use xlinkHref="#wave" opacity=".4">
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    dur="8s"
                                    calcMode="spline"
                                    values="270 230; -334 180; 270 230"
                                    keyTimes="0; .5; 1"
                                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                    repeatCount="indefinite"
                                />
                            </use>
                            <use xlinkHref="#wave" opacity=".6">
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    dur="6s"
                                    calcMode="spline"
                                    values="-270 230;243 220;-270 230"
                                    keyTimes="0; .6; 1"
                                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                    repeatCount="indefinite"
                                />
                            </use>
                            <use xlinkHref="#wave" opacity=".9">
                                <animateTransform
                                    attributeName="transform"
                                    attributeType="XML"
                                    type="translate"
                                    dur="4s"
                                    calcMode="spline"
                                    values="0 230;-140 200;0 230"
                                    keyTimes="0; .4; 1"
                                    keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                                    repeatCount="indefinite"
                                />
                            </use>
                        </g>
                    </svg>
                </div>
                <section className="sectionFooter">
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
                            <a className="text-body-secondary" href="https://x.com/Low_Anx?t=u5BxsRBIXDaX2hFFZCayMQ&s=09">
                                <svg className="bi" width="24" height="24">
                                    <use xlinkHref="/src/assets/svg/twitter.svg#twitter" />
                                </svg>
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-body-secondary" href="https://www.instagram.com/lowanx2024?igsh=MXUzZHBwbGN3dmZkZA==">
                                <svg className="bi" width="24" height="24">
                                    <use xlinkHref="/src/assets/svg/instagram.svg#instagram" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </section>
            </footer>
        </>
    )
}

export default Footer02