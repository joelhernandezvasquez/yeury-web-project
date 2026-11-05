import { money } from "../content";

// Animates every [data-total] node toward the builder's current total.
export class TotalTween {
  private shown: number | null = null;
  private tweenTo: number | undefined;
  private frame = 0;

  paint(root: HTMLElement, target: number, reduce: boolean) {
    const nodes = root.querySelectorAll<HTMLElement>("[data-total]");
    if (this.shown == null || reduce) {
      this.shown = target;
      nodes.forEach((n) => (n.textContent = money(target)));
      return;
    }
    if (this.tweenTo === target) {
      nodes.forEach((n) => {
        if (!n.textContent) n.textContent = money(this.shown as number);
      });
      return;
    }
    const from = this.shown,
      t0 = performance.now(),
      dur = 550;
    this.tweenTo = target;
    nodes.forEach(
      (n) =>
        n.animate &&
        n.animate(
          [
            { transform: "scale(1.08)", color: "#D9782D" },
            { transform: "scale(1)" },
          ],
          { duration: 450, easing: "cubic-bezier(.2,.7,.2,1)" },
        ),
    );
    cancelAnimationFrame(this.frame);
    const setAll = (v: number) =>
      root
        .querySelectorAll<HTMLElement>("[data-total]")
        .forEach((n) => (n.textContent = money(v)));
    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / dur),
        e = 1 - Math.pow(1 - k, 3);
      this.shown = from + (target - from) * e;
      setAll(this.shown);
      if (k < 1) this.frame = requestAnimationFrame(step);
      else {
        this.shown = target;
        setAll(target);
      }
    };
    this.frame = requestAnimationFrame(step);
  }

  stop() {
    cancelAnimationFrame(this.frame);
  }
}
