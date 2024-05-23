import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

interface RespirandoCoresProps {
  onClose: () => void;
}

const RespirandoCores: React.FC<RespirandoCoresProps> = ({ onClose }) => {
  const [breathingIn, setBreathingIn] = useState(true);
  const [size, setSize] = useState(100);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(3); // Increased speed for faster animation
  const [color, setColor] = useState("#0000FF"); // Initial circle color

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize) =>
        breathingIn ? prevSize + speed : prevSize - speed
      );
      if (size >= 200) {
        setBreathingIn(false);
        setScore((prevScore) => prevScore + 1);
      } else if (size <= 100) {
        setBreathingIn(true);
        setColor(getRandomColor()); // Change circle color when animation completes
      }
    }, 50); // Reduced interval time for faster updates

    return () => {
      clearInterval(interval);
    };
  }, [breathingIn, size, speed]);

  const resetGame = () => {
    setScore(0);
    setSize(100);
    setBreathingIn(true);
    setSpeed(8); // Reset to initial speed
    setColor("#0000FF"); // Reset to initial color
  };

  const getRandomColor = () => {
    // Generate random color in hexadecimal format
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Respirando Cores</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="RespirandoCores-container">
          <div className="score">Pontuação: {score}</div>
          <div className="breathing-circle-container" style={{ position: "relative" }}>
            <div
              className="breathing-circle"
              style={{
                width: size,
                height: size,
                backgroundColor: color, // Use dynamic color
                transition: "background-color 0.5s", // Smooth color transition
              }}
            ></div>
          </div>
          <div className="instruction">
            {breathingIn ? "Inspire..." : "Expire..."}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={resetGame}>
        Reiniciar
        </Button>
        <Button variant="secondary" onClick={onClose}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RespirandoCores;
