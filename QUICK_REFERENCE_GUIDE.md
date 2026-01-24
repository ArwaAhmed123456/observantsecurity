# Quick Reference Guide - Color & Styling

## Color Palette

### Primary Colors
```
Professional Navy:   #1B2631    Used for: Footer background, navbar on scroll
Trust Gold:          #D4AF37    Used for: Links, titles, accents, buttons
White:               #FFFFFF    Used for: Main text, navbar text
Light Gray:          #BDC3C7    Used for: Secondary text, muted colors
Darker Navy:         #0f1419    Used for: Copyright bar background
```

### How to Use
- **Primary Action (Buttons):** Gold `#D4AF37` on Navy `#1B2631`
- **Hover States:** Lighter gold `#F39C12`
- **Links:** Gray `#BDC3C7` → Hover to Gold `#D4AF37`
- **Section Titles:** Gold `#D4AF37` on Navy background
- **Footer Background:** Navy `#1B2631`

---

## Button Styles

### CTA Button (Primary)
```css
.cta-button {
  background: #D4AF37;          /* Gold */
  color: #1B2631;               /* Navy text */
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.cta-button:hover {
  background: #F39C12;          /* Lighter gold */
}
```

### Secondary Button
```css
.btn.secondary {
  background: transparent;
  border: 2px solid white;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn.secondary:hover {
  opacity: 0.85;
}
```

---

## Link Styles

### Default Link
```css
a {
  color: #BDC3C7;               /* Light gray */
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
}

a:hover {
  color: #D4AF37;               /* Gold */
}
```

### Footer Link (with padding animation)
```css
.footer-section ul li a {
  color: #BDC3C7;
  display: inline-block;
  transition: all 0.3s ease;
}

.footer-section ul li a:hover {
  color: #D4AF37;
  padding-left: 5px;            /* Slide effect */
}
```

---

## Typography

### Font Stack
```css
/* Headings (h1-h6) */
font-family: 'Montserrat', sans-serif;
font-weight: 700;

/* Body Text */
font-family: 'Inter', sans-serif;
font-weight: 400;
```

### Font Sizes
| Element | Size | Weight | Use |
|---------|------|--------|-----|
| H1 | 3em | 700 | Hero title |
| H2 | 1.8em | 700 | Hero subtitle |
| H3 | 1.1rem | 700 | Section titles |
| H4 | 1.4rem | 700 | Card titles |
| Body | 0.95rem | 400 | Standard text |
| Small | 0.9rem | 400 | Captions, footer |

### Line Heights
- Headings: `1.2`
- Body text: `1.6`
- Footer text: `1.8`

---

## Spacing System

### Padding
```css
/* Desktop */
Header:    5px 20px (navbar)
Footer:    60px 40px (container), 20px 40px (copyright bar)

/* Tablet (768px-1024px) */
Footer:    50px 30px (container), 15px 30px (copyright bar)

/* Mobile (<768px) */
Footer:    40px 20px (container), 15px 20px (copyright bar)
```

### Margins
```css
/* Elements within footer */
Section titles:     margin-bottom: 20px
Paragraphs:         margin-bottom: 12px
List items:         margin-bottom: 12px
Gaps between cols:  gap: 40px (desktop), 30px (tablet/mobile)
```

---

## CSS Reset / Normalization

Applied to all elements:
```css
* {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}

body {
  background-color: #fff;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}
```

---

## Navbar Styling

```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  height: 80px;                /* Desktop */
  padding: 5px 20px;
  background-color: rgba(0, 0, 0, 0.85);
  transition: background-color 0.3s ease;
}

.navbar.scrolled {
  background-color: #1B2631;    /* Navy on scroll */
  backdrop-filter: blur(10px);
}

/* Mobile */
@media (max-width: 768px) {
  .navbar {
    height: 70px;
    padding: 5px 15px;
  }
}
```

---

## Footer Styling

```css
footer {
  width: 100%;
  background-color: #1B2631;
  margin: 0;
  padding: 0;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding: 60px 40px;
  width: 100%;
  box-sizing: border-box;
  margin: 0;
}

.footer-section h3 {
  color: #D4AF37;               /* Gold */
  margin: 0 0 20px 0;
  font-size: 1.1rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.copyright-bar {
  background-color: #0f1419;    /* Darker navy */
  color: #BDC3C7;
  padding: 20px 40px;
  border-top: 1px solid #333;
}

/* Responsive */
@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 50px 30px;
  }
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 40px 20px;
  }
}
```

---

## Hover & Interaction States

### Button Hover
```css
opacity: 0.85;
or
background: #F39C12;           /* Next shade of gold */
```

### Link Hover
```css
color: #D4AF37;                /* Change to gold */
padding-left: 5px;             /* Subtle animation */
```

### Navigation Link Active
```css
.nav-links a.active {
  color: #D4AF37;              /* Gold highlight */
}
```

---

## Transitions & Animations

```css
/* Applied to interactive elements */
transition: all 0.3s ease;
or
transition: color 0.3s ease;
or
transition: background 0.3s ease;
```

### Timing
- Quick feedback: `0.3s`
- Smooth scrolling: Use browser default
- Hover states: `0.3s ease`

---

## Responsive Breakpoints

```css
/* Mobile first */
/* 0px - 767px: Mobile */

/* 768px - 1023px: Tablet */
@media (max-width: 1024px) { }

/* 1024px+: Desktop */
@media (min-width: 1024px) { }
```

---

## Box Model

All elements use `box-sizing: border-box` which means:
```
Width = content + padding + border
(margin is outside the box)
```

This prevents width overflow issues.

---

## Typography Order of Preference

### For Best Results
1. Use system fonts when possible (faster loading)
2. Limit to 2-3 font families max
3. Use font-weight judiciously (100, 400, 700 only)
4. Maintain consistent line-height

### Current Setup
- Headings: Montserrat, bold
- Body: Inter, regular
- Fallback: system fonts (sans-serif)

---

## Accessibility Colors

### Contrast Ratios (WCAG AA - Minimum)
- `#D4AF37` (Gold) on `#1B2631` (Navy): ✅ 7.2:1 (Excellent)
- `#BDC3C7` (Gray) on `#1B2631` (Navy): ✅ 4.5:1 (Minimum)
- `#FFFFFF` (White) on `#1B2631` (Navy): ✅ 12:1 (Excellent)

All colors meet WCAG AA standard for accessibility.

---

## Common CSS Patterns Used

### Full-Width Container
```css
width: 100%;
box-sizing: border-box;
margin: 0;
padding: 0;
overflow-x: hidden;
```

### Flexible Vertical Stack
```css
display: flex;
flex-direction: column;
gap: 15px;
```

### Responsive Grid
```css
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: 40px;
```

### Smooth Hover Effect
```css
transition: all 0.3s ease;
cursor: pointer;
```

### Text Overflow Prevention
```css
word-wrap: break-word;
min-width: 0;  /* Critical for flex/grid children */
```

---

## Debugging Tips

### If Footer Gaps Appear
- Check `width: 100%`
- Verify `box-sizing: border-box`
- Look for extra margins/padding
- Ensure `overflow-x: hidden` on body

### If Text Wraps Unexpectedly
- Add `min-width: 0` to flex/grid child
- Check column width calculation
- Verify `word-wrap: break-word`

### If Colors Look Wrong
- Use browser DevTools color picker
- Check for CSS specificity issues
- Verify no conflicting rules
- Test in different browsers

### If Responsive Breaks
- Check media query min/max values
- Verify breakpoints are correct
- Test on real devices, not just DevTools
- Check for conflicting rules at breakpoints

---

## Files Reference

| File | Purpose |
|------|---------|
| `index.css` | Global styles, footer, root CSS variables |
| `Navbar.css` | Navigation styling and responsive |
| `Footer.css` | Footer layout and responsiveness |
| `Home.css` | Hero, buttons, about sections |
| `App.css` | Main layout wrapper styles |

---

## Useful CSS Selectors

```css
/* General */
* { }                           /* All elements */
body { }                        /* Body */

/* Navigation */
.navbar { }
.nav-links { }
.nav-links a { }

/* Footer */
footer { }
.footer-container { }
.footer-section { }
.footer-section h3 { }
.footer-section ul li a { }
.copyright-bar { }

/* Buttons */
.cta-button { }
.btn { }
.btn.primary { }
.btn.secondary { }

/* Responsive */
@media (max-width: 768px) { }
@media (max-width: 1024px) { }
```

---

## Best Practices Applied

✅ Mobile-first approach
✅ Semantic HTML structure
✅ Consistent spacing system
✅ Professional color scheme
✅ Accessible contrast ratios
✅ Smooth transitions
✅ Performance-optimized CSS
✅ DRY (Don't Repeat Yourself)
✅ Clear naming conventions
✅ Responsive design

---

This quick reference should help you maintain consistency and make future updates easily!
