# Coffee Shop Mobile App — Design Brainstorm

## Three Stylistic Approaches

### 1. Espresso Noir
A dark, moody coffeehouse aesthetic with deep espresso browns, warm amber glows, and cinematic product photography. Feels like a late-night specialty roastery — premium, intimate, sensory.
Probability: 0.07

### 2. Cream & Craft (Editorial Artisan)
A warm, editorial design inspired by specialty coffee magazines and craft packaging: cream/paper backgrounds, deep espresso-brown ink, serif display type, organic grain textures, and soft card layouts. Feels artisanal, trustworthy, and hand-crafted.
Probability: 0.05

### 3. Café Pop (Playful Illustration)
A bright, cheerful style with pastel mint/coral accents, chunky rounded shapes, illustrated icons, and bouncy micro-interactions. Feels friendly and energetic, like a neighborhood brunch café.
Probability: 0.03

---

## CHOSEN: Cream & Craft (Editorial Artisan)

**Design Movement:** Editorial / artisanal print design — inspired by specialty coffee magazine layouts (Drift, Kinfolk) and modern craft packaging. Warm minimalism with a strong typographic voice.

**Core Principles:**
1. Paper-first canvas: warm cream (#F7F2EA-ish) surfaces instead of sterile white — the UI should feel like textured stationery.
2. Editorial typography hierarchy: a high-contrast serif display (Fraunces) for headings and product names, a clean humanist sans (Outfit) for UI labels and body.
3. Warm ink accents: deep espresso brown as the "ink" color for text and primary actions; a burnt-caramel amber as the brand accent.
4. Soft depth: cards use gentle warmth-tinted shadows and rounded corners (2xl), never heavy borders or flat outlines.

**Color Philosophy:**
The palette evokes roasted beans and steamed milk. Cream background (#F7F1E7) calms the eye; espresso ink (#2B2017 / oklch) gives authority; caramel accent (#C06A2C / oklch ~0.55 0.13 45) is the ownable "brand button" color, used sparingly for CTAs, active states, and the tab indicator. Muted latte gray-brown for secondary text. No purple, no neon — everything stays in the brown/cream family.

**Layout Paradigm:**
Mobile-first "phone frame" centered on desktop (max-w-md container floating on a cream desktop background with subtle grain). Inside the phone, screens use asymmetric editorial layouts: oversized greeting text left-aligned, horizontal scrolling category rows, staggered product grids, and a floating bottom navigation with a soft raised pill. Avoid centered symmetry; section headers are left-aligned with a small label + big serif title stacked.

**Signature Elements:**
1. Stacked label + serif headline pattern ("NEW ARRIVALS" small caps over a big "Popular now" title).
2. A caramel "ink dot" motif: small filled circles marking active states and list items.
3. Warm-tinted soft shadows on product cards with slightly rotated featured card in the hero carousel.

**Interaction Philosophy:**
Tactile and quiet — buttons scale down 0.97 on press, cards lift slightly on hover/tap, cart badge animates with a spring pop. Category tabs slide an underline pill. Nothing flashes; transitions are 150–250ms ease-out.

**Animation:**
- Page/screen transitions: subtle fade + 12px rise, 220ms.
- Product cards: staggered entrance 40–60ms apart.
- Add-to-cart: icon morphs with a quick pop + toast.
- Quantity steppers: 150ms scale press.
- All gated behind prefers-reduced-motion.

**Typography System:**
- Display/headlines/product names: "Fraunces" (Google Fonts), weights 600–700, tight leading.
- UI/body/labels: "Outfit", weights 400–600.
- Hierarchy: small-caps letter-spaced overline (11px, 600, +0.12em) → serif title (28–32px) → body (15px) → caption (12–13px muted).
- Prices in Fraunces 600 for an editorial touch.

**Brand Essence:** "Roast & Ritual — a specialty coffee app for people who treat their morning cup like a small ceremony." Personality: artisanal, warm, unhurried.

**Brand Voice:** Quietly confident, sensory, second-person. Examples: "Your morning ritual, poured fresh." / "Two taps from the perfect pour-over." No "Welcome to our website" filler.

**Wordmark & Logo:** A steaming cup glyph in caramel, paired with the wordmark "Roast & Ritual" set in Fraunces 600 with an ampersand flourish. Logo mark used in header and favicon.

**Signature Brand Color:** Caramel amber — oklch(0.58 0.13 50) (approx #C06A2C).
