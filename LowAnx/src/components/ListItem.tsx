import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

type ListItemProps = {
  id: string;
  image: string;
  title: string;
  description: string;
  resumo: string;
  author: string;
  file: string;
};

export default function ListItem(props: ListItemProps) {
  const [showModal, setShowModal] = useState(false);
  const [showFileModal, setShowFileModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenFileModal = () => {
    setShowFileModal(true);
  };

  const handleCloseFileModal = () => {
    setShowFileModal(false);
  };

  return (
    <>
      <div
        className="col-sm-6 col-lg-4 mb-4 cursor-pointer"
        onClick={handleShowModal}
        style={{ cursor: "pointer" }}
      >
        <div className="card d-flex text-bg-primary flex-row h-100">
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <div className="position-absolute bottom-0 end-0 py-2">
            <a className="text-body-secondary me-2" href="#">
              <svg className="bi" width="18px" height="18px">
                <use xlinkHref="/assets/svg/trash.svg#trash" />
              </svg>
            </a>
            <a className="text-body-secondary me-3" href="#">
              <svg className="bi" width="18px" height="18px">
                <use xlinkHref="/assets/svg/plus.svg#plus" />
              </svg>
            </a>
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
            <p className="mb-0"><strong>Resumo:</strong></p>
      <p className="mb-3">{props.resumo}</p>
      <p className="mb-0"><strong>Autor:</strong></p>
      <p className="mb-0"><em>{props.author}</em></p>
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
