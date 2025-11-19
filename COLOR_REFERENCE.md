# Voltera Website - Exact Color Reference

This document provides the complete list of all colors used in the Voltera website replica, extracted from the original site.

## Primary Brand Colors

### Main Brand Green
- **Hex:** `#bcf26d`
- **Usage:** Primary accent color, buttons, hover states, stars, icons
- **RGB:** rgb(188, 242, 109)

### Secondary Green (Hover)
- **Hex:** `#a8de5a`
- **Usage:** Button hover states
- **RGB:** rgb(168, 222, 90)

### Alternative Green Variants (from original)
- **Hex:** `#79dc32` - Darker green variant
- **Hex:** `#57c30f` - Deep green variant

### Light Green Background
- **Hex:** `#f3fee2`
- **Usage:** Sub-headings background (from original site)
- **RGB:** rgb(243, 254, 226)

## Text Colors

### Primary Text
- **Hex:** `#000000`
- **Usage:** Main headings, primary text, button text
- **RGB:** rgb(0, 0, 0)

### Secondary Text
- **Hex:** `#333333`
- **Usage:** Body text, descriptions, navigation links (scrolled state)
- **RGB:** rgb(51, 51, 51)

### Tertiary Text
- **Hex:** `#999999`
- **Usage:** Footer text, muted content
- **RGB:** rgb(153, 153, 153)

### White Text
- **Hex:** `#ffffff`
- **Usage:** Hero text, navigation (transparent state), trust badges
- **RGB:** rgb(255, 255, 255)

## Background Colors

### Pure White
- **Hex:** `#ffffff`
- **Usage:** Solutions section, FAQ section, testimonial cards
- **RGB:** rgb(255, 255, 255)

### Light Gray
- **Hex:** `#f9f9f9`
- **Usage:** Testimonials section background, FAQ cards
- **RGB:** rgb(249, 249, 249)

### Lighter Gray
- **Hex:** `#f3f3f3`
- **Usage:** FAQ hover states
- **RGB:** rgb(243, 243, 243)

### Dark Gray (Footer)
- **Hex:** `#1a1a1a`
- **Usage:** Footer background
- **RGB:** rgb(26, 26, 26)

## Border & Accent Colors

### Dark Border
- **Hex:** `#333333`
- **Usage:** Footer divider borders
- **RGB:** rgb(51, 51, 51)

## Image Placements

### Header Logo
- **File:** `/WhatsApp Image 2025-11-11 at 13.46.29.jpeg`
- **Location:** Header next to "Voltera" text
- **Size:** h-10 (40px height)

### Solutions Section Images

#### Zonnepanelen (Solar Panels)
- **File:** `/WhatsApp Image 2025-11-11 at 13.48.32.jpeg`
- **Shows:** Solar panel installation worker

#### Thuisbatterij (Home Battery)
- **File:** `/WhatsApp Image 2025-11-11 at 13.52.13 (2).jpeg`
- **Shows:** White home battery units on wall

#### Warmtepomp (Heat Pump)
- **File:** `/WhatsApp Image 2025-11-11 at 13.52.13 (3).jpeg`
- **Shows:** Heat pump unit installation

#### Airco (Air Conditioning)
- **File:** `/WhatsApp Image 2025-11-11 at 13.45.14.jpeg`
- **Shows:** Outdoor AC units on exterior wall

## Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
```

## Color Usage Summary

| Element | Color | Hex Code |
|---------|-------|----------|
| Primary Accent | Lime Green | `#bcf26d` |
| Hover State | Lighter Green | `#a8de5a` |
| Main Headings | Black | `#000000` |
| Body Text | Dark Gray | `#333333` |
| Footer Text | Light Gray | `#999999` |
| Main Backgrounds | White | `#ffffff` |
| Alt Backgrounds | Light Gray | `#f9f9f9` |
| Footer Background | Dark Gray | `#1a1a1a` |
| White Text | White | `#ffffff` |
| Borders | Dark Gray | `#333333` |

## Design Notes

1. All transitions use `duration-300` (300ms) for smooth animations
2. Hover effects scale buttons by 1.05 (`hover:scale-105`)
3. Shadow effects: `shadow-lg` for elevated elements, `shadow-md` for medium depth
4. Border radius: `rounded-full` for buttons, `rounded-2xl` for cards
5. The header transitions from transparent to white background on scroll
6. All images in the solutions section have hover zoom effect (`group-hover:scale-110`)

## Animations

### Icon Animations (matching reference site)

1. **Spin Animation (2s linear infinite)**
   - Used for: Solar icon, Air conditioning icon
   - Full 360° rotation every 2 seconds
   - Linear timing function

2. **Bounce Animation (2s ease-in-out infinite)**
   - Used for: Battery icon, Heat pump icon
   - Vertical movement: 0px to -6px
   - Smooth ease-in-out timing

3. **Float Animation (3s ease-in-out infinite)**
   - Used for: CTA button icon
   - Vertical movement: 0px to -10px
   - Creates gentle floating effect

### Hero Section Updates

- **Background:** Solar panel image (`/images/WhatsApp Image 2025-11-11 at 13.52.13 (5).jpeg`)
- **Overlay:** Dark gradient (70% black) for text readability
- **Background positioning:** `bg-cover bg-center bg-no-repeat`

### Logo Improvements

- **New SVG Logo:** Transparent background with gradient green colors
- **Hover effect:** Scale up to 110% (`hover:scale-110`)
- **Colors used in logo:**
  - Primary gradient: `#d4f587` → `#bcf26d` → `#a8de5a`
  - Secondary gradient: `#79dc32` → `#57c30f`
  - Accent: White with 30% opacity

### Animated Icons in Solutions Section

Each solution card now features:
- Animated icon in top-right corner
- Icon background: `#bcf26d` with rounded full shape
- Icon size: 28px
- Shadow: `shadow-lg`
- Different animation per card type

## Technical Implementation

### CSS Animations

```css
@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes bounce-subtle {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```

### Responsive Design

- Hero background scales responsively with `bg-cover`
- Logo scales proportionally maintaining aspect ratio
- All animations maintain performance across devices
- Icons resize appropriately on mobile screens

## Accessibility

- Logo maintains readability against all backgrounds
- Sufficient contrast ratios maintained (WCAG AA compliant)
- Animations respect user preferences
- Alt text provided for all images

## Performance Optimizations

- SVG logo loads instantly (no HTTP request)
- CSS animations use GPU acceleration
- Background images optimized for web
- Animations use `transform` for better performance

## Original Site Reference

Colors extracted from: `https://wordpress-dev.voltera.nl/`

Last Updated: November 11, 2025 (with visual improvements)
