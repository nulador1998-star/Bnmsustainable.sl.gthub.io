# Nord Electric - Responsive Website

A complete, responsive and modern website for Nord Electric - Energy Consultancy and Management.

## Features

### 🎨 Responsive Design

- **Mobile First Approach**: Optimized for mobile devices, tablets and desktops
- **Breakpoints**:
  - Mobile: up to 480px
  - Tablet: up to 768px
  - Desktop: 768px+
  - Extra small devices: 320px

### 🚀 Features

1. **Interactive Navigation**
   - Responsive menu with hamburger for mobile
   - Sticky navbar (stays fixed when scrolling)
   - Links with active state
   - Automatic smooth scroll

2. **Main Sections**
   - Hero Section: Banner with main call-to-action
   - About: Company information with badges
   - Solutions: Solution cards with icons
   - Sustainability: Section with circular pillar diagram
   - News: Latest news with interactive cards
   - Clients: Client logos/icons
   - Works/Projects: Gallery of works
   - Newsletter: Subscription form
   - Footer: Quick links and contact information

3. **Interactive Elements**
   - Scroll animations
   - Hover effects on cards
   - Mobile menu with smooth transitions
   - Functional newsletter form
   - Image lazy loading

### 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Grid, Flexbox, Animations
- **Vanilla JavaScript**: Interactivity and validations
- **Font Awesome**: Icons (via CDN)

## File Structure

```
BNM_sustanable/
├── index.html          # Main HTML file
├── styles.css          # Responsive styles
├── script.js           # Interactive JavaScript
├── assect/
│   └── UI.jpeg        # Hero image
└── README.md          # This file
```

## How to Use

### 1. Open in browser

```bash
# Open the HTML file directly
open index.html

# Or use a local server (recommended)
python -m http.server 8000
# or
npx http-server
```

### 2. Customize Content

#### Change main colors:

Edit CSS variables in `styles.css`:

```css
:root {
  --primary-color: #0066cc;
  --secondary-color: #1abc9c;
  --accent-color: #27ae60;
  /* ... */
}
```

#### Add your own logo:

Replace the logo part in `index.html`:

```html
<div class="logo">
  <img src="your-logo.png" alt="Logo" />
</div>
```

#### Add hero image:

The image comes from `assect/UI.jpeg`. To use your own:

```html
<img src="your-image.jpg" alt="Description" />
```

#### Add real clients:

Replace icons with real logos:

```html
<div class="client-logo">
  <img src="client-logo.png" alt="Client" />
</div>
```

### 3. Projects/Works

Add your project images:

```html
<div class="work-card">
  <img src="project1.jpg" alt="Your Project" />
  <h4>Project Name</h4>
</div>
```

## JavaScript Features

### Mobile Menu

- Hamburger menu for smaller screens
- Automatically closes when clicking a link
- Closes when clicking outside the menu

### Animations

- Fade-in on scroll (Intersection Observer)
- Hover effects on cards
- Smooth scroll when clicking links

### Form Validation

- Newsletter with email validation
- Support for custom validation

### Responsive Behavior

- Adjusts menu on resize
- Navbar with dynamic shadow

## Performance

- Optimized for mobile
- CSS without plugins, vanilla only
- Lightweight and efficient JavaScript
- Image lazy loading

## Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Modern mobile browsers

## Advanced Customization

### Add new sections:

1. Create a new `<section>` in `index.html`
2. Add styles in `styles.css`
3. Add interactivity in `script.js` if needed

### Modify responsive breakpoints:

In `styles.css`, change the `@media` values:

```css
@media (max-width: 768px) {
  /* Tablet */
}
@media (max-width: 480px) {
  /* Mobile */
}
@media (max-width: 320px) {
  /* Extra small */
}
```

## Future Improvements

- [ ] Backend integration (form)
- [ ] CMS for managing content
- [ ] Advanced SEO (meta tags, schema)
- [ ] Analytics
- [ ] Multiple languages
- [ ] Dark mode
- [ ] PWA (Progressive Web App)

## License

This project is provided as-is for commercial and personal use.

## Support

For questions or suggestions about the code, see the documentation in the comments of HTML, CSS and JavaScript files.

---

**Developed with ❤️ for Nord Electric**
