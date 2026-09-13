# Navodaya Hospital — Website (React)

Naya, fully responsive multi-page website — Home, Departments, Doctors, Contact.

## Run locally

```bash
npm install
npm run dev
```
Browser me `http://localhost:5173` khol lo.

## Production build

```bash
npm run build
```
`dist/` folder banega — isi ko kisi bhi static hosting (Netlify, Vercel, Hostinger, GoDaddy static hosting) par upload karna hai.

## Kya-kya fix kiya gaya hai (purani site ke muqable)

- **Mobile responsiveness** — Tailwind ke mobile-first breakpoints, koi fixed-width container nahi
- **Multi-page structure** — Home / Departments / Doctors / Contact, better SEO ke liye
- **Working "Book Appointment"** button — Contact page par le jaata hai
- **Click-to-call aur WhatsApp** button — `tel:` aur `wa.me` links
- **Google Map** — ab exact hospital address ke saath (pehle sirf "bareilly" generic query thi)
- **Duplicate image fix** — Pediatrician department ke liye alag image
- **Spelling fixes** — "Surgury" → "Surgery" etc.
- **Meta description + page titles** — SEO ke liye
- **Accessible focus states** — keyboard navigation ke liye visible outline

## Aage karne wale kaam

- Contact form abhi UI-only hai — isse actual email/WhatsApp par bhejne ke liye Formspree, EmailJS, ya apna backend API jodna hoga
- Doctors aur departments ki asli high-quality photos client se lekar `src/data/doctors.js` aur `src/data/departments.js` me update karni hain (Pediatrician wali image abhi stock hai)
- Google Analytics / Meta Pixel jodna ho to `index.html` me add kar sakte ho
- Domain par deploy karne ke baad SSL (https) verify kar lena
