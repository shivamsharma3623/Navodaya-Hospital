import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import departments from "../data/departments"
import doctors from "../data/doctors"
import AppointmentModal from "../components/AppointmentModal"
import hospitalBuilding from "../assets/hospital-building.png"
import heroTeam from "../assets/hero-team.png"
import umeshDoctorSection from "../assets/umesh-doctor-section.png"

const reasons = [
  { title: "Care About You", image: "https://navodayahospitalbareilly.in/wp-content/uploads/2025/09/Care-About-You.jpg", text: "We don’t just treat conditions — our providers take time to listen and guide you." },
  { title: "Complex Specialty Care", image: "https://navodayahospitalbareilly.in/wp-content/uploads/2025/09/4.jpg", text: "Experienced specialists, modern infrastructure and advanced treatment options." },
  { title: "Pediatric Care", image: "https://navodayahospitalbareilly.in/wp-content/uploads/2025/09/Pediatric.jpg", text: "Thoughtful care for infants, children and adolescents at every stage." },
  { title: "Team You Can Trust", image: "https://navodayahospitalbareilly.in/wp-content/uploads/2025/09/Team-You-Can-Trust.jpg", text: "A multidisciplinary team focused on accurate diagnosis and personal care." },
]

const umeshPhoto = "https://navodayahospitalbareilly.in/wp-content/uploads/2025/05/Untitled-design.png"

export default function Home() {
  const railRef = useRef(null)
  const doctorRailRef = useRef(null)
  const [appointmentOpen, setAppointmentOpen] = useState(false)

  useEffect(() => {
    const setupAutoScroll = (rail) => {
      if (!rail) return () => {}
      const timer = setInterval(() => {
        const max = rail.scrollWidth - rail.clientWidth
        if (max <= 8) return
        const firstCard = rail.querySelector("a, article")
        const step = firstCard ? firstCard.getBoundingClientRect().width + 20 : rail.clientWidth * 0.72
        const next = rail.scrollLeft + step
        rail.scrollTo({ left: next >= max - 8 ? 0 : next, behavior: "smooth" })
      }, 3200)
      return () => clearInterval(timer)
    }

    const cleanupDepartments = setupAutoScroll(railRef.current)
    const cleanupDoctors = setupAutoScroll(doctorRailRef.current)
    return () => {
      cleanupDepartments()
      cleanupDoctors()
    }
  }, [])

  const moveRail = (ref, direction) => {
    const rail = ref.current
    if (!rail) return
    const firstCard = rail.querySelector("a, article")
    const step = firstCard ? firstCard.getBoundingClientRect().width + 20 : rail.clientWidth * 0.72
    rail.scrollBy({ left: direction * step, behavior: "smooth" })
  }

  return (
    <div>
      {/* Hero: Navodaya Hospital team photo as full background */}
      <section className="relative isolate min-h-[650px] overflow-hidden bg-[#123b5d]">
        <img src={heroTeam} alt="Navodaya Hospital medical team" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#062b43]/90 via-[#062b43]/72 to-[#062b43]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#062b43]/65 via-transparent to-transparent" />
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5 py-20 md:px-8">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">Bareilly, Uttar Pradesh · 24×7 care</p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.04] md:text-6xl lg:text-7xl">Compassionate care,<br /><span className="text-sky-200">close to home.</span></h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/85 md:text-lg">Navodaya Hospital brings experienced specialists, modern facilities and dependable emergency care together under one roof.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setAppointmentOpen(true)} className="rounded-full bg-white px-7 py-4 text-sm font-bold text-[#123b5d] shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-50">Book an Appointment</button>
              <a href="tel:+918865006725" className="rounded-full border border-white/45 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20">Call +91 88650 06725</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-white/85"><span>✓ Specialist doctors</span><span>✓ Modern facilities</span><span>✓ Emergency support</span></div>
          </div>
        </div>
      </section>

      {/* Navodaya Hospital + Dr. Umesh feature banner */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="overflow-hidden rounded-[2rem] shadow-xl ring-1 ring-slate-200">
            <img
              src={umeshDoctorSection}
              alt="Dr. Umesh Gangwar and Navodaya Hospital"
              className="block h-auto w-full"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2f80ed]">Why Navodaya</p><h2 className="mt-3 font-display text-3xl font-semibold text-[#123b5d] md:text-4xl">A hospital built on trust</h2><p className="mt-4 leading-7 text-slate-600">A modern multi-specialty hospital focused on accessible, humane and personalized care for families across Bareilly.</p></div>
      </section>

      <section className="bg-[#eef8fc] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2f80ed]">Specialities</p><h2 className="mt-2 font-display text-3xl font-semibold text-[#123b5d] md:text-4xl">Our Departments</h2></div><div className="flex items-center gap-3"><button onClick={() => moveRail(railRef, -1)} aria-label="Previous departments" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#123b5d]/15 bg-white text-[#123b5d] shadow-sm hover:bg-sky-50">←</button><button onClick={() => moveRail(railRef, 1)} aria-label="Next departments" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#123b5d]/15 bg-white text-[#123b5d] shadow-sm hover:bg-sky-50">→</button><Link to="/departments" className="ml-1 text-sm font-semibold text-[#123b5d] hover:text-[#2f80ed]">View all →</Link></div></div>
          <div ref={railRef} className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
            {departments.map((d) => <Link to={`/departments#${d.slug}`} key={d.slug} className="group w-[78vw] flex-none snap-start rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200/80 transition hover:-translate-y-1 hover:shadow-lg sm:w-[45%] lg:w-[calc(25%-15px)]"><img src={d.image} alt={d.name} loading="lazy" className="h-40 w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.02]" /><h3 className="mt-4 font-display text-xl font-semibold text-[#123b5d]">{d.name}</h3><p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">{d.summary}</p></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#2f80ed]">Our Specialists</p><h2 className="mt-2 font-display text-3xl font-semibold text-[#123b5d] md:text-4xl">Meet our doctors</h2></div>
            <div className="flex items-center gap-3">
              <button onClick={() => moveRail(doctorRailRef, -1)} aria-label="Previous doctors" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#123b5d]/15 bg-white text-[#123b5d] shadow-sm hover:bg-sky-50">←</button>
              <button onClick={() => moveRail(doctorRailRef, 1)} aria-label="Next doctors" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#123b5d]/15 bg-white text-[#123b5d] shadow-sm hover:bg-sky-50">→</button>
              <Link to="/doctors" className="ml-1 text-sm font-semibold text-[#123b5d] hover:text-[#2f80ed]">Meet the full team →</Link>
            </div>
          </div>
          <div ref={doctorRailRef} className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
            {doctors.map((doc) => <article key={doc.name} className="group w-[82vw] flex-none snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:w-[47%] lg:w-[calc(33.333%-13.333px)]"><div className="flex items-center gap-5 bg-sky-50 p-5"><img src={doc.image} alt={doc.name} loading="lazy" className="h-24 w-24 rounded-full object-cover ring-4 ring-white" /><div><h3 className="font-display text-xl font-semibold text-[#123b5d]">{doc.name}</h3><p className="mt-1 text-sm leading-5 text-slate-600">{doc.qualification}</p></div></div><div className="flex items-center justify-between p-5"><span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Specialist doctor</span><button onClick={() => setAppointmentOpen(true)} className="rounded-full bg-[#123b5d] px-4 py-2 text-xs font-semibold text-white">Book visit</button></div></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:px-8"><div className="grid gap-6 sm:grid-cols-2">{reasons.map((r) => <div key={r.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"><img src={r.image} alt={r.title} className="h-20 w-20 flex-shrink-0 rounded-xl object-cover" /><div><h3 className="font-display text-lg font-semibold text-[#123b5d]">{r.title}</h3><p className="mt-1 text-sm leading-6 text-slate-600">{r.text}</p></div></div>)}</div></section>

      <section className="bg-[#123b5d]"><div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-12 text-center text-white md:flex-row md:px-8 md:text-left"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">Need medical care?</p><h2 className="mt-2 font-display text-3xl font-semibold">Request an appointment in minutes.</h2></div><button onClick={() => setAppointmentOpen(true)} className="rounded-full bg-white px-7 py-3.5 text-sm font-bold text-[#123b5d]">Book an Appointment →</button></div></section>
      <AppointmentModal open={appointmentOpen} onClose={() => setAppointmentOpen(false)} />
    </div>
  )
}
