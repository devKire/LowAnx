import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

interface EstourandoBolhasProps {
  onClose: () => void;
}

interface Bubble {
  id: number;
  x: number;
  y: number;
}

const EstourandoBolhas: React.FC<EstourandoBolhasProps> = ({ onClose }) => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      addBubble();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const addBubble = () => {
    const id = Date.now();
    const x = Math.random() * 90; // Random x coordinate
    const y = -10; // Fixed y coordinate at the bottom
    setBubbles((prevBubbles) => [...prevBubbles, { id, x, y }]);
  };

  const popBubble = (id: number) => {
    const bubbleElement = document.getElementById(`bubble-${id}`);
    if (bubbleElement) {
      bubbleElement.classList.add("burst");
      setTimeout(() => {
        setBubbles((prevBubbles) => prevBubbles.filter((bubble) => bubble.id !== id));
        setScore((prevScore) => prevScore + 1);
      }, 500);
    }
  };

  const resetGame = () => {
    setBubbles([]);
    setScore(0);
  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Estourando Bolhas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="game-container">
          {bubbles.map((bubble) => (
            <div
              id={`bubble-${bubble.id}`}
              key={bubble.id}
              className="bubble"
              style={{ left: `${bubble.x}%`, bottom: `${bubble.y}%` }} // Adjusted to use bottom instead of top
              onClick={() => popBubble(bubble.id)}
            ></div>
          ))}
        </div>
        <div className="score">Score: {score}</div>
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

export default EstourandoBolhas;
