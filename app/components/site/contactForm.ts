/* eslint-disable @typescript-eslint/no-explicit-any */
export const PKG_VALUES = ["c46", "c811", "c1218", "pic", "evt", "otro", "cena"];

// Builds the WhatsApp message from the contact form and opens it.
// Returns the state patch to apply once sent.
export function submitContactForm(
  e: any,
  ctx: { t: any; lang: string; pkg: string; mode: string; notes: string },
) {
  e.preventDefault();
  const { t, lang, pkg, mode, notes } = ctx;
  const fd = new FormData(e.target),
    v = (k: string) => String(fd.get(k) || "").trim();
  const W = t.f.waMsg,
    opt = t.pkgOpts[PKG_VALUES.indexOf(pkg)] || "";
  const dt = v("date")
    ? new Date(v("date") + "T12:00").toLocaleDateString(
        lang === "en" ? "en-US" : "es-US",
        { weekday: "long", day: "numeric", month: "long", year: "numeric" },
      )
    : "";
  const rows = [
    [t.f.name, v("name")],
    [t.f.phone, v("phone")],
    [t.f.date, dt],
    [t.f.people, v("people")],
    [t.f.pkg, opt],
    [t.f.mode, mode === "delivery" ? t.f.delivery : t.f.pickup],
  ].filter((x) => x[1]);
  const msg =
    W.intro +
    "\n\n" +
    rows.map(([k, val]) => "*" + k + ":* " + val).join("\n") +
    (notes.trim() ? "\n\n*" + t.f.notes + ":*\n" + notes.trim() : "");
  const url = "https://wa.me/19148045458?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
  return { sent: true, name: v("name").split(" ")[0], waUrl: url };
}
