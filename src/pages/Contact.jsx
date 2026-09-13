export default function Contact() {
  return (
    <div>
      <section className="bg-pine text-sand">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <p className="text-sm uppercase tracking-[0.2em] text-gold-soft">Get in touch</p>
          <h1 className="mt-3 text-4xl font-semibold">How to Reach Us</h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-14 lg:grid-cols-2">
        <div className="lg:pr-10">
          <p className="text-sm uppercase tracking-[0.2em] text-pine">Visit or call us</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-pine-dark">We are here to help</h2>
          <p className="mt-4 max-w-xl leading-7 text-ink/70">For appointments, please use the Book an Appointment option. For general enquiries, call us or chat with the hospital team on WhatsApp.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a href="tel:+918865006725" className="rounded-xl border border-pine/15 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="text-sm text-ink/60">Call the hospital</span>
              <span className="mt-2 block font-semibold text-pine">+91 88650 06725</span>
            </a>
            <a href="https://wa.me/918865006725" target="_blank" rel="noreferrer" className="rounded-xl border border-pine/15 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
              <span className="text-sm text-ink/60">WhatsApp</span>
              <span className="mt-2 block font-semibold text-pine">Chat with our team →</span>
            </a>
          </div>
        </div>

        <div>
          <div className="overflow-hidden rounded-sm">
            <iframe
              title="Navodaya Hospital location"
              src="https://maps.google.com/maps?q=Navodaya%20Hospital%2C%20Mini%20Bypass%2C%20Bareilly%2C%20Uttar%20Pradesh%20243001&t=m&z=15&output=embed"
              className="h-72 w-full border-0 sm:h-96"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-8 space-y-3 text-ink">
            <h3 className="font-display text-xl font-semibold text-pine-dark">Navodaya Hospital</h3>
            <p>Mini Bypass, Bareilly, Uttar Pradesh 243001</p>
            <p>
              <a href="tel:+918865006725" className="font-medium text-pine hover:text-gold">
                +91 88650 06725
              </a>
            </p>
            <a
              href="https://wa.me/918865006725"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-full border border-pine px-5 py-2.5 text-sm font-medium text-pine hover:border-gold hover:text-gold"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
