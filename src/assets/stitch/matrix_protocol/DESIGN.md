# Design System Specification: Terminal / Cyberpunk Dark

## 1. Overview & Creative North Star: "The Ghost in the Machine"
The Creative North Star for this design system is **"The Ghost in the Machine."** This is an ultra-minimalist, retro-futuristic framework that treats the browser as a high-end command-line interface. 

We are moving beyond "standard" dark mode by embracing a pure-black void (#000000) and puncturing it with high-frequency neon accents. To break the "template" look, we utilize **intentional asymmetry**: information is often pushed to the extreme edges of the screen, leaving vast, cinematic "dead space" in the center. Elements do not sit in boxes; they float as data fragments, organized by wireframe geometry and sharp, zero-radius corners.

## 2. Colors & Surface Logic
The palette is rooted in absolute darkness, using light not as a background, but as a signal.

### Core Palette
*   **Pure Background:** `#000000` (The Void)
*   **Primary Accent:** `primary_container` (`#39FF14`) — Reserved for high-priority interactive signals.
*   **Secondary Accent:** `secondary_container` (`#00EEFC`) — Used for data visualization and secondary status.
*   **Surface Hierarchy:**
    *   `surface_container_lowest`: `#0E0E0E` (Subtle depth)
    *   `surface_container_high`: `#2A2A2A` (Elevated modules)

### The "No-Line" Rule
Prohibit standard 1px solid borders for layout sectioning. In this system, boundaries are defined by **Background Color Shifts**. To separate a sidebar from a main feed, transition from `#000000` to `surface_container_low` (`#1C1B1B`). 

### The "Ghost Border" Fallback
If a container requires a physical boundary for focus or state, use a "Ghost Border." This is the `outline_variant` token (`#3C4B35`) at **15% opacity**. It should feel like a faint phosphor trace on a CRT monitor, not a solid wall.

### Signature Textures: The Glitch & The Glow
*   **The CRT Scanline:** Apply a subtle 2px repeating linear-gradient overlay across the entire UI to mimic a cathode-ray tube.
*   **Heading Gradients:** All `display` and `headline` typography must use the signature linear gradient: `Dark Green -> Neon Green -> Cyan Blue`.

## 3. Typography: Monospaced Authority
We utilize **Space Grotesk** for its technical, engineered feel, supplemented by system monospaced fonts for data-heavy strings.

*   **Display & Headline Scale:** Large, aggressive, and gradient-filled. These function as structural anchors. Use `display-lg` (3.5rem) to dominate the viewport.
*   **Body & Labels:** High-contrast legibility. Use `body-md` (0.875rem) for most content to maintain the "compact terminal" aesthetic.
*   **The Intentional Weight Shift:** While headings are bold and technical, labels should be extremely small (`label-sm`: 0.6875rem) and uppercase with increased letter spacing (0.1rem) to evoke serial numbers on hardware.

## 4. Elevation & Depth: Tonal Layering
Traditional dropshadows are forbidden. Depth in this system is "Digital," not "Physical."

*   **The Layering Principle:** Stack surfaces from dark to light. A `surface_container_highest` (`#353534`) card should sit atop a `surface_dim` (`#131313`) background to create a "lifted" state.
*   **Neon Backglow:** For "floating" elements like modals or active CTAs, replace shadows with a **Neon Glow**. Use the `primary_container` color with a large blur (20px-40px) at 10% opacity. This mimics the light emission of a plasma screen.
*   **Glassmorphism:** Use `surface_bright` (`#393939`) at 40% opacity with a `backdrop-filter: blur(10px)` for overlays. This allows the wireframe geometry of the background to bleed through, maintaining the "hacker" aesthetic.

## 5. Components

### Buttons
*   **Primary:** Sharp 0px corners. Background: `primary_container` (`#39FF14`). Text: `on_primary` (`#053900`). 
*   **Ghost (Secondary):** 1px border using `primary_container` at 50% opacity. No fill.
*   **State:** On hover, apply a "Glitch" effect (horizontal 2px shift) and 100% opacity border.

### Input Fields
*   **Styling:** Forgo the 4-sided box. Use a single bottom border (`outline_variant`). 
*   **Active State:** The bottom border transforms into a `primary_container` solid line with a subtle neon outer glow.
*   **Caret:** Use a block-style blinking cursor (█) instead of a line.

### Cards & Lists
*   **Rule:** Forbid divider lines. 
*   **Separation:** Use `spacing-8` (1.75rem) of vertical whitespace or a subtle background shift to `surface_container_lowest`.
*   **Data Visualization:** Use abstract wireframes and geometric shapes (triangles, hex codes) instead of icons.

### Terminal Chips
*   Small, rectangular tags with `surface_variant` backgrounds. Text must be `ui-monospace` to indicate metadata or system status.

## 6. Do's and Don'ts

### Do:
*   **Do** use 0px border-radius for everything. Sharpness is mandatory.
*   **Do** embrace asymmetry. It is okay for the left side of the screen to be heavier than the right.
*   **Do** use "Wireframe" imagery. If a visual is needed, use a green-stroked vector outline of a shape rather than a photo.
*   **Do** use the `0.5` spacing unit (0.1rem) for tight technical groupings.

### Don't:
*   **Don't** use soft curves or rounded corners (0px is the rule).
*   **Don't** use grey shadows. If something glows, it glows Green or Cyan.
*   **Don't** use standard iconography (Home, Gear, User). Use text labels or terminal-inspired symbols ( `~/`, `root`, `_`).
*   **Don't** use "Natural" colors. Every color must look like it was generated by a monitor in 1992 or 2077.