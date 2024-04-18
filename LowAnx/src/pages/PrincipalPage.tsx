import { Link } from "react-router-dom";
import { routes } from "../router/routes";
import Footer from "../components/footer";
import Divider from "../components/divider";
import Header from "../components/header";

export default function PrincipalPage() {
  return (
    <>
      <Header />
      <Divider />
      <main>
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true"
                    aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                    </svg>
                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>Explorar mais Livros.</h1>
                            <p className="opacity-75">Some representative placeholder content for the first slide of the
                                carousel.</p>
                            <p><Link className="btn btn-lg btn-primary" to={routes.home}>Meus Livros</Link></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                    </svg>
                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Olá Usuário.</h1>
                            <p>Some representative placeholder content for the second slide of the carousel.</p>
                            <p><Link className="btn btn-lg btn-primary" to={routes.home}>Continuar Plano</Link></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
                        <rect width="100%" height="100%" fill="var(--bs-secondary-color)" />
                    </svg>
                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>Procurar Planos Gratuitos.</h1>
                            <p>Some representative placeholder content for the third slide of this carousel.</p>
                            <p><Link className="btn btn-lg btn-primary" to={routes.home}>Ver Planos</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    
        <div className="container py-5">
            <div className="card p-5">
                <h2 className="text-left mb-4">Mensagem Diária</h2>
                <div className="row featurette">
                    <div className="col-md-6">
                        <blockquote className="blockquote">
                            <h5>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sint odit ipsum aut odio velit, vitae cupiditate. Qui perspiciatis facilis autem atque, at deleniti maiores consectetur quia aspernatur assumenda! Cum."</h5>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-0 text-body-secondary small">
                            SOBRENOME <cite title="Source Title">nome</cite>
                        </figcaption>
                    </div>
            
                    <div className="col-lg-4 col-sm-6">
                        <div className="card">
                            <a className="" data-bs-toggle="modal" href="#video">
                                {/* SVG Placeholder */}
                                <svg className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>Vídeo</title>
                                    <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
                                    <text x="50%" y="50%" fill="var(--bs-secondary-color)" dy=".3em">▷</text>
                                </svg>

                                <p className="position-absolute bottom-0 end-0 m-3 text-body-secondary small">1-3 min.</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>     
        </div>

    </main>

    {/* Video modal popup*/}
    <div className="modal fade" id="video" tabIndex={-1} role="dialog" aria-hidden="true">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">
                <div className="modal-header">
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="modal-body">
                                <h2 className="text-uppercase">Mensagem de Hoje</h2>
                                <p className="item-intro text-muted">Vídeo explicativo da mensagem diária.</p>
                                {/* Substitua o atributo 'src' pelo URL do seu vídeo */}
                                <video className="img-fluid d-block mx-auto" width="100%" height="auto" controls>
                                    <source src="caminho/para/seu/video.mp4" type="video/mp4" />
                                    Seu navegador não suporta o elemento de vídeo.
                                </video>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, error ut incidunt
                                    eos vel voluptatem earum neque in ipsum nesciunt natus corporis unde tempora. Labore
                                    sapiente commodi ad aliquid modi?</p>

                                <button className="btn btn-primary btn-xl text-uppercase" data-bs-dismiss="modal"
                                    type="button">
                                    Compartilhar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  );
}
