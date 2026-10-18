# Sisna & Noel — Luxury Interactive Wedding Invitation

An interactive, luxury wedding invitation web experience built with React 19, TypeScript, Vite, Tailwind CSS, and GSAP animations.

## Key Features

- **3D Gatefold Folio Opening**: Elegant gatefold unfolding animation with golden wax seal and synchronized background audio.
- **Audio Experience**: Ambient background music player with automatic unbox trigger and floating controls.
- **Interactive Scratch-off Foil Card**: Tactile canvas scratch-off reveal with confetti celebrations.
- **Sacred Scripture & Love Story**: Custom narrative cards and inspirational verses.
- **Live Event Details & Directions**: One-click Google Maps navigation for ceremony and reception venues.
- **Calendar Integration**: 1-click Google Calendar sync & `.ics` download for Apple/Outlook calendars.
- **Interactive Wishes Wall**: Guest blessings with emoji reactions stored locally.
- **Photo Gallery & Lightbox**: Responsive photo showcase.

## How to Customize for the Client

All couple information, dates, venues, family names, timeline, and gallery images are centralized in a single file:
👉 **[`src/data/weddingData.ts`](./src/data/weddingData.ts)**

### Updating Assets:
- **Photos**: Place the couple's photos in `public/images/`.
- **Music**: Replace `public/music.mp3` with the client's song of choice.
- **Favicon & Preview**: Replace `public/favicon.webp` and `public/images/preview.png` for WhatsApp/social link sharing previews.

## Development

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build for production
npm run build
```
