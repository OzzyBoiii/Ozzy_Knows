# 🎨 VISUAL STYLING & CUSTOMIZATION GUIDE
## Make Your Vault Beautiful and Unique

---

## 🌈 CSS COLOR CUSTOMIZATION

### Method 1: Edit CSS Variables (Easy)

Open `lovrin-cornell-ultimate.css` and edit these lines:

```css
:root {
  /* Change accent color (blue by default) */
  --lovrin-accent: #4a90e2;           /* Try: #e74c3c (red), #2ecc71 (green) */
  
  /* Change visual background */
  --lovrin-bg-visual: rgba(245, 245, 250, 0.4);
  
  /* Change heading color */
  --lovrin-heading: #2c3e50;
  
  /* Change divider line */
  --cornell-visual-border: rgba(100, 100, 100, 0.65);
}
```

### Method 2: Use Style Settings Plugin

1. Install "Style Settings" plugin
2. Our CSS auto-detects as customizable
3. Settings → Style Settings → Lovrin Cornell
4. Use GUI sliders to change colors!

---

## 🎨 COLOR SCHEMES

### Professional Blue (Default)
```css
--lovrin-accent: #4a90e2;
--lovrin-heading: #2c3e50;
--lovrin-bg-visual: rgba(245, 245, 250, 0.4);
```

### Medical Red
```css
--lovrin-accent: #e74c3c;
--lovrin-heading: #c0392b;
--lovrin-bg-visual: rgba(255, 240, 240, 0.4);
```

### Scientific Green
```css
--lovrin-accent: #27ae60;
--lovrin-heading: #229954;
--lovrin-bg-visual: rgba(240, 255, 245, 0.4);
```

### Mathematics Purple
```css
--lovrin-accent: #9b59b6;
--lovrin-heading: #8e44ad;
--lovrin-bg-visual: rgba(250, 245, 255, 0.4);
```

### Elegant Gold
```css
--lovrin-accent: #f39c12;
--lovrin-heading: #d68910;
--lovrin-bg-visual: rgba(255, 250, 240, 0.4);
```

### Minimalist Gray
```css
--lovrin-accent: #7f8c8d;
--lovrin-heading: #2c3e50;
--lovrin-bg-visual: rgba(245, 245, 245, 0.4);
```

---

## 📐 LAYOUT CUSTOMIZATION

### Wider Cue Column
```css
--cornell-cue-width: 350px;  /* Default: 280px */
```

### Wider Visual Column
```css
--cornell-visual-width: 50%;  /* Default: 45% */
```

### More Spacing
```css
--cornell-gap: 30px;          /* Default: 20px */
--lovrin-padding: 20px;       /* Default: 15px */
--lovrin-margin: 30px;        /* Default: 20px */
```

### Larger Font
```css
--lovrin-font-size: 16px;     /* Default: 15px */
--lovrin-line-height: 1.8;    /* Default: 1.6 */
```

---

## 🖼️ BANNER IMAGE CUSTOMIZATION

### Change Banner Height
```css
.banner-image .callout[data-callout="banner-image"] img {
  height: 300px;  /* Default: 250px */
}
```

### Different Banner Effects

#### Blur Effect
```css
.banner-image .callout[data-callout="banner-image"] img {
  filter: blur(2px);
  transition: filter 0.3s;
}

.banner-image .callout[data-callout="banner-image"] img:hover {
  filter: blur(0px);
}
```

#### Grayscale to Color
```css
.banner-image .callout[data-callout="banner-image"] img {
  filter: grayscale(100%);
  transition: filter 0.3s;
}

.banner-image .callout[data-callout="banner-image"] img:hover {
  filter: grayscale(0%);
}
```

#### Zoom on Hover
```css
.banner-image .callout[data-callout="banner-image"] img {
  transition: transform 0.3s;
}

.banner-image .callout[data-callout="banner-image"] img:hover {
  transform: scale(1.05);
}
```

---

## ✨ VISUAL EFFECTS

### Smooth Animations
Add to CSS:

```css
.lovrin-cornell * {
  transition: all 0.2s ease;
}
```

### Shadow Effects
```css
.lovrin-cornell .callout[data-callout="cue"] {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.lovrin-cornell .lovrin-visual-block {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

### Hover Highlights
```css
.lovrin-cornell h2:hover,
.lovrin-cornell h3:hover {
  color: var(--lovrin-accent);
  transform: translateX(5px);
}
```

### Animated Divider Line
```css
.lovrin-cornell .lovrin-content-grid::after {
  background: linear-gradient(
    to bottom,
    transparent,
    var(--cornell-visual-border),
    transparent
  );
  animation: pulse 3s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
```

---

## 🎭 THEME VARIATIONS

### Light Theme (Bright)
```css
.theme-light.lovrin-cornell {
  --lovrin-bg-text: #ffffff;
  --lovrin-bg-visual: rgba(240, 245, 255, 0.6);
  --lovrin-accent: #0066cc;
  --lovrin-heading: #1a1a1a;
}
```

### Dark Theme (Deep Black)
```css
.theme-dark.lovrin-cornell {
  --lovrin-bg-text: #1a1a1a;
  --lovrin-bg-visual: rgba(30, 30, 40, 0.6);
  --lovrin-accent: #66b3ff;
  --lovrin-heading: #e0e0e0;
  --cornell-visual-border: rgba(200, 200, 200, 0.3);
}
```

### Sepia Theme (Vintage)
```css
.lovrin-cornell {
  filter: sepia(20%);
  --lovrin-bg-visual: rgba(245, 240, 230, 0.5);
  --lovrin-accent: #8b4513;
}
```

---

## 📝 CUSTOM CALLOUT STYLES

### Create New Callout Type

Add to CSS:

```css
.lovrin-cornell .callout[data-callout="important"] {
  background: rgba(255, 0, 0, 0.1);
  border-left: 4px solid #ff0000;
  font-weight: 600;
}

.lovrin-cornell .callout[data-callout="idea"] {
  background: rgba(255, 215, 0, 0.1);
  border-left: 4px solid #ffd700;
}

.lovrin-cornell .callout[data-callout="question"] {
  background: rgba(0, 128, 255, 0.1);
  border-left: 4px solid #0080ff;
}
```

Usage:
```markdown
> [!important]
> Critical information

> [!idea]
> Brainstorming note

> [!question]
> Something to research
```

---

## 🖌️ FONT CUSTOMIZATION

### Change Font Family
```css
.lovrin-cornell {
  font-family: 'Georgia', serif;  /* Serif font */
}

/* Or modern sans-serif */
.lovrin-cornell {
  font-family: 'Inter', 'Segoe UI', sans-serif;
}

/* Or monospace for code feel */
.lovrin-cornell {
  font-family: 'JetBrains Mono', 'Consolas', monospace;
}
```

### Different Fonts for Headings
```css
.lovrin-cornell h1,
.lovrin-cornell h2,
.lovrin-cornell h3 {
  font-family: 'Playfair Display', serif;
}
```

### Code Font
```css
.lovrin-cornell code,
.lovrin-cornell pre {
  font-family: 'Fira Code', 'JetBrains Mono', monospace;
}
```

---

## 🎯 ADVANCED VISUAL TRICKS

### Gradient Backgrounds
```css
.lovrin-cornell .lovrin-visual-block {
  background: linear-gradient(
    135deg,
    rgba(245, 245, 250, 0.4),
    rgba(230, 235, 245, 0.4)
  );
}
```

### Pattern Backgrounds
```css
.lovrin-cornell .lovrin-visual-block {
  background-image: 
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 10px,
      rgba(0, 0, 0, 0.02) 10px,
      rgba(0, 0, 0, 0.02) 20px
    );
}
```

### Sticky Header Effect
```css
.lovrin-cornell h1 {
  position: sticky;
  top: 0;
  background: var(--background-primary);
  padding: 10px 0;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### Numbered Headings
```css
.lovrin-cornell {
  counter-reset: h2counter;
}

.lovrin-cornell h2:before {
  content: counter(h2counter) ". ";
  counter-increment: h2counter;
  color: var(--lovrin-accent);
  font-weight: bold;
}
```

---

## 🌟 SPECIAL EFFECTS

### Reading Progress Bar
```css
.lovrin-cornell::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: var(--lovrin-accent);
  width: var(--scroll-progress, 0%);
  z-index: 1000;
}
```

### Highlight on Scroll
```css
.lovrin-cornell h2,
.lovrin-cornell h3 {
  transition: background 0.3s;
}

.lovrin-cornell h2:target,
.lovrin-cornell h3:target {
  background: rgba(74, 144, 226, 0.2);
  padding: 10px;
  border-radius: 4px;
}
```

### Print Optimization
```css
@media print {
  .lovrin-cornell {
    font-size: 11pt;
    line-height: 1.5;
  }
  
  .lovrin-cornell .callout[data-callout="cue"] {
    float: none;
    margin-left: 0;
    page-break-inside: avoid;
  }
  
  .lovrin-cornell h2, .lovrin-cornell h3 {
    page-break-after: avoid;
  }
}
```

---

## 🎨 PRE-MADE THEMES

### Medical Student Theme
```css
:root {
  --lovrin-accent: #dc143c;
  --lovrin-heading: #8b0000;
  --lovrin-bg-visual: rgba(255, 240, 240, 0.5);
  --lovrin-font-size: 15px;
}

.lovrin-cornell h1 {
  color: #dc143c;
  border-bottom: 3px solid #dc143c;
}
```

### STEM Theme
```css
:root {
  --lovrin-accent: #0066cc;
  --lovrin-heading: #003d7a;
  --lovrin-bg-visual: rgba(230, 240, 255, 0.5);
  --lovrin-font-size: 15px;
  font-family: 'Computer Modern', serif;
}
```

### Minimalist Theme
```css
:root {
  --lovrin-accent: #000000;
  --lovrin-heading: #000000;
  --lovrin-bg-visual: rgba(250, 250, 250, 0.8);
  --cornell-visual-border: rgba(0, 0, 0, 0.2);
}

.lovrin-cornell {
  font-family: 'Helvetica Neue', sans-serif;
}
```

### Colorful Theme
```css
:root {
  --lovrin-accent: #ff6b6b;
}

.lovrin-cornell h2 { color: #4ecdc4; }
.lovrin-cornell h3 { color: #45b7d1; }
.lovrin-cornell h4 { color: #96ceb4; }
```

---

## 📱 MOBILE OPTIMIZATIONS

### Larger Touch Targets
```css
@media (max-width: 700px) {
  .lovrin-cornell a,
  .lovrin-cornell button {
    min-height: 44px;
    display: inline-block;
    padding: 10px;
  }
}
```

### Simplified Mobile Layout
```css
@media (max-width: 700px) {
  .lovrin-cornell .callout[data-callout="cue"] {
    width: 100%;
    margin: 10px 0;
    float: none;
  }
  
  .lovrin-cornell .lovrin-visual-block {
    grid-template-columns: 1fr;
  }
}
```

---

## 🎯 ACCESSIBILITY IMPROVEMENTS

### High Contrast Mode
```css
@media (prefers-contrast: high) {
  .lovrin-cornell {
    --lovrin-accent: #0000ff;
    --cornell-visual-border: rgba(0, 0, 0, 0.9);
  }
  
  .lovrin-cornell a {
    text-decoration: underline;
  }
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  .lovrin-cornell * {
    animation: none !important;
    transition: none !important;
  }
}
```

### Focus Indicators
```css
.lovrin-cornell *:focus {
  outline: 3px solid var(--lovrin-accent);
  outline-offset: 2px;
}
```

---

## 🔧 TROUBLESHOOTING STYLES

### If Colors Don't Change
1. Clear Obsidian cache: Settings → About → Clear cache
2. Restart Obsidian
3. Re-enable CSS snippet

### If Layout Breaks
1. Disable other CSS snippets one by one
2. Check for conflicting plugins
3. Reset to default variables

### If Mobile Looks Wrong
1. Test responsive breakpoint
2. Adjust `--mobile-breakpoint` variable
3. Check media queries

---

## 💡 TIPS

1. **Test Changes**: Make small changes, reload to see effect
2. **Backup**: Keep copy of original CSS
3. **Use Variables**: Change variables instead of hardcoded values
4. **Browser DevTools**: F12 to inspect and test styles live
5. **Community Themes**: Check others' CSS for inspiration

---

## 📚 RESOURCES

### Learn CSS:
- https://developer.mozilla.org/en-US/docs/Web/CSS
- https://css-tricks.com

### Obsidian CSS:
- https://docs.obsidian.md/Themes/App+themes/Build+a+theme
- r/ObsidianMD (CSS flair)

### Color Tools:
- https://coolors.co (color palette generator)
- https://color.adobe.com (Adobe Color)
- https://paletton.com (color scheme designer)

---

**Experiment, have fun, make it yours!**

*Remember: The best theme is the one that makes YOU want to take notes!*

---

*Last updated: 2024-03-24*
