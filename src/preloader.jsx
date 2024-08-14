import React, { useEffect, useRef } from 'react';
import './preloader.css'; // Import the CSS file for dot animations

const GradientInfinityPreloader = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 400; // Increase canvas width
    canvas.height = 200; // Increase canvas height

    const drawInfinitySymbol = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(100, 100); // Adjust starting point
      ctx.bezierCurveTo(100, 50, 150, 50, 200, 100); // Adjust control points
      ctx.bezierCurveTo(250, 150, 300, 150, 300, 100); // Adjust control points
      ctx.bezierCurveTo(300, 50, 250, 50, 200, 100); // Adjust control points
      ctx.bezierCurveTo(150, 150, 100, 150, 100, 100); // Adjust control points
      ctx.closePath();

      ctx.strokeStyle = '#3498db';
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    const animate = () => {
      drawInfinitySymbol();
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="preloader-container">
      <canvas ref={canvasRef} />
      <div className="loading-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default GradientInfinityPreloader;
