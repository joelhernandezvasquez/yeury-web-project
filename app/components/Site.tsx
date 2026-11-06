// @ts-nocheck
"use client";
import React from "react";
import renderTemplate from "./Template";
import { T } from "./content";
import { startMotion } from "./site/motion";
import { TotalTween } from "./site/totalTween";
import { deco } from "./site/decor";
import { videoVals, VIDEO_DURATION } from "./site/video";
import { builderVals } from "./site/builder";
import { submitContactForm, PKG_VALUES } from "./site/contactForm";

// Below this width the mobile layout (hamburger menu etc.) is rendered.
const MOBILE_BREAKPOINT = 760;
const WA = "https://wa.me/19148045458";
const NAV_IDS = ["#menu", "#paquetes", "#eventos", "#galeria", "#contacto"];
const SERVICE_LINKS = ["#paquetes", "#picaderas", "#eventos", "#menu"];
const SERVICE_ICONS = [
  ["30px", "30px", "50%"],
  ["30px", "20px", "4px"],
  ["30px", "16px", "16px 16px 2px 2px"],
  ["18px", "18px", "2px"],
];
const DISH_IDS = ["dish-shortribs", "dish-shrimp", "dish-chicken"];
const DISH_PLACEHOLDERS = [
  "Foto: short ribs",
  "Foto: camarones guisados",
  "Foto: pechuga con tocino",
];

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
    waShow: false,
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
  totalTween = new TotalTween();
  bTotal = 0;

  // ── lifecycle ────────────────────────────────────────────────────────────
  componentDidMount() {
    const el = this.rootRef.current;
    if (!el) return;
    this.ro = new ResizeObserver(([e]) =>
      this.setState({ w: e.contentRect.width }),
    );
    this.ro.observe(el);
    this.motion = startMotion(el, () => this.progRef.current);
    this.watchHero(el);
    this.paintTotal();
  }
  componentDidUpdate() {
    this.paintTotal();
  }
  componentWillUnmount() {
    clearInterval(this.vInt);
    this.ro?.disconnect();
    this.heroIo?.disconnect();
    this.motion?.stop();
    this.totalTween.stop();
  }

  // The floating WhatsApp button only appears once the hero is scrolled past.
  watchHero(root) {
    const hero = root.querySelector("#inicio");
    if (!hero) return this.setState({ waShow: true }); // no hero (formOnly)
    this.heroIo = new IntersectionObserver(([e]) =>
      this.setState({
        waShow: !e.isIntersecting && e.boundingClientRect.bottom <= 0,
      }),
    );
    this.heroIo.observe(hero);
  }

  paintTotal() {
    const el = this.rootRef.current;
    if (!el) return;
    this.totalTween.paint(el, this.bTotal || 0, !!this.motion?.reduce);
  }

  // ── actions ──────────────────────────────────────────────────────────────
  toggleVideo() {
    if (this.state.vPlay) {
      clearInterval(this.vInt);
      return this.setState({ vPlay: false });
    }
    this.setState((s) => ({
      vPlay: true,
      vT: s.vT >= VIDEO_DURATION ? 0 : s.vT,
    }));
    clearInterval(this.vInt);
    this.vInt = setInterval(
      () =>
        this.setState((s) => {
          const n = +(s.vT + 0.25).toFixed(2);
          if (n >= VIDEO_DURATION) {
            clearInterval(this.vInt);
            return { vT: VIDEO_DURATION, vPlay: false };
          }
          return { vT: n };
        }),
      250,
    );
  }

  // ── view model: one slice per page section ──────────────────────────────
  langVals(lang) {
    const on = (a) =>
      a
        ? { bg: "#7A1E1E", fg: "#F6ECDD" }
        : { bg: "transparent", fg: "#7A1E1E" };
    return {
      langBtn: {
        esBg: on(lang === "es").bg,
        esFg: on(lang === "es").fg,
        enBg: on(lang === "en").bg,
        enFg: on(lang === "en").fg,
      },
      setEs: () => this.setState({ lang: "es" }),
      setEn: () => this.setState({ lang: "en" }),
    };
  }

  navVals(t, mob) {
    return {
      menuOpen: mob && this.state.menuOpen,
      toggleMenu: () => this.setState((s) => ({ menuOpen: !s.menuOpen })),
      closeMenu: () => this.setState({ menuOpen: false }),
      nav: t.nav.map((label, i) => ({ label, href: NAV_IDS[i] })),
    };
  }

  heroVals(t, mob, season) {
    const words = t.heroTitle.split(" ");
    const promoT = t.promo[season];
    return {
      heroWords: words.map((text, i) => ({ text, d: 250 + i * 90 })),
      heroD: {
        sub: 300 + words.length * 90,
        btn: 450 + words.length * 90,
      },
      showPromo: (this.props.showPromo ?? true) && !!promoT,
      promo: promoT
        ? { tag: promoT[0], text: promoT[1] }
        : { tag: "", text: "" },
      decoHero: deco(season, "bottom"),
      services: t.services.map((name, i) => ({
        name,
        href: SERVICE_LINKS[i],
        iw: SERVICE_ICONS[i][0],
        ih: SERVICE_ICONS[i][1],
        ir: SERVICE_ICONS[i][2],
      })),
    };
  }

  packageVals(t, season) {
    const go = (v) => () => this.setState({ pkg: v });
    return {
      decoPkg: deco(season, "top"),
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
        id: DISH_IDS[i],
        ph: DISH_PLACEHOLDERS[i],
      })),
      qtys: ["20", "30", "50+"],
      pickTray: go("pic"),
      pickEvent: go("evt"),
      steps: t.steps.map(([title, sub], i) => ({ n: i + 1, title, sub })),
      ig: ["dish-shortribs", "tray-photo", "dish-shrimp", "dish-chicken"],
    };
  }

  builderSlice(t, lang) {
    const { vals, total } = builderVals({
      b: this.state.b,
      t,
      lang,
      setB: (patch) => this.setState((s) => ({ b: { ...s.b, ...patch } })),
      toForm: (summary) => this.setState({ pkg: "otro", notes: summary }),
    });
    this.bTotal = total; // read by paintTotal() after render
    return vals;
  }

  formVals(t, lang, formState) {
    const sent =
      formState === "sent"
        ? true
        : formState === "form"
          ? false
          : this.state.sent;
    const sel = (a) =>
      a
        ? { b: "#5F6B45", bg: "#5F6B45", fg: "#F6ECDD" }
        : { b: "rgba(122,30,30,.25)", bg: "#F6ECDD", fg: "#2B1A14" };
    const p = sel(this.state.mode === "pickup"),
      d = sel(this.state.mode === "delivery");
    return {
      pkg: this.state.pkg,
      onPkg: (e) => this.setState({ pkg: e.target.value }),
      pkgOptions: t.pkgOpts.map((label, i) => ({ label, v: PKG_VALUES[i] })),
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
      submit: (e) =>
        this.setState(
          submitContactForm(e, {
            t,
            lang,
            pkg: this.state.pkg,
            mode: this.state.mode,
            notes: this.state.notes,
          }),
        ),
      waSent: this.state.waUrl || WA,
      sent,
      notSent: !sent,
      thanksDetail: t.thanksDetail(this.state.name),
      reset: () => this.setState({ sent: false, name: "" }),
      notes: this.state.notes,
      onNotes: (e) => this.setState({ notes: e.target.value }),
    };
  }

  whatsappVals(t) {
    return {
      waOpen: this.state.waOpen,
      waShow: this.state.waShow,
      waLabel: !this.state.waOpen,
      toggleWa: () => this.setState((st) => ({ waOpen: !st.waOpen })),
      waHref: WA + "?text=" + encodeURIComponent(t.wa.openText),
      waChips: t.wa.chips.map((label) => ({
        label,
        href: WA + "?text=" + encodeURIComponent(t.wa.text + label),
      })),
    };
  }

  footerVals(t) {
    return {
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

  renderVals() {
    const lang = this.state.lang || this.props.lang || "es";
    let t = T[lang];
    const season = this.props.season ?? "autumn";
    const mob = this.state.w < MOBILE_BREAKPOINT;
    const formState = this.props.formState ?? "live";
    if (mob) t = { ...t, heroEyebrow: t.heroEyebrow.split(" · ")[0] };

    return {
      t,
      rootRef: this.rootRef,
      progRef: this.progRef,
      isMobile: mob,
      isDesktop: !mob,
      showRest: !this.props.formOnly,
      ...videoVals(
        (this.props.videoSrc || "").trim(),
        this.state.vPlay,
        this.state.vT,
        () => this.toggleVideo(),
      ),
      ...this.langVals(lang),
      ...this.navVals(t, mob),
      ...this.heroVals(t, mob, season),
      ...this.packageVals(t, season),
      ...this.builderSlice(t, lang),
      ...this.formVals(t, lang, formState),
      ...this.whatsappVals(t),
      ...this.footerVals(t),
    };
  }

  render() {
    return renderTemplate(this.renderVals());
  }
}
