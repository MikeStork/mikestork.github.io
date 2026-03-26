import React, { useRef, useEffect } from "react";
import "./Sine.css";

const Sine = (props) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");

    let animationFrameId;
    let k = 0;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const getFreq = () => {
      if (window.innerWidth < 500) return 0.008;
      if (window.innerWidth < 1000) return 0.018;
      return 0.028;
    };

    const animate = () => {
      const freq = getFreq();

      c.fillStyle = "rgba(0, 0, 0, 0.08)";
      c.fillRect(0, 0, canvas.width, canvas.height);

      c.beginPath();
      c.moveTo(-1, canvas.height / 2 + 1);

      for (let i = -1; i < canvas.width; i += 1) {
        c.lineTo(
          i,
          canvas.height / 2 +
            Math.sin(i * 0.01 + k) *
              (canvas.height / 6) *
              Math.sin(k * 0.9)
        );
      }

      c.strokeStyle = `hsla(${Math.abs(Math.sin(k) * 255)}, 70%, 60%, 0.95)`;
      c.lineWidth = 2;
      c.shadowBlur = 20;
      c.shadowColor = `hsla(${Math.abs(Math.sin(k) * 255)}, 70%, 60%, 0.35)`;
      c.stroke();

      k += freq;
      animationFrameId = requestAnimationFrame(animate);
    };

    setCanvasSize();
    animate();

    window.addEventListener("resize", setCanvasSize);

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div id="Sine">
      <canvas id="canvas" ref={canvasRef} {...props}></canvas>
    </div>
  );
};

export default Sine;