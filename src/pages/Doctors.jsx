import doctors from "../data/doctors"
import DoctorCard from "../components/DoctorCard"

export default function Doctors() {
  return (
    <div>
      <section className="bg-pine text-sand">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-soft">Our Team</p>
          <h1 className="mt-3 text-4xl font-semibold">Meet Our Specialists</h1>
          <p className="mt-4 max-w-xl text-sand/85">
            Experienced doctors across specialties, committed to accurate diagnosis and
            personalized treatment for every patient.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doc) => (
            <DoctorCard key={doc.name} doctor={doc} />
          ))}
        </div>
      </section>
    </div>
  )
}
