import departments from "../data/departments"
import DepartmentCard from "../components/DepartmentCard"

export default function Departments() {
  return (
    <div>
      <section className="bg-pine text-sand">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-soft">Specialties</p>
          <h1 className="mt-3 text-4xl font-semibold">Our Departments</h1>
          <p className="mt-4 max-w-xl text-sand/85">
            Eleven specialties under one roof — from emergency and general medicine to
            focused surgical and diagnostic care.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <div className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {departments.map((d) => (
            <DepartmentCard key={d.slug} department={d} />
          ))}
        </div>
      </section>
    </div>
  )
}
