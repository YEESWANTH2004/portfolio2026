# Portfolio - Yeeswanth P L

A modern, responsive, and fully animated portfolio website built with HTML, CSS, and JavaScript featuring a black and white professional theme.

## 📁 Project Structure

```
Portfolio-yees/
├── index.html      (Main HTML file with all sections)
├── styles.css      (Responsive styling & animations)
├── script.js       (Interactive features & AI chatbot)
└── README.md       (This file)
```

## ✨ Features

### 🎨 Design
- **Black & White Theme** - Professional and elegant
- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **Modern Animations** - Scroll animations, hover effects, and smooth transitions
- **Parallax Effects** - Engaging visual experience

### 📱 Sections
1. **Navigation Bar** - Sticky header with smooth scrolling
2. **Hero Section** - Eye-catching introduction with CTA buttons
3. **About Me** - Professional summary with stats
4. **Skills** - Categorized technical skills with hover effects
5. **Projects** - Featured projects with descriptions and tech stack
6. **Experience** - Timeline of internships and education
7. **Contact** - Contact information and working contact form
8. **Chat Widget** - AI Assistant to answer visitor questions

### 🤖 AI Chat Assistant
- Responds to questions about experience, skills, and projects
- Natural conversations with contextual answers
- Fixed position chat bubble in bottom-right corner
- Smooth animations and user-friendly interface

### ⚡ Interactive Features
- Smooth scroll navigation
- Mobile hamburger menu
- Counter animations for stats
- Form validation
- Keyboard accessibility (Escape to close chat)
- Active navigation indicator

## 🚀 How to Use

### 1. Open the Portfolio
Simply open `index.html` in your web browser:
```bash
# Windows
start index.html

# Mac
open index.html

# Linux
firefox index.html
```

Or drag and drop `index.html` into your browser.

### 2. Customization

#### Update Personal Information
Edit `index.html` and replace:
- Name: "Yeeswanth P L" → Your name
- Email: "yeeswanthlatha@gmail.com" → Your email
- Phone: "+91 9865828638" → Your phone
- Location: "Coimbatore, India" → Your location
- LinkedIn/GitHub URLs → Your profiles

#### Customize Colors
Edit `styles.css` root variables (lines 2-10):
```css
:root {
    --primary-color: #000000;      /* Black */
    --secondary-color: #ffffff;    /* White */
    --accent-color: #f0f0f0;      /* Light gray */
    /* ... other colors */
}
```

#### Add/Remove Sections
Edit `index.html` to:
- Add new project cards in the Projects section
- Update skills in the Skills section
- Modify experience timeline
- Change contact information

#### Customize Chat Responses
Edit `script.js` - Update the `responses` object (lines 145-175) with your own answers to common questions.

## 🎯 Animation Classes

The portfolio uses custom animations. Elements with `data-aos` attributes auto-animate on scroll:
- `data-aos="fade-up"` - Fade in from bottom
- `data-aos="fade-right"` - Fade in from right
- `data-aos="fade-left"` - Fade in from left
- `data-aos="zoom-in"` - Scale and fade in

Add more elements with these attributes to trigger animations!

## 📱 Responsive Breakpoints

- **Desktop** (1200px+) - Full layout with multi-column grids
- **Tablet** (768px - 1199px) - Optimized 2-column layouts
- **Mobile** (480px - 767px) - Stack layouts and single columns
- **Small Mobile** (< 480px) - Full width stacked layouts

## 🔧 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📦 Dependencies

**None!** This portfolio is built with pure HTML, CSS, and JavaScript. It only uses:
- Font Awesome Icons (CDN) - For icons
- Google Fonts (optional) - For better typography

## 🎨 Customization Tips

1. **Change Primary Color**
   - Update `--primary-color` in `styles.css`
   - All black elements will change automatically

2. **Adjust Animation Speed**
   - Modify animation durations in `styles.css`
   - Change `0.8s` to `0.5s` for faster, `1.5s` for slower

3. **Add Social Links**
   - Update URLs in hero and footer sections
   - Add more social icons as needed

4. **Update Project Details**
   - Edit project cards in the Projects section
   - Change icons using Font Awesome classes

5. **Personalize Chat Responses**
   - Edit `script.js` responses object
   - Add new keywords and custom answers

## 🚀 Deployment

Deploy your portfolio on:
- **Netlify** - Free hosting with automatic builds
- **GitHub Pages** - Free with your GitHub account
- **Vercel** - Optimal for web projects
- **Firebase** - Google's hosting platform
- **Traditional Hosting** - Any web hosting provider

Simply upload the files (index.html, styles.css, script.js) to your hosting platform!

## 📝 File Size

- index.html - ~15 KB
- styles.css - ~30 KB
- script.js - ~12 KB
- **Total** - ~57 KB (Very lightweight!)

## 🎓 Learning Resources

- **HTML/CSS/JS** - MDN Web Docs
- **Animations** - CSS-Tricks.com
- **Responsive Design** - Google Mobile-Friendly Guide
- **Accessibility** - WebAIM

## 🤝 Support

For questions or improvements:
1. Review the code comments
2. Check browser console for errors (F12)
3. Test responsiveness using browser DevTools
4. Validate HTML/CSS on W3C validators

## 📄 License

Free to use and modify for personal use.

---

**Made with ❤️ for Yeeswanth P L**

Enjoy your new portfolio! 🚀✨
