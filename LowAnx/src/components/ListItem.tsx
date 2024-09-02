import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

type ListItemProps = {
  id: string;
  image: string;
  title: string;
  description: string;
  resumo: string;
  author: string;
  file: string;
  readingTime: number; // Tempo de leitura em minutos
};

export default function ListItem(props: ListItemProps) {
  const [showModal, setShowModal] = useState(false);
  const [showFileModal, setShowFileModal] = useState(false);
  const [progress, setProgress] = useState(0); // Estado para controlar o progresso da leitura
  const [readingInProgress, setReadingInProgress] = useState(false); // Estado para controlar se a leitura está em progresso

  const handleShowModal = () => {
    setShowModal(true);
    setReadingInProgress(true); // Ao abrir o modal, indica que a leitura está em progresso
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setReadingInProgress(false); // Ao fechar o modal, indica que a leitura não está mais em progresso
    // save progress
  };

  const handleOpenFileModal = () => {
    setShowFileModal(true);
    setReadingInProgress(true); // Ao abrir o modal de arquivo, indica que a leitura está em progresso
  };

  const handleCloseFileModal = () => {
    setShowFileModal(false);
    // Não altera o estado de readingInProgress aqui para manter a animação da barra de progresso
  };

  // Simulação de progresso de leitura
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (readingInProgress) {
      const totalTimeInSeconds = props.readingTime * 60; // Converte minutos para segundos
      const increment = 100 / totalTimeInSeconds; // Calcula o incremento por segundo para alcançar 100%

      let currentTime = 0;
      interval = setInterval(() => {
        currentTime++;
        setProgress(Math.round((currentTime * increment * 100) / 100));

        if (currentTime >= totalTimeInSeconds) {
          clearInterval(interval);
        }
      }, 1000); // Atualiza a cada segundo
    }

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [readingInProgress, props.readingTime]);

  // Função para determinar a classe da barra de progresso com base no progresso atual
  const getProgressBarClass = () => {
    if (progress < 30) {
      return "progress-bar-striped progress-bar-animated bg-danger";
    } else if (progress < 70) {
      return "progress-bar-striped progress-bar-animated bg-warning";
    } else {
      return "progress-bar-striped progress-bar-animated bg-success";
    }
  };

  return (
    <>
      <div className="col-sm-6 col-lg-4 mb-4 cursor-pointer" onClick={handleShowModal}>
        <div className="card h-100">
          {/* Imagem do livro */}
          <div className="card-header text-center p-0">
            <img src={props.image} className="card-img-top bi" style={{ objectFit: "cover", width: "100%", height: "200px" }} alt="Capa do livro" />
          </div>

          {/* Conteúdo do cartão */}
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text flex-grow-1">{props.description}</p>
          </div>

          {/* Ícones de ação e barra de progresso */}
          <div className="card-footer d-flex align-items-center justify-content-between">
            <div className="me-3">
              <a className="text-body-secondary me-2" href="#">
                <svg className="bi" width="18px" height="18px"><use xlinkHref="/assets/svg/trash.svg#trash" /></svg>
              </a>
              <a className="text-body-secondary me-3" href="#">
                <svg className="bi" width="18px" height="18px"><use xlinkHref="/assets/svg/plus.svg#plus" /></svg>
              </a>
            </div>
            <div className="progress flex-grow-1" style={{ maxWidth: "100px", maxHeight: "20px"}}>
              <div className={`${getProgressBarClass()} `}
                   role="progressbar"
                   style={{ width: `${progress}%` }}
                   aria-valuenow={progress}
                   aria-valuemin={0}
                   aria-valuemax={100}>
                   {progress}%
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={props.image}
            alt={props.title}
            className="img-fluid rounded"
          />
          <div className="row">
            <div className="col-md-12">
              <p className="mb-0">
                <strong>Resumo:</strong>
              </p>
              <p className="mb-3">{props.resumo}</p>
              <p className="mb-0">
                <strong>Autor:</strong>
              </p>
              <p className="mb-0">
                <em>{props.author}</em>
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
          <Button variant="primary" onClick={handleOpenFileModal}>
            Começar Leitura
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showFileModal} onHide={handleCloseFileModal} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe src={props.file} style={{ width: "100%", height: "80vh" }} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFileModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
