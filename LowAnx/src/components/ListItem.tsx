import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

type ListItemProps = {
  image: string;
  title: string;
  description: string;
};

export default function ListItem(props: ListItemProps) {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="col-sm-6 col-lg-4 mb-4 cursor-pointer" onClick={handleShowModal} style={{ cursor: 'pointer' }}>
        <div className="card d-flex text-bg-primary flex-row h-100">
          <div className="card-img-left m-3">
            <img
              src={props.image}
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto rounded"
              width="100"
              height="100"
              alt="Imagem"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
          </div>
          <div className="position-absolute bottom-0 end-0 py-2">
            <a className="text-body-secondary me-2" href="#">
              <svg className="bi" width="16px" height="16px">
                <use xlinkHref="#trash" />
              </svg>
            </a>
            <a className="text-body-secondary me-3" href="#">
              <svg className="bi" width="16px" height="16px">
                <use xlinkHref="#plus" />
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
          <p>{props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
