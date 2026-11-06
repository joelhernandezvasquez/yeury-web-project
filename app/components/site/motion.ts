// Scroll-driven motion: reveal-on-scroll, CSS animations, parallax, progress bar.
// Driven by data-* attributes in the template (data-reveal, data-anim, data-parallax).

const FROM: Record<string, string> = {
  up: "translateY(36px)",
  zoom: "translateY(18px) scale(.94)",
  word: "translateY(105%)",
};

type El = HTMLElement;

// Hero fade-out parallax only runs at or above this viewport width (px).
const HERO_FADE_MIN_WIDTH = 760;

// Undo the scroll-reveal / animation setup on the DOM. React StrictMode (dev)
// mounts, unmounts and re-mounts: without this the second mount skips every
// element the first mount already hid, leaving it at opacity 0 forever.
export function resetMotion(el: El) {
  el.querySelectorAll<El>("[data-rv]").forEach((n) => {
    n.removeAttribute("data-rv");
    n.style.opacity = "";
    n.style.transform = "";
    n.style.transition = n.dataset.tr || "";
  });
  el.querySelectorAll<El>("[data-anim-on]").forEach((n) => {
    n.removeAttribute("data-anim-on");
    n.style.animation = "";
  });
}

export function startMotion(el: El, progEl: () => El | null) {
  const reduce =
    !!window.matchMedia &&
    matchMedia("(prefers-reduced-motion: reduce)").matches;

  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const n = en.target as El;
        io.unobserve(n);
        n.style.opacity = "1";
        n.style.transform = "none";
        setTimeout(
          () => {
            n.style.transition = n.dataset.tr || "";
            n.style.transform = "";
          },
          1300 + (+(n.dataset.d || 0) || 0),
        );
      }),
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );

  const scan = () => {
    el.querySelectorAll<El>("[data-anim]:not([data-anim-on])").forEach((n) => {
      n.setAttribute("data-anim-on", "");
      if (!reduce) n.style.animation = n.dataset.anim || "";
    });
    if (reduce) return;
    el.querySelectorAll<El>("[data-reveal]:not([data-rv])").forEach((n) => {
      n.setAttribute("data-rv", "");
      let d = +(n.dataset.delay || 0) || 0;
      if (n.hasAttribute("data-stagger") && n.parentElement)
        d += Array.prototype.indexOf.call(n.parentElement.children, n) * 110;
      n.dataset.d = String(d);
      n.dataset.tr = n.style.transition;
      n.style.opacity = "0";
      n.style.transform = FROM[n.dataset.reveal || ""] || FROM.up;
      n.style.transition =
        "opacity .9s cubic-bezier(.2,.7,.2,1) " +
        d +
        "ms, transform 1.1s cubic-bezier(.16,.84,.24,1) " +
        d +
        "ms";
      io.observe(n);
    });
  };

  let scanFrame = 0;
  const mo = new MutationObserver(() => {
    cancelAnimationFrame(scanFrame);
    scanFrame = requestAnimationFrame(scan);
  });

  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const de = document.documentElement,
        y = window.scrollY,
        vh = window.innerHeight;
      const max = Math.max(1, de.scrollHeight - vh);
      const prog = progEl();
      if (prog) prog.style.transform = "scaleX(" + Math.min(1, y / max) + ")";
      if (reduce) return;
      el.querySelectorAll<El>("[data-parallax]").forEach((n) => {
        const v = n.dataset.parallax;
        if (v === "hero") {
          // On mobile the CTAs sit below the fold, so fading the hero as you
          // scroll would hide them right when they come into view.
          if (window.innerWidth < HERO_FADE_MIN_WIDTH) {
            n.style.transform = "";
            n.style.opacity = "";
            return;
          }
          const k = Math.min(1, y / 600);
          n.style.transform = "translateY(" + y * 0.28 + "px)";
          n.style.opacity = String(1 - k * 0.9);
          return;
        }
        const rc = n.getBoundingClientRect();
        if (rc.bottom < -100 || rc.top > vh + 100) return;
        n.style.transform =
          "translateY(" +
          -(rc.top + rc.height / 2 - vh / 2) * +(v || 0) +
          "px)";
      });
    });
  };

  scan();
  mo.observe(el, { childList: true, subtree: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  return {
    reduce,
    stop() {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(scanFrame);
      resetMotion(el);
    },
  };
}
