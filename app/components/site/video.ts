// Promo video block: real <video> when `src` is set, otherwise a fake player UI.
export const VIDEO_DURATION = 45;

const fmt = (x: number) =>
  Math.floor(x / 60) + ":" + String(Math.floor(x % 60)).padStart(2, "0");

export function videoVals(
  src: string,
  playing: boolean,
  time: number,
  toggle: () => void,
) {
  const D = VIDEO_DURATION;
  return {
    vReal: !!src,
    vFake: !src,
    vRef: (n: HTMLElement | null) => {
      if (n && src && n.getAttribute("src") !== src) n.setAttribute("src", src);
    },
    vToggle: toggle,
    v: {
      playing,
      paused: !playing,
      btnOp: playing ? 0 : 1,
      pct: (time / D) * 100 + "%",
      time: fmt(time) + " / " + fmt(D),
      scale: playing ? 1.1 : 1,
      dur: playing ? D - time + "s" : ".6s",
    },
  };
}
