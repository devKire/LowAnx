import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

interface ContandoEstrelasProps {
  onClose: () => void;
}

const ContandoEstrelas: React.FC<ContandoEstrelasProps> = ({ onClose }) => {
  const [numeroEstrelas, setNumeroEstrelas] = useState(0);
  const [mensagem, setMensagem] = useState("");
  const [estrelasDisponiveis, setEstrelasDisponiveis] = useState(new Array(50).fill(true));

  const adicionarEstrela = (index: number) => {
    if (estrelasDisponiveis[index]) {
      setNumeroEstrelas(numeroEstrelas + 1);
      const novasEstrelasDisponiveis = [...estrelasDisponiveis];
      novasEstrelasDisponiveis[index] = false;
      setEstrelasDisponiveis(novasEstrelasDisponiveis);
      setMensagem("Estrela contada!");
    }
  };

  const resetGame = () => {
    setNumeroEstrelas(0);
    setEstrelasDisponiveis(new Array(50).fill(true));
    setMensagem("");
  };

  const getRandomPosition = () => {
    const takenPositions: { [key: string]: boolean } = {};
    const position = {
      left: `${Math.floor(Math.random() * 90)}%`,
      top: `${Math.floor(Math.random() * 70)}vh`,
    };

    // Check if the position is taken by another star
    while (takenPositions[`${position.left}-${position.top}`]) {
      position.left = `${Math.floor(Math.random() * 90)}%`;
      position.top = `${Math.floor(Math.random() * 70)}vh`;
    }

    // Mark the position as taken
    takenPositions[`${position.left}-${position.top}`] = true;

    return position;
  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contando Estrelas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={{ textAlign: "center" }}>
          <p>Clique nas estrelas para contá-las</p>
          <p>Estrelas Contadas: {numeroEstrelas}</p>
          <p>{mensagem}</p>
          <div style={{ position: "relative", width: "100%", height: "80vh" }}>
            {estrelasDisponiveis.map((disponivel, index) => (
              <span
                key={index}
                className="estrela"
                style={{
                  position: "absolute",
                  ...getRandomPosition(),
                  cursor: disponivel ? "pointer" : "not-allowed",
                  opacity: disponivel ? 1 : 0.5,
                  fontSize: "25px",
                }}
                onClick={() => adicionarEstrela(index)}
              >
                ★
              </span>
            ))}
          </div>
        </div>
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

export default ContandoEstrelas;
