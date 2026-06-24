# Aimel Hassan — Founder Portfolio

This repository contains the personal founder portfolio of **Aimel Hassan**, founder of **Valith AI Solutions**. Built to reflect a builder-first narrative, the portfolio transitions from standard developer showcases into a high-credibility founder narrative demonstrating first paid work, metrics, waitlist traction, and workflow-oriented systems.

Live URL: [portfolio-henna-tau-48.vercel.app](https://portfolio-henna-tau-48.vercel.app)

---

## ⚡ Tech Stack & Architecture

- **Core**: React 19, TypeScript, Vite 6
- **Styling**: Tailwind CSS v4 (vanilla CSS variables for custom variables)
- **Icons**: Lucide React
- **Hosting**: Vercel
- **API**: CounterAPI (visitor hits counter with ordinal formatting and localStorage caching)

---

## 🎨 Design Aesthetics & Tech Implementation

### 💡 Mouse-Tracking Spotlight Hover Grid
The background uses a custom SVG grid ([GridBackground.tsx](src/components/GridBackground.tsx)) featuring a hardware-accelerated spotlight effect. Instead of heavy JavaScript canvas rendering or state triggers, the cursor position is tracked natively via CSS variables (`--mouse-x` and `--mouse-y`) updated on mousemove. This renders a high-performance radial gradient spotlight that keeps interaction silky smooth at 60fps.

### 🎥 Real-Time Canvas Video Transparent Keying
The hero section features a pixel-art character animation ([idle-animation.mp4](public/idle-animation.mp4)). Because standard mp4 videos do not support native alpha transparency channels:
1. The video is loaded off-screen and drawn frame-by-frame onto a 2D `<canvas>` element ([TransparentVideo.tsx](src/components/TransparentVideo.tsx)).
2. A border-seeded BFS flood-fill algorithm (filtering off-white backgrounds with average value `237`) maps background pixels and converts them to transparent alphas.
3. Edge pixels undergo a color de-multiplication filter (`C_new = (C_orig - 250 * (1 - a)) / a`) to eliminate fuzzy compression halos and halos around the sprite edges.
4. Enclosed pixels (like the character's white eyes) are detected and explicitly excluded from transparent masking.
5. BFS arrays (`visited` and `queue`) are cached in React refs to prevent GC pauses or allocations on every animation frame.

---

## 📁 Repository Structure

```
├── .github/          # GitHub actions & workflows
├── public/           # Static assets (transparent video source, sitemaps, robots, LLMs metadata)
│   ├── llms.txt      # Structured AEO prompt data for AI search engines
│   ├── robots.txt    # SEO / AI bot indexing rules
│   ├── humans.txt    # Creator and standards metadata
│   └── sitemap.xml   # Search crawler indexing sitemap
├── src/
│   ├── components/   # UI Section components
│   ├── App.tsx       # Main page layout routing
│   ├── index.css     # Global styles & Tailwind layers
│   └── main.tsx      # Entrypoint script
├── index.html        # HTML shell containing SEO tags & AEO JSON-LD Schema
└── vite.config.ts    # Build bundler configurations
```

---

## 🛠️ Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Run the production build:**
   ```bash
   npm run build
   ```

---

## 🤖 SEO & AEO (Answer Engine Optimization)
This portfolio is optimized for search engines (SEO) and artificial intelligence answer engines (AEO, e.g., Perplexity, Claude, ChatGPT Search):
- **JSON-LD Schema**: Embedded `Person` and `Organization` structured data inside `index.html`.
- **llms.txt**: Located at [/llms.txt](public/llms.txt) to provide clear, high-density structured markdown for LLMs seeking information about Aimel Hassan and Valith AI Solutions.
- **AI-friendly robots.txt**: Explicitly permissions GPTBot, ClaudeBot, and PerplexityBot to scrape and fetch information.
