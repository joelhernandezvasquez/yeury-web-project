// Generated from the Claude Design export, then hand-maintained.
import { Fragment } from "react";
import Photo from "./Photo";

export default function renderTemplate(vals: any) {
  const {
    bCount,
    bDelivery,
    bEmpty,
    bGroups,
    bGuests,
    bLines,
    bMode,
    bPickup,
    bToForm,
    bWa,
    closeMenu,
    decoHero,
    decoPkg,
    dishes,
    footCols,
    guestMinus,
    guestPlus,
    guestRange,
    heroD,
    heroWords,
    ig,
    isDesktop,
    isMobile,
    langBtn,
    menuOpen,
    modeBtn,
    nav,
    notSent,
    notes,
    onNotes,
    onPkg,
    packages,
    pickEvent,
    pickTray,
    pkg,
    pkgOptions,
    progRef,
    promo,
    qtys,
    reset,
    rootRef,
    sent,
    services,
    setDelivery,
    setEn,
    setEs,
    setPickup,
    showPromo,
    showRest,
    steps,
    submit,
    t,
    thanksDetail,
    toggleMenu,
    toggleWa,
    v,
    vFake,
    vReal,
    vRef,
    vToggle,
    waChips,
    waHref,
    waLabel,
    waOpen,
    waShow,
    waSent,
  } = vals;
  return (
    <div
      ref={rootRef}
      className="relative bg-cream text-ink font-body min-h-full"
    >
      {showRest && (
        <>
          {showPromo && (
            <>
              <div
                className="
                  bg-burgundy text-cream flex items-center justify-center gap-3
                  flex-wrap py-[10px] px-4 text-[13px] text-center
                "
              >
                <span
                  className="
                    bg-ember text-ink font-bold text-[10.5px] tracking-[.12em]
                    uppercase py-1 px-[9px] rounded-full
                  "
                >
                  {promo.tag}
                </span>
                <span className="font-display text-[16px] italic">
                  {promo.text}
                </span>
                <a
                  href="#ordenar"
                  className="
                    text-cream font-semibold text-[12px] tracking-[.06em]
                    uppercase [border-bottom:1px_solid_var(--color-gold)]
                    pb-[2px]
                  "
                >
                  {t.promoCta} →
                </a>
              </div>
            </>
          )}
          <header
            className="
              sticky top-0 z-30 bg-[rgba(246,236,221,.96)] backdrop-blur-[8px]
              [border-bottom:1px_solid_rgba(201,164,92,.55)]
            "
          >
            <div
              className="
                max-w-[1200px] my-0 mx-auto flex items-center justify-between
                gap-4 py-2 px-[14px] md:py-[10px] md:px-8
              "
            >
              <a
                href="#inicio"
                aria-label="Casey foodny"
                className="
                  flex items-center gap-[10px] leading-[1] text-burgundy
                "
              >
                <img
                  src="/images/logo-mark.png"
                  alt=""
                  className="h-11 md:h-[54px] w-auto block"
                />
                <span className="flex flex-col">
                  <img
                    src="/images/logo-name.png"
                    alt="Casey foodny"
                    className="h-5 md:h-[26px] w-auto block"
                  />
                  <span className="flex items-center gap-[6px] mt-[5px]">
                    <span className="h-px w-[18px] bg-gold"></span>
                    <span
                      className="
                        w-[5px] h-[5px] bg-gold [transform:rotate(45deg)]
                      "
                    ></span>
                    <span
                      className="
                        text-[9px] tracking-[.2em] whitespace-nowrap uppercase
                        text-cocoa font-semibold
                      "
                    >
                      {t.tagline}
                    </span>
                  </span>
                </span>
              </a>
              {isDesktop && (
                <>
                  <nav
                    className="
                      flex gap-[clamp(14px,2vw,28px)] whitespace-nowrap
                      text-[13px] font-semibold tracking-[.04em]
                    "
                  >
                    {nav.map((n: any, __i: number) => (
                      <Fragment key={__i}>
                        <a
                          href={n.href}

                          className="text-ink hover:text-ember"
                        >
                          {n.label}
                        </a>
                      </Fragment>
                    ))}
                  </nav>
                </>
              )}
              <div className="flex items-center gap-[10px]">
                <div
                  className="
                    flex border border-solid border-gold rounded-full p-[2px]
                    text-[11px] font-bold
                  "
                >
                  <button
                    onClick={setEs}
                    className="
                      border-0 cursor-pointer rounded-full py-[5px] px-[9px]
                    "
                    style={{ background: langBtn.esBg, color: langBtn.esFg }}
                  >
                    ES
                  </button>
                  <button
                    onClick={setEn}
                    className="
                      border-0 cursor-pointer rounded-full py-[5px] px-[9px]
                    "
                    style={{ background: langBtn.enBg, color: langBtn.enFg }}
                  >
                    EN
                  </button>
                </div>
                {isDesktop && (
                  <>
                    <a
                      href="#ordenar"

                      className="
                        bg-olive text-cream
                        [transition:transform_.25s,box-shadow_.25s,background_.25s]
                        font-semibold text-[13px] py-[11px] px-5 rounded-full
                        tracking-[.02em] whitespace-nowrap hover:bg-olive-dark
                        hover:text-cream hover:[transform:translateY(-2px)]
                        hover:shadow-[0_12px_24px_rgba(95,_107,_69,_0.35)]
                      "
                    >
                      {t.orderNow}
                    </a>
                  </>
                )}
                {isMobile && (
                  <>
                    <button
                      onClick={toggleMenu}
                      aria-label="Menu"
                      className="
                        w-11 h-11 border border-solid
                        border-[rgba(201,164,92,.7)] bg-transparent
                        rounded-[10px] flex flex-col items-center justify-center
                        gap-[5px] cursor-pointer
                      "
                    >
                      <span className="w-[18px] h-[1.5px] bg-burgundy"></span>
                      <span className="w-[18px] h-[1.5px] bg-burgundy"></span>
                      <span
                        className="
                          w-3 h-[1.5px] bg-burgundy ml-[6px]
                        "
                      ></span>
                    </button>
                  </>
                )}
              </div>
            </div>
            <div
              ref={progRef}
              className="
                absolute left-0 bottom-[-1px] h-[2px] w-full
                [background:linear-gradient(90deg,#C9A45C,#D9782D)]
                origin-[0_50%] [transform:scaleX(0)] pointer-events-none
              "
            ></div>
            {menuOpen && (
              <>
                <div
                  className="
                    absolute left-0 right-0 top-full bg-cream
                    [border-bottom:1px_solid_var(--color-gold)]
                    shadow-[0_18px_30px_rgba(43,26,20,.12)] pt-2 pb-[22px] px-5
                    flex flex-col
                  "
                >
                  {nav.map((n: any, __i: number) => (
                    <Fragment key={__i}>
                      <a
                        href={n.href}
                        onClick={closeMenu}
                        className="
                          font-display text-[22px] text-burgundy py-[13px] px-0
                          [border-bottom:1px_solid_rgba(201,164,92,.35)]
                        "
                      >
                        {n.label}
                      </a>
                    </Fragment>
                  ))}
                  <a
                    href="#ordenar"
                    onClick={closeMenu}
                    className="
                      mt-[18px] text-center bg-olive text-cream
                      [transition:transform_.25s,box-shadow_.25s,background_.25s]
                      font-semibold p-[15px] rounded-full
                    "
                  >
                    {t.orderNow}
                  </a>
                  <a
                    href="tel:+19148045458"
                    className="
                      mt-3 text-center font-semibold text-[14px] text-burgundy
                    "
                  >
                    914-804-5458
                  </a>
                </div>
              </>
            )}
          </header>
          <section
            id="inicio"
            className="
              relative min-h-[560px] md:min-h-[620px] flex items-end
              overflow-hidden bg-[#3a2219]
            "
          >
            <div
              data-anim="cfKen 20s ease-in-out infinite alternate"
              className="absolute inset-0 will-change-transform"
            >
              <Photo
                id={"hero-buffet"}
                placeholder={"Foto del cliente: buffet o bandeja de picadera"}
              />
            </div>
            <div
              className="
                absolute inset-0 pointer-events-none
                [background:linear-gradient(180deg,rgba(43,26,20,.25)_0%,rgba(43,26,20,.35)_40%,rgba(43,26,20,.85)_100%)]
              "
            ></div>
            {decoHero.map((d: any, __i: number) => (
              <Fragment key={__i}>
                <span
                  className="absolute pointer-events-none"
                  style={{
                    left: d.x,
                    bottom: d.y,
                    width: d.w,
                    height: d.h,
                    background: d.c,
                    borderRadius: d.r,
                    transform: `rotate(${d.rot})`,
                    opacity: d.o,
                  }}
                ></span>
              </Fragment>
            ))}
            <div
              data-parallax="hero"
              className="
                relative pointer-events-none w-full max-w-[1200px] my-0 mx-auto
                pt-0 pb-12 px-5 md:pt-0 md:pb-22 md:px-8 text-cream
              "
            >
              <div
                data-reveal="up"
                data-delay="150"
                className="
                  flex items-center gap-[10px] text-[10.5px] tracking-[.16em]
                  whitespace-nowrap uppercase font-semibold text-wheat
                "
              >
                <span className="h-px w-7 bg-gold"></span>
                {t.heroEyebrow}
              </div>
              <h1
                className="
                  font-display font-semibold text-[42px] md:text-[72px]
                  leading-[1.05] my-4 mx-0 max-w-[760px] text-balance
                "
              >
                {heroWords.map((w: any, __i: number) => (
                  <Fragment key={__i}>
                    <span
                      className="
                        inline-block overflow-hidden align-top pb-[.1em]
                        mr-[.24em]
                      "
                    >
                      <span
                        data-reveal="word"
                        data-delay={w.d}
                        className="inline-block"
                      >
                        {w.text}
                      </span>
                    </span>
                  </Fragment>
                ))}
              </h1>
              <p
                data-reveal="up"
                data-delay={heroD.sub}
                className="
                  text-[16px] md:text-[19px] leading-[1.6] max-w-[540px] mt-0
                  mb-[30px] mx-0 text-cream text-pretty
                "
              >
                {t.heroSub}
              </p>
              <div
                data-reveal="up"
                data-delay={heroD.btn}
                className="flex flex-wrap gap-3 pointer-events-auto"
              >
                <a
                  href="#paquetes"

                  className="
                    bg-olive text-cream
                    [transition:transform_.25s,box-shadow_.25s,background_.25s]
                    font-semibold text-[15px] py-4 px-7 rounded-full min-h-12
                    hover:bg-olive-dark hover:text-cream
                    hover:[transform:translateY(-2px)]
                    hover:shadow-[0_12px_24px_rgba(95,_107,_69,_0.35)]
                  "
                >
                  {t.seePackages}
                </a>
                <a
                  href="#ordenar"

                  className="
                    border-[1.5px] border-solid border-gold text-cream
                    font-semibold text-[15px] py-[15px] px-[26px] rounded-full
                    bg-[rgba(43,26,20,.25)] hover:bg-cream hover:text-burgundy
                  "
                >
                  {t.getQuote}
                </a>
              </div>
            </div>
            {isDesktop && (
              <>
                <div
                  className="
                    absolute left-1/2 bottom-[26px] [transform:translateX(-50%)]
                    pointer-events-none flex flex-col items-center gap-2
                    text-wheat text-[10px] tracking-[.3em] uppercase
                    font-semibold
                  "
                >
                  {t.scroll}
                  <span
                    data-anim="cfBob 1.8s ease-in-out infinite"
                    className="w-px h-7 bg-gold"
                  ></span>
                </div>
              </>
            )}
          </section>
          <section className="pt-7 pb-5 px-4 md:pt-10 md:pb-7 md:px-8 bg-cream">
            <div
              className="
                max-w-[1200px] my-0 mx-auto grid grid-cols-[1fr_1fr]
                md:grid-cols-[repeat(4,1fr)] gap-3 md:gap-5
              "
            >
              {services.map((s: any, __i: number) => (
                <Fragment key={__i}>
                  <a
                    href={s.href}
                    data-reveal="up"
                    data-stagger=""

                    className="
                      [transition:transform_.35s,box-shadow_.35s,border-color_.35s]
                      bg-paper border border-solid border-[rgba(201,164,92,.5)]
                      rounded-[12px] pt-[26px] pb-[22px] px-[14px] flex flex-col
                      items-center gap-[14px] text-center text-ink
                      shadow-[0_2px_10px_rgba(122,30,30,.05)] hover:border-gold!
                      hover:[transform:translateY(-2px)]!
                      hover:shadow-[0_10px_24px_rgba(122,_30,_30,_0.1)]!
                    "
                  >
                    <span
                      className="
                        relative w-13 h-13 flex items-center justify-center
                        border border-solid border-gold rounded-[50%]
                      "
                    >
                      <span
                        className="border-[1.5px] border-solid border-gold"
                        style={{
                          width: s.iw,
                          height: s.ih,
                          borderRadius: s.ir,
                        }}
                      ></span>
                    </span>
                    <span
                      className="
                        font-display text-[16px] md:text-[19px] font-semibold
                        text-burgundy leading-[1.2]
                      "
                    >
                      {s.name}
                    </span>
                  </a>
                </Fragment>
              ))}
            </div>
          </section>
          <div
            className="
              flex items-center justify-center gap-2 py-[6px] px-0 bg-cream
            "
          >
            <span
              className="
                h-px w-[120px]
                [background:linear-gradient(90deg,transparent,#C9A45C)]
              "
            ></span>
            <span
              className="
                w-[7px] h-[13px] border border-solid border-gold
                rounded-[0_100%_0_100%] [transform:rotate(-50deg)]
              "
            ></span>
            <span
              className="
                w-[7px] h-[13px] border border-solid border-gold
                rounded-[0_100%_0_100%] [transform:rotate(-20deg)]
              "
            ></span>
            <span className="w-2 h-2 bg-gold [transform:rotate(45deg)]"></span>
            <span
              className="
                w-[7px] h-[13px] border border-solid border-gold
                rounded-[100%_0_100%_0] [transform:rotate(20deg)]
              "
            ></span>
            <span
              className="
                w-[7px] h-[13px] border border-solid border-gold
                rounded-[100%_0_100%_0] [transform:rotate(50deg)]
              "
            ></span>
            <span
              className="
                h-px w-[120px]
                [background:linear-gradient(270deg,transparent,#C9A45C)]
              "
            ></span>
          </div>
          <section
            id="paquetes"
            className="
              relative scroll-mt-20 py-16 px-[18px] md:py-[104px] md:px-8
              bg-cream overflow-hidden
            "
          >
            {decoPkg.map((d: any, __i: number) => (
              <Fragment key={__i}>
                <span
                  className="absolute pointer-events-none"
                  style={{
                    left: d.x,
                    top: d.y,
                    width: d.w,
                    height: d.h,
                    background: d.c,
                    borderRadius: d.r,
                    transform: `rotate(${d.rot})`,
                    opacity: d.o,
                  }}
                ></span>
              </Fragment>
            ))}
            <div className="relative max-w-[1200px] my-0 mx-auto">
              <div data-reveal="up" className="text-center mb-[34px] md:mb-13">
                <div
                  className="
                    text-[11px] tracking-[.26em] uppercase font-bold
                    text-burgundy
                  "
                >
                  {t.pkgEyebrow}
                </div>
                <h2
                  className="
                    font-display font-semibold text-[34px] md:text-[48px]
                    leading-[1.1] text-burgundy mt-3 mb-0 mx-0 text-balance
                  "
                >
                  {t.pkgTitle}
                </h2>
              </div>
              <div
                className="
                  grid grid-cols-[1fr] lg:grid-cols-[repeat(3,minmax(0,1fr))]
                  max-w-[520px] lg:max-w-full my-0 mx-auto gap-7 items-stretch
                "
              >
                {packages.map((p: any, __i: number) => (
                  <Fragment key={__i}>
                    <article
                      data-reveal="up"
                      data-stagger=""

                      className="
                        relative bg-paper border border-solid border-gold
                        rounded-[12px] shadow-[0_14px_40px_rgba(122,30,30,.10)]
                        [transition:transform_.45s_cubic-bezier(.2,.7,.2,1),box-shadow_.45s]
                        pt-0 pb-7 px-0 flex flex-col
                        hover:[transform:translateY(-8px)]!
                        hover:shadow-[0_30px_60px_rgba(122,_30,_30,_0.18)]!
                      "
                    >
                      <div
                        className="
                          absolute inset-[7px] border border-solid
                          border-[rgba(201,164,92,.4)] rounded-[8px]
                          pointer-events-none
                        "
                      ></div>
                      {p.popular && (
                        <>
                          <span
                            className="
                              absolute top-[-13px] right-[22px] z-2 bg-ember
                              text-ink font-bold text-[11px] tracking-[.12em]
                              uppercase py-[7px] px-[13px] rounded-full
                              shadow-[0_4px_12px_rgba(217,120,45,.35)]
                            "
                          >
                            {t.popular}
                          </span>
                        </>
                      )}
                      <div className="flex justify-center mt-[30px] mb-0 -mx-3">
                        <div
                          className="
                            bg-burgundy text-cream font-display text-[19px]
                            md:text-[20px] font-semibold py-3 px-[38px]
                            [clip-path:polygon(0_0,100%_0,calc(100%_-_18px)_50%,100%_100%,0_100%,18px_50%)]
                            text-center leading-[1.2]
                          "
                        >
                          {p.title}
                        </div>
                      </div>
                      <div className="text-center pt-[22px] pb-[6px] px-7">
                        <div
                          className="
                            font-display font-bold text-burgundy text-[58px]
                            md:text-[72px] leading-[1]
                          "
                        >
                          {p.price}
                        </div>
                        <div
                          className="
                            text-[12px] text-cocoa mt-2 tracking-[.04em]
                          "
                        >
                          {p.serves}
                        </div>
                      </div>
                      <div
                        className="
                          flex items-center justify-center gap-2 mt-[14px] mb-1
                          mx-0
                        "
                      >
                        <span className="h-px w-15 bg-gold"></span>
                        <span
                          className="
                            w-[6px] h-[6px] bg-gold [transform:rotate(45deg)]
                          "
                        ></span>
                        <span className="h-px w-15 bg-gold"></span>
                      </div>
                      <ul
                        className="
                          list-none m-0 pt-[14px] pb-0 px-8 flex flex-col
                          gap-[11px] flex-1
                        "
                      >
                        {p.items.map((it: any, __i: number) => (
                          <Fragment key={__i}>
                            <li
                              className="
                                flex items-start gap-3 text-[15px] leading-[1.4]
                              "
                            >
                              <span
                                className="
                                  flex-none mt-1 w-[9px] h-[13px] bg-olive
                                  rounded-[0_100%_0_100%]
                                  [transform:rotate(-30deg)]
                                "
                              ></span>
                              <span>{it}</span>
                            </li>
                          </Fragment>
                        ))}
                      </ul>
                      <div className="pt-[26px] pb-0 px-7">
                        <a
                          href="#ordenar"
                          onClick={p.pick}

                          className="
                            block text-center bg-olive text-cream
                            [transition:transform_.25s,box-shadow_.25s,background_.25s]
                            font-semibold text-[15px] p-4 rounded-full
                            hover:bg-olive-dark hover:text-cream
                            hover:[transform:translateY(-2px)]
                            hover:shadow-[0_12px_24px_rgba(95,_107,_69,_0.35)]
                          "
                        >
                          {t.orderPkg}
                        </a>
                      </div>
                    </article>
                  </Fragment>
                ))}
              </div>
            </div>
            <div
              data-reveal="up"
              className="relative flex justify-center mt-10"
            >
              <a
                href="#arma"

                className="
                  flex items-center gap-[10px] font-semibold text-[15px]
                  text-burgundy [border-bottom:1px_solid_var(--color-gold)] pb-1
                  hover:text-ember
                "
              >
                {t.b.linkPkg} <span>→</span>
              </a>
            </div>
          </section>
          <section
            id="arma"
            className="
              scroll-mt-[70px] pt-4 pb-16 px-[18px] md:py-[104px] md:px-8 bg-ink
              text-cream relative
            "
          >
            <div className="max-w-[1200px] my-0 mx-auto">
              {isMobile && (
                <>
                  <div
                    className="
                      mt-0 mb-[66px] mx-[-2px] flex
                      items-center justify-between gap-3 bg-burgundy border
                      border-solid border-gold rounded-full py-2 pr-2 pl-[18px]
                      shadow-[0_10px_24px_rgba(0,0,0,.35)]
                    "
                  >
                    <span className="flex flex-col leading-[1.1]">
                      <span
                        className="
                          text-[10px] tracking-[.18em] uppercase text-linen
                          font-bold
                        "
                      >
                        {t.b.yourMenu} · {bGuests} {t.b.ppl}
                      </span>
                      <span
                        className="
                          font-display text-[20px] font-semibold text-cream
                        "
                      >
                        {bCount}
                      </span>
                    </span>
                    <a
                      href="#resumen"
                      className="
                        bg-cream text-burgundy font-bold text-[13px] py-[11px]
                        px-4 rounded-full whitespace-nowrap
                      "
                    >
                      {t.b.seeSummary}
                    </a>
                  </div>
                </>
              )}
              <div data-reveal="up" className="text-center mb-[34px] md:mb-13">
                <div
                  className="
                    text-[11px] tracking-[.26em] uppercase font-bold
                    text-gold-light
                  "
                >
                  {t.b.eyebrow}
                </div>
                <h2
                  className="
                    font-display font-semibold text-[34px] md:text-[48px]
                    leading-[1.1] mt-3 mb-[14px] mx-0 text-balance
                  "
                >
                  {t.b.title}
                </h2>
                <p
                  className="
                    my-0 mx-auto max-w-[520px] text-[15px] leading-[1.6]
                    text-linen text-pretty
                  "
                >
                  {t.b.sub}
                </p>
              </div>
              <div
                className="
                  grid grid-cols-[1fr] md:grid-cols-[minmax(0,1fr)_380px] gap-5
                  md:gap-7 [align-items:start]
                "
              >
                <div
                  data-reveal="up"
                  className="
                    bg-cream text-ink rounded-[16px] py-6 px-[18px] md:p-9 flex
                    flex-col gap-[30px] shadow-[0_24px_60px_rgba(0,0,0,.35)]
                  "
                >
                  <div className="flex flex-col gap-[14px]">
                    <div
                      className="
                        flex items-baseline justify-between gap-3 flex-wrap
                      "
                    >
                      <span
                        className="
                          font-display text-[22px] font-semibold text-burgundy
                        "
                      >
                        {t.b.guestsQ}
                      </span>
                      <span className="text-[12px] text-cocoa">
                        {t.b.guestsHint}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 flex-wrap">
                      <div
                        className="
                          flex items-center border border-solid border-gold
                          rounded-full bg-paper p-1
                        "
                      >
                        <button
                          onClick={guestMinus}
                          aria-label="-"

                          className="
                            w-11 h-11 rounded-[50%] border-0 bg-parchment
                            text-burgundy text-[22px] font-semibold
                            cursor-pointer [transition:background_.2s]
                            hover:bg-gold
                          "
                        >
                          −
                        </button>
                        <span
                          className="
                            min-w-16 text-center font-display text-[30px]
                            font-bold text-burgundy
                          "
                        >
                          {bGuests}
                        </span>
                        <button
                          onClick={guestPlus}
                          aria-label="+"

                          className="
                            w-11 h-11 rounded-[50%] border-0 bg-parchment
                            text-burgundy text-[22px] font-semibold
                            cursor-pointer [transition:background_.2s]
                            hover:bg-gold
                          "
                        >
                          +
                        </button>
                      </div>
                      <input
                        type="range"
                        min={4}
                        max={80}
                        value={bGuests}
                        onChange={guestRange}
                        className="flex-[1_1_180px] min-w-0 accent-burgundy h-7"
                      />
                    </div>
                  </div>
                  {bGroups.map((g: any, __i: number) => (
                    <Fragment key={__i}>
                      <div
                        className="
                          flex flex-col gap-3
                          [border-top:1px_solid_rgba(201,164,92,.45)] pt-6
                        "
                      >
                        <div
                          className="
                            flex items-baseline justify-between gap-3 flex-wrap
                          "
                        >
                          <span
                            className="
                              font-display text-[21px] font-semibold
                              text-burgundy
                            "
                          >
                            {g.title}
                          </span>
                          <span className="text-[12px] text-cocoa">
                            {g.hint}
                          </span>
                        </div>
                        <div
                          className="
                            grid
                            grid-cols-[repeat(auto-fill,minmax(min(100%,100%),1fr))]
                            md:grid-cols-[repeat(auto-fill,minmax(min(100%,220px),1fr))]
                            gap-[10px]
                          "
                        >
                          {g.items.map((o: any, __i: number) => (
                            <Fragment key={__i}>
                              <button
                                onClick={o.toggle}
                                aria-pressed={o.on}
                                style={{
                                  border: `1.5px solid ${o.bd}`,
                                  background: o.bg,
                                  color: o.fg,
                                  transform: o.tf,
                                }}
                                className="
                                  cursor-pointer text-left flex items-center
                                  gap-3 min-h-14 py-[10px] px-[14px]
                                  rounded-[12px]
                                  [transition:background_.25s,border-color_.25s,color_.25s,transform_.2s]
                                  hover:border-olive!
                                "
                              >
                                <span
                                  className="
                                    flex-none w-[22px] h-[22px] flex
                                    items-center justify-center
                                    [transition:all_.25s]
                                  "
                                  style={{
                                    borderRadius: g.radius,
                                    border: `1.5px solid ${o.ckBd}`,
                                    background: o.ckBg,
                                  }}
                                >
                                  <span
                                    className="
                                      w-[9px] h-[5px]
                                      [border-left:2px_solid_var(--color-olive)]
                                      [border-bottom:2px_solid_var(--color-olive)]
                                      [transform:translateY(-1px)_rotate(-45deg)]
                                    "
                                    style={{ opacity: o.ckOp }}
                                  ></span>
                                </span>
                                <span
                                  className="
                                    flex-1 flex flex-col gap-[2px] min-w-0
                                  "
                                >
                                  <span
                                    className="
                                      text-[14px] font-semibold leading-[1.3]
                                    "
                                  >
                                    {o.label}
                                  </span>
                                </span>
                              </button>
                            </Fragment>
                          ))}
                        </div>
                      </div>
                    </Fragment>
                  ))}
                  <div
                    className="
                      flex flex-col gap-3
                      [border-top:1px_solid_rgba(201,164,92,.45)] pt-6
                    "
                  >
                    <span
                      className="
                        font-display text-[21px] font-semibold text-burgundy
                      "
                    >
                      {t.f.mode}
                    </span>
                    <div className="grid grid-cols-[1fr_1fr] gap-[10px]">
                      <button
                        onClick={bPickup}
                        className="
                          cursor-pointer min-h-13 rounded-[12px] text-[15px]
                          font-semibold [transition:all_.25s]
                        "
                        style={{
                          border: `1.5px solid ${bMode.pBd}`,
                          background: bMode.pBg,
                          color: bMode.pFg,
                        }}
                      >
                        {t.f.pickup}
                      </button>
                      <button
                        onClick={bDelivery}
                        className="
                          cursor-pointer min-h-13 rounded-[12px] text-[15px]
                          font-semibold [transition:all_.25s]
                        "
                        style={{
                          border: `1.5px solid ${bMode.dBd}`,
                          background: bMode.dBg,
                          color: bMode.dFg,
                        }}
                      >
                        {t.f.delivery}
                      </button>
                    </div>
                  </div>
                </div>
                <aside
                  id="resumen"
                  data-reveal="up"
                  className="
                    scroll-mt-[140px] relative md:sticky md:top-[100px] bg-paper
                    text-ink border border-solid border-gold rounded-[16px]
                    shadow-[0_24px_60px_rgba(0,0,0,.35)] overflow-hidden
                  "
                >
                  <div
                    className="
                      bg-burgundy text-cream py-5 px-6 flex items-center
                      justify-between gap-3
                    "
                  >
                    <span className="font-display text-[24px] font-semibold">
                      {t.b.yourMenu}
                    </span>
                    <span
                      className="
                        text-[12px] font-bold tracking-[.08em]
                        bg-[rgba(246,236,221,.14)] border border-solid
                        border-[rgba(201,164,92,.7)] rounded-full py-[6px] px-3
                        whitespace-nowrap
                      "
                    >
                      {bGuests} {t.b.ppl}
                    </span>
                  </div>
                  <div className="pt-[18px] pb-[22px] px-6 flex flex-col gap-4">
                    <ul className="list-none m-0 p-0 flex flex-col gap-[9px]">
                      {bLines.map((l: any, __i: number) => (
                        <Fragment key={__i}>
                          <li
                            className="
                              flex items-baseline gap-2 text-[14px]
                              leading-[1.35]
                            "
                          >
                            <span
                              className="
                                flex-none w-[7px] h-[10px] bg-olive
                                rounded-[0_100%_0_100%]
                                [transform:rotate(-30deg)]
                              "
                            ></span>
                            <span className="flex-1 min-w-0">{l.label}</span>
                          </li>
                        </Fragment>
                      ))}
                    </ul>
                    {bEmpty && (
                      <>
                        <span className="text-[14px] text-cocoa">
                          {t.b.empty}
                        </span>
                      </>
                    )}
                    <div className="flex items-center gap-2">
                      <span className="h-px flex-1 bg-gold"></span>
                      <span
                        className="
                          w-[6px] h-[6px] bg-gold [transform:rotate(45deg)]
                        "
                      ></span>
                      <span className="h-px flex-1 bg-gold"></span>
                    </div>
                    <a
                      href={bWa}
                      target="_blank"

                      className="
                        flex items-center justify-center gap-[10px] bg-olive
                        text-cream
                        [transition:transform_.25s,box-shadow_.25s,background_.25s]
                        font-semibold text-[15px] min-h-13 rounded-full
                        hover:bg-olive-dark hover:text-cream
                        hover:[transform:translateY(-2px)]
                        hover:shadow-[0_12px_24px_rgba(95,_107,_69,_0.35)]
                      "
                      rel="noopener noreferrer"
                    >
                      <span
                        className="
                          w-[15px] h-[15px] border-2 border-solid border-cream
                          rounded-[50%_50%_50%_2px]
                        "
                      ></span>
                      {t.b.sendWa}
                    </a>
                    <a
                      href="#ordenar"
                      onClick={bToForm}

                      className="
                        flex items-center justify-center border-[1.5px]
                        border-solid border-burgundy text-burgundy font-semibold
                        text-[14px] min-h-12 rounded-full [transition:all_.25s]
                        hover:bg-burgundy hover:text-cream
                      "
                    >
                      {t.b.toForm}
                    </a>
                    <span
                      className="
                        text-[11.5px] leading-[1.5] text-cocoa text-center
                      "
                    >
                      {t.b.note}
                    </span>
                  </div>
                </aside>
              </div>
            </div>
          </section>
          <section
            id="menu"
            className="
              scroll-mt-20 py-16 px-[18px] md:py-[104px] md:px-8 bg-parchment
            "
          >
            <div className="max-w-[1200px] my-0 mx-auto">
              <div data-reveal="up" className="text-center mb-[34px] md:mb-13">
                <div
                  className="
                    text-[11px] tracking-[.26em] uppercase font-bold
                    text-burgundy
                  "
                >
                  {t.menuEyebrow}
                </div>
                <h2
                  className="
                    font-display font-semibold text-[34px] md:text-[48px]
                    leading-[1.1] text-burgundy mt-3 mb-0 mx-0
                  "
                >
                  {t.menuTitle}
                </h2>
              </div>
              <div
                className="
                  grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]
                  gap-7
                "
              >
                {dishes.map((d: any, __i: number) => (
                  <Fragment key={__i}>
                    <article
                      data-reveal="up"
                      data-stagger=""
                      className="
                        bg-paper rounded-[12px] overflow-hidden
                        shadow-[0_8px_26px_rgba(122,30,30,.08)] border
                        border-solid border-[rgba(201,164,92,.4)]
                      "
                    >
                      <div className="aspect-[4/3.4] overflow-hidden relative">
                        <div
                          className="
                            absolute inset-0
                            [transition:transform_.6s_cubic-bezier(.2,.7,.2,1)]
                            hover:[transform:scale(1.06)]
                          "
                        >
                          <Photo id={d.id} placeholder={d.ph} />
                        </div>
                      </div>
                      <div className="pt-5 pb-6 px-[22px]">
                        <h3
                          className="
                            font-display font-semibold text-[21px] text-burgundy
                            mt-0 mb-[6px] mx-0 leading-[1.25]
                          "
                        >
                          {d.name}
                        </h3>
                        <p
                          className="
                            m-0 text-[14px] leading-[1.55] text-walnut
                          "
                        >
                          {d.desc}
                        </p>
                      </div>
                    </article>
                  </Fragment>
                ))}
              </div>
            </div>
          </section>
          <section
            id="picaderas"
            className="
              scroll-mt-20 py-16 px-[18px] md:py-[104px] md:px-8 bg-cream
            "
          >
            <div
              className="
                max-w-[1200px] my-0 mx-auto flex flex-wrap items-center gap-9
                md:gap-18
              "
            >
              <div
                data-reveal="zoom"
                className="flex-[1.15_1_360px] min-w-0 relative"
              >
                <div
                  className="
                    absolute -top-3 bottom-3 right-3 -left-3 border border-solid
                    border-gold rounded-[14px] pointer-events-none
                  "
                ></div>
                <div
                  data-parallax="0.07"
                  className="
                    relative aspect-[5/4] rounded-[12px] overflow-hidden
                    shadow-[0_18px_40px_rgba(43,26,20,.15)]
                  "
                >
                  <Photo
                    id={"tray-photo"}
                    placeholder={"Foto del cliente: bandeja de picadera"}
                  />
                </div>
              </div>
              <div data-reveal="up" className="flex-[1_1_320px] min-w-0">
                <div
                  className="
                    text-[11px] tracking-[.26em] uppercase font-bold
                    text-burgundy
                  "
                >
                  {t.trayEyebrow}
                </div>
                <h2
                  className="
                    font-display font-semibold text-[34px] md:text-[48px]
                    leading-[1.1] text-burgundy mt-3 mb-[18px] mx-0
                  "
                >
                  {t.trayTitle}
                </h2>
                <p
                  className="
                    text-[16px] leading-[1.7] mt-0 mb-6 mx-0 text-[#3D2A20]
                    text-pretty
                  "
                >
                  {t.trayText}
                </p>
                <div
                  className="
                    text-[12px] font-bold tracking-[.12em] uppercase text-cocoa
                    mb-3
                  "
                >
                  {t.qtyLabel}
                </div>
                <div className="flex flex-wrap gap-[10px] mb-[30px]">
                  {qtys.map((q: any, __i: number) => (
                    <Fragment key={__i}>
                      <span
                        className="
                          flex items-baseline gap-[6px] border border-solid
                          border-gold rounded-[10px] py-[10px] px-4 bg-paper
                        "
                      >
                        <span
                          className="
                            font-display text-[24px] font-bold text-burgundy
                          "
                        >
                          {q}
                        </span>
                        <span className="text-[12px] text-cocoa">
                          {t.pieces}
                        </span>
                      </span>
                    </Fragment>
                  ))}
                </div>
                <a
                  href="#ordenar"
                  onClick={pickTray}

                  className="
                    inline-block bg-olive text-cream
                    [transition:transform_.25s,box-shadow_.25s,background_.25s]
                    font-semibold text-[15px] py-4 px-[30px] rounded-full
                    hover:bg-olive-dark hover:text-cream
                    hover:[transform:translateY(-2px)]
                    hover:shadow-[0_12px_24px_rgba(95,_107,_69,_0.35)]
                  "
                >
                  {t.trayCta}
                </a>
              </div>
            </div>
          </section>
          <section
            id="eventos"
            className="
              scroll-mt-20 py-16 px-[18px] md:py-[104px] md:px-8 bg-parchment
            "
          >
            <div
              className="
                max-w-[1200px] my-0 mx-auto flex flex-wrap-reverse items-center
                gap-9 md:gap-18
              "
            >
              <div data-reveal="up" className="flex-[1_1_320px] min-w-0">
                <div
                  className="
                    text-[11px] tracking-[.26em] uppercase font-bold
                    text-burgundy
                  "
                >
                  {t.evEyebrow}
                </div>
                <h2
                  className="
                    font-display font-semibold text-[34px] md:text-[48px]
                    leading-[1.1] text-burgundy mt-3 mb-[18px] mx-0
                  "
                >
                  {t.evTitle}
                </h2>
                <p
                  className="
                    text-[16px] leading-[1.7] mt-0 mb-6 mx-0 text-[#3D2A20]
                    text-pretty
                  "
                >
                  {t.evText}
                </p>
                <div className="flex flex-wrap gap-2 mb-[30px]">
                  {t.evTypes.map((e: any, __i: number) => (
                    <Fragment key={__i}>
                      <span
                        className="
                          text-[13px] font-semibold text-burgundy bg-cream
                          border border-solid border-[rgba(201,164,92,.7)]
                          rounded-full py-2 px-[14px]
                        "
                      >
                        {e}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <a
                  href="#ordenar"
                  onClick={pickEvent}

                  className="
                    inline-block bg-olive text-cream
                    [transition:transform_.25s,box-shadow_.25s,background_.25s]
                    font-semibold text-[15px] py-4 px-[30px] rounded-full
                    hover:bg-olive-dark hover:text-cream
                    hover:[transform:translateY(-2px)]
                    hover:shadow-[0_12px_24px_rgba(95,_107,_69,_0.35)]
                  "
                >
                  {t.evCta}
                </a>
              </div>
              <div
                data-reveal="zoom"
                className="flex-[1.15_1_360px] min-w-0 relative"
              >
                <div
                  className="
                    absolute -top-3 bottom-3 -right-3 left-3 border border-solid
                    border-gold rounded-[14px] pointer-events-none
                  "
                ></div>
                <div
                  data-parallax="0.07"
                  className="
                    relative aspect-[5/4] rounded-[12px] overflow-hidden
                    shadow-[0_18px_40px_rgba(43,26,20,.15)]
                  "
                >
                  <Photo
                    id={"buffet-photo"}
                    placeholder={"Foto del cliente: montaje de buffet"}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="py-16 px-[18px] md:py-[104px] md:px-8 bg-cream">
            <div className="max-w-[1100px] my-0 mx-auto">
              <div data-reveal="up" className="text-center mb-[34px] md:mb-13">
                <div
                  className="
                    text-[11px] tracking-[.26em] uppercase font-bold
                    text-burgundy
                  "
                >
                  {t.howEyebrow}
                </div>
                <h2
                  className="
                    font-display font-semibold text-[34px] md:text-[48px]
                    leading-[1.1] text-burgundy mt-3 mb-0 mx-0
                  "
                >
                  {t.howTitle}
                </h2>
              </div>
              <ol
                className="
                  list-none m-0 p-0 grid
                  grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-7
                "
              >
                {steps.map((s: any, __i: number) => (
                  <Fragment key={__i}>
                    <li
                      data-reveal="up"
                      data-stagger=""
                      className="
                        flex flex-col items-center text-center gap-[14px] py-2
                        px-[10px]
                      "
                    >
                      <span
                        className="
                          w-19 h-19 rounded-[50%] border border-solid
                          border-gold flex items-center justify-center bg-paper
                          shadow-[0_0_0_6px_#F6ECDD,0_0_0_7px_rgba(201,164,92,.45)]
                        "
                      >
                        <span
                          className="
                            font-display text-[34px] font-semibold text-burgundy
                            italic
                          "
                        >
                          {s.n}
                        </span>
                      </span>
                      <span
                        className="
                          font-display text-[22px] font-semibold text-ink
                          leading-[1.25]
                        "
                      >
                        {s.title}
                      </span>
                      <span
                        className="
                          text-[14px] leading-[1.55] text-walnut max-w-[260px]
                        "
                      >
                        {s.sub}
                      </span>
                    </li>
                  </Fragment>
                ))}
              </ol>
              <div
                className="
                  mt-9 mb-0 mx-auto max-w-[max-content] flex items-center
                  gap-[10px] bg-parchment rounded-full py-[11px] px-5
                  text-[14px] font-semibold text-burgundy text-center
                "
              >
                <span
                  className="
                    flex-none w-[7px] h-[7px] bg-ember [transform:rotate(45deg)]
                  "
                ></span>
                {t.howNote}
              </div>
            </div>
          </section>
          {vReal && (
          <section
            id="video"
            className="
              scroll-mt-20 py-16 px-[18px] md:py-[104px] md:px-8 bg-parchment
            "
          >
            <div className="max-w-[1100px] my-0 mx-auto">
              <div data-reveal="up" className="text-center mb-[34px] md:mb-13">
                <div
                  className="
                    text-[11px] tracking-[.26em] uppercase font-bold
                    text-burgundy
                  "
                >
                  {t.v.eyebrow}
                </div>
                <h2
                  className="
                    font-display font-semibold text-[34px] md:text-[48px]
                    leading-[1.1] text-burgundy mt-3 mb-0 mx-0 text-balance
                  "
                >
                  {t.v.title}
                </h2>
              </div>
              <div data-reveal="zoom" className="relative">
                <div
                  className="
                    absolute -inset-3 border border-solid border-gold
                    rounded-[22px] pointer-events-none
                  "
                ></div>
                <div
                  className="
                    relative aspect-[4/5] md:aspect-[16/9] rounded-[16px]
                    overflow-hidden bg-ink
                    shadow-[0_30px_70px_rgba(43,26,20,.28)]
                  "
                >
                  {vReal && (
                    <>
                      <video
                        ref={vRef}
                        controls
                        playsInline
                        className="
                          absolute inset-0 w-full h-full object-cover bg-ink
                        "
                      ></video>
                    </>
                  )}
                  {vFake && (
                    <>
                      <div
                        className="absolute inset-0"
                        style={{
                          transform: `scale(${v.scale})`,
                          transition: `transform ${v.dur} linear`,
                        }}
                      >
                        <Photo
                          id={"video-poster"}
                          placeholder={
                            "Video: Chef JD en la cocina / montaje de un evento"
                          }
                        />
                      </div>
                      <div
                        className="
                          absolute inset-0 pointer-events-none
                          [background:linear-gradient(180deg,rgba(43,26,20,0)_0%,rgba(43,26,20,0)_55%,rgba(43,26,20,.7)_100%)]
                        "
                      ></div>
                      <div
                        className="
                          absolute top-4 left-4 right-4 pointer-events-none flex
                        "
                      >
                        <span
                          className="
                            max-w-full overflow-hidden text-ellipsis
                            whitespace-nowrap
                            [font:600_11px_ui-monospace,Menlo,monospace]
                            tracking-[.06em] text-cream bg-[rgba(43,26,20,.55)]
                            [border:1px_dashed_rgba(246,236,221,.6)]
                            rounded-[6px] py-[6px] px-[10px]
                          "
                        >
                          VIDEO · {t.v.ph}
                        </span>
                      </div>
                      <button
                        onClick={vToggle}
                        aria-label="Play"
                        className="
                          absolute inset-0 w-full h-full border-0 bg-transparent
                          cursor-pointer flex items-center justify-center
                          [transition:opacity_.35s]
                        "
                        style={{ opacity: v.btnOp }}
                      >
                        <span
                          className="
                            relative w-19 md:w-24 h-19 md:h-24 rounded-[50%]
                            bg-[rgba(246,236,221,.95)] flex items-center
                            justify-center
                            shadow-[0_0_0_10px_rgba(246,236,221,.22),0_16px_40px_rgba(0,0,0,.35)]
                            [transition:transform_.3s]
                            hover:[transform:scale(1.08)]
                          "
                        >
                          <span
                            data-anim="cfPulse 2.4s ease-out infinite"
                            className="
                              absolute inset-[-2px] rounded-[50%] border-2
                              border-solid border-cream pointer-events-none
                            "
                          ></span>
                          <span
                            className="
                              w-0 h-0 ml-[6px]
                              [border-top:14px_solid_transparent]
                              [border-bottom:14px_solid_transparent]
                              [border-left:22px_solid_var(--color-burgundy)]
                            "
                          ></span>
                        </span>
                      </button>
                      <div
                        className="
                          absolute left-0 right-0 bottom-0 pt-[18px] pb-4 px-4
                          md:pt-7 md:pb-6 md:px-8 flex flex-col gap-3 text-cream
                          pointer-events-none
                        "
                      >
                        <div className="flex items-end justify-between gap-4">
                          <span className="flex flex-col gap-1">
                            <span
                              className="
                                font-display text-[22px] md:text-[30px]
                                font-semibold leading-[1.15]
                              "
                            >
                              {t.v.caption}
                            </span>
                            <span className="text-[13px] text-linen">
                              {t.v.sub}
                            </span>
                          </span>
                          <span
                            className="
                              flex-none
                              [font:600_12px_ui-monospace,Menlo,monospace]
                              text-cream bg-[rgba(43,26,20,.55)] rounded-full
                              py-[6px] px-[10px]
                            "
                          >
                            {v.time}
                          </span>
                        </div>
                        <div
                          className="
                            flex items-center gap-3 pointer-events-auto
                          "
                        >
                          <button
                            onClick={vToggle}
                            aria-label="Play/Pause"
                            className="
                              flex-none w-9 h-9 rounded-[50%] border
                              border-solid border-[rgba(246,236,221,.5)]
                              bg-[rgba(43,26,20,.4)] cursor-pointer flex
                              items-center justify-center gap-1
                            "
                          >
                            {v.playing && (
                              <>
                                <span className="w-[3px] h-3 bg-cream"></span>
                                <span className="w-[3px] h-3 bg-cream"></span>
                              </>
                            )}
                            {v.paused && (
                              <>
                                <span
                                  className="
                                    w-0 h-0 ml-[3px]
                                    [border-top:6px_solid_transparent]
                                    [border-bottom:6px_solid_transparent]
                                    [border-left:10px_solid_var(--color-cream)]
                                  "
                                ></span>
                              </>
                            )}
                          </button>
                          <div
                            className="
                              flex-1 h-1 rounded-full bg-[rgba(246,236,221,.3)]
                              overflow-hidden
                            "
                          >
                            <div
                              className="
                                h-full
                                [background:linear-gradient(90deg,#C9A45C,#D9782D)]
                                [transition:width_.25s_linear]
                              "
                              style={{ width: v.pct }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div
                data-reveal="up"
                className="flex flex-wrap justify-center gap-3 mt-10"
              >
                <a
                  href="https://instagram.com/caesy.foodny"
                  target="_blank"

                  className="
                    border-[1.5px] border-solid border-burgundy text-burgundy
                    font-semibold text-[14px] py-[13px] px-[22px] rounded-full
                    [transition:all_.25s] hover:bg-burgundy hover:text-cream
                  "
                  rel="noopener noreferrer"
                >
                  {t.v.more}
                </a>
              </div>
            </div>
          </section>
          )}
          <section
            className="
              py-16 px-[18px] md:py-[104px] md:px-8 bg-burgundy text-cream
            "
          >
            <div className="max-w-[1200px] my-0 mx-auto">
              <div data-reveal="up" className="text-center mb-[34px] md:mb-13">
                <div
                  className="
                    text-[11px] tracking-[.26em] uppercase font-bold
                    text-gold-light
                  "
                >
                  {t.tEyebrow}
                </div>
                <h2
                  className="
                    font-display font-semibold text-[34px] md:text-[48px]
                    leading-[1.1] mt-3 mb-0 mx-0
                  "
                >
                  {t.tTitle}
                </h2>
              </div>
              <div
                className="
                  grid grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]
                  gap-7
                "
              >
                {t.reviews.map((r: any, __i: number) => (
                  <Fragment key={__i}>
                    <figure
                      data-reveal="up"
                      data-stagger=""
                      className="
                        m-0 bg-cream text-ink rounded-[12px] pt-7 pb-6 px-[26px]
                        flex flex-col gap-4 shadow-[0_14px_30px_rgba(0,0,0,.18)]
                      "
                    >
                      <div className="text-gold text-[18px] tracking-[4px]">
                        ★★★★★
                      </div>
                      <blockquote
                        className="
                          m-0 font-display italic text-[19px] leading-[1.45]
                          flex-1 text-pretty
                        "
                      >
                        “{r.q}”
                      </blockquote>
                      <figcaption
                        className="
                          flex flex-col gap-[3px]
                          [border-top:1px_solid_rgba(201,164,92,.5)] pt-[14px]
                        "
                      >
                        <span className="font-bold text-[14px] text-burgundy">
                          {r.name}
                        </span>
                        <span className="text-[12px] text-cocoa">{r.ev}</span>
                      </figcaption>
                    </figure>
                  </Fragment>
                ))}
              </div>
            </div>
          </section>
          <section
            id="galeria"
            className="
              scroll-mt-20 py-16 px-[18px] md:py-[104px] md:px-8 bg-cream
            "
          >
            <div className="max-w-[1200px] my-0 mx-auto">
              <div
                className="
                  flex flex-wrap items-end justify-between gap-5 mb-8
                "
              >
                <div>
                  <div
                    className="
                      text-[11px] tracking-[.26em] uppercase font-bold
                      text-burgundy
                    "
                  >
                    {t.igEyebrow}
                  </div>
                  <h2
                    className="
                      font-display font-semibold text-[34px] md:text-[48px]
                      leading-[1.1] text-burgundy mt-3 mb-0 mx-0
                    "
                  >
                    @caesy.foodny
                  </h2>
                </div>
                <a
                  href="https://instagram.com/caesy.foodny"
                  target="_blank"

                  className="
                    border-[1.5px] border-solid border-burgundy text-burgundy
                    font-semibold text-[14px] py-[13px] px-[22px] rounded-full
                    hover:bg-burgundy hover:text-cream
                  "
                  rel="noopener noreferrer"
                >
                  {t.igCta}
                </a>
              </div>
              <div
                className="
                  grid grid-cols-[repeat(2,1fr)] md:grid-cols-[repeat(4,1fr)]
                  gap-2 md:gap-3
                "
              >
                {ig.map((g: any, __i: number) => (
                  <Fragment key={__i}>
                    <a
                      href="https://instagram.com/caesy.foodny"
                      target="_blank"
                      aria-label="Instagram @caesy.foodny"
                      data-reveal="zoom"
                      data-stagger=""
                      className="
                        block aspect-square rounded-[8px] overflow-hidden
                        relative
                      "
                      rel="noopener noreferrer"
                    >
                      <div
                        className="
                          absolute inset-0 [transition:transform_.5s]
                          hover:[transform:scale(1.05)]
                        "
                      >
                        <Photo id={g} placeholder={"Foto de Instagram"} />
                      </div>
                    </a>
                  </Fragment>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
      <section
        id="ordenar"
        className="
          scroll-mt-20 py-16 px-[18px] md:py-[104px] md:px-8 bg-parchment
        "
      >
        <div
          data-reveal="up"
          className="
            max-w-[760px] my-0 mx-auto bg-paper border border-solid border-gold
            rounded-[14px] shadow-[0_20px_50px_rgba(122,30,30,.12)] pt-9
            pb-[30px] px-5 md:pt-14 md:pb-12 md:px-14 relative
          "
        >
          <div
            className="
              absolute inset-[7px] border border-solid
              border-[rgba(201,164,92,.35)] rounded-[10px] pointer-events-none
            "
          ></div>
          {notSent && (
            <>
              <div className="text-center mb-[30px]">
                <div
                  className="
                    text-[11px] tracking-[.26em] uppercase font-bold
                    text-burgundy
                  "
                >
                  {t.formEyebrow}
                </div>
                <h2
                  className="
                    font-display font-semibold text-[34px] md:text-[48px]
                    leading-[1.1] text-burgundy my-3 mx-0
                  "
                >
                  {t.formTitle}
                </h2>
                <p
                  className="
                    my-0 mx-auto max-w-[460px] text-[15px] leading-[1.6]
                    text-walnut
                  "
                >
                  {t.formSub}
                </p>
              </div>
              <form
                onSubmit={submit}
                className="
                  relative grid
                  grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))]
                  gap-[18px_18px]
                "
              >
                <label
                  className="
                    flex flex-col gap-[7px] text-[12px] font-bold
                    tracking-[.06em] uppercase text-bark
                  "
                >
                  {t.f.name}
                  <input
                    name="name"
                    required
                    placeholder={t.f.namePh}
                    className="
                      text-[16px] font-medium normal-case tracking-[0] text-ink
                      bg-cream border border-solid border-[rgba(122,30,30,.25)]
                      rounded-[10px] p-[14px] min-h-[50px] outline-olive
                    "
                  />
                </label>
                <label
                  className="
                    flex flex-col gap-[7px] text-[12px] font-bold
                    tracking-[.06em] uppercase text-bark
                  "
                >
                  {t.f.phone}
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="(914) 000-0000"
                    className="
                      text-[16px] font-medium normal-case tracking-[0] text-ink
                      bg-cream border border-solid border-[rgba(122,30,30,.25)]
                      rounded-[10px] p-[14px] min-h-[50px] outline-olive
                    "
                  />
                </label>
                <label
                  className="
                    flex flex-col gap-[7px] text-[12px] font-bold
                    tracking-[.06em] uppercase text-bark
                  "
                >
                  {t.f.date}
                  <input
                    name="date"
                    type="date"
                    className="
                      text-[16px] font-medium text-ink bg-cream border
                      border-solid border-[rgba(122,30,30,.25)] rounded-[10px]
                      p-[14px] min-h-[50px] outline-olive
                    "
                  />
                </label>
                <label
                  className="
                    flex flex-col gap-[7px] text-[12px] font-bold
                    tracking-[.06em] uppercase text-bark
                  "
                >
                  {t.f.people}
                  <input
                    name="people"
                    type="number"
                    min={1}
                    placeholder="10"
                    className="
                      text-[16px] font-medium text-ink bg-cream border
                      border-solid border-[rgba(122,30,30,.25)] rounded-[10px]
                      p-[14px] min-h-[50px] outline-olive
                    "
                  />
                </label>
                <label
                  className="
                    col-[1/-1] flex flex-col gap-[7px] text-[12px] font-bold
                    tracking-[.06em] uppercase text-bark
                  "
                >
                  {t.f.pkg}{" "}
                  <select
                    value={pkg}
                    onChange={onPkg}
                    className="
                      text-[16px] font-medium normal-case tracking-[0] text-ink
                      bg-cream border border-solid border-[rgba(122,30,30,.25)]
                      rounded-[10px] p-[14px] min-h-[50px] outline-olive
                    "
                  >
                    {pkgOptions.map((o: any, __i: number) => (
                      <Fragment key={__i}>
                        <option value={o.v}>{o.label}</option>
                      </Fragment>
                    ))}
                  </select>
                </label>
                <div className="col-[1/-1] flex flex-col gap-[7px]">
                  <span
                    className="
                      text-[12px] font-bold tracking-[.06em] uppercase text-bark
                    "
                  >
                    {t.f.mode}
                  </span>
                  <div className="grid grid-cols-[1fr_1fr] gap-[10px]">
                    <button
                      type="button"
                      onClick={setPickup}
                      className="
                        cursor-pointer min-h-[50px] rounded-[10px] text-[15px]
                        font-semibold
                      "
                      style={{
                        border: `1.5px solid ${modeBtn.pBorder}`,
                        background: modeBtn.pBg,
                        color: modeBtn.pFg,
                      }}
                    >
                      {t.f.pickup}
                    </button>
                    <button
                      type="button"
                      onClick={setDelivery}
                      className="
                        cursor-pointer min-h-[50px] rounded-[10px] text-[15px]
                        font-semibold
                      "
                      style={{
                        border: `1.5px solid ${modeBtn.dBorder}`,
                        background: modeBtn.dBg,
                        color: modeBtn.dFg,
                      }}
                    >
                      {t.f.delivery}
                    </button>
                  </div>
                </div>
                <label
                  className="
                    col-[1/-1] flex flex-col gap-[7px] text-[12px] font-bold
                    tracking-[.06em] uppercase text-bark
                  "
                >
                  {t.f.notes}
                  <textarea
                    name="notes"
                    rows={4}
                    value={notes}
                    onChange={onNotes}
                    placeholder={t.f.notesPh}
                    className="
                      text-[16px] font-medium normal-case tracking-[0] text-ink
                      bg-cream border border-solid border-[rgba(122,30,30,.25)]
                      rounded-[10px] p-[14px] resize-y outline-olive
                    "
                  ></textarea>
                </label>
                <div
                  className="
                    col-[1/-1] flex flex-col items-center gap-3 mt-[6px]
                  "
                >
                  <button
                    type="submit"

                    className="
                      w-full cursor-pointer border-0 bg-olive text-cream
                      [transition:transform_.25s,box-shadow_.25s,background_.25s]
                      font-semibold text-[16px] p-[18px] rounded-full min-h-14
                      hover:bg-olive-dark
                    "
                  >
                    <span
                      className="
                        flex items-center justify-center gap-[10px]
                      "
                    >
                      <span
                        className="
                          w-4 h-4 border-2 border-solid border-cream
                          rounded-[50%_50%_50%_2px]
                        "
                      ></span>
                      {t.f.submit}
                    </span>
                  </button>
                  <span className="text-[12.5px] text-bark text-center">
                    {t.f.waHint}
                  </span>
                  <span className="text-[13px] text-bark text-center">
                    {t.f.orCall}{" "}
                    <a href="tel:+19148045458" className="font-bold">
                      914-804-5458
                    </a>
                  </span>
                </div>
              </form>
            </>
          )}
          {sent && (
            <>
              <div
                className="
                  relative text-center pt-6 pb-[10px] px-0 flex flex-col
                  items-center gap-4
                "
              >
                <span
                  className="
                    w-21 h-21 rounded-[50%] bg-olive flex items-center
                    justify-center shadow-[0_0_0_7px_#FBF4E8,0_0_0_8px_#C9A45C]
                  "
                >
                  <span
                    className="
                      w-[30px] h-4 [border-left:3px_solid_var(--color-cream)]
                      [border-bottom:3px_solid_var(--color-cream)]
                      [transform:translateY(-4px)_rotate(-45deg)]
                    "
                  ></span>
                </span>
                <h2
                  className="
                    font-display font-semibold text-[34px] md:text-[48px]
                    leading-[1.1] text-burgundy mt-3 mb-0 mx-0
                  "
                >
                  {t.thanks}
                </h2>
                <p
                  className="
                    m-0 max-w-[440px] text-[15px] leading-[1.65] text-walnut
                  "
                >
                  {thanksDetail}
                </p>
                <div className="flex items-center gap-2 my-[6px] mx-0">
                  <span className="h-px w-[50px] bg-gold"></span>
                  <span
                    className="
                      w-[6px] h-[6px] bg-gold [transform:rotate(45deg)]
                    "
                  ></span>
                  <span className="h-px w-[50px] bg-gold"></span>
                </div>
                <div className="flex flex-wrap justify-center gap-[10px]">
                  <a
                    href={waSent}
                    target="_blank"

                    className="
                      bg-olive text-cream
                      [transition:transform_.25s,box-shadow_.25s,background_.25s]
                      font-semibold text-[14px] py-[14px] px-[22px] rounded-full
                      hover:bg-olive-dark hover:text-cream
                      hover:[transform:translateY(-2px)]
                      hover:shadow-[0_12px_24px_rgba(95,_107,_69,_0.35)]
                    "
                    rel="noopener noreferrer"
                  >
                    {t.f.waAgain}
                  </a>
                  <a
                    href="tel:+19148045458"
                    className="
                      border-[1.5px] border-solid border-burgundy text-burgundy
                      font-semibold text-[14px] py-[13px] px-[22px] rounded-full
                    "
                  >
                    914-804-5458
                  </a>
                </div>
                <button
                  onClick={reset}
                  className="
                    [background:none] border-0 cursor-pointer text-[13px]
                    text-bark underline mt-1
                  "
                >
                  {t.another}
                </button>
              </div>
            </>
          )}
        </div>
      </section>
      {showRest && (
        <>
          <footer
            id="contacto"
            className="
              scroll-mt-20 bg-burgundy text-cream pt-13 pb-[100px] px-5 md:pt-18
              md:pb-9 md:px-8
            "
          >
            <div className="max-w-[1200px] my-0 mx-auto">
              <div
                className="
                  flex flex-col items-center text-center gap-[10px] pb-9
                  [border-bottom:1px_solid_rgba(201,164,92,.5)]
                "
              >
                <div
                  className="
                    bg-cream rounded-[16px] py-[18px] px-[26px]
                    shadow-[0_0_0_1px_#C9A45C,0_0_0_6px_#7A1E1E,0_0_0_7px_rgba(201,164,92,.6)]
                  "
                >
                  <img
                    src="/images/logo-badge.png"
                    alt="Casey foodny \u2014 Catering & Treats"
                    className="w-[180px] h-auto block"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-px w-10 bg-gold"></span>
                  <span
                    className="
                      w-[6px] h-[6px] bg-gold [transform:rotate(45deg)]
                    "
                  ></span>
                  <span className="h-px w-10 bg-gold"></span>
                </div>
                <span className="text-[13px] text-linen tracking-[.04em]">
                  {t.footTag}
                </span>
              </div>
              <div
                className="
                  grid grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))]
                  gap-7 py-9 px-0
                "
              >
                {footCols.map((c: any, __i: number) => (
                  <Fragment key={__i}>
                    <div className="flex flex-col gap-2">
                      <span
                        className="
                          text-[11px] tracking-[.22em] uppercase font-bold
                          text-gold-light
                        "
                      >
                        {c.label}
                      </span>
                      <a
                        href={c.href}

                        className="
                          text-cream font-display text-[19px] leading-[1.35]
                          wrap-anywhere hover:text-gold-light
                        "
                      >
                        {c.value}
                      </a>
                      <span className="text-[13px] text-linen leading-[1.5]">
                        {c.sub}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div
                className="
                  [border-top:1px_solid_rgba(201,164,92,.5)] pt-[22px] flex
                  flex-wrap justify-between gap-[10px] text-[12px] text-linen
                "
              >
                <span>© 2026 Casey foodny</span>
                <span>{t.advance}</span>
              </div>
            </div>
          </footer>
          <div
            className={`sticky bottom-0 h-0 z-40 transition-opacity duration-300 ${
              waShow ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className="
                absolute right-[14px] md:right-7 bottom-4 md:bottom-7 flex
                flex-col items-end gap-3
              "
            >
              {waOpen && (
                <>
                  <div
                    className="
                      w-[360px] md:w-[340px] bg-paper border border-solid
                      border-[rgba(201,164,92,.6)] rounded-[20px]
                      shadow-[0_24px_60px_rgba(43,26,20,.28)] overflow-hidden
                    "
                  >
                    <div
                      className="
                        flex items-center gap-3 py-[14px] pr-[14px] pl-4
                        bg-burgundy text-cream
                      "
                    >
                      <span
                        className="
                          relative flex-none w-[42px] h-[42px] rounded-[50%]
                          bg-cream text-burgundy flex items-center
                          justify-center font-display font-bold text-[16px]
                          shadow-[0_0_0_2px_#C9A45C]
                        "
                      >
                        <img
                          src="/images/logo-mark.png"
                          alt=""
                          className="h-[34px] w-auto block"
                        />
                        <span
                          className="
                            absolute right-[-1px] bottom-[-1px] w-3 h-3
                            rounded-[50%] bg-[#3FBF6E] border-2 border-solid
                            border-burgundy
                          "
                        ></span>
                      </span>
                      <span className="flex-1 flex flex-col gap-[2px]">
                        <span
                          className="
                            font-display text-[17px] font-semibold
                          "
                        >
                          Chef JD
                        </span>
                        <span className="text-[11.5px] text-linen">
                          {t.wa.status}
                        </span>
                      </span>
                      <button
                        onClick={toggleWa}
                        aria-label="Cerrar"
                        className="
                          flex-none w-9 h-9 rounded-[50%] border border-solid
                          border-[rgba(246,236,221,.35)] bg-transparent
                          text-cream text-[18px] cursor-pointer leading-[1]
                        "
                      >
                        ×
                      </button>
                    </div>
                    <div
                      className="
                        pt-[18px] pb-4 px-4 flex flex-col gap-3 bg-cream
                      "
                    >
                      <div
                        className="
                          self-start max-w-[88%] bg-[#FFFFFF]
                          rounded-[4px_16px_16px_16px] py-3 px-[14px]
                          text-[14px] leading-[1.5] text-ink
                          shadow-[0_2px_6px_rgba(43,26,20,.06)]
                        "
                      >
                        {t.wa.msg}
                        <span
                          className="
                            block mt-1 text-[10.5px] text-[#8A6E5E] text-right
                          "
                        >
                          Chef JD
                        </span>
                      </div>
                      <span
                        className="
                          text-[11px] font-bold tracking-[.12em] uppercase
                          text-cocoa mt-[2px]
                        "
                      >
                        {t.wa.quick}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {waChips.map((c: any, __i: number) => (
                          <Fragment key={__i}>
                            <a
                              href={c.href}
                              target="_blank"

                              className="
                                text-[13px] font-semibold text-burgundy bg-paper
                                border border-solid border-gold rounded-full
                                py-[9px] px-[13px] hover:bg-burgundy
                                hover:text-cream
                              "
                              rel="noopener noreferrer"
                            >
                              {c.label}
                            </a>
                          </Fragment>
                        ))}
                      </div>
                      <a
                        href={waHref}
                        target="_blank"

                        className="
                          mt-1 flex items-center justify-center gap-[10px]
                          bg-olive text-cream
                          [transition:transform_.25s,box-shadow_.25s,background_.25s]
                          font-semibold text-[15px] min-h-[50px] rounded-full
                          hover:bg-olive-dark hover:text-cream
                          hover:[transform:translateY(-2px)]
                          hover:shadow-[0_12px_24px_rgba(95,_107,_69,_0.35)]
                        "
                        rel="noopener noreferrer"
                      >
                        <span
                          className="
                            w-4 h-4 border-2 border-solid border-cream
                            rounded-[50%_50%_50%_2px]
                          "
                        ></span>
                        {t.wa.open}
                      </a>
                      <a
                        href="tel:+19148045458"
                        className="text-center text-[12.5px] text-bark"
                      >
                        {t.wa.call}{" "}
                        <span className="font-bold text-burgundy">
                          914-804-5458
                        </span>
                      </a>
                    </div>
                  </div>
                </>
              )}
              <button
                onClick={toggleWa}
                aria-label="WhatsApp Chef JD"

                className="
                  cursor-pointer flex items-center gap-3 border border-solid
                  border-[rgba(201,164,92,.55)] bg-[rgba(251,244,232,.92)]
                  backdrop-blur-[12px] rounded-full py-[6px] pr-4 pl-[6px]
                  md:py-[6px] md:pr-5 md:pl-[6px]
                  shadow-[0_14px_34px_rgba(43,26,20,.22)] text-left
                  hover:[transform:translateY(-2px)]
                  hover:shadow-[0_18px_40px_rgba(43,_26,_20,_0.28)]
                "
              >
                <span
                  className="
                    relative flex-none w-13 h-13 rounded-[50%] bg-cream border
                    border-solid border-gold flex items-center justify-center
                  "
                >
                  <span
                    data-anim="cfPulse 2.4s ease-out infinite"
                    className="
                      absolute inset-[-1px] rounded-[50%] border-2 border-solid
                      border-olive pointer-events-none
                    "
                  ></span>
                  <img
                    src="/images/logo-mark.png"
                    alt=""
                    className="h-10 w-auto block"
                  />
                  <span
                    className="
                      absolute -right-1 -bottom-1 w-6 h-6 rounded-[50%] bg-olive
                      border-2 border-solid border-paper flex items-center
                      justify-center
                    "
                  >
                    <span
                      className="
                        w-[9px] h-[9px] border-[1.5px] border-solid border-cream
                        rounded-[50%_50%_50%_1px]
                      "
                    ></span>
                  </span>
                  <span
                    className="
                      absolute top-0 right-0 w-3 h-3 rounded-[50%] bg-[#3FBF6E]
                      border-2 border-solid border-paper
                    "
                  ></span>
                </span>
                {waLabel && (
                  <>
                    <span className="flex flex-col gap-[2px] pr-1">
                      <span
                        className="
                          text-[14px] font-bold text-ink whitespace-nowrap
                        "
                      >
                        {t.wa.cta}
                      </span>
                      <span
                        className="
                          text-[11.5px] text-bark whitespace-nowrap
                        "
                      >
                        {t.wa.sub}
                      </span>
                    </span>
                  </>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
