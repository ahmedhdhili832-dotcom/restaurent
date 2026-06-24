# 🍽️ Foodie - Premium Restaurant Website

A modern, responsive, and professional restaurant website built with **HTML5**, **CSS3**, and **JavaScript**. Features a sleek UI/UX design with smooth animations, interactive menu, multimedia gallery, and online reservation system.

## 🌐 Live Demo

Visit the live website: **[Foodie Restaurant](https://ahmedhdhili832-dotcom.github.io/restaurent/)**

---

## ✨ Features

### 🎨 Design & UX
- **Modern & Responsive Design** - Works perfectly on all devices (desktop, tablet, mobile)
- **Smooth Animations** - Elegant transitions and hover effects
- **Professional Color Scheme** - Orange (#FF6B35) and Navy Blue (#004E89)
- **Glassmorphism Effects** - Modern frosted glass navbar
- **Accessibility Compliant** - ARIA labels and semantic HTML5

### 🍔 Menu & Items
- **4 Popular Dishes** - Burger, Pizza, Pasta, and Tacos
- **Dynamic Price Display** - With add-to-cart buttons
- **Hover Effects** - Image zoom and card elevation
- **Responsive Grid Layout** - Auto-adjusts to screen size

### 📸 Gallery Section
- **Mixed Media** - Photos and videos showcase
- **Auto-play Videos** - Videos play on hover
- **Lazy Loading Ready** - Optimized for performance
- **Hover Captions** - Smooth caption animations

### 📋 Features Showcase
- **4 Key Features** - Fast Delivery, Fresh Ingredients, Expert Chefs, Premium Quality
- **Icon Animations** - Hover effects on feature cards
- **Responsive Grid** - Mobile-friendly layout

### 📞 Reservation System
- **Online Booking Form** - Name, Email, Date, and Time
- **Form Validation** - Client-side validation
- **Date Validation** - Prevents past dates
- **Email Validation** - Ensures valid email format
- **Success Confirmation** - User-friendly alerts

### 📱 Responsive Navigation
- **Fixed Navbar** - Always accessible
- **Smooth Scrolling** - All links scroll smoothly
- **Active Link Indicator** - Shows current section
- **Mobile-Friendly** - Collapses on smaller screens

---

## 📁 File Structure

```
restaurent/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Complete CSS styling
├── script.js              # JavaScript functionality
├── images/                # Food images directory
│   ├── Burger.jpg
│   ├── Pizza.jpg
│   ├── Pasta.png
│   └── Tacos.jpg
├── video/                 # Video files directory
│   ├── burger.mp4
│   ├── pizza.mp4
│   ├── pasta1.mp4
│   ├── tacos.mp4
│   ├── grill1.mp4
│   └── steak.mp4
└── README.md             # Documentation
```

---

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for external resources like fonts and icons)

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ahmedhdhili832-dotcom/restaurent.git
cd restaurent
```

2. **Open in browser:**
```bash
# Simply open index.html in your browser
# Or use a local server:
python -m http.server 8000
# Then visit http://localhost:8000
```

---

## 🎯 Key Sections

### 1. **Navigation Bar**
- Fixed header with logo
- Links to all sections
- "Book Table" CTA button
- Smooth scroll to sections

### 2. **Hero Section**
- Eye-catching headline
- Descriptive subtitle
- Call-to-action buttons
- Hero image with animation

### 3. **Features**
- 4 key selling points
- Icon-based design
- Hover animations
- Grid layout

### 4. **Menu**
- Popular dishes showcase
- Price display
- Add to cart buttons
- Image hover effects

### 5. **About**
- Restaurant description
- Story and values
- Professional image
- CTA button

### 6. **Gallery**
- Photo and video mix (10 items)
- Auto-playing videos on hover
- Responsive grid
- Caption overlays

### 7. **Testimonials**
- Customer reviews
- Star ratings
- Customer name
- Expandable section

### 8. **Reservation**
- Online booking form
- Date and time selection
- Form validation
- Success confirmation

### 9. **Footer**
- Contact information
- Quick links
- Social media links
- Copyright notice

---

## 🎨 Color Scheme

| Color | Hex Value | Usage |
|-------|-----------|-------|
| Primary Orange | `#FF6B35` | Buttons, links, accents |
| Secondary Navy | `#004E89` | Hover states, gradients |
| Light Background | `#F8F9FA` | Section backgrounds |
| Dark Text | `#1A1A1A` | Main text |
| Light Text | `#666666` | Secondary text |
| White | `#FFFFFF` | Cards, overlays |

---

## 💻 JavaScript Features

### 1. **Smooth Scrolling**
- All anchor links scroll smoothly
- Custom scroll behavior

### 2. **Navbar Effects**
- Dynamic background on scroll
- Box shadow enhancement
- Smooth transitions

### 3. **Video Autoplay**
- Videos play on hover
- Auto-pause on mouse leave
- Smooth playback control

### 4. **Form Validation**
- Name validation
- Email format checking
- Date validation (future dates only)
- Time validation
- Success/error alerts

### 5. **Intersection Observer**
- Fade-in animations on scroll
- Performance optimized
- Lazy loading ready

### 6. **Active Navigation**
- Highlights current section
- Updates on scroll
- Visual indicator

---

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

---

## ⚙️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling
- **JavaScript (ES6+)** - Interactivity
- **Font Awesome 6.6** - Icons
- **Google Fonts (Poppins)** - Typography

### APIs & Libraries
- **Intersection Observer API** - Performance
- **Fetch API Ready** - For future backend integration
- **LocalStorage Ready** - For future data persistence

---

## 🔧 Customization

### Change Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #FF6B35;
    --secondary-color: #004E89;
    /* ... other colors ... */
}
```

### Add Menu Items
Add new cards in the menu section of `index.html`:
```html
<div class="card" role="article">
    <img src="images/YourDish.jpg" alt="Dish description">
    <h3>Dish Name</h3>
    <p>Dish description</p>
    <div class="price">$XX <a href="#"><i class="fa fa-cart-plus"></i></a></div>
</div>
```

### Update Contact Info
Edit the footer section in `index.html`:
```html
<p>📞 +216 YOUR NUMBER</p>
<p>📧 your@email.com</p>
```

---

## 🎬 Video Integration

Replace video paths in the gallery section:
```html
<video controls preload="metadata" poster="images/poster.jpg" src="video/your-video.mp4"></video>
```

Supported formats:
- MP4 (.mp4)
- WebM (.webm)
- Ogg (.ogv)

---

## 📊 Performance Tips

1. **Optimize Images**
   - Use WebP format where possible
   - Compress before uploading
   - Use appropriate dimensions

2. **Lazy Load Videos**
   - Set `preload="metadata"` on videos
   - Use poster images

3. **Minify CSS/JS**
   - For production deployment
   - Reduces file size

4. **Browser Caching**
   - Configure server headers
   - Improves load times

---

## ♿ Accessibility Features

✅ Semantic HTML5 elements  
✅ ARIA labels for screen readers  
✅ Proper heading hierarchy  
✅ Alt text for images  
✅ Keyboard navigation support  
✅ Color contrast compliance  
✅ Form validation messages  

---

## 🚀 Deployment

### GitHub Pages (Free)
1. Repository is already configured
2. Website auto-deploys on push
3. Access at: `https://yourusername.github.io/restaurent/`

### Other Platforms
- Netlify
- Vercel
- Firebase Hosting
- Any static hosting service

---

## 📈 Future Enhancements

- [ ] Backend integration for reservations
- [ ] Email notifications
- [ ] Payment integration
- [ ] Online ordering system
- [ ] Admin dashboard
- [ ] Multi-language support
- [ ] Dark mode
- [ ] PWA capabilities

---

## 🐛 Known Issues

None currently reported. Please open an issue if you find any bugs.

---

## 📝 License

This project is open-source and available for personal and commercial use.

---

## 👤 Author

**Ahmed Hdhili**
- GitHub: [@ahmedhdhili832-dotcom](https://github.com/ahmedhdhili832-dotcom)
- Email: ahdhili832@gmail.com

---

## 🙏 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📞 Support

For questions or issues:
- Open a GitHub issue
- Contact: ahdhili832@gmail.com
- Visit the website: [Foodie Restaurant](https://ahmedhdhili832-dotcom.github.io/restaurent/)

---

## 📸 Screenshots

### Hero Section
Professional landing with high-impact visuals and clear CTA buttons.

### Menu Showcase
Beautiful card layout with smooth hover animations.

### Gallery
Mixed media presentation with auto-playing videos.

### Responsive Design
Perfectly adapted for all screen sizes.

---

## 🎉 Highlights

- ⭐ **Professional Design** - Industry-standard UI/UX
- 🚀 **High Performance** - Optimized for speed
- 📱 **Mobile-First** - Works great on all devices
- ♿ **Accessible** - WCAG compliant
- 🎨 **Modern Stack** - Latest web technologies
- 📖 **Well-Documented** - Easy to customize

---

**Last Updated**: June 2026  
**Version**: 1.0.0  
**Status**: ✅ Production Ready
