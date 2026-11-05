/* eslint-disable @typescript-eslint/no-explicit-any */
import { SEASON, SPOTS } from "../content";

// Seasonal confetti shapes scattered over the hero (anchor "bottom") and packages (anchor "top").
export function deco(season: string, anchor: "top" | "bottom") {
  const s = (SEASON as any)[season];
  if (!s) return [];
  return (SPOTS as any[]).map(([x, y, size, rot], i) => {
    const c = s.colors[i % s.colors.length];
    let shape = s.shape;
    if (shape === "mix") shape = i % 2 ? "dot" : "leaf";
    const w =
      shape === "egg"
        ? size * 0.75
        : size * (shape === "leaf" ? 0.62 : 1) * (shape === "dot" ? 0.6 : 1);
    const h = shape === "dot" ? w : size;
    const r =
      shape === "leaf"
        ? "0 100% 0 100%"
        : shape === "egg"
          ? "50% 50% 50% 50% / 60% 60% 40% 40%"
          : "50%";
    return {
      x: x + "%",
      y: (anchor === "bottom" ? y : y + 1) + "%",
      w: w + "px",
      h: h + "px",
      c,
      r,
      rot: rot + "deg",
      o: anchor === "bottom" ? 0.9 : 0.55,
    };
  });
}
