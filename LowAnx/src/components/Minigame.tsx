import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

interface MinigameProps {
  onClose: () => void;
}

const Minigame: React.FC<MinigameProps> = ({ onClose }) => {
  const [breathingIn, setBreathingIn] = useState(true);
  const [size, setSize] = useState(100);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(2); // Initial speed of circle change
  const [color, setColor] = useState("#0000FF"); // Initial circle color

  useEffect(() => {
    const interval = setInterval(() => {
      setSize((prevSize) =>
        breathingIn ? prevSize + speed : prevSize - speed
      );
      if (size >= 200) {
        setBreathingIn(false);
        setScore((prevScore) => prevScore + 1);
        setColor(getRandomColor()); // Change circle color when animation completes
      } else if (size <= 100) {
        setBreathingIn(true);
        setColor(getRandomColor()); // Change circle color when animation completes
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [breathingIn, size, speed]);



  const resetGame = () => {
    setScore(0);
    setSize(100);
    setBreathingIn(true);
    setSpeed(2);
    onClose();
  };

  const getRandomColor = () => {
    // Generate random color in hexadecimal format
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  return (
    <Modal show={true} onHide={resetGame} centered>
      <Modal.Header closeButton>
        <Modal.Title>Título do Minijogo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="minigame-container">
          <div className="score">Pontuação: {score}</div>
          <div className="breathing-circle-container" style={{ position: "relative" }}>
            <div
              className="breathing-circle"
              style={{
                width: size,
                height: size,
                backgroundColor: color, // Use dynamic color
              }}
            ></div>
          </div>
          <div className="instruction">
            {breathingIn ? "Inspire..." : "Expire..."}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={resetGame}>
          Fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Minigame;
