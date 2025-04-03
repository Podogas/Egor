import { useEffect, useState, useRef } from "react";
import "./FlappyBird.css";

const GRAVITY = 1.2;
const JUMP = -10;
const PIPE_WIDTH = 50;
const PIPE_GAP = 200;
const PIPE_SPEED = 3;
const BIRD_SIZE = 30;
const GAME_WIDTH = 350;
const GAME_HEIGHT = 500;

const FlappyBird = () => {
  const [birdY, setBirdY] = useState(GAME_HEIGHT / 2);
  const [velocity, setVelocity] = useState(0);
  const [pipes, setPipes] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const gameLoop = useRef(null);

  useEffect(() => {
    if (isGameOver) return;

    gameLoop.current = setInterval(() => {
      setBirdY((prev) => prev + velocity);
      setVelocity((prev) => prev + GRAVITY);
      setPipes((prevPipes) =>
        prevPipes
          .map((pipe) => ({ ...pipe, x: pipe.x - PIPE_SPEED }))
          .filter((pipe) => pipe.x + PIPE_WIDTH > 0)
      );
    }, 30);

    return () => clearInterval(gameLoop.current);
  }, [isGameOver, velocity]);

  useEffect(() => {
    const pipeSpawn = setInterval(() => {
      if (isGameOver) return;
      const height = Math.random() * (GAME_HEIGHT - PIPE_GAP - 50) + 25;
      setPipes((prev) => [...prev, { x: GAME_WIDTH, height, passed: false }]);
    }, 2000);
    return () => clearInterval(pipeSpawn);
  }, [isGameOver]);

  useEffect(() => {
    pipes.forEach((pipe) => {
      if (!pipe.passed && pipe.x + PIPE_WIDTH < BIRD_SIZE) {
        pipe.passed = true;
        setScore((prevScore) => prevScore + 1);
      }
    });
  }, [pipes]);

  useEffect(() => {
    const checkCollision = () => {
      if (birdY >= GAME_HEIGHT - BIRD_SIZE) {
        setIsGameOver(true);
      }
      pipes.forEach(({ x, height }) => {
        if (
          x < BIRD_SIZE &&
          x + PIPE_WIDTH > 0 &&
          (birdY < height || birdY > height + PIPE_GAP)
        ) {
          setIsGameOver(true);
        }
      });
    };
    checkCollision();
  }, [birdY, pipes]);

  const handleJump = () => {
    if (isGameOver) {
      setBirdY(GAME_HEIGHT / 2);
      setVelocity(0);
      setPipes([]);
      setScore(0);
      setIsGameOver(false);
    } else {
      setVelocity(JUMP);
    }
  };

  return (
    <>
    <p className="game__title">Ну а что бы поздравление не было совсем скучным я добавил игру</p>
    <div className="game" onClick={handleJump}>
      <div className="bird" style={{ top: birdY }} />
      {pipes.map(({ x, height }, i) => (
        <>
          <div
            key={"top" + i}
            className="pipe top"
            style={{ left: x, height }}
          />
          <div
            key={"bottom" + i}
            className="pipe bottom"
            style={{ left: x, height: GAME_HEIGHT - height - PIPE_GAP }}
          />
        </>
      ))}
      {isGameOver && <div className="game-over">Заново</div>}
      <div className="score">{score}</div>
    </div>
    </>
  );
};

export default FlappyBird;
