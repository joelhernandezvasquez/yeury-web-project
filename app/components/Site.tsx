// @ts-nocheck
"use client";
import React from "react";
import renderTemplate from "./Template";
import { T, BUILD, DELIVERY_FEE, money, SEASON, SPOTS } from "./content";

export default class Site extends React.Component<any, any> {
  static defaultProps = {
    season: "autumn",
    showPromo: true,
    lang: "es",
    videoSrc: "",
    formState: "live",
    formOnly: false,
  };
  state: any = {
    vPlay: false,
    vT: 0,
    notes: "",
    b: {
      guests: 10,
      prot: ["pernil", "pechuga"],
      rice: ["moro"],
      side: ["pastelon"],
      salad: ["papa"],
      pic: "30",
      des: "flanS",
      mode: "pickup",
    },
    waOpen: false,
    lang: null,
    w: 1200,
    menuOpen: false,
    sent: false,
    pkg: "c46",
    mode: "pickup",
    name: "",
  };
  rootRef = React.createRef();

  progRef = React.createRef();
  componentDidMount() {
    const el = this.rootRef.current;
    if (!el) return;
    this.ro = new ResizeObserver(([e]) =>
      this.setState({ w: e.contentRect.width }),
    );
    this.ro.observe(el);
    this.reduce =
      window.matchMedia &&
      matchMedia("(prefers-reduced-motion: reduce)").matches;
    const FROM = {
      up: "translateY(36px)",
      zoom: "translateY(18px) scale(.94)",
      word: "translateY(105%)",
    };
    this.io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const n = en.target;
          this.io.unobserve(n);
          n.style.opacity = "1";
          n.style.transform = "none";
          setTimeout(
            () => {
              n.style.transition = n.dataset.tr || "";
              n.style.transform = "";
            },
            1300 + (+n.dataset.d || 0),
          );
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    this.scan = () => {
      el.querySelectorAll("[data-anim]:not([data-anim-on])").forEach((n) => {
        n.setAttribute("data-anim-on", "");
        if (!this.reduce) n.style.animation = n.dataset.anim;
      });
      if (this.reduce) return;
      el.querySelectorAll("[data-reveal]:not([data-rv])").forEach((n) => {
        n.setAttribute("data-rv", "");
        let d = +n.dataset.delay || 0;
        if (n.hasAttribute("data-stagger") && n.parentElement)
          d += Array.prototype.indexOf.call(n.parentElement.children, n) * 110;
        n.dataset.d = d;
        n.dataset.tr = n.style.transition;
        n.style.opacity = "0";
        n.style.transform = FROM[n.dataset.reveal] || FROM.up;
        n.style.transition =
          "opacity .9s cubic-bezier(.2,.7,.2,1) " +
          d +
          "ms, transform 1.1s cubic-bezier(.16,.84,.24,1) " +
          d +
          "ms";
        this.io.observe(n);
      });
    };
    this.scan();
    this.mo = new MutationObserver(() => {
      cancelAnimationFrame(this.sr);
      this.sr = requestAnimationFrame(this.scan);
    });
    this.mo.observe(el, { childList: true, subtree: true });
    this.onScroll = () => {
      if (this.ticking) return;
      this.ticking = true;
      requestAnimationFrame(() => {
        this.ticking = false;
        const de = document.documentElement,
          y = window.scrollY,
          vh = window.innerHeight;
        const max = Math.max(1, de.scrollHeight - vh);
        if (this.progRef.current)
          this.progRef.current.style.transform =
            "scaleX(" + Math.min(1, y / max) + ")";
        if (this.reduce) return;
        el.querySelectorAll("[data-parallax]").forEach((n) => {
          const v = n.dataset.parallax;
          if (v === "hero") {
            const k = Math.min(1, y / 600);
            n.style.transform = "translateY(" + y * 0.28 + "px)";
            n.style.opacity = String(1 - k * 0.9);
            return;
          }
          const rc = n.getBoundingClientRect();
          if (rc.bottom < -100 || rc.top > vh + 100) return;
          n.style.transform =
            "translateY(" + -(rc.top + rc.height / 2 - vh / 2) * +v + "px)";
        });
      });
    };
    window.addEventListener("scroll", this.onScroll, { passive: true });
    this.onScroll();
    this.paintTotal();
  }
  componentDidUpdate() {
    this.paintTotal();
  }
  paintTotal() {
    const el = this.rootRef.current;
    if (!el) return;
    const target = this.bTotal || 0;
    const nodes = el.querySelectorAll("[data-total]");
    if (this.shown == null || this.reduce) {
      this.shown = target;
      nodes.forEach((n) => (n.textContent = money(target)));
      return;
    }
    if (this.tweenTo === target) {
      nodes.forEach((n) => {
        if (!n.textContent) n.textContent = money(this.shown);
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
    cancelAnimationFrame(this.tw);
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur),
        e = 1 - Math.pow(1 - k, 3);
      this.shown = from + (target - from) * e;
      el.querySelectorAll("[data-total]").forEach(
        (n) => (n.textContent = money(this.shown)),
      );
      if (k < 1) this.tw = requestAnimationFrame(step);
      else {
        this.shown = target;
        el.querySelectorAll("[data-total]").forEach(
          (n) => (n.textContent = money(target)),
        );
      }
    };
    this.tw = requestAnimationFrame(step);
  }
  toggleVideo() {
    if (this.state.vPlay) {
      clearInterval(this.vInt);
      return this.setState({ vPlay: false });
    }
    this.setState((s) => ({ vPlay: true, vT: s.vT >= 45 ? 0 : s.vT }));
    clearInterval(this.vInt);
    this.vInt = setInterval(
      () =>
        this.setState((s) => {
          const n = +(s.vT + 0.25).toFixed(2);
          if (n >= 45) {
            clearInterval(this.vInt);
            return { vT: 45, vPlay: false };
          }
          return { vT: n };
        }),
      250,
    );
  }
  componentWillUnmount() {
    clearInterval(this.vInt);
    this.ro && this.ro.disconnect();
    this.io && this.io.disconnect();
    this.mo && this.mo.disconnect();
    window.removeEventListener("scroll", this.onScroll);
    cancelAnimationFrame(this.sr);
    cancelAnimationFrame(this.tw);
    this.resetMotion();
  }

  // Undo the scroll-reveal / animation setup on the DOM. React StrictMode (dev)
  // mounts, unmounts and re-mounts: without this the second mount skips every
  // element the first mount already hid, leaving it at opacity 0 forever.
  resetMotion() {
    const el = this.rootRef.current;
    if (!el) return;
    el.querySelectorAll("[data-rv]").forEach((n) => {
      n.removeAttribute("data-rv");
      n.style.opacity = "";
      n.style.transform = "";
      n.style.transition = n.dataset.tr || "";
    });
    el.querySelectorAll("[data-anim-on]").forEach((n) => {
      n.removeAttribute("data-anim-on");
      n.style.animation = "";
    });
  }

  deco(season, anchor) {
    const s = SEASON[season];
    if (!s) return [];
    return SPOTS.map(([x, y, size, rot], i) => {
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

  builderVals(t, lang, mob) {
    const b = this.state.b,
      g = b.guests,
      L = lang === "en" ? 2 : 1;
    const setB = (patch) => this.setState((s) => ({ b: { ...s.b, ...patch } }));
    const lines = [];
    let total = 0;
    const groups = BUILD.map((grp, gi) => {
      const items = grp.items.map((it) => {
        const [id, , , price] = it;
        const on =
          grp.type === "multi" ? b[grp.k].includes(id) : b[grp.k] === id;
        if (on && (grp.type === "multi" || price > 0)) {
          const amt = grp.type === "multi" ? price * g : price;
          total += amt;
          lines.push({
            label: grp.k === "pic" ? t.b.groups[4] + " · " + it[L] : it[L],
          });
        }
        const toggle = () => {
          if (grp.type === "single") return setB({ [grp.k]: id });
          let cur = [...b[grp.k]];
          if (cur.includes(id)) {
            if (cur.length > grp.min) cur = cur.filter((x) => x !== id);
          } else {
            cur.push(id);
            if (cur.length > grp.max) cur.shift();
          }
          setB({ [grp.k]: cur });
        };
        return {
          label: it[L],
          on: String(on),
          toggle,
          price:
            price === 0
              ? "—"
              : grp.type === "multi"
                ? "$" + price + " " + t.b.perP
                : money(price),
          bd: on ? "#5F6B45" : "rgba(122,30,30,.18)",
          bg: on ? "#5F6B45" : "#FBF4E8",
          fg: on ? "#F6ECDD" : "#2B1A14",
          ckBd: on ? "#F6ECDD" : "rgba(122,30,30,.35)",
          ckBg: on ? "#F6ECDD" : "transparent",
          ckOp: on ? 1 : 0,
          tf: on ? "translateY(-1px)" : "none",
        };
      });
      return {
        title: t.b.groups[gi],
        hint: grp.type === "multi" ? t.b.choose(grp.max) : t.b.one,
        radius: grp.type === "multi" ? "6px" : "50%",
        items,
      };
    });
    lines.push({ label: b.mode === "delivery" ? t.b.delivery : t.f.pickup });
    this.bTotal = total;
    const pk = [
      [4, 6, t.pkg1.title, "$190"],
      [8, 11, t.pkg2.title, "$350"],
      [12, 18, t.pkg3.title, "$550"],
    ].find(([a, z]) => g >= a && g <= z);
    const summary =
      t.b.waIntro(g) + "\n" + lines.map((l) => "• " + l.label).join("\n");
    const clamp = (v) => Math.max(4, Math.min(80, v));
    const sel = (on) =>
      on
        ? { bd: "#5F6B45", bg: "#5F6B45", fg: "#F6ECDD" }
        : { bd: "rgba(122,30,30,.18)", bg: "#FBF4E8", fg: "#2B1A14" };
    const p = sel(b.mode === "pickup"),
      d = sel(b.mode === "delivery");
    return {
      bCount: t.b.count(lines.length - 1),
      bGuests: g,
      bGroups: groups,
      bLines: lines,
      bEmpty: lines.length === 0,
      bPerPerson: t.b.perPerson(money(total / g)),
      bTip: pk
        ? { show: true, text: t.b.tip(g, pk[2], pk[3]) }
        : { show: false, text: "" },
      bWa: "https://wa.me/19148045458?text=" + encodeURIComponent(summary),
      bToForm: () => this.setState({ pkg: "otro", notes: summary }),
      guestMinus: () => setB({ guests: clamp(g - 1) }),
      guestPlus: () => setB({ guests: clamp(g + 1) }),
      guestRange: (e) => setB({ guests: clamp(+e.target.value) }),
      bMode: {
        pBd: p.bd,
        pBg: p.bg,
        pFg: p.fg,
        dBd: d.bd,
        dBg: d.bg,
        dFg: d.fg,
      },
      bPickup: () => setB({ mode: "pickup" }),
      bDelivery: () => setB({ mode: "delivery" }),
      bDeliveryFee: money(DELIVERY_FEE),
    };
  }
  renderVals() {
    const lang = this.state.lang || this.props.lang || "es";
    let t = T[lang];
    const season = this.props.season ?? "autumn";
    const mob = this.state.w < 760;
    const formState = this.props.formState ?? "live";
    const sent =
      formState === "sent"
        ? true
        : formState === "form"
          ? false
          : this.state.sent;
    const ids = ["#menu", "#paquetes", "#eventos", "#galeria", "#contacto"];
    const pkgVals = ["c46", "c811", "c1218", "pic", "evt", "otro"];
    const go = (v) => () => this.setState({ pkg: v });
    const on = (a) =>
      a
        ? { bg: "#7A1E1E", fg: "#F6ECDD" }
        : { bg: "transparent", fg: "#7A1E1E" };
    const sel = (a) =>
      a
        ? { b: "#5F6B45", bg: "#5F6B45", fg: "#F6ECDD" }
        : { b: "rgba(122,30,30,.25)", bg: "#F6ECDD", fg: "#2B1A14" };
    const p = sel(this.state.mode === "pickup"),
      d = sel(this.state.mode === "delivery");
    const icons = [
      ["30px", "30px", "50%"],
      ["30px", "20px", "4px"],
      ["30px", "16px", "16px 16px 2px 2px"],
      ["18px", "18px", "2px"],
    ];
    const promoT = t.promo[season];
    if (mob) t = { ...t, heroEyebrow: t.heroEyebrow.split(" · ")[0] };
    return {
      ...(() => {
        const src = (this.props.videoSrc || "").trim(),
          T = this.state.vT,
          D = 45,
          f = (x) =>
            Math.floor(x / 60) +
            ":" +
            String(Math.floor(x % 60)).padStart(2, "0");
        const pl = this.state.vPlay;
        return {
          vReal: !!src,
          vFake: !src,
          vRef: (n) => {
            if (n && src && n.getAttribute("src") !== src)
              n.setAttribute("src", src);
          },
          vToggle: () => this.toggleVideo(),
          v: {
            playing: pl,
            paused: !pl,
            btnOp: pl ? 0 : 1,
            pct: (T / D) * 100 + "%",
            time: f(T) + " / " + f(D),
            scale: pl ? 1.1 : 1,
            dur: pl ? D - T + "s" : ".6s",
          },
        };
      })(),
      t,
      rootRef: this.rootRef,
      progRef: this.progRef,
      heroWords: t.heroTitle
        .split(" ")
        .map((text, i) => ({ text, d: 250 + i * 90 })),
      heroD: {
        sub: 300 + t.heroTitle.split(" ").length * 90,
        btn: 450 + t.heroTitle.split(" ").length * 90,
      },
      marquee: [...t.marquee, ...t.marquee],
      isMobile: mob,
      isDesktop: !mob,
      showRest: !this.props.formOnly,
      showPromo: (this.props.showPromo ?? true) && !!promoT,
      promo: promoT
        ? { tag: promoT[0], text: promoT[1] }
        : { tag: "", text: "" },
      m: mob
        ? {
            bCols: "1fr",
            bGap: "20px",
            bPad: "24px 18px",
            bSumPos: "relative",
            bTotal: "44px",
            chipMin: "100%",
            vRatio: "4/5",
            vBtn: "76px",
            vBarPad: "18px 16px 16px",
            vTitle: "22px",
            marq: "20px",
            marqPad: "13px 0",
            headPad: "8px 14px",
            logo: "22px",
            logoMark: "44px",
            logoName: "20px",
            heroMarkW: "76px",
            heroH: "640px",
            heroPad: "0 20px 48px",
            h1: "42px",
            lead: "16px",
            svcPad: "28px 16px 20px",
            svcCols: "1fr 1fr",
            svcGap: "12px",
            svcName: "16px",
            sec: "64px 18px",
            headGap: "34px",
            h2: "34px",
            cardGap: "28px",
            ribbon: "19px",
            price: "58px",
            splitGap: "36px",
            igCols: "repeat(2,1fr)",
            igGap: "8px",
            formPad: "36px 20px 30px",
            footPad: "52px 20px 100px",
            waRight: "14px",
            waBottom: "16px",
            waCardW: Math.min(360, this.state.w - 28) + "px",
            waPadR: "16px",
          }
        : {
            bCols: "minmax(0,1fr) 380px",
            bGap: "28px",
            bPad: "36px 36px",
            bSumPos: "sticky",
            bTotal: "54px",
            chipMin: "220px",
            vRatio: "16/9",
            vBtn: "96px",
            vBarPad: "28px 32px 24px",
            vTitle: "30px",
            marq: "26px",
            marqPad: "18px 0",
            headPad: "10px 32px",
            logo: "26px",
            logoMark: "54px",
            logoName: "26px",
            heroMarkW: "96px",
            heroH: "720px",
            heroPad: "0 32px 88px",
            h1: "72px",
            lead: "19px",
            svcPad: "40px 32px 28px",
            svcCols: "repeat(4,1fr)",
            svcGap: "20px",
            svcName: "19px",
            sec: "104px 32px",
            headGap: "52px",
            h2: "48px",
            cardGap: "28px",
            ribbon: "20px",
            price: "72px",
            splitGap: "72px",
            igCols: "repeat(4,1fr)",
            igGap: "12px",
            formPad: "56px 56px 48px",
            footPad: "72px 32px 36px",
            waRight: "28px",
            waBottom: "28px",
            waCardW: "340px",
            waPadR: "20px",
          },
      langBtn: {
        esBg: on(lang === "es").bg,
        esFg: on(lang === "es").fg,
        enBg: on(lang === "en").bg,
        enFg: on(lang === "en").fg,
      },
      setEs: () => this.setState({ lang: "es" }),
      setEn: () => this.setState({ lang: "en" }),
      menuOpen: mob && this.state.menuOpen,
      toggleMenu: () => this.setState((s) => ({ menuOpen: !s.menuOpen })),
      closeMenu: () => this.setState({ menuOpen: false }),
      nav: t.nav.map((label, i) => ({ label, href: ids[i] })),
      services: t.services.map((name, i) => ({
        name,
        href: ["#paquetes", "#picaderas", "#eventos", "#menu"][i],
        iw: icons[i][0],
        ih: icons[i][1],
        ir: icons[i][2],
      })),
      decoHero: this.deco(season, "bottom"),
      decoPkg: this.deco(season, "top"),
      pkgCols: this.state.w >= 1060 ? "repeat(3,minmax(0,1fr))" : "1fr",
      pkgMax: this.state.w >= 1060 ? "100%" : "520px",
      packages: [
        {
          ...t.pkg1,
          price: "$190",
          serves: t.serves1,
          popular: false,
          pick: go("c46"),
        },
        {
          ...t.pkg2,
          price: "$350",
          serves: t.serves2,
          popular: true,
          pick: go("c811"),
        },
        {
          ...t.pkg3,
          price: "$550",
          serves: t.serves3,
          popular: false,
          pick: go("c1218"),
        },
      ],
      dishes: t.dishes.map(([name, desc], i) => ({
        name,
        desc,
        id: ["dish-shortribs", "dish-shrimp", "dish-chicken"][i],
        ph: [
          "Foto: short ribs",
          "Foto: camarones guisados",
          "Foto: pechuga con tocino",
        ][i],
      })),
      qtys: ["20", "30", "50+"],
      pickTray: go("pic"),
      pickEvent: go("evt"),
      steps: t.steps.map(([title, sub], i) => ({ n: i + 1, title, sub })),
      ig: ["ig-1", "ig-2", "ig-3", "ig-4", "ig-5", "ig-6", "ig-7", "ig-8"],
      pkg: this.state.pkg,
      onPkg: (e) => this.setState({ pkg: e.target.value }),
      pkgOptions: t.pkgOpts.map((label, i) => ({ label, v: pkgVals[i] })),
      modeBtn: {
        pBorder: p.b,
        pBg: p.bg,
        pFg: p.fg,
        dBorder: d.b,
        dBg: d.bg,
        dFg: d.fg,
      },
      setPickup: () => this.setState({ mode: "pickup" }),
      setDelivery: () => this.setState({ mode: "delivery" }),
      submit: (e) => {
        e.preventDefault();
        const fd = new FormData(e.target),
          v = (k) => String(fd.get(k) || "").trim();
        const W = t.f.waMsg,
          opt = t.pkgOpts[pkgVals.indexOf(this.state.pkg)] || "";
        const dt = v("date")
          ? new Date(v("date") + "T12:00").toLocaleDateString(
              lang === "en" ? "en-US" : "es-US",
              {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              },
            )
          : "";
        const rows = [
          [t.f.name, v("name")],
          [t.f.phone, v("phone")],
          [t.f.date, dt],
          [t.f.people, v("people")],
          [t.f.pkg, opt],
          [
            t.f.mode,
            this.state.mode === "delivery" ? t.f.delivery : t.f.pickup,
          ],
        ].filter((x) => x[1]);
        const msg =
          W.intro +
          "\n\n" +
          rows.map(([k, val]) => "*" + k + ":* " + val).join("\n") +
          (this.state.notes.trim()
            ? "\n\n*" + t.f.notes + ":*\n" + this.state.notes.trim()
            : "");
        const url = "https://wa.me/19148045458?text=" + encodeURIComponent(msg);
        window.open(url, "_blank");
        this.setState({
          sent: true,
          name: v("name").split(" ")[0],
          waUrl: url,
        });
      },
      waSent: this.state.waUrl || "https://wa.me/19148045458",
      sent,
      notSent: !sent,
      thanksDetail: t.thanksDetail(this.state.name),
      reset: () => this.setState({ sent: false, name: "" }),
      waOpen: this.state.waOpen,
      waLabel: !this.state.waOpen,
      toggleWa: () => this.setState((st) => ({ waOpen: !st.waOpen })),
      waHref:
        "https://wa.me/19148045458?text=" + encodeURIComponent(t.wa.openText),
      waChips: t.wa.chips.map((label) => ({
        label,
        href:
          "https://wa.me/19148045458?text=" +
          encodeURIComponent(t.wa.text + label),
      })),
      ...this.builderVals(t, lang, mob, go),
      notes: this.state.notes,
      onNotes: (e) => this.setState({ notes: e.target.value }),
      footCols: [
        {
          label: t.foot[0][0],
          value: "914-804-5458",
          href: "tel:+19148045458",
          sub: t.foot[0][1],
        },
        {
          label: t.foot[1][0],
          value: "Jeurydanielsantos92@gmail.com",
          href: "mailto:Jeurydanielsantos92@gmail.com",
          sub: t.foot[1][1],
        },
        {
          label: t.foot[2][0],
          value: "@caesy.foodny",
          href: "https://instagram.com/caesy.foodny",
          sub: t.foot[2][1],
        },
        {
          label: t.hours,
          value: t.hoursV,
          href: "#ordenar",
          sub: t.foot[3][1] + " · " + t.hoursSub,
        },
      ],
    };
  }
  render() {
    return renderTemplate(this.renderVals());
  }
}
