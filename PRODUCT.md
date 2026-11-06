# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hosts in Westchester, NY (and nearby) planning a gathering: family dinners, holidays, birthdays, baby showers, church and corporate events. Many are Spanish-first and visit on a phone. Their job: pick a package or assemble a menu, then get a price and availability from the chef.

## Product Purpose

Marketing and quote-request site for Chef JD's home-made Dominican catering ("Catering & Treats"). Success is a visitor sending a quote request (WhatsApp, phone or form) with a package or custom menu already chosen.

## Positioning

Home-made Dominican catering run by a personal chef ("hecho en casa, con amor"), quote-led rather than a checkout store: Chef JD replies personally with price and availability.

## Operating Context

- Offers: family dinner packages (serving 4–6, 8–11, 12–18), picaderas/party trays, event buffets, special dishes.
- A menu builder lets visitors choose dishes and headcount (minimum 4) and send the result via WhatsApp or the contact form.
- Orders need at least 48 hours notice; pickup or delivery.

## Capabilities and Constraints

- Existing codebase: Next.js 16 (App Router) + React 19 + Tailwind 4, in `app/`. Keep this stack. `AGENTS.md` warns Next.js APIs differ from training data; read `node_modules/next/dist/docs/` before writing code.
- Bilingual: Spanish (default) and English, copy in `app/components/content.ts`.
- No online payment or checkout (not confirmed as wanted).

## Brand Commitments

Name: Chef JD / "Catering & Treats". Existing logo files (`public/images/logo-*.png`) and bundled fonts in `public/fonts` are in use; treat as the current identity until the user says otherwise.

## Evidence on Hand

Food photography in `public/images/` (hero buffet, tray, dishes, buffet) and testimonials in the copy file. The "behind the kitchen" video is a placeholder awaiting client footage; do not fabricate video, customers or reviews.

## Product Principles

1. Quote requests are the conversion; every section should shorten the path to WhatsApp/phone.
2. Spanish-first, English with full parity.
3. Phone-first: hosts browse and decide on mobile.
4. Warm and personal over corporate: one chef, made at home.
5. Never invent proof, prices, or availability.
