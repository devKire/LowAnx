import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import RespirandoCores from "./Games/RespirandoCores";
import EstourandoBolhas from "./Games/EstourandoBolhas";
import Desenhando from './Games/Desenhando';
import ContandoEstrelas from './Games/ContandoEstrela';
import Esferas from './Games/Esferas';
// Importe mais minigames conforme necessário

type ListGamesProps = {
  id: string;
  image: string;
  title: string;
  description: string;
};

export default function ListGames(props: ListGamesProps) {
  const [showModal, setShowModal] = useState(false);
  const [showMinigame, setShowMinigame] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleCloseMinigame = () => {
    setShowMinigame(false);
    setGameStarted(false); // Reset game started state when closing the Minigame
  };
  const handleStartGame = () => {
    setGameStarted(true);
    setShowMinigame(true);
  };

  const renderMinigame = () => {
    switch (props.id) {
      case 'respirando-cores':
        return <RespirandoCores onClose={handleCloseMinigame} />;
      case 'estourando-bolhas':
        return <EstourandoBolhas onClose={handleCloseMinigame} />;
      case 'desenhando':
        return <Desenhando onClose={handleCloseMinigame} />;
      case 'contando-estrelas':
        return <ContandoEstrelas onClose={handleCloseMinigame} />;
        case 'esferas':
        return <Esferas onClose={handleCloseMinigame} />;
      // Adicione mais casos conforme necessário
      default:
        return null;
    }
  };

  return (
    <>
      <div className="col-sm-6 col-lg-4 mb-4">
  <div className="card h-100">
    <img
      src={props.image}
      className="card-img-top img-fluid rounded"
      alt="Imagem"
    />
    <div className="card-body">
      <h5 className="card-title text-center">{props.title}</h5>
      <p className="card-text">{props.description}</p>
    </div>
    <div className="card-footer text-center">
      <button className="btn btn-primary me-2" onClick={handleShowModal}>
        Detalhes
      </button>
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
          <p className="font-weight-bold">Descrição:</p>
          <p>{props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fechar
          </Button>
          {!gameStarted && (
            <Button variant="primary" onClick={handleStartGame}>
              Começar
            </Button>
          )}
          {showMinigame && renderMinigame()}
        </Modal.Footer>
      </Modal>
    </>
  );
}
