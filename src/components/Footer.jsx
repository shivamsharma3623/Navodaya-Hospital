import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-pine-dark text-sand/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold text-sand">Navodaya Hospital</p>
          <p className="mt-3 text-sm leading-relaxed">
            A trusted multi-specialty hospital in Bareilly, dedicated to compassionate,
            accessible and high-quality medical care for every patient.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-soft">Explore</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/departments" className="hover:text-gold">Departments</Link></li>
            <li><Link to="/doctors" className="hover:text-gold">Our Doctors</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact & Location</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-soft">Contact</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Mini Bypass, Bareilly, Uttar Pradesh 243001</li>
            <li>
              <a href="tel:+918865006725" className="hover:text-gold">+91 88650 06725</a>
            </li>
            <li>
              <a
                href="https://wa.me/918865006725"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                WhatsApp Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-gold-soft">Emergency</p>
          <p className="mt-3 text-sm leading-relaxed">
            24×7 emergency and pharmacy services available for urgent medical needs.
          </p>
        </div>
      </div>

      <div className="border-t border-sand/10 px-5 py-5 text-center text-xs text-sand/60">
        © {new Date().getFullYear()} Navodaya Hospital, Bareilly. All rights reserved.
      </div>
    </footer>
  )
}
