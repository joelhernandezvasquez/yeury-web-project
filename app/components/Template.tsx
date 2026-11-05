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
    m,
    marquee,
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
    pkgCols,
    pkgMax,
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
    waSent,
  } = vals;
  return (
    <div
      ref={rootRef}
      style={{
        position: "relative",
        background: "#F6ECDD",
        color: "#2B1A14",
        fontFamily: "Montserrat,sans-serif",
        minHeight: "100%",
      }}
    >
      {showRest && (
        <>
          {showPromo && (
            <>
              <div
                style={{
                  background: "#7A1E1E",
                  color: "#F6ECDD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  padding: "10px 16px",
                  fontSize: "13px",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    background: "#D9782D",
                    color: "#2B1A14",
                    fontWeight: "700",
                    fontSize: "10.5px",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    padding: "4px 9px",
                    borderRadius: "999px",
                  }}
                >
                  {promo.tag}
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontSize: "16px",
                    fontStyle: "italic",
                  }}
                >
                  {promo.text}
                </span>
                <a
                  href="#ordenar"
                  style={{
                    color: "#F6ECDD",
                    fontWeight: "600",
                    fontSize: "12px",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    borderBottom: "1px solid #C9A45C",
                    paddingBottom: "2px",
                  }}
                >
                  {t.promoCta} →
                </a>
              </div>
            </>
          )}
          <header
            style={{
              position: "sticky",
              top: "0",
              zIndex: "30",
              background: "rgba(246,236,221,.96)",
              backdropFilter: "blur(8px)",
              borderBottom: "1px solid rgba(201,164,92,.55)",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
                padding: m.headPad,
              }}
            >
              <a
                href="#inicio"
                aria-label="Casey foodny"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  lineHeight: "1",
                  color: "#7A1E1E",
                }}
              >
                <img
                  src="/images/logo-mark.png"
                  alt=""
                  style={{
                    height: m.logoMark,
                    width: "auto",
                    display: "block",
                  }}
                />
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <img
                    src="/images/logo-name.png"
                    alt="Casey foodny"
                    style={{
                      height: m.logoName,
                      width: "auto",
                      display: "block",
                    }}
                  />
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                      marginTop: "5px",
                    }}
                  >
                    <span
                      style={{
                        height: "1px",
                        width: "18px",
                        background: "#C9A45C",
                      }}
                    ></span>
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        background: "#C9A45C",
                        transform: "rotate(45deg)",
                      }}
                    ></span>
                    <span
                      style={{
                        fontSize: "9px",
                        letterSpacing: ".2em",
                        whiteSpace: "nowrap",
                        textTransform: "uppercase",
                        color: "#6B4A3A",
                        fontWeight: "600",
                      }}
                    >
                      {t.tagline}
                    </span>
                  </span>
                </span>
              </a>
              {isDesktop && (
                <>
                  <nav
                    style={{
                      display: "flex",
                      gap: "clamp(14px,2vw,28px)",
                      whiteSpace: "nowrap",
                      fontSize: "13px",
                      fontWeight: "600",
                      letterSpacing: ".04em",
                    }}
                  >
                    {nav.map((n: any, __i: number) => (
                      <Fragment key={__i}>
                        <a
                          href={n.href}
                          style={{ color: "#2B1A14" }}
                          className="hv1"
                        >
                          {n.label}
                        </a>
                      </Fragment>
                    ))}
                  </nav>
                </>
              )}
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div
                  style={{
                    display: "flex",
                    border: "1px solid #C9A45C",
                    borderRadius: "999px",
                    padding: "2px",
                    fontSize: "11px",
                    fontWeight: "700",
                  }}
                >
                  <button
                    onClick={setEs}
                    style={{
                      border: "0",
                      cursor: "pointer",
                      borderRadius: "999px",
                      padding: "5px 9px",
                      background: langBtn.esBg,
                      color: langBtn.esFg,
                    }}
                  >
                    ES
                  </button>
                  <button
                    onClick={setEn}
                    style={{
                      border: "0",
                      cursor: "pointer",
                      borderRadius: "999px",
                      padding: "5px 9px",
                      background: langBtn.enBg,
                      color: langBtn.enFg,
                    }}
                  >
                    EN
                  </button>
                </div>
                {isDesktop && (
                  <>
                    <a
                      href="#ordenar"
                      style={{
                        background: "#5F6B45",
                        color: "#F6ECDD",
                        transition:
                          "transform .25s,box-shadow .25s,background .25s",
                        fontWeight: "600",
                        fontSize: "13px",
                        padding: "11px 20px",
                        borderRadius: "999px",
                        letterSpacing: ".02em",
                        whiteSpace: "nowrap",
                      }}
                      className="hv2"
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
                      style={{
                        width: "44px",
                        height: "44px",
                        border: "1px solid rgba(201,164,92,.7)",
                        background: "transparent",
                        borderRadius: "10px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "5px",
                        cursor: "pointer",
                      }}
                    >
                      <span
                        style={{
                          width: "18px",
                          height: "1.5px",
                          background: "#7A1E1E",
                        }}
                      ></span>
                      <span
                        style={{
                          width: "18px",
                          height: "1.5px",
                          background: "#7A1E1E",
                        }}
                      ></span>
                      <span
                        style={{
                          width: "12px",
                          height: "1.5px",
                          background: "#7A1E1E",
                          marginLeft: "6px",
                        }}
                      ></span>
                    </button>
                  </>
                )}
              </div>
            </div>
            <div
              ref={progRef}
              style={{
                position: "absolute",
                left: "0",
                bottom: "-1px",
                height: "2px",
                width: "100%",
                background: "linear-gradient(90deg,#C9A45C,#D9782D)",
                transformOrigin: "0 50%",
                transform: "scaleX(0)",
                pointerEvents: "none",
              }}
            ></div>
            {menuOpen && (
              <>
                <div
                  style={{
                    position: "absolute",
                    left: "0",
                    right: "0",
                    top: "100%",
                    background: "#F6ECDD",
                    borderBottom: "1px solid #C9A45C",
                    boxShadow: "0 18px 30px rgba(43,26,20,.12)",
                    padding: "8px 20px 22px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {nav.map((n: any, __i: number) => (
                    <Fragment key={__i}>
                      <a
                        href={n.href}
                        onClick={closeMenu}
                        style={{
                          fontFamily: "'Playfair Display',serif",
                          fontSize: "22px",
                          color: "#7A1E1E",
                          padding: "13px 0",
                          borderBottom: "1px solid rgba(201,164,92,.35)",
                        }}
                      >
                        {n.label}
                      </a>
                    </Fragment>
                  ))}
                  <a
                    href="#ordenar"
                    onClick={closeMenu}
                    style={{
                      marginTop: "18px",
                      textAlign: "center",
                      background: "#5F6B45",
                      color: "#F6ECDD",
                      transition:
                        "transform .25s,box-shadow .25s,background .25s",
                      fontWeight: "600",
                      padding: "15px",
                      borderRadius: "999px",
                    }}
                  >
                    {t.orderNow}
                  </a>
                  <a
                    href="tel:+19148045458"
                    style={{
                      marginTop: "12px",
                      textAlign: "center",
                      fontWeight: "600",
                      fontSize: "14px",
                      color: "#7A1E1E",
                    }}
                  >
                    914-804-5458
                  </a>
                </div>
              </>
            )}
          </header>
          <section
            id="inicio"
            style={{
              position: "relative",
              minHeight: m.heroH,
              display: "flex",
              alignItems: "flex-end",
              overflow: "hidden",
              background: "#3a2219",
            }}
          >
            <div
              data-anim="cfKen 20s ease-in-out infinite alternate"
              style={{
                position: "absolute",
                inset: "0",
                willChange: "transform",
              }}
            >
              <Photo
                id={"hero-buffet"}
                placeholder={"Foto del cliente: buffet o bandeja de picadera"}
              />
            </div>
            <div
              style={{
                position: "absolute",
                inset: "0",
                pointerEvents: "none",
                background:
                  "linear-gradient(180deg,rgba(43,26,20,.25) 0%,rgba(43,26,20,.35) 40%,rgba(43,26,20,.85) 100%)",
              }}
            ></div>
            {decoHero.map((d: any, __i: number) => (
              <Fragment key={__i}>
                <span
                  style={{
                    position: "absolute",
                    pointerEvents: "none",
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
              style={{
                position: "relative",
                pointerEvents: "none",
                width: "100%",
                maxWidth: "1200px",
                margin: "0 auto",
                padding: m.heroPad,
                color: "#F6ECDD",
              }}
            >
              <div
                data-reveal="zoom"
                data-delay="0"
                style={{
                  width: m.heroMarkW,
                  aspectRatio: "1/1.12",
                  borderRadius: "50%",
                  background: "#F6ECDD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "22px",
                  boxShadow:
                    "0 0 0 4px rgba(246,236,221,.25),0 12px 30px rgba(0,0,0,.3)",
                }}
              >
                <img
                  src="/images/logo-mark.png"
                  alt=""
                  style={{ width: "78%", height: "auto", display: "block" }}
                />
              </div>
              <div
                data-reveal="up"
                data-delay="150"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "10.5px",
                  letterSpacing: ".16em",
                  whiteSpace: "nowrap",
                  textTransform: "uppercase",
                  fontWeight: "600",
                  color: "#F3DDB0",
                }}
              >
                <span
                  style={{
                    height: "1px",
                    width: "28px",
                    background: "#C9A45C",
                  }}
                ></span>
                {t.heroEyebrow}
              </div>
              <h1
                style={{
                  fontFamily: "'Playfair Display',serif",
                  fontWeight: "600",
                  fontSize: m.h1,
                  lineHeight: "1.05",
                  margin: "16px 0 16px",
                  maxWidth: "760px",
                  textWrap: "balance",
                }}
              >
                {heroWords.map((w: any, __i: number) => (
                  <Fragment key={__i}>
                    <span
                      style={{
                        display: "inline-block",
                        overflow: "hidden",
                        verticalAlign: "top",
                        paddingBottom: ".1em",
                        marginRight: ".24em",
                      }}
                    >
                      <span
                        data-reveal="word"
                        data-delay={w.d}
                        style={{ display: "inline-block" }}
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
                style={{
                  fontSize: m.lead,
                  lineHeight: "1.6",
                  maxWidth: "540px",
                  margin: "0 0 30px",
                  color: "#F6ECDD",
                  textWrap: "pretty",
                }}
              >
                {t.heroSub}
              </p>
              <div
                data-reveal="up"
                data-delay={heroD.btn}
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  pointerEvents: "auto",
                }}
              >
                <a
                  href="#paquetes"
                  style={{
                    background: "#5F6B45",
                    color: "#F6ECDD",
                    transition:
                      "transform .25s,box-shadow .25s,background .25s",
                    fontWeight: "600",
                    fontSize: "15px",
                    padding: "16px 28px",
                    borderRadius: "999px",
                    minHeight: "48px",
                  }}
                  className="hv3"
                >
                  {t.seePackages}
                </a>
                <a
                  href="#ordenar"
                  style={{
                    border: "1.5px solid #C9A45C",
                    color: "#F6ECDD",
                    fontWeight: "600",
                    fontSize: "15px",
                    padding: "15px 26px",
                    borderRadius: "999px",
                    background: "rgba(43,26,20,.25)",
                  }}
                  className="hv4"
                >
                  {t.getQuote}
                </a>
              </div>
            </div>
            {isDesktop && (
              <>
                <div
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: "26px",
                    transform: "translateX(-50%)",
                    pointerEvents: "none",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                    color: "#F3DDB0",
                    fontSize: "10px",
                    letterSpacing: ".3em",
                    textTransform: "uppercase",
                    fontWeight: "600",
                  }}
                >
                  {t.scroll}
                  <span
                    data-anim="cfBob 1.8s ease-in-out infinite"
                    style={{
                      width: "1px",
                      height: "28px",
                      background: "#C9A45C",
                    }}
                  ></span>
                </div>
              </>
            )}
          </section>
          <div
            style={{
              background: "#7A1E1E",
              overflow: "hidden",
              borderTop: "1px solid #C9A45C",
              borderBottom: "1px solid #C9A45C",
              padding: m.marqPad,
            }}
          >
            <div
              data-anim="cfMarq 40s linear infinite"
              style={{
                display: "flex",
                width: "max-content",
                willChange: "transform",
              }}
            >
              {marquee.map((w: any, __i: number) => (
                <Fragment key={__i}>
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "28px",
                      paddingRight: "28px",
                      fontFamily: "'Playfair Display',serif",
                      fontStyle: "italic",
                      fontSize: m.marq,
                      color: "#F6ECDD",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {w}
                    <span
                      style={{
                        width: "7px",
                        height: "7px",
                        background: "#C9A45C",
                        transform: "rotate(45deg)",
                      }}
                    ></span>
                  </span>
                </Fragment>
              ))}
            </div>
          </div>
          <section style={{ padding: m.svcPad, background: "#F6ECDD" }}>
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: m.svcCols,
                gap: m.svcGap,
              }}
            >
              {services.map((s: any, __i: number) => (
                <Fragment key={__i}>
                  <a
                    href={s.href}
                    data-reveal="up"
                    data-stagger=""
                    style={{
                      transition:
                        "transform .35s,box-shadow .35s,border-color .35s",
                      background: "#FBF4E8",
                      border: "1px solid rgba(201,164,92,.5)",
                      borderRadius: "12px",
                      padding: "26px 14px 22px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "14px",
                      textAlign: "center",
                      color: "#2B1A14",
                      boxShadow: "0 2px 10px rgba(122,30,30,.05)",
                    }}
                    className="hv5"
                  >
                    <span
                      style={{
                        position: "relative",
                        width: "52px",
                        height: "52px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid #C9A45C",
                        borderRadius: "50%",
                      }}
                    >
                      <span
                        style={{
                          width: s.iw,
                          height: s.ih,
                          border: "1.5px solid #C9A45C",
                          borderRadius: s.ir,
                        }}
                      ></span>
                    </span>
                    <span
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: m.svcName,
                        fontWeight: "600",
                        color: "#7A1E1E",
                        lineHeight: "1.2",
                      }}
                    >
                      {s.name}
                    </span>
                  </a>
                </Fragment>
              ))}
            </div>
          </section>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              padding: "6px 0",
              background: "#F6ECDD",
            }}
          >
            <span
              style={{
                height: "1px",
                width: "120px",
                background: "linear-gradient(90deg,transparent,#C9A45C)",
              }}
            ></span>
            <span
              style={{
                width: "7px",
                height: "13px",
                border: "1px solid #C9A45C",
                borderRadius: "0 100% 0 100%",
                transform: "rotate(-50deg)",
              }}
            ></span>
            <span
              style={{
                width: "7px",
                height: "13px",
                border: "1px solid #C9A45C",
                borderRadius: "0 100% 0 100%",
                transform: "rotate(-20deg)",
              }}
            ></span>
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "#C9A45C",
                transform: "rotate(45deg)",
              }}
            ></span>
            <span
              style={{
                width: "7px",
                height: "13px",
                border: "1px solid #C9A45C",
                borderRadius: "100% 0 100% 0",
                transform: "rotate(20deg)",
              }}
            ></span>
            <span
              style={{
                width: "7px",
                height: "13px",
                border: "1px solid #C9A45C",
                borderRadius: "100% 0 100% 0",
                transform: "rotate(50deg)",
              }}
            ></span>
            <span
              style={{
                height: "1px",
                width: "120px",
                background: "linear-gradient(270deg,transparent,#C9A45C)",
              }}
            ></span>
          </div>
          <section
            id="paquetes"
            style={{
              position: "relative",
              scrollMarginTop: "80px",
              padding: m.sec,
              background: "#F6ECDD",
              overflow: "hidden",
            }}
          >
            {decoPkg.map((d: any, __i: number) => (
              <Fragment key={__i}>
                <span
                  style={{
                    position: "absolute",
                    pointerEvents: "none",
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
            <div
              style={{
                position: "relative",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              <div
                data-reveal="up"
                style={{ textAlign: "center", marginBottom: m.headGap }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".26em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "#7A1E1E",
                  }}
                >
                  {t.pkgEyebrow}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: "600",
                    fontSize: m.h2,
                    lineHeight: "1.1",
                    color: "#7A1E1E",
                    margin: "12px 0 0",
                    textWrap: "balance",
                  }}
                >
                  {t.pkgTitle}
                </h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: pkgCols,
                  maxWidth: pkgMax,
                  margin: "0 auto",
                  gap: m.cardGap,
                  alignItems: "stretch",
                }}
              >
                {packages.map((p: any, __i: number) => (
                  <Fragment key={__i}>
                    <article
                      data-reveal="up"
                      data-stagger=""
                      style={{
                        position: "relative",
                        background: "#FBF4E8",
                        border: "1px solid #C9A45C",
                        borderRadius: "12px",
                        boxShadow: "0 14px 40px rgba(122,30,30,.10)",
                        transition:
                          "transform .45s cubic-bezier(.2,.7,.2,1),box-shadow .45s",
                        padding: "0 0 28px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                      className="hv6"
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: "7px",
                          border: "1px solid rgba(201,164,92,.4)",
                          borderRadius: "8px",
                          pointerEvents: "none",
                        }}
                      ></div>
                      {p.popular && (
                        <>
                          <span
                            style={{
                              position: "absolute",
                              top: "-13px",
                              right: "22px",
                              zIndex: "2",
                              background: "#D9782D",
                              color: "#2B1A14",
                              fontWeight: "700",
                              fontSize: "11px",
                              letterSpacing: ".12em",
                              textTransform: "uppercase",
                              padding: "7px 13px",
                              borderRadius: "999px",
                              boxShadow: "0 4px 12px rgba(217,120,45,.35)",
                            }}
                          >
                            {t.popular}
                          </span>
                        </>
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "30px -12px 0",
                        }}
                      >
                        <div
                          style={{
                            background: "#7A1E1E",
                            color: "#F6ECDD",
                            fontFamily: "'Playfair Display',serif",
                            fontSize: m.ribbon,
                            fontWeight: "600",
                            padding: "12px 38px",
                            clipPath:
                              "polygon(0 0,100% 0,calc(100% - 18px) 50%,100% 100%,0 100%,18px 50%)",
                            textAlign: "center",
                            lineHeight: "1.2",
                          }}
                        >
                          {p.title}
                        </div>
                      </div>
                      <div
                        style={{
                          textAlign: "center",
                          padding: "22px 28px 6px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily: "'Playfair Display',serif",
                            fontWeight: "700",
                            color: "#7A1E1E",
                            fontSize: m.price,
                            lineHeight: "1",
                          }}
                        >
                          {p.price}
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "#6B4A3A",
                            marginTop: "8px",
                            letterSpacing: ".04em",
                          }}
                        >
                          {p.serves}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          margin: "14px 0 4px",
                        }}
                      >
                        <span
                          style={{
                            height: "1px",
                            width: "60px",
                            background: "#C9A45C",
                          }}
                        ></span>
                        <span
                          style={{
                            width: "6px",
                            height: "6px",
                            background: "#C9A45C",
                            transform: "rotate(45deg)",
                          }}
                        ></span>
                        <span
                          style={{
                            height: "1px",
                            width: "60px",
                            background: "#C9A45C",
                          }}
                        ></span>
                      </div>
                      <ul
                        style={{
                          listStyle: "none",
                          margin: "0",
                          padding: "14px 32px 0",
                          display: "flex",
                          flexDirection: "column",
                          gap: "11px",
                          flex: "1",
                        }}
                      >
                        {p.items.map((it: any, __i: number) => (
                          <Fragment key={__i}>
                            <li
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: "12px",
                                fontSize: "15px",
                                lineHeight: "1.4",
                              }}
                            >
                              <span
                                style={{
                                  flex: "none",
                                  marginTop: "4px",
                                  width: "9px",
                                  height: "13px",
                                  background: "#5F6B45",
                                  borderRadius: "0 100% 0 100%",
                                  transform: "rotate(-30deg)",
                                }}
                              ></span>
                              <span>{it}</span>
                            </li>
                          </Fragment>
                        ))}
                      </ul>
                      <div style={{ padding: "26px 28px 0" }}>
                        <a
                          href="#ordenar"
                          onClick={p.pick}
                          style={{
                            display: "block",
                            textAlign: "center",
                            background: "#5F6B45",
                            color: "#F6ECDD",
                            transition:
                              "transform .25s,box-shadow .25s,background .25s",
                            fontWeight: "600",
                            fontSize: "15px",
                            padding: "16px",
                            borderRadius: "999px",
                          }}
                          className="hv7"
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
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                marginTop: "40px",
              }}
            >
              <a
                href="#arma"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontWeight: "600",
                  fontSize: "15px",
                  color: "#7A1E1E",
                  borderBottom: "1px solid #C9A45C",
                  paddingBottom: "4px",
                }}
                className="hv8"
              >
                {t.b.linkPkg} <span>→</span>
              </a>
            </div>
          </section>
          <section
            id="arma"
            style={{
              scrollMarginTop: "70px",
              padding: m.sec,
              background: "#2B1A14",
              color: "#F6ECDD",
              position: "relative",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              {isMobile && (
                <>
                  <div
                    style={{
                      position: "sticky",
                      top: "72px",
                      zIndex: "5",
                      margin: "0 -2px 18px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                      background: "#7A1E1E",
                      border: "1px solid #C9A45C",
                      borderRadius: "999px",
                      padding: "8px 8px 8px 18px",
                      boxShadow: "0 10px 24px rgba(0,0,0,.35)",
                    }}
                  >
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        lineHeight: "1.1",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          letterSpacing: ".18em",
                          textTransform: "uppercase",
                          color: "#F1DFC4",
                          fontWeight: "700",
                        }}
                      >
                        {t.b.yourMenu} · {bGuests} {t.b.ppl}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Playfair Display',serif",
                          fontSize: "20px",
                          fontWeight: "600",
                          color: "#F6ECDD",
                        }}
                      >
                        {bCount}
                      </span>
                    </span>
                    <a
                      href="#resumen"
                      style={{
                        background: "#F6ECDD",
                        color: "#7A1E1E",
                        fontWeight: "700",
                        fontSize: "13px",
                        padding: "11px 16px",
                        borderRadius: "999px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {t.b.seeSummary}
                    </a>
                  </div>
                </>
              )}
              <div
                data-reveal="up"
                style={{ textAlign: "center", marginBottom: m.headGap }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".26em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "#E9CF98",
                  }}
                >
                  {t.b.eyebrow}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: "600",
                    fontSize: m.h2,
                    lineHeight: "1.1",
                    margin: "12px 0 14px",
                    textWrap: "balance",
                  }}
                >
                  {t.b.title}
                </h2>
                <p
                  style={{
                    margin: "0 auto",
                    maxWidth: "520px",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    color: "#F1DFC4",
                    textWrap: "pretty",
                  }}
                >
                  {t.b.sub}
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: m.bCols,
                  gap: m.bGap,
                  alignItems: "start",
                }}
              >
                <div
                  data-reveal="up"
                  style={{
                    background: "#F6ECDD",
                    color: "#2B1A14",
                    borderRadius: "16px",
                    padding: m.bPad,
                    display: "flex",
                    flexDirection: "column",
                    gap: "30px",
                    boxShadow: "0 24px 60px rgba(0,0,0,.35)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        justifyContent: "space-between",
                        gap: "12px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'Playfair Display',serif",
                          fontSize: "22px",
                          fontWeight: "600",
                          color: "#7A1E1E",
                        }}
                      >
                        {t.b.guestsQ}
                      </span>
                      <span style={{ fontSize: "12px", color: "#6B4A3A" }}>
                        {t.b.guestsHint}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        flexWrap: "wrap",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          border: "1px solid #C9A45C",
                          borderRadius: "999px",
                          background: "#FBF4E8",
                          padding: "4px",
                        }}
                      >
                        <button
                          onClick={guestMinus}
                          aria-label="-"
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            border: "0",
                            background: "#EFE2CC",
                            color: "#7A1E1E",
                            fontSize: "22px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "background .2s",
                          }}
                          className="hv9"
                        >
                          −
                        </button>
                        <span
                          style={{
                            minWidth: "64px",
                            textAlign: "center",
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "30px",
                            fontWeight: "700",
                            color: "#7A1E1E",
                          }}
                        >
                          {bGuests}
                        </span>
                        <button
                          onClick={guestPlus}
                          aria-label="+"
                          style={{
                            width: "44px",
                            height: "44px",
                            borderRadius: "50%",
                            border: "0",
                            background: "#EFE2CC",
                            color: "#7A1E1E",
                            fontSize: "22px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "background .2s",
                          }}
                          className="hv10"
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
                        style={{
                          flex: "1 1 180px",
                          minWidth: "0",
                          accentColor: "#7A1E1E",
                          height: "28px",
                        }}
                      />
                    </div>
                  </div>
                  {bGroups.map((g: any, __i: number) => (
                    <Fragment key={__i}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                          borderTop: "1px solid rgba(201,164,92,.45)",
                          paddingTop: "24px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "space-between",
                            gap: "12px",
                            flexWrap: "wrap",
                          }}
                        >
                          <span
                            style={{
                              fontFamily: "'Playfair Display',serif",
                              fontSize: "21px",
                              fontWeight: "600",
                              color: "#7A1E1E",
                            }}
                          >
                            {g.title}
                          </span>
                          <span style={{ fontSize: "12px", color: "#6B4A3A" }}>
                            {g.hint}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "grid",
                            gridTemplateColumns: `repeat(auto-fill,minmax(min(100%,${m.chipMin}),1fr))`,
                            gap: "10px",
                          }}
                        >
                          {g.items.map((o: any, __i: number) => (
                            <Fragment key={__i}>
                              <button
                                onClick={o.toggle}
                                aria-pressed={o.on}
                                style={{
                                  cursor: "pointer",
                                  textAlign: "left",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "12px",
                                  minHeight: "56px",
                                  padding: "10px 14px",
                                  borderRadius: "12px",
                                  border: `1.5px solid ${o.bd}`,
                                  background: o.bg,
                                  color: o.fg,
                                  transition:
                                    "background .25s,border-color .25s,color .25s,transform .2s",
                                  transform: o.tf,
                                }}
                                className="hv11"
                              >
                                <span
                                  style={{
                                    flex: "none",
                                    width: "22px",
                                    height: "22px",
                                    borderRadius: g.radius,
                                    border: `1.5px solid ${o.ckBd}`,
                                    background: o.ckBg,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all .25s",
                                  }}
                                >
                                  <span
                                    style={{
                                      width: "9px",
                                      height: "5px",
                                      borderLeft: "2px solid #5F6B45",
                                      borderBottom: "2px solid #5F6B45",
                                      transform:
                                        "translateY(-1px) rotate(-45deg)",
                                      opacity: o.ckOp,
                                    }}
                                  ></span>
                                </span>
                                <span
                                  style={{
                                    flex: "1",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "2px",
                                    minWidth: "0",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: "600",
                                      lineHeight: "1.3",
                                    }}
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
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "12px",
                      borderTop: "1px solid rgba(201,164,92,.45)",
                      paddingTop: "24px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "21px",
                        fontWeight: "600",
                        color: "#7A1E1E",
                      }}
                    >
                      {t.f.mode}
                    </span>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "10px",
                      }}
                    >
                      <button
                        onClick={bPickup}
                        style={{
                          cursor: "pointer",
                          minHeight: "52px",
                          borderRadius: "12px",
                          fontSize: "15px",
                          fontWeight: "600",
                          border: `1.5px solid ${bMode.pBd}`,
                          background: bMode.pBg,
                          color: bMode.pFg,
                          transition: "all .25s",
                        }}
                      >
                        {t.f.pickup}
                      </button>
                      <button
                        onClick={bDelivery}
                        style={{
                          cursor: "pointer",
                          minHeight: "52px",
                          borderRadius: "12px",
                          fontSize: "15px",
                          fontWeight: "600",
                          border: `1.5px solid ${bMode.dBd}`,
                          background: bMode.dBg,
                          color: bMode.dFg,
                          transition: "all .25s",
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
                  style={{
                    scrollMarginTop: "140px",
                    position: m.bSumPos,
                    top: "100px",
                    background: "#FBF4E8",
                    color: "#2B1A14",
                    border: "1px solid #C9A45C",
                    borderRadius: "16px",
                    boxShadow: "0 24px 60px rgba(0,0,0,.35)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      background: "#7A1E1E",
                      color: "#F6ECDD",
                      padding: "20px 24px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display',serif",
                        fontSize: "24px",
                        fontWeight: "600",
                      }}
                    >
                      {t.b.yourMenu}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "700",
                        letterSpacing: ".08em",
                        background: "rgba(246,236,221,.14)",
                        border: "1px solid rgba(201,164,92,.7)",
                        borderRadius: "999px",
                        padding: "6px 12px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {bGuests} {t.b.ppl}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "18px 24px 22px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    <ul
                      style={{
                        listStyle: "none",
                        margin: "0",
                        padding: "0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "9px",
                      }}
                    >
                      {bLines.map((l: any, __i: number) => (
                        <Fragment key={__i}>
                          <li
                            style={{
                              display: "flex",
                              alignItems: "baseline",
                              gap: "8px",
                              fontSize: "14px",
                              lineHeight: "1.35",
                            }}
                          >
                            <span
                              style={{
                                flex: "none",
                                width: "7px",
                                height: "10px",
                                background: "#5F6B45",
                                borderRadius: "0 100% 0 100%",
                                transform: "rotate(-30deg)",
                              }}
                            ></span>
                            <span style={{ flex: "1", minWidth: "0" }}>
                              {l.label}
                            </span>
                          </li>
                        </Fragment>
                      ))}
                    </ul>
                    {bEmpty && (
                      <>
                        <span style={{ fontSize: "14px", color: "#6B4A3A" }}>
                          {t.b.empty}
                        </span>
                      </>
                    )}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          height: "1px",
                          flex: "1",
                          background: "#C9A45C",
                        }}
                      ></span>
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          background: "#C9A45C",
                          transform: "rotate(45deg)",
                        }}
                      ></span>
                      <span
                        style={{
                          height: "1px",
                          flex: "1",
                          background: "#C9A45C",
                        }}
                      ></span>
                    </div>
                    <a
                      href={bWa}
                      target="_blank"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        background: "#5F6B45",
                        color: "#F6ECDD",
                        transition:
                          "transform .25s,box-shadow .25s,background .25s",
                        fontWeight: "600",
                        fontSize: "15px",
                        minHeight: "52px",
                        borderRadius: "999px",
                      }}
                      className="hv12"
                      rel="noopener noreferrer"
                    >
                      <span
                        style={{
                          width: "15px",
                          height: "15px",
                          border: "2px solid #F6ECDD",
                          borderRadius: "50% 50% 50% 2px",
                        }}
                      ></span>
                      {t.b.sendWa}
                    </a>
                    <a
                      href="#ordenar"
                      onClick={bToForm}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1.5px solid #7A1E1E",
                        color: "#7A1E1E",
                        fontWeight: "600",
                        fontSize: "14px",
                        minHeight: "48px",
                        borderRadius: "999px",
                        transition: "all .25s",
                      }}
                      className="hv13"
                    >
                      {t.b.toForm}
                    </a>
                    <span
                      style={{
                        fontSize: "11.5px",
                        lineHeight: "1.5",
                        color: "#6B4A3A",
                        textAlign: "center",
                      }}
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
            style={{
              scrollMarginTop: "80px",
              padding: m.sec,
              background: "#EFE2CC",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                data-reveal="up"
                style={{ textAlign: "center", marginBottom: m.headGap }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".26em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "#7A1E1E",
                  }}
                >
                  {t.menuEyebrow}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: "600",
                    fontSize: m.h2,
                    lineHeight: "1.1",
                    color: "#7A1E1E",
                    margin: "12px 0 0",
                  }}
                >
                  {t.menuTitle}
                </h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(min(100%,280px),1fr))",
                  gap: m.cardGap,
                }}
              >
                {dishes.map((d: any, __i: number) => (
                  <Fragment key={__i}>
                    <article
                      data-reveal="up"
                      data-stagger=""
                      style={{
                        background: "#FBF4E8",
                        borderRadius: "12px",
                        overflow: "hidden",
                        boxShadow: "0 8px 26px rgba(122,30,30,.08)",
                        border: "1px solid rgba(201,164,92,.4)",
                      }}
                    >
                      <div
                        style={{
                          aspectRatio: "4/3.4",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            inset: "0",
                            transition:
                              "transform .6s cubic-bezier(.2,.7,.2,1)",
                          }}
                          className="hv14"
                        >
                          <Photo id={d.id} placeholder={d.ph} />
                        </div>
                      </div>
                      <div style={{ padding: "20px 22px 24px" }}>
                        <h3
                          style={{
                            fontFamily: "'Playfair Display',serif",
                            fontWeight: "600",
                            fontSize: "21px",
                            color: "#7A1E1E",
                            margin: "0 0 6px",
                            lineHeight: "1.25",
                          }}
                        >
                          {d.name}
                        </h3>
                        <p
                          style={{
                            margin: "0",
                            fontSize: "14px",
                            lineHeight: "1.55",
                            color: "#4A3328",
                          }}
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
            style={{
              scrollMarginTop: "80px",
              padding: m.sec,
              background: "#F6ECDD",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: m.splitGap,
              }}
            >
              <div
                data-reveal="zoom"
                style={{
                  flex: "1.15 1 360px",
                  minWidth: "0",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "-12px 12px 12px -12px",
                    border: "1px solid #C9A45C",
                    borderRadius: "14px",
                    pointerEvents: "none",
                  }}
                ></div>
                <div
                  data-parallax="0.07"
                  style={{
                    position: "relative",
                    aspectRatio: "5/4",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 18px 40px rgba(43,26,20,.15)",
                  }}
                >
                  <Photo
                    id={"tray-photo"}
                    placeholder={"Foto del cliente: bandeja de picadera"}
                  />
                </div>
              </div>
              <div
                data-reveal="up"
                style={{ flex: "1 1 320px", minWidth: "0" }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".26em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "#7A1E1E",
                  }}
                >
                  {t.trayEyebrow}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: "600",
                    fontSize: m.h2,
                    lineHeight: "1.1",
                    color: "#7A1E1E",
                    margin: "12px 0 18px",
                  }}
                >
                  {t.trayTitle}
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    margin: "0 0 24px",
                    color: "#3D2A20",
                    textWrap: "pretty",
                  }}
                >
                  {t.trayText}
                </p>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    color: "#6B4A3A",
                    marginBottom: "12px",
                  }}
                >
                  {t.qtyLabel}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginBottom: "30px",
                  }}
                >
                  {qtys.map((q: any, __i: number) => (
                    <Fragment key={__i}>
                      <span
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: "6px",
                          border: "1px solid #C9A45C",
                          borderRadius: "10px",
                          padding: "10px 16px",
                          background: "#FBF4E8",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "24px",
                            fontWeight: "700",
                            color: "#7A1E1E",
                          }}
                        >
                          {q}
                        </span>
                        <span style={{ fontSize: "12px", color: "#6B4A3A" }}>
                          {t.pieces}
                        </span>
                      </span>
                    </Fragment>
                  ))}
                </div>
                <a
                  href="#ordenar"
                  onClick={pickTray}
                  style={{
                    display: "inline-block",
                    background: "#5F6B45",
                    color: "#F6ECDD",
                    transition:
                      "transform .25s,box-shadow .25s,background .25s",
                    fontWeight: "600",
                    fontSize: "15px",
                    padding: "16px 30px",
                    borderRadius: "999px",
                  }}
                  className="hv15"
                >
                  {t.trayCta}
                </a>
              </div>
            </div>
          </section>
          <section
            id="eventos"
            style={{
              scrollMarginTop: "80px",
              padding: m.sec,
              background: "#EFE2CC",
            }}
          >
            <div
              style={{
                maxWidth: "1200px",
                margin: "0 auto",
                display: "flex",
                flexWrap: "wrap-reverse",
                alignItems: "center",
                gap: m.splitGap,
              }}
            >
              <div
                data-reveal="up"
                style={{ flex: "1 1 320px", minWidth: "0" }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".26em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "#7A1E1E",
                  }}
                >
                  {t.evEyebrow}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: "600",
                    fontSize: m.h2,
                    lineHeight: "1.1",
                    color: "#7A1E1E",
                    margin: "12px 0 18px",
                  }}
                >
                  {t.evTitle}
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "1.7",
                    margin: "0 0 24px",
                    color: "#3D2A20",
                    textWrap: "pretty",
                  }}
                >
                  {t.evText}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    marginBottom: "30px",
                  }}
                >
                  {t.evTypes.map((e: any, __i: number) => (
                    <Fragment key={__i}>
                      <span
                        style={{
                          fontSize: "13px",
                          fontWeight: "600",
                          color: "#7A1E1E",
                          background: "#F6ECDD",
                          border: "1px solid rgba(201,164,92,.7)",
                          borderRadius: "999px",
                          padding: "8px 14px",
                        }}
                      >
                        {e}
                      </span>
                    </Fragment>
                  ))}
                </div>
                <a
                  href="#ordenar"
                  onClick={pickEvent}
                  style={{
                    display: "inline-block",
                    background: "#5F6B45",
                    color: "#F6ECDD",
                    transition:
                      "transform .25s,box-shadow .25s,background .25s",
                    fontWeight: "600",
                    fontSize: "15px",
                    padding: "16px 30px",
                    borderRadius: "999px",
                  }}
                  className="hv16"
                >
                  {t.evCta}
                </a>
              </div>
              <div
                data-reveal="zoom"
                style={{
                  flex: "1.15 1 360px",
                  minWidth: "0",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: "-12px -12px 12px 12px",
                    border: "1px solid #C9A45C",
                    borderRadius: "14px",
                    pointerEvents: "none",
                  }}
                ></div>
                <div
                  data-parallax="0.07"
                  style={{
                    position: "relative",
                    aspectRatio: "5/4",
                    borderRadius: "12px",
                    overflow: "hidden",
                    boxShadow: "0 18px 40px rgba(43,26,20,.15)",
                  }}
                >
                  <Photo
                    id={"buffet-photo"}
                    placeholder={"Foto del cliente: montaje de buffet"}
                  />
                </div>
              </div>
            </div>
          </section>
          <section style={{ padding: m.sec, background: "#F6ECDD" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div
                data-reveal="up"
                style={{ textAlign: "center", marginBottom: m.headGap }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".26em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "#7A1E1E",
                  }}
                >
                  {t.howEyebrow}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: "600",
                    fontSize: m.h2,
                    lineHeight: "1.1",
                    color: "#7A1E1E",
                    margin: "12px 0 0",
                  }}
                >
                  {t.howTitle}
                </h2>
              </div>
              <ol
                style={{
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(min(100%,240px),1fr))",
                  gap: m.cardGap,
                }}
              >
                {steps.map((s: any, __i: number) => (
                  <Fragment key={__i}>
                    <li
                      data-reveal="up"
                      data-stagger=""
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        gap: "14px",
                        padding: "8px 10px",
                      }}
                    >
                      <span
                        style={{
                          width: "76px",
                          height: "76px",
                          borderRadius: "50%",
                          border: "1px solid #C9A45C",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#FBF4E8",
                          boxShadow:
                            "0 0 0 6px #F6ECDD,0 0 0 7px rgba(201,164,92,.45)",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "34px",
                            fontWeight: "600",
                            color: "#7A1E1E",
                            fontStyle: "italic",
                          }}
                        >
                          {s.n}
                        </span>
                      </span>
                      <span
                        style={{
                          fontFamily: "'Playfair Display',serif",
                          fontSize: "22px",
                          fontWeight: "600",
                          color: "#2B1A14",
                          lineHeight: "1.25",
                        }}
                      >
                        {s.title}
                      </span>
                      <span
                        style={{
                          fontSize: "14px",
                          lineHeight: "1.55",
                          color: "#4A3328",
                          maxWidth: "260px",
                        }}
                      >
                        {s.sub}
                      </span>
                    </li>
                  </Fragment>
                ))}
              </ol>
              <div
                style={{
                  margin: "36px auto 0",
                  maxWidth: "max-content",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  background: "#EFE2CC",
                  borderRadius: "999px",
                  padding: "11px 20px",
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "#7A1E1E",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    flex: "none",
                    width: "7px",
                    height: "7px",
                    background: "#D9782D",
                    transform: "rotate(45deg)",
                  }}
                ></span>
                {t.howNote}
              </div>
            </div>
          </section>
          <section
            id="video"
            style={{
              scrollMarginTop: "80px",
              padding: m.sec,
              background: "#EFE2CC",
            }}
          >
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div
                data-reveal="up"
                style={{ textAlign: "center", marginBottom: m.headGap }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".26em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "#7A1E1E",
                  }}
                >
                  {t.v.eyebrow}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: "600",
                    fontSize: m.h2,
                    lineHeight: "1.1",
                    color: "#7A1E1E",
                    margin: "12px 0 0",
                    textWrap: "balance",
                  }}
                >
                  {t.v.title}
                </h2>
              </div>
              <div data-reveal="zoom" style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    inset: "-12px",
                    border: "1px solid #C9A45C",
                    borderRadius: "22px",
                    pointerEvents: "none",
                  }}
                ></div>
                <div
                  style={{
                    position: "relative",
                    aspectRatio: m.vRatio,
                    borderRadius: "16px",
                    overflow: "hidden",
                    background: "#2B1A14",
                    boxShadow: "0 30px 70px rgba(43,26,20,.28)",
                  }}
                >
                  {vReal && (
                    <>
                      <video
                        ref={vRef}
                        controls
                        playsInline
                        style={{
                          position: "absolute",
                          inset: "0",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          background: "#2B1A14",
                        }}
                      ></video>
                    </>
                  )}
                  {vFake && (
                    <>
                      <div
                        style={{
                          position: "absolute",
                          inset: "0",
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
                        style={{
                          position: "absolute",
                          inset: "0",
                          pointerEvents: "none",
                          background:
                            "linear-gradient(180deg,rgba(43,26,20,0) 0%,rgba(43,26,20,0) 55%,rgba(43,26,20,.7) 100%)",
                        }}
                      ></div>
                      <div
                        style={{
                          position: "absolute",
                          top: "16px",
                          left: "16px",
                          right: "16px",
                          pointerEvents: "none",
                          display: "flex",
                        }}
                      >
                        <span
                          style={{
                            maxWidth: "100%",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            font: "600 11px ui-monospace,Menlo,monospace",
                            letterSpacing: ".06em",
                            color: "#F6ECDD",
                            background: "rgba(43,26,20,.55)",
                            border: "1px dashed rgba(246,236,221,.6)",
                            borderRadius: "6px",
                            padding: "6px 10px",
                          }}
                        >
                          VIDEO · {t.v.ph}
                        </span>
                      </div>
                      <button
                        onClick={vToggle}
                        aria-label="Play"
                        style={{
                          position: "absolute",
                          inset: "0",
                          width: "100%",
                          height: "100%",
                          border: "0",
                          background: "transparent",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          opacity: v.btnOp,
                          transition: "opacity .35s",
                        }}
                      >
                        <span
                          style={{
                            position: "relative",
                            width: m.vBtn,
                            height: m.vBtn,
                            borderRadius: "50%",
                            background: "rgba(246,236,221,.95)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow:
                              "0 0 0 10px rgba(246,236,221,.22),0 16px 40px rgba(0,0,0,.35)",
                            transition: "transform .3s",
                          }}
                          className="hv17"
                        >
                          <span
                            data-anim="cfPulse 2.4s ease-out infinite"
                            style={{
                              position: "absolute",
                              inset: "-2px",
                              borderRadius: "50%",
                              border: "2px solid #F6ECDD",
                              pointerEvents: "none",
                            }}
                          ></span>
                          <span
                            style={{
                              width: "0",
                              height: "0",
                              marginLeft: "6px",
                              borderTop: "14px solid transparent",
                              borderBottom: "14px solid transparent",
                              borderLeft: "22px solid #7A1E1E",
                            }}
                          ></span>
                        </span>
                      </button>
                      <div
                        style={{
                          position: "absolute",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          padding: m.vBarPad,
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                          color: "#F6ECDD",
                          pointerEvents: "none",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "flex-end",
                            justifyContent: "space-between",
                            gap: "16px",
                          }}
                        >
                          <span
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "4px",
                            }}
                          >
                            <span
                              style={{
                                fontFamily: "'Playfair Display',serif",
                                fontSize: m.vTitle,
                                fontWeight: "600",
                                lineHeight: "1.15",
                              }}
                            >
                              {t.v.caption}
                            </span>
                            <span
                              style={{ fontSize: "13px", color: "#F1DFC4" }}
                            >
                              {t.v.sub}
                            </span>
                          </span>
                          <span
                            style={{
                              flex: "none",
                              font: "600 12px ui-monospace,Menlo,monospace",
                              color: "#F6ECDD",
                              background: "rgba(43,26,20,.55)",
                              borderRadius: "999px",
                              padding: "6px 10px",
                            }}
                          >
                            {v.time}
                          </span>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            pointerEvents: "auto",
                          }}
                        >
                          <button
                            onClick={vToggle}
                            aria-label="Play/Pause"
                            style={{
                              flex: "none",
                              width: "36px",
                              height: "36px",
                              borderRadius: "50%",
                              border: "1px solid rgba(246,236,221,.5)",
                              background: "rgba(43,26,20,.4)",
                              cursor: "pointer",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "4px",
                            }}
                          >
                            {v.playing && (
                              <>
                                <span
                                  style={{
                                    width: "3px",
                                    height: "12px",
                                    background: "#F6ECDD",
                                  }}
                                ></span>
                                <span
                                  style={{
                                    width: "3px",
                                    height: "12px",
                                    background: "#F6ECDD",
                                  }}
                                ></span>
                              </>
                            )}
                            {v.paused && (
                              <>
                                <span
                                  style={{
                                    width: "0",
                                    height: "0",
                                    marginLeft: "3px",
                                    borderTop: "6px solid transparent",
                                    borderBottom: "6px solid transparent",
                                    borderLeft: "10px solid #F6ECDD",
                                  }}
                                ></span>
                              </>
                            )}
                          </button>
                          <div
                            style={{
                              flex: "1",
                              height: "4px",
                              borderRadius: "999px",
                              background: "rgba(246,236,221,.3)",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              style={{
                                height: "100%",
                                width: v.pct,
                                background:
                                  "linear-gradient(90deg,#C9A45C,#D9782D)",
                                transition: "width .25s linear",
                              }}
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
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "12px",
                  marginTop: "40px",
                }}
              >
                <a
                  href="https://instagram.com/caesy.foodny"
                  target="_blank"
                  style={{
                    border: "1.5px solid #7A1E1E",
                    color: "#7A1E1E",
                    fontWeight: "600",
                    fontSize: "14px",
                    padding: "13px 22px",
                    borderRadius: "999px",
                    transition: "all .25s",
                  }}
                  className="hv18"
                  rel="noopener noreferrer"
                >
                  {t.v.more}
                </a>
              </div>
            </div>
          </section>
          <section
            style={{ padding: m.sec, background: "#7A1E1E", color: "#F6ECDD" }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                data-reveal="up"
                style={{ textAlign: "center", marginBottom: m.headGap }}
              >
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".26em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "#E9CF98",
                  }}
                >
                  {t.tEyebrow}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: "600",
                    fontSize: m.h2,
                    lineHeight: "1.1",
                    margin: "12px 0 0",
                  }}
                >
                  {t.tTitle}
                </h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(min(100%,280px),1fr))",
                  gap: m.cardGap,
                }}
              >
                {t.reviews.map((r: any, __i: number) => (
                  <Fragment key={__i}>
                    <figure
                      data-reveal="up"
                      data-stagger=""
                      style={{
                        margin: "0",
                        background: "#F6ECDD",
                        color: "#2B1A14",
                        borderRadius: "12px",
                        padding: "28px 26px 24px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        boxShadow: "0 14px 30px rgba(0,0,0,.18)",
                      }}
                    >
                      <div
                        style={{
                          color: "#C9A45C",
                          fontSize: "18px",
                          letterSpacing: "4px",
                        }}
                      >
                        ★★★★★
                      </div>
                      <blockquote
                        style={{
                          margin: "0",
                          fontFamily: "'Playfair Display',serif",
                          fontStyle: "italic",
                          fontSize: "19px",
                          lineHeight: "1.45",
                          flex: "1",
                          textWrap: "pretty",
                        }}
                      >
                        “{r.q}”
                      </blockquote>
                      <figcaption
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "3px",
                          borderTop: "1px solid rgba(201,164,92,.5)",
                          paddingTop: "14px",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: "700",
                            fontSize: "14px",
                            color: "#7A1E1E",
                          }}
                        >
                          {r.name}
                        </span>
                        <span style={{ fontSize: "12px", color: "#6B4A3A" }}>
                          {r.ev}
                        </span>
                      </figcaption>
                    </figure>
                  </Fragment>
                ))}
              </div>
            </div>
          </section>
          <section
            id="galeria"
            style={{
              scrollMarginTop: "80px",
              padding: m.sec,
              background: "#F6ECDD",
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: "20px",
                  marginBottom: "32px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "11px",
                      letterSpacing: ".26em",
                      textTransform: "uppercase",
                      fontWeight: "700",
                      color: "#7A1E1E",
                    }}
                  >
                    {t.igEyebrow}
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontWeight: "600",
                      fontSize: m.h2,
                      lineHeight: "1.1",
                      color: "#7A1E1E",
                      margin: "12px 0 0",
                    }}
                  >
                    @caesy.foodny
                  </h2>
                </div>
                <a
                  href="https://instagram.com/caesy.foodny"
                  target="_blank"
                  style={{
                    border: "1.5px solid #7A1E1E",
                    color: "#7A1E1E",
                    fontWeight: "600",
                    fontSize: "14px",
                    padding: "13px 22px",
                    borderRadius: "999px",
                  }}
                  className="hv19"
                  rel="noopener noreferrer"
                >
                  {t.igCta}
                </a>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: m.igCols,
                  gap: m.igGap,
                }}
              >
                {ig.map((g: any, __i: number) => (
                  <Fragment key={__i}>
                    <a
                      href="https://instagram.com/caesy.foodny"
                      target="_blank"
                      data-reveal="zoom"
                      data-stagger=""
                      style={{
                        display: "block",
                        aspectRatio: "1",
                        borderRadius: "8px",
                        overflow: "hidden",
                        position: "relative",
                      }}
                      rel="noopener noreferrer"
                    >
                      <div
                        style={{
                          position: "absolute",
                          inset: "0",
                          transition: "transform .5s",
                        }}
                        className="hv20"
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
        style={{
          scrollMarginTop: "80px",
          padding: m.sec,
          background: "#EFE2CC",
        }}
      >
        <div
          data-reveal="up"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            background: "#FBF4E8",
            border: "1px solid #C9A45C",
            borderRadius: "14px",
            boxShadow: "0 20px 50px rgba(122,30,30,.12)",
            padding: m.formPad,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "7px",
              border: "1px solid rgba(201,164,92,.35)",
              borderRadius: "10px",
              pointerEvents: "none",
            }}
          ></div>
          {notSent && (
            <>
              <div style={{ textAlign: "center", marginBottom: "30px" }}>
                <div
                  style={{
                    fontSize: "11px",
                    letterSpacing: ".26em",
                    textTransform: "uppercase",
                    fontWeight: "700",
                    color: "#7A1E1E",
                  }}
                >
                  {t.formEyebrow}
                </div>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: "600",
                    fontSize: m.h2,
                    lineHeight: "1.1",
                    color: "#7A1E1E",
                    margin: "12px 0 12px",
                  }}
                >
                  {t.formTitle}
                </h2>
                <p
                  style={{
                    margin: "0 auto",
                    maxWidth: "460px",
                    fontSize: "15px",
                    lineHeight: "1.6",
                    color: "#4A3328",
                  }}
                >
                  {t.formSub}
                </p>
              </div>
              <form
                onSubmit={submit}
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(min(100%,250px),1fr))",
                  gap: "18px 18px",
                }}
              >
                <label
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: "#5A3D30",
                  }}
                >
                  {t.f.name}
                  <input
                    name="name"
                    required
                    placeholder={t.f.namePh}
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      textTransform: "none",
                      letterSpacing: "0",
                      color: "#2B1A14",
                      background: "#F6ECDD",
                      border: "1px solid rgba(122,30,30,.25)",
                      borderRadius: "10px",
                      padding: "14px",
                      minHeight: "50px",
                      outlineColor: "#5F6B45",
                    }}
                  />
                </label>
                <label
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: "#5A3D30",
                  }}
                >
                  {t.f.phone}
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="(914) 000-0000"
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      textTransform: "none",
                      letterSpacing: "0",
                      color: "#2B1A14",
                      background: "#F6ECDD",
                      border: "1px solid rgba(122,30,30,.25)",
                      borderRadius: "10px",
                      padding: "14px",
                      minHeight: "50px",
                      outlineColor: "#5F6B45",
                    }}
                  />
                </label>
                <label
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: "#5A3D30",
                  }}
                >
                  {t.f.date}
                  <input
                    name="date"
                    type="date"
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#2B1A14",
                      background: "#F6ECDD",
                      border: "1px solid rgba(122,30,30,.25)",
                      borderRadius: "10px",
                      padding: "14px",
                      minHeight: "50px",
                      outlineColor: "#5F6B45",
                    }}
                  />
                </label>
                <label
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: "#5A3D30",
                  }}
                >
                  {t.f.people}
                  <input
                    name="people"
                    type="number"
                    min={1}
                    placeholder="10"
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      color: "#2B1A14",
                      background: "#F6ECDD",
                      border: "1px solid rgba(122,30,30,.25)",
                      borderRadius: "10px",
                      padding: "14px",
                      minHeight: "50px",
                      outlineColor: "#5F6B45",
                    }}
                  />
                </label>
                <label
                  style={{
                    gridColumn: "1/-1",
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: "#5A3D30",
                  }}
                >
                  {t.f.pkg}{" "}
                  <select
                    value={pkg}
                    onChange={onPkg}
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      textTransform: "none",
                      letterSpacing: "0",
                      color: "#2B1A14",
                      background: "#F6ECDD",
                      border: "1px solid rgba(122,30,30,.25)",
                      borderRadius: "10px",
                      padding: "14px",
                      minHeight: "50px",
                      outlineColor: "#5F6B45",
                    }}
                  >
                    {pkgOptions.map((o: any, __i: number) => (
                      <Fragment key={__i}>
                        <option value={o.v}>{o.label}</option>
                      </Fragment>
                    ))}
                  </select>
                </label>
                <div
                  style={{
                    gridColumn: "1/-1",
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "700",
                      letterSpacing: ".06em",
                      textTransform: "uppercase",
                      color: "#5A3D30",
                    }}
                  >
                    {t.f.mode}
                  </span>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "10px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={setPickup}
                      style={{
                        cursor: "pointer",
                        minHeight: "50px",
                        borderRadius: "10px",
                        fontSize: "15px",
                        fontWeight: "600",
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
                      style={{
                        cursor: "pointer",
                        minHeight: "50px",
                        borderRadius: "10px",
                        fontSize: "15px",
                        fontWeight: "600",
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
                  style={{
                    gridColumn: "1/-1",
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: ".06em",
                    textTransform: "uppercase",
                    color: "#5A3D30",
                  }}
                >
                  {t.f.notes}
                  <textarea
                    name="notes"
                    rows={4}
                    value={notes}
                    onChange={onNotes}
                    placeholder={t.f.notesPh}
                    style={{
                      fontSize: "16px",
                      fontWeight: "500",
                      textTransform: "none",
                      letterSpacing: "0",
                      color: "#2B1A14",
                      background: "#F6ECDD",
                      border: "1px solid rgba(122,30,30,.25)",
                      borderRadius: "10px",
                      padding: "14px",
                      resize: "vertical",
                      outlineColor: "#5F6B45",
                    }}
                  ></textarea>
                </label>
                <div
                  style={{
                    gridColumn: "1/-1",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    marginTop: "6px",
                  }}
                >
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      cursor: "pointer",
                      border: "0",
                      background: "#5F6B45",
                      color: "#F6ECDD",
                      transition:
                        "transform .25s,box-shadow .25s,background .25s",
                      fontWeight: "600",
                      fontSize: "16px",
                      padding: "18px",
                      borderRadius: "999px",
                      minHeight: "56px",
                    }}
                    className="hv21"
                  >
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          width: "16px",
                          height: "16px",
                          border: "2px solid #F6ECDD",
                          borderRadius: "50% 50% 50% 2px",
                        }}
                      ></span>
                      {t.f.submit}
                    </span>
                  </button>
                  <span
                    style={{
                      fontSize: "12.5px",
                      color: "#5A3D30",
                      textAlign: "center",
                    }}
                  >
                    {t.f.waHint}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#5A3D30",
                      textAlign: "center",
                    }}
                  >
                    {t.f.orCall}{" "}
                    <a href="tel:+19148045458" style={{ fontWeight: "700" }}>
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
                style={{
                  position: "relative",
                  textAlign: "center",
                  padding: "24px 0 10px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    width: "84px",
                    height: "84px",
                    borderRadius: "50%",
                    background: "#5F6B45",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 0 0 7px #FBF4E8,0 0 0 8px #C9A45C",
                  }}
                >
                  <span
                    style={{
                      width: "30px",
                      height: "16px",
                      borderLeft: "3px solid #F6ECDD",
                      borderBottom: "3px solid #F6ECDD",
                      transform: "translateY(-4px) rotate(-45deg)",
                    }}
                  ></span>
                </span>
                <h2
                  style={{
                    fontFamily: "'Playfair Display',serif",
                    fontWeight: "600",
                    fontSize: m.h2,
                    lineHeight: "1.1",
                    color: "#7A1E1E",
                    margin: "12px 0 0",
                  }}
                >
                  {t.thanks}
                </h2>
                <p
                  style={{
                    margin: "0",
                    maxWidth: "440px",
                    fontSize: "15px",
                    lineHeight: "1.65",
                    color: "#4A3328",
                  }}
                >
                  {thanksDetail}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    margin: "6px 0",
                  }}
                >
                  <span
                    style={{
                      height: "1px",
                      width: "50px",
                      background: "#C9A45C",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      background: "#C9A45C",
                      transform: "rotate(45deg)",
                    }}
                  ></span>
                  <span
                    style={{
                      height: "1px",
                      width: "50px",
                      background: "#C9A45C",
                    }}
                  ></span>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "10px",
                  }}
                >
                  <a
                    href={waSent}
                    target="_blank"
                    style={{
                      background: "#5F6B45",
                      color: "#F6ECDD",
                      transition:
                        "transform .25s,box-shadow .25s,background .25s",
                      fontWeight: "600",
                      fontSize: "14px",
                      padding: "14px 22px",
                      borderRadius: "999px",
                    }}
                    className="hv22"
                    rel="noopener noreferrer"
                  >
                    {t.f.waAgain}
                  </a>
                  <a
                    href="tel:+19148045458"
                    style={{
                      border: "1.5px solid #7A1E1E",
                      color: "#7A1E1E",
                      fontWeight: "600",
                      fontSize: "14px",
                      padding: "13px 22px",
                      borderRadius: "999px",
                    }}
                  >
                    914-804-5458
                  </a>
                </div>
                <button
                  onClick={reset}
                  style={{
                    background: "none",
                    border: "0",
                    cursor: "pointer",
                    fontSize: "13px",
                    color: "#5A3D30",
                    textDecoration: "underline",
                    marginTop: "4px",
                  }}
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
            style={{
              scrollMarginTop: "80px",
              background: "#7A1E1E",
              color: "#F6ECDD",
              padding: m.footPad,
            }}
          >
            <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "10px",
                  paddingBottom: "36px",
                  borderBottom: "1px solid rgba(201,164,92,.5)",
                }}
              >
                <div
                  style={{
                    background: "#F6ECDD",
                    borderRadius: "16px",
                    padding: "18px 26px",
                    boxShadow:
                      "0 0 0 1px #C9A45C,0 0 0 6px #7A1E1E,0 0 0 7px rgba(201,164,92,.6)",
                  }}
                >
                  <img
                    src="/images/logo-badge.png"
                    alt="Casey foodny \u2014 Catering & Treats"
                    style={{ width: "180px", height: "auto", display: "block" }}
                  />
                </div>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    style={{
                      height: "1px",
                      width: "40px",
                      background: "#C9A45C",
                    }}
                  ></span>
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      background: "#C9A45C",
                      transform: "rotate(45deg)",
                    }}
                  ></span>
                  <span
                    style={{
                      height: "1px",
                      width: "40px",
                      background: "#C9A45C",
                    }}
                  ></span>
                </div>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#F1DFC4",
                    letterSpacing: ".04em",
                  }}
                >
                  {t.footTag}
                </span>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit,minmax(min(100%,200px),1fr))",
                  gap: "28px",
                  padding: "36px 0",
                }}
              >
                {footCols.map((c: any, __i: number) => (
                  <Fragment key={__i}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "11px",
                          letterSpacing: ".22em",
                          textTransform: "uppercase",
                          fontWeight: "700",
                          color: "#E9CF98",
                        }}
                      >
                        {c.label}
                      </span>
                      <a
                        href={c.href}
                        style={{
                          color: "#F6ECDD",
                          fontFamily: "'Playfair Display',serif",
                          fontSize: "19px",
                          lineHeight: "1.35",
                          overflowWrap: "anywhere",
                        }}
                        className="hv23"
                      >
                        {c.value}
                      </a>
                      <span
                        style={{
                          fontSize: "13px",
                          color: "#F1DFC4",
                          lineHeight: "1.5",
                        }}
                      >
                        {c.sub}
                      </span>
                    </div>
                  </Fragment>
                ))}
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(201,164,92,.5)",
                  paddingTop: "22px",
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  gap: "10px",
                  fontSize: "12px",
                  color: "#F1DFC4",
                }}
              >
                <span>© 2026 Casey foodny</span>
                <span>{t.advance}</span>
              </div>
            </div>
          </footer>
          <div
            style={{
              position: "sticky",
              bottom: "0",
              height: "0",
              zIndex: "40",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: m.waRight,
                bottom: m.waBottom,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                gap: "12px",
              }}
            >
              {waOpen && (
                <>
                  <div
                    style={{
                      width: m.waCardW,
                      background: "#FBF4E8",
                      border: "1px solid rgba(201,164,92,.6)",
                      borderRadius: "20px",
                      boxShadow: "0 24px 60px rgba(43,26,20,.28)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        padding: "14px 14px 14px 16px",
                        background: "#7A1E1E",
                        color: "#F6ECDD",
                      }}
                    >
                      <span
                        style={{
                          position: "relative",
                          flex: "none",
                          width: "42px",
                          height: "42px",
                          borderRadius: "50%",
                          background: "#F6ECDD",
                          color: "#7A1E1E",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "'Playfair Display',serif",
                          fontWeight: "700",
                          fontSize: "16px",
                          boxShadow: "0 0 0 2px #C9A45C",
                        }}
                      >
                        <img
                          src="/images/logo-mark.png"
                          alt=""
                          style={{
                            height: "34px",
                            width: "auto",
                            display: "block",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            right: "-1px",
                            bottom: "-1px",
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            background: "#3FBF6E",
                            border: "2px solid #7A1E1E",
                          }}
                        ></span>
                      </span>
                      <span
                        style={{
                          flex: "1",
                          display: "flex",
                          flexDirection: "column",
                          gap: "2px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Playfair Display',serif",
                            fontSize: "17px",
                            fontWeight: "600",
                          }}
                        >
                          Chef JD
                        </span>
                        <span style={{ fontSize: "11.5px", color: "#F1DFC4" }}>
                          {t.wa.status}
                        </span>
                      </span>
                      <button
                        onClick={toggleWa}
                        aria-label="Cerrar"
                        style={{
                          flex: "none",
                          width: "36px",
                          height: "36px",
                          borderRadius: "50%",
                          border: "1px solid rgba(246,236,221,.35)",
                          background: "transparent",
                          color: "#F6ECDD",
                          fontSize: "18px",
                          cursor: "pointer",
                          lineHeight: "1",
                        }}
                      >
                        ×
                      </button>
                    </div>
                    <div
                      style={{
                        padding: "18px 16px 16px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        background: "#F6ECDD",
                      }}
                    >
                      <div
                        style={{
                          alignSelf: "flex-start",
                          maxWidth: "88%",
                          background: "#FFFFFF",
                          borderRadius: "4px 16px 16px 16px",
                          padding: "12px 14px",
                          fontSize: "14px",
                          lineHeight: "1.5",
                          color: "#2B1A14",
                          boxShadow: "0 2px 6px rgba(43,26,20,.06)",
                        }}
                      >
                        {t.wa.msg}
                        <span
                          style={{
                            display: "block",
                            marginTop: "4px",
                            fontSize: "10.5px",
                            color: "#8A6E5E",
                            textAlign: "right",
                          }}
                        >
                          Chef JD
                        </span>
                      </div>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: "700",
                          letterSpacing: ".12em",
                          textTransform: "uppercase",
                          color: "#6B4A3A",
                          marginTop: "2px",
                        }}
                      >
                        {t.wa.quick}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                        }}
                      >
                        {waChips.map((c: any, __i: number) => (
                          <Fragment key={__i}>
                            <a
                              href={c.href}
                              target="_blank"
                              style={{
                                fontSize: "13px",
                                fontWeight: "600",
                                color: "#7A1E1E",
                                background: "#FBF4E8",
                                border: "1px solid #C9A45C",
                                borderRadius: "999px",
                                padding: "9px 13px",
                              }}
                              className="hv24"
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
                        style={{
                          marginTop: "4px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px",
                          background: "#5F6B45",
                          color: "#F6ECDD",
                          transition:
                            "transform .25s,box-shadow .25s,background .25s",
                          fontWeight: "600",
                          fontSize: "15px",
                          minHeight: "50px",
                          borderRadius: "999px",
                        }}
                        className="hv25"
                        rel="noopener noreferrer"
                      >
                        <span
                          style={{
                            width: "16px",
                            height: "16px",
                            border: "2px solid #F6ECDD",
                            borderRadius: "50% 50% 50% 2px",
                          }}
                        ></span>
                        {t.wa.open}
                      </a>
                      <a
                        href="tel:+19148045458"
                        style={{
                          textAlign: "center",
                          fontSize: "12.5px",
                          color: "#5A3D30",
                        }}
                      >
                        {t.wa.call}{" "}
                        <span style={{ fontWeight: "700", color: "#7A1E1E" }}>
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
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  border: "1px solid rgba(201,164,92,.55)",
                  background: "rgba(251,244,232,.92)",
                  backdropFilter: "blur(12px)",
                  borderRadius: "999px",
                  padding: `6px ${m.waPadR} 6px 6px`,
                  boxShadow: "0 14px 34px rgba(43,26,20,.22)",
                  textAlign: "left",
                }}
                className="hv26"
              >
                <span
                  style={{
                    position: "relative",
                    flex: "none",
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    background: "#F6ECDD",
                    border: "1px solid #C9A45C",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    data-anim="cfPulse 2.4s ease-out infinite"
                    style={{
                      position: "absolute",
                      inset: "-1px",
                      borderRadius: "50%",
                      border: "2px solid #5F6B45",
                      pointerEvents: "none",
                    }}
                  ></span>
                  <img
                    src="/images/logo-mark.png"
                    alt=""
                    style={{ height: "40px", width: "auto", display: "block" }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      right: "-4px",
                      bottom: "-4px",
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "#5F6B45",
                      border: "2px solid #FBF4E8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        width: "9px",
                        height: "9px",
                        border: "1.5px solid #F6ECDD",
                        borderRadius: "50% 50% 50% 1px",
                      }}
                    ></span>
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      top: "0",
                      right: "0",
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      background: "#3FBF6E",
                      border: "2px solid #FBF4E8",
                    }}
                  ></span>
                </span>
                {waLabel && (
                  <>
                    <span
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                        paddingRight: "4px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: "700",
                          color: "#2B1A14",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {t.wa.cta}
                      </span>
                      <span
                        style={{
                          fontSize: "11.5px",
                          color: "#5A3D30",
                          whiteSpace: "nowrap",
                        }}
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
