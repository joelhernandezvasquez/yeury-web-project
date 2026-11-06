---
name: Chef JD Catering & Treats
description: Warm cream-paper catering site: Playfair headlines, Montserrat body, olive pill CTAs.
colors:
  cream: "#f6ecdd"
  paper: "#fbf4e8"
  parchment: "#efe2cc"
  linen: "#f1dfc4"
  wheat: "#f3ddb0"
  gold: "#c9a45c"
  gold-light: "#e9cf98"
  ember: "#d9782d"
  burgundy: "#7a1e1e"
  olive: "#5f6b45"
  olive-dark: "#4e5938"
  ink: "#2b1a14"
  walnut: "#4a3328"
  bark: "#5a3d30"
  cocoa: "#6b4a3a"
typography:
  display:
    fontFamily: "Playfair Display, serif"
    fontSize: "48px"
    fontWeight: 600
    lineHeight: 1.1
  headline:
    fontFamily: "Playfair Display, serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.15
  body:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Montserrat, sans-serif"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.26em"
rounded:
  sm: "10px"
  md: "12px"
  lg: "16px"
  pill: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "28px"
components:
  button-primary:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "16px 28px"
  button-primary-hover:
    backgroundColor: "{colors.olive-dark}"
    textColor: "{colors.cream}"
  button-nav:
    backgroundColor: "{colors.olive}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "11px 20px"
  lang-toggle:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "5px 9px"
---

# Design System: Chef JD Catering & Treats

## Overview

**Creative North Star: "The Family Table"**

A set table at a celebration: warm cream paper, serif headlines, hospitable and generous. The system is warm, homey and polished: handmade in feeling, tidy enough to trust with an event. Food photography carries the appetite; color and type stay quiet and earthy around it.

Surfaces are flat paper tones layered cream to parchment, with burgundy and gold as ceremonial accents and olive as the single action color. Corners are soft, buttons are pills, and depth appears mostly as a response to hover or where cards sit over photos.

**Key Characteristics:**
- Cream and parchment paper surfaces, never white or cool grey
- Playfair Display for voice, Montserrat for utility
- Olive pill = the action; gold = rules, borders and eyebrows
- Soft radii, tinted (not black) shadows that lift on hover

## Colors

An earthy, food-derived palette: wheat and paper neutrals, walnut text, burgundy and gold accents, one olive action color.

### Primary
- **Field Olive** (#5f6b45): Every primary CTA ("Ordena ahora", "Ver paquetes"). Hover darkens to **Deep Olive** (#4e5938).
- **Cellar Burgundy** (#7a1e1e): Default link color and ceremonial emphasis.

### Secondary
- **Antique Gold** (#c9a45c): Borders, dividers, eyebrow accents, language-toggle outline. **Pale Gold** (#e9cf98) for highlights on dark.
- **Ember Orange** (#d9782d): Link hover and small warm highlights.

### Neutral
- **Warm Cream** (#f6ecdd): Page background. **Paper** (#fbf4e8): raised cards. **Parchment** (#efe2cc), **Linen** (#f1dfc4), **Wheat** (#f3ddb0): alternate section bands and tiles.
- **Ink Walnut** (#2b1a14): body text. **Walnut** (#4a3328), **Bark** (#5a3d30), **Cocoa** (#6b4a3a): dark bands and secondary text.

### Named Rules
**The One Action Rule.** Olive is the only filled-button color. Burgundy, gold and ember never fill a CTA.
**The Paper Rule.** No pure white or cool grey surfaces; every neutral leans warm.

## Typography

**Display Font:** Playfair Display (serif)
**Body Font:** Montserrat (sans-serif)

**Character:** Classic serif warmth for headings (italics for quoted promo lines) against clean geometric sans for information.

### Hierarchy
- **Display** (600, 48px, ~1.1): Hero and section headings.
- **Headline** (600, 34px): Sub-section titles on mobile and cards.
- **Title** (600, 19–22px): Package and dish names.
- **Body** (400, 14–16px, ~1.6): Descriptions, lists.
- **Label** (700, 11–12px, tracking .26em or .06em, uppercase): Eyebrows, nav, promo link.

### Named Rules
**The Eyebrow Rule.** Every section opens with a small wide-tracked uppercase label above a Playfair heading.

## Layout

Mobile-first with breakpoints at 760px (md) and 1060px (lg). Content sits in a centered container up to 1200px (narrower 760–1100px for text-led sections). Sections alternate paper tones; spacing is generous with 16–28px gutters and larger vertical bands. Touch targets keep at least 48px height for main CTAs.

## Elevation & Depth

Flat paper at rest with tonal layering between cream, paper and parchment. Shadows are tinted, never neutral black, and mostly appear on interaction.

### Shadow Vocabulary
- **Olive lift** (`0 12px 24px rgba(95,107,69,.35)`): primary button hover, paired with translateY(-2px).
- **Card soft** (`0 18px 40px rgba(43,26,20,.15)`): raised cards and photo frames.
- **Burgundy whisper** (`0 8px 26px rgba(122,30,30,.08)`): subtle featured cards.
- **Deep float** (`0 24px 60px rgba(0,0,0,.35)` / `0 30px 70px rgba(43,26,20,.28)`): panels over photography.

### Named Rules
**The Lift On Response Rule.** Resting surfaces stay flat; lift (shadow + 2px rise, 250ms) answers hover.

## Shapes

Soft and round. Buttons, chips and the language toggle are full pills; cards use 10–16px radii; avatars and badges are circles (50%). Occasional leaf-like decorative shapes (`0 100% 0 100%`) and teardrops (`50% 50% 50% 2px`) echo organic forms. Gold hairline borders define toggles and dividers.

## Components

### Buttons
- **Shape:** full pill.
- **Primary:** olive fill, cream text, semibold; 16px 28px at 15px text (hero), 11px 20px at 13px (nav).
- **Hover:** deep olive, rises 2px, olive lift shadow, 250ms transform/shadow/background.
- **Promo link:** uppercase 12px cream text with gold underline.

### Language Toggle
Gold-outlined pill with ES / EN segments (11px bold); active segment filled.

### Cards / Containers
Paper or parchment fill, 10–16px radius, soft tinted shadow only where over photos or featured; generous padding.

### Navigation
Sticky bar with section links (Menú, Paquetes, Eventos, Galería, Contacto), olive "Ordena ahora" pill and language toggle; mobile collapses to a menu with a full-width olive CTA and tel: link.

### Menu Builder
Interactive selector for proteins, rice, sides, salads, picaderas and dessert with guest count; ends in WhatsApp / form send.

## Do's and Don'ts

### Do:
- **Do** use olive pills for every primary action and keep one per viewport region.
- **Do** keep surfaces warm (cream #f6ecdd, paper #fbf4e8, parchment #efe2cc).
- **Do** pair a tracked uppercase eyebrow with a Playfair heading per section.
- **Do** tint shadows with olive, burgundy or walnut.
- **Do** respect reduced motion (animations are disabled under `prefers-reduced-motion`).

### Don't:
- **Don't** use pure white, black, or cool grey surfaces or shadows.
- **Don't** fill CTAs with burgundy, gold or ember.
- **Don't** use sharp corners on interactive elements.
- **Don't** add decorative imagery that isn't real food or the established leaf/teardrop forms.
