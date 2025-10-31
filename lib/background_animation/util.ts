export const PI = Math.PI;
export const TAU = 2 * PI;
export const rand = (n: number) => n * Math.random();
export const randIn = (min: number, max: number) => rand(max - min) + min;
export const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return Math.abs(((t + hm) % m) - hm) / hm;
};
