// Photos that came with the original design. Slots with no entry render a neutral
// placeholder tile until a real photo is added to /public/images and listed here.
const PHOTOS: Record<string, { src: string; position?: string }> = {
  "hero-buffet": { src: "/images/hero-buffet.webp" },
  "dish-shortribs": { src: "/images/dish-shortribs.webp" },
  "dish-shrimp": { src: "/images/dish-shrimp.webp" },
  "dish-chicken": { src: "/images/dish-chicken.webp" },
  "tray-photo": { src: "/images/tray-photo.webp" },
  "buffet-photo": { src: "/images/buffet-photo.webp", position: "50% 26%" },
};

export default function Photo({
  id,
  placeholder,
}: {
  id: string;
  placeholder?: string;
}) {
  const photo = PHOTOS[id];
  if (!photo) {
    return (
      <div
        data-photo-slot={id}
        aria-hidden="true"
        title={placeholder}
        className="absolute inset-0 bg-[linear-gradient(135deg,#EBDDC5,#E2CFB1)]"
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo.src}
      alt=""
      loading={id === "hero-buffet" ? "eager" : "lazy"}
      className="absolute inset-0 w-full h-full object-cover"
      style={{ objectPosition: photo.position ?? "50% 50%" }}
    />
  );
}
