export default function DoctorCard({ doctor }) {
  return (
    <article className="text-center sm:text-left">
      <img
        src={doctor.image}
        alt={doctor.name}
        loading="lazy"
        className="mx-auto h-40 w-40 rounded-full object-cover sm:mx-0 sm:h-48 sm:w-48"
      />
      <h3 className="mt-4 font-display text-lg font-semibold text-pine-dark">{doctor.name}</h3>
      <p className="text-sm text-ink/70">{doctor.qualification}</p>
    </article>
  )
}
