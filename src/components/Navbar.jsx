import { useState } from "react"
import { NavLink } from "react-router-dom"
import AppointmentModal from "./AppointmentModal"

const links = [
  { to: "/", label: "Home" },
  { to: "/departments", label: "Departments" },
  { to: "/doctors", label: "Doctors" },
  { to: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `block py-2 md:py-0 text-sm tracking-wide transition-colors ${
      isActive ? "text-gold" : "text-ink/75 hover:text-pine"
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <NavLink to="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl font-semibold text-pine-dark">Navodaya</span>
          <span className="text-xs uppercase tracking-[0.2em] text-pine">Hospital</span>
        </NavLink>

        <nav className="hidden md:flex md:items-center md:gap-8">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"}>
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={() => setAppointmentOpen(true)}
            className="rounded-full bg-gold px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-pine-light"
          >
            Book Appointment
          </button>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center text-pine-dark md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-200 bg-white px-5 pb-5 md:hidden">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === "/"} onClick={() => setOpen(false)}>
              {l.label}
            </NavLink>
          ))}
          <button
            onClick={() => { setAppointmentOpen(true); setOpen(false) }}
            className="mt-3 block w-full rounded-full bg-gold px-5 py-2 text-center text-sm font-medium text-white"
          >
            Book Appointment
          </button>
        </nav>
      )}
      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </header>
  )
}
