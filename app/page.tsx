"use client";
import { useEffect, useState } from 'react';

const GameCanvas = () => {
  const [birdY, setBirdY] = useState(200);
  const [birdVelocity, setBirdVelocity] = useState(0);
  const [gravity, setGravity] = useState(0.6);
  const [isJumping, setIsJumping] = useState(false);

  const jump = () => {
    if (birdY > 0) {
      setBirdVelocity(-10);
      setIsJumping(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        jump();
      }
    };

    const gameLoop = () => {
      setBirdY((prevY) => Math.min(prevY + birdVelocity, 400));
      setBirdVelocity((prevVelocity) => prevVelocity + gravity);
      if (isJumping && birdY < 400) {
        setIsJumping(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const interval = setInterval(gameLoop, 100);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearInterval(interval);
    };
  }, [birdVelocity, isJumping, birdY, gravity]);

  return (
    <div className="game">
      <h1>Flappy Bird</h1>
      <canvas width={400} height={400} className="game-canvas">Bird Position: {birdY}</canvas>
      <style jsx>{`{
        .game {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-color: #70c5ce;
          font-family: Arial, sans-serif;
          color: white;
        }
        .game-canvas {
          background-color: #ffec40;
          border: 2px solid black;
        }
      }`}</style>
    </div>
  );
};

export default function HomePage() {
  return (
    <main>
      <GameCanvas />
    </main>
  );
};
