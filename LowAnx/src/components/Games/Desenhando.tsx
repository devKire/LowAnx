import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";

interface DesenhandoProps {
  onClose: () => void;
}

const Desenhando: React.FC<DesenhandoProps> = ({ onClose }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [currentColor, setCurrentColor] = useState("#000"); // Default color: black
  const [lineWidth, setLineWidth] = useState(3); // Default line width
  const [throttleTimeout, setThrottleTimeout] = useState<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (context) {
      context.strokeStyle = currentColor;
      context.lineWidth = lineWidth; // Set initial line width
      context.lineCap = "round";
    }
  }, [currentColor, lineWidth]);

  const startDrawing = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (context) {
      setIsDrawing(true);
      const coordinates = getCoordinates(event);
      setPrevPosition(coordinates);
    }
  };

  const throttledDrawing = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;

    if (!throttleTimeout) {
      const timeout = window.setTimeout(() => {
        continueDrawing(event);
        setThrottleTimeout(null);
      }, 10);
      setThrottleTimeout(timeout);
    }
  };

  const continueDrawing = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (context) {
      const coordinates = getCoordinates(event);

      context.beginPath();
      context.moveTo(prevPosition.x, prevPosition.y);
      context.lineTo(coordinates.x, coordinates.y);
      context.stroke();

      setPrevPosition(coordinates);
    }
  };

  const endDrawing = () => {
    setIsDrawing(false);
    if (throttleTimeout) {
      window.clearTimeout(throttleTimeout);
      setThrottleTimeout(null);
    }
  };

  const resetGame = () => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (context) {
      context.clearRect(0, 0, canvas!.width, canvas!.height);
    }
  };

  const getCoordinates = (event: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    const rect = canvas!.getBoundingClientRect();

    let offsetX, offsetY;

    if (event.nativeEvent instanceof TouchEvent) {
      const touch = event.nativeEvent.touches[0];
      offsetX = touch.clientX - rect.left;
      offsetY = touch.clientY - rect.top;
    } else {
      offsetX = event.nativeEvent.offsetX;
      offsetY = event.nativeEvent.offsetY;
    }

    return { x: offsetX, y: offsetY };
  };

  const handleColorChange = (color: string) => {
    setCurrentColor(color);
  };

  const toggleDrawingMode = () => {
    setCurrentColor(currentColor === "#fff" ? "#000" : "#fff"); // Toggle between white (eraser) and black
  };

  const increaseLineWidth = () => {
    setLineWidth((prevWidth) => prevWidth + 1);
  };

  const decreaseLineWidth = () => {
    if (lineWidth > 1) {
      setLineWidth((prevWidth) => prevWidth - 1);
    }
  };

  return (
    <Modal show={true} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Desenhando</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col xs={12}>
              <div className="canvas-container">
                <canvas
                  ref={canvasRef}
                  width={500}
                  height={300}
                  onTouchStart={startDrawing}
                  onTouchMove={throttledDrawing}
                  onTouchEnd={endDrawing}
                  onMouseDown={startDrawing}
                  onMouseMove={throttledDrawing}
                  onMouseUp={endDrawing}
                  onMouseLeave={endDrawing}
                  className="canvas"
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <input
                type="color"
                value={currentColor}
                onChange={(e) => handleColorChange(e.target.value)}
                className="form-control form-control-color"
              />
              <Button variant="secondary" onClick={toggleDrawingMode}>
                {currentColor === "#fff" ? "Modo Desenho" : "Modo Borracha"}
              </Button>
              <Button variant="primary" onClick={increaseLineWidth}>
                Aumentar Espessura
              </Button>
              <Button variant="primary" onClick={decreaseLineWidth}>
                Diminuir Espessura
              </Button>
            </Col>
          </Row>
        </Container>
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

export default Desenhando;
