import { useState } from "react"
import doctors from "../data/doctors"
import departments from "../data/departments"

export default function AppointmentModal({ open, onClose }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "", department: "", doctor: "", date: "", time: "" })

  if (!open) return null

  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function submit(e) {
    e.preventDefault()
    const text = [
      "Hello Navodaya Hospital, I would like to request an appointment.",
      `Patient: ${form.name}`,
      `Mobile: ${form.phone}`,
      `Department: ${form.department || "Any"}`,
      `Doctor: ${form.doctor || "Any available doctor"}`,
      `Preferred date: ${form.date}`,
      `Preferred time: ${form.time}`,
    ].join("\n")
    window.open(`https://wa.me/918865006725?text=${encodeURIComponent(text)}`, "_blank")
    setSent(true)
  }

  function close() {
    setSent(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/45 p-4 backdrop-blur-sm" onMouseDown={close}>
      <div className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl" onMouseDown={(e) => e.stopPropagation()}>
        <button onClick={close} aria-label="Close" className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200">×</button>
        <div className="bg-gradient-to-r from-sky-50 to-white px-6 pb-5 pt-7 sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-pine">Appointment Request</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-pine-dark">Tell us when you’d like to visit</h2>
          <p className="mt-2 text-sm text-ink/65">Choose your preferred doctor, department and time. We’ll confirm the appointment with you.</p>
        </div>

        {sent ? (
          <div className="px-6 py-12 text-center sm:px-8">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl text-emerald-600">✓</div>
            <h3 className="mt-4 font-display text-2xl font-semibold text-pine-dark">Request prepared</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-ink/65">WhatsApp has been opened with your appointment details. Please send the message to complete the request.</p>
            <button onClick={close} className="mt-6 rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white">Done</button>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-5 px-6 py-6 sm:grid-cols-2 sm:px-8">
            <label className="sm:col-span-2"> <span className="label">Patient name *</span><input name="name" value={form.name} onChange={update} required className="field" placeholder="Enter patient name" /></label>
            <label> <span className="label">Mobile number *</span><input name="phone" value={form.phone} onChange={update} required pattern="[0-9+() -]{10,}" className="field" placeholder="10-digit mobile number" /></label>
            <label> <span className="label">Department</span><select name="department" value={form.department} onChange={update} className="field"><option value="">Select department</option>{departments.map((d) => <option key={d.slug}>{d.name}</option>)}</select></label>
            <label> <span className="label">Preferred doctor</span><select name="doctor" value={form.doctor} onChange={update} className="field"><option value="">Any available doctor</option>{doctors.map((d) => <option key={d.name}>{d.name}</option>)}</select></label>
            <label> <span className="label">Preferred date *</span><input type="date" name="date" value={form.date} min={new Date().toISOString().split("T")[0]} onChange={update} required className="field" /></label>
            <label> <span className="label">Preferred time *</span><select name="time" value={form.time} onChange={update} required className="field"><option value="">Select time</option><option>9:00 AM – 12:00 PM</option><option>12:00 PM – 3:00 PM</option><option>3:00 PM – 6:00 PM</option><option>6:00 PM – 9:00 PM</option><option>Emergency / Any time</option></select></label>
            <div className="sm:col-span-2 rounded-2xl bg-sky-50 px-4 py-3 text-xs leading-relaxed text-slate-600">This is a request, not an instant booking. The hospital team can confirm the exact slot by phone or WhatsApp.</div>
            <button type="submit" className="sm:col-span-2 rounded-full bg-pine px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-900/10 transition hover:-translate-y-0.5 hover:bg-pine-light">Send Appointment Request on WhatsApp →</button>
          </form>
        )}
      </div>
    </div>
  )
}
