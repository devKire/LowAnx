import { Link } from "react-router-dom";
import { routes } from "../router/routes";
import Footer from "../components/footer";
import Divider from "../components/divider";
import Header from "../components/header";
import Waves from "../components/waves";

export default function PrincipalPage() {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'LowAnx',
        text: 'Oferecemos apoio e informações valiosas para pessoas com Ansiedade, totalmente GRATUITO!',
        url: window.location.href,
      }).then(() => {
        console.log('Compartilhamento bem-sucedido');
      }).catch((error) => {
        console.error('Erro ao compartilhar', error);
      });
    } else {
      alert('Seu navegador não suporta compartilhamento.');
    }
  };

  return (
    <>
      <Header />
      <Divider />
      <main>
        <div
          id="myCarousel"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/img/biblioteca.jpeg"
                className="d-block w-100 carousel-image opacity-50"
                alt="Primeiro slide"
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Explorar mais Livros.</h1>
                  <p>
                    Procure o livro, artigo ou e-book ideal para você ler hoje,
                    ou continue de onde parou :)
                  </p>
                  <p>
                    <Link className="btn btn-lg btn-primary" to={routes.book}>
                      Minhas Leituras
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/img/livros.jpeg"
                className="d-block w-100 carousel-image opacity-50"
                alt="Segundo slide"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Olá Usuário.</h1>
                  <p>
                    Que tal continuar de onde você parou em sua última Leitura?
                  </p>
                  <p>
                    <Link className="btn btn-lg btn-primary" to={routes.book}>
                      Continuar
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="/assets/img/bot.png"
                className="d-block w-100 carousel-image opacity-50"
                alt="Terceiro slide"
              />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1>O Ajudante da LowAnx está disponível para você!</h1>
                  <p>
                    Você pode compartilhar o que está sentindo com ele! O que
                    acha?
                  </p>
                  <p>
                    <Link
                      className="btn btn-lg btn-primary"
                      to={routes.chatbot}
                    >
                      Conversar
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="container py-5">
          <div className="card p-5 glass">
            <h2 className="text-left mb-4">Mensagem Diária</h2>
            <div className="row featurette">
              <div className="col-md-6">
                <blockquote className="blockquote">
                  <h5>
                    "Emoções e sentimentos que são escondidos, reprimidos, acabam em doenças como: gastrite, úlcera, dores lombares, dor na coluna. Com o tempo a repressão dos sentimentos degenera até em câncer. Então vamos desabafar, confidenciar, partilhar nossa intimidade, nossos segredos, nossos pecados. O diálogo, a fala, a palavra, é um poderoso remédio e excelente terapia"
                  </h5>
                </blockquote>
                <figcaption className="blockquote-footer mb-0 text-body-secondary small">
                  VARELLA <cite title="Source Title">Drauzio</cite>
                </figcaption>
              </div>

              <div className="col-lg-4 col-sm-6">
                <div className="card">
                  <a className="" data-bs-toggle="modal" href="#video">
                    {/* SVG Placeholder */}
                    <svg
                      className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                      width="500"
                      height="500"
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: 500x500"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <title>Vídeo</title>
                      <rect
                        width="100%"
                        height="100%"
                        fill="var(--bs-secondary-bg)"
                      />
                      <text
                        x="50%"
                        y="50%"
                        fill="var(--bs-secondary-color)"
                        dy=".3em"
                      >
                        ▷
                      </text>
                    </svg>

                    <p className="position-absolute bottom-0 end-0 m-3 text-body-secondary small">
                      1-3 min.
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Video modal popup*/}
      <div
        className="modal fade"
        id="video"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="row featurette">
              <div className="mx-auto text-center">
                <div className="modal-body">
                  <h2 className="text-uppercase">Mensagem de Hoje</h2>
                  <p className="item-intro text-muted">
                  Como ajudar uma pessoa com ansiedade.
                  </p>
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                      className="embed-responsive-item"
                      src="https://www.youtube.com/embed/A_cO_ps2IVw"
                      title="YouTube video player"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <p>
                  Toda Crise é passageira, diz VARELLA. Neste vídeo VARELLA dá dicas de como ajudar uma pessoa com ansiedade.
                  </p>

                  <button
                    className="btn btn-primary btn-xl text-uppercase"
                    type="button"
                    onClick={handleShare}
                  >
                    Compartilhar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Waves />
    </>
  );
}
