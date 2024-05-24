import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

interface BallEatingGameProps {
  onClose: () => void;
}

const BallEatingGame: React.FC<BallEatingGameProps> = ({ onClose }) => {
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 50 });

  // Function to handle analog stick movement
  const handleStickMovement = (event: any) => {
    const { direction } = event.detail; // Assuming direction is provided by the analog stick

    // Log the event to check its contents
    console.log("Analog stick event:", event);

    switch (direction) {
      case "up":
        setBallPosition((prevPos) => ({ ...prevPos, y: Math.max(prevPos.y - 5, 0) }));
        break;
      case "down":
        setBallPosition((prevPos) => ({ ...prevPos, y: Math.min(prevPos.y + 5, 100) }));
        break;
      case "left":
        setBallPosition((prevPos) => ({ ...prevPos, x: Math.max(prevPos.x - 5, 0) }));
        break;
      case "right":
        setBallPosition((prevPos) => ({ ...prevPos, x: Math.min(prevPos.x + 5, 100) }));
        break;
      default:
        break;
    }
  };

  // Listen for analog stick movement
  useEffect(() => {
    const analogStickListener = (event: any) => {
      handleStickMovement(event);
    };

    // Add event listener for analog stick movement
    window.addEventListener("analogStick", analogStickListener);

    // Cleanup function
    return () => {
      window.removeEventListener("analogStick", analogStickListener);
    };
  }, []);

  const resetGame = () => {
    setBallPosition({ x: 50, y: 50 });
  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Ball Eating Game</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div style={styles.gameArea}>
          <div style={{ ...styles.ball, left: `${ballPosition.x}%`, top: `${ballPosition.y}%` }} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={resetGame}>
          Restart
        </Button>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const styles = {
  gameArea: {
    position: 'relative' as 'relative',
    width: '100%',
    height: '300px',
    border: '1px solid black',
    backgroundColor: '#f0f0f0',
  },
  ball: {
    position: 'absolute' as 'absolute',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    backgroundColor: 'red',
  }
};

export default BallEatingGame;
