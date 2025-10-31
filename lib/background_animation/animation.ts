import { noise3D } from "./noise";
import { TAU, rand, fadeInOut } from "./util";

export function setupAnimation(container: HTMLElement) {
  const circleCount = 150;
  const circlePropCount = 8;
  const circlePropsLength = circleCount * circlePropCount;
  const baseSpeed = 0.1;
  const rangeSpeed = 1;
  const baseTTL = 150;
  const rangeTTL = 200;
  const baseRadius = 100;
  const rangeRadius = 200;
  const rangeHue = 60;
  const xOff = 0.0015;
  const yOff = 0.0015;
  const zOff = 0.0015;
  const backgroundColor = "hsla(0,0%,5%,1)";

  let canvasA: HTMLCanvasElement;
  let canvasB: HTMLCanvasElement;
  let ctxA: CanvasRenderingContext2D;
  let ctxB: CanvasRenderingContext2D;
  let circleProps: Float32Array;
  let baseHue = 220;

  const createCanvas = () => {
    canvasA = document.createElement("canvas");
    canvasB = document.createElement("canvas");
    canvasB.style.position = "fixed";
    canvasB.style.top = "0";
    canvasB.style.left = "0";
    canvasB.style.width = "100%";
    canvasB.style.height = "100%";
    container.appendChild(canvasB);
    ctxA = canvasA.getContext("2d")!;
    ctxB = canvasB.getContext("2d")!;
  };

  const resize = () => {
    const { innerWidth, innerHeight } = window;
    canvasA.width = innerWidth;
    canvasA.height = innerHeight;
    canvasB.width = innerWidth;
    canvasB.height = innerHeight;
  };

  const initCircle = (i: number) => {
    const x = rand(canvasA.width);
    const y = rand(canvasA.height);
    const n = noise3D(x * xOff, y * yOff, baseHue * zOff);
    const t = rand(TAU);
    const speed = baseSpeed + rand(rangeSpeed);
    const vx = speed * Math.cos(t);
    const vy = speed * Math.sin(t);
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + n * rangeHue;
    circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
  };

  const initCircles = () => {
    circleProps = new Float32Array(circlePropsLength);
    for (let i = 0; i < circlePropsLength; i += circlePropCount) {
      initCircle(i);
    }
  };

  const drawCircle = (x: number, y: number, life: number, ttl: number, radius: number, hue: number) => {
    ctxA.save();
    ctxA.fillStyle = `hsla(${hue},60%,30%,${fadeInOut(life, ttl)})`;
    ctxA.beginPath();
    ctxA.arc(x, y, radius, 0, TAU);
    ctxA.fill();
    ctxA.closePath();
    ctxA.restore();
  };

  const updateCircle = (i: number) => {
    let [x, y] = circleProps.slice(i, i + 2);
    const [vx, vy] = circleProps.slice(i + 2, i + 4);
    let [life] = circleProps.slice(i + 4, i + 5);
    const [ttl, radius, hue] = circleProps.slice(i + 5, i + 8);
    drawCircle(x, y, life, ttl, radius, hue);
    life++;
    x += vx;
    y += vy;
    circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
    if (x < -radius || x > canvasA.width + radius || y < -radius || y > canvasA.height + radius || life > ttl) {
      initCircle(i);
    }
  };

  const updateCircles = () => {
    baseHue++;
    for (let i = 0; i < circlePropsLength; i += circlePropCount) updateCircle(i);
  };

  const render = () => {
    ctxB.save();
    ctxB.filter = "blur(50px)";
    ctxB.drawImage(canvasA, 0, 0);
    ctxB.restore();
  };

  const draw = () => {
    ctxA.clearRect(0, 0, canvasA.width, canvasA.height);
    ctxB.fillStyle = backgroundColor;
    ctxB.fillRect(0, 0, canvasB.width, canvasB.height);
    updateCircles();
    render();
    requestAnimationFrame(draw);
  };

  createCanvas();
  resize();
  initCircles();
  draw();
  window.addEventListener("resize", resize);
}
