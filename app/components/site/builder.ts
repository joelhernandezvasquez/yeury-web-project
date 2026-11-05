/* eslint-disable @typescript-eslint/no-explicit-any */
import { BUILD, DELIVERY_FEE, money } from "../content";

const WA = "https://wa.me/19148045458";

// "Arma tu menú" builder: selections, running total, summary and WhatsApp link.
export function builderVals(opts: {
  b: any;
  t: any;
  lang: string;
  setB: (patch: any) => void;
  toForm: (summary: string) => void;
}) {
  const { b, t, lang, setB, toForm } = opts;
  const g = b.guests,
    L = lang === "en" ? 2 : 1;
  const lines: { label: string }[] = [];
  let total = 0;
  const groups = (BUILD as any[]).map((grp, gi) => {
    const items = grp.items.map((it: any[]) => {
      const [id, , , price] = it;
      const on = grp.type === "multi" ? b[grp.k].includes(id) : b[grp.k] === id;
      if (on && (grp.type === "multi" || price > 0)) {
        total += grp.type === "multi" ? price * g : price;
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

  const pk = [
    [4, 6, t.pkg1.title, "$190"],
    [8, 11, t.pkg2.title, "$350"],
    [12, 18, t.pkg3.title, "$550"],
  ].find(([a, z]: any[]) => g >= a && g <= z);
  const summary =
    t.b.waIntro(g) + "\n" + lines.map((l) => "• " + l.label).join("\n");
  const clamp = (v: number) => Math.max(4, Math.min(80, v));
  const sel = (on: boolean) =>
    on
      ? { bd: "#5F6B45", bg: "#5F6B45", fg: "#F6ECDD" }
      : { bd: "rgba(122,30,30,.18)", bg: "#FBF4E8", fg: "#2B1A14" };
  const p = sel(b.mode === "pickup"),
    d = sel(b.mode === "delivery");

  return {
    total,
    vals: {
      bCount: t.b.count(lines.length - 1),
      bGuests: g,
      bGroups: groups,
      bLines: lines,
      bEmpty: lines.length === 0,
      bPerPerson: t.b.perPerson(money(total / g)),
      bTip: pk
        ? { show: true, text: t.b.tip(g, pk[2], pk[3]) }
        : { show: false, text: "" },
      bWa: WA + "?text=" + encodeURIComponent(summary),
      bToForm: () => toForm(summary),
      guestMinus: () => setB({ guests: clamp(g - 1) }),
      guestPlus: () => setB({ guests: clamp(g + 1) }),
      guestRange: (e: any) => setB({ guests: clamp(+e.target.value) }),
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
    },
  };
}
