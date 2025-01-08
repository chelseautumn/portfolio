import { useEffect, useRef } from "react";
import "../styles/Background.css";

function Background({ isDisabled }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const setCanvasSize = () => {
      // restore saved drawing
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.putImageData(imageData, 0, 0);

      // reset stroke styles
      ctx.strokeStyle = getComputedStyle(
        document.documentElement,
      ).getPropertyValue("--highlight-color");
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
    };

    const draw = (e) => {
      ctx.beginPath();
      ctx.arc(e.clientX, e.clientY, 20, 0, Math.PI * 2);
      ctx.fillStyle = getComputedStyle(
        document.documentElement,
      ).getPropertyValue("--highlight-color");
      ctx.fill();
    };

    const clearCanvas = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    setCanvasSize();

    if (!isDisabled) {
      canvas.addEventListener("mousemove", draw);
      canvas.addEventListener("click", clearCanvas);
      window.addEventListener("resize", setCanvasSize);
    }

    return () => {
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("click", clearCanvas);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, [isDisabled]);

  return <canvas ref={canvasRef} className="background-canvas" style={{ pointerEvents: isDisabled ? "none" : "auto" }} />;
}

export default Background;
