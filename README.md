# পুজোর সাথী — Homepage

Pure HTML / CSS / vanilla JS, no build step. Just open `index.html` in a browser
(double-click works — nothing requires a local server).

## Where to edit things

| I want to change...                          | Edit this file                          |
|-----------------------------------------------|------------------------------------------|
| Colors (day/night palette)                    | `css/tokens.css`                         |
| Fonts / type sizes                             | `css/tokens.css`                         |
| Hero headline, subtext, any section's copy     | `index.html` (each section is commented) |
| Layout of a specific section                   | `css/sections.css`                       |
| Buttons, cards, chips, nav, player look         | `css/components.css`                     |
| Countdown target date                          | `js/countdown.js` → `TARGET_ISO`         |
| Day/night switch hours                          | `js/theme.js` → `prefersNight()`         |
| Petal count / colors                            | `js/particles.js`                        |
| Puja radio track                                | `index.html` → `<audio id="pujaAudio">` source, and `player-track` text |

## Still placeholder, worth replacing before launch

- **About the creator** section (`#about` in `index.html`) has bracketed placeholder text — swap in the real name/bio.
- **Community cards** (`#community`) use invented sample people — replace with real member data once you have it, or wire this section to your backend.
- **"সাথী খুঁজুন" CTA** buttons currently link to `#` / anchor scroll only — point them at your actual signup/matching flow.
- **Puja radio** has no audio file yet — the player UI works, but `<audio>` has an empty `src`. Add a royalty-free track.
- Footer social links (`Instagram`, `Facebook`) are placeholders.

## Notes on the design choices

- Countdown targets **Maha Shashthi, 17 October 2026** (IST) — the day pandals formally open. Update the date each year in `js/countdown.js`.
- Day/night theme auto-switches based on the visitor's local clock (day: 6am–6pm), with a manual toggle (🌙/☀️) in the nav that overrides auto-detection once clicked, saved via `localStorage`.
- Numerals across the clock/countdown render in Bengali digits (via `PS.toBanglaDigits` in `js/theme.js`) for a consistent Bengali-first feel.
- No external images are used — the hero backdrop and dividers are hand-drawn inline SVG line-art plus CSS gradients, so there's nothing to source or license.
- All JS is plain `<script>` files attached to a shared `window.PS` namespace (not ES modules), specifically so the site still runs if opened directly from disk.
