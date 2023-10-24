import React from 'react';
import { useGame } from './GameContext';
import { Modal, Button } from 'react-bootstrap';

const GameOverModal: React.FC = () => {
  const { winner, resetGame, ultimateWinner, timeLeft } = useGame();

  if (!winner && timeLeft > 0) return null;

  return (
    <>
      <Modal show={!!ultimateWinner} onHide={resetGame}>
        <Modal.Header closeButton>
          <Modal.Title>Championship Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>{ultimateWinner} is the ultimate champion with 5 wins!</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={resetGame}>
            Restart Championship
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={!!winner && !ultimateWinner} onHide={resetGame}>
        <Modal.Header closeButton>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>{winner} wins!</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={resetGame}>
            Restart Game
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={timeLeft === 0 && !winner} onHide={resetGame}>
        <Modal.Header closeButton>
          <Modal.Title>Game Over</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Time's up!</h2>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={resetGame}>
            Restart Game
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default GameOverModal;
