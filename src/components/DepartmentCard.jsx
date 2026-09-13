export default function DepartmentCard({ department }) {
  return (
    <article className="group border-b border-pine/10 py-6 first:pt-0 sm:border-b-0 sm:border sm:border-pine/10 sm:p-5 sm:rounded-sm sm:hover:border-gold/60 sm:transition-colors">
      <div className="flex gap-4 sm:flex-col sm:gap-0">
        <img
          src={department.image}
          alt={`${department.name} department at Navodaya Hospital`}
          loading="lazy"
          className="h-20 w-20 flex-shrink-0 rounded-sm object-cover sm:mb-4 sm:h-40 sm:w-full"
        />
        <div>
          <h3 className="font-display text-lg font-semibold text-pine-dark">{department.name}</h3>
          <p className="mt-1 text-sm leading-relaxed text-ink/75 sm:mt-2">{department.summary}</p>
        </div>
      </div>
    </article>
  )
}
