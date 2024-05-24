import { Modal, Button } from "react-bootstrap";

interface basGameProps {
  onClose: () => void;
}

const basGame: React.FC<basGameProps> = ({ onClose }) => {


  const resetGame = () => {

  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contando Estrelas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={resetGame}>
          Reiniciar
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default basGame;
