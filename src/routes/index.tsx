import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-wrap.jpg";
import storefrontImg from "@/assets/work-storefront.jpg";
import bannerImg from "@/assets/work-banner.jpg";
import promoImg from "@/assets/work-promo.jpg";
import vehicleImg from "@/assets/work-vehicle.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Signs 'N More Ltd — Custom Signs, Wraps & Print in Lloydminster" },
      {
        name: "description",
        content:
          "Lloydminster's go-to sign shop. Vehicle wraps, storefront signs, banners and branded apparel — built fast, built to last. Call 306-825-4716.",
      },
      { property: "og:title", content: "Signs 'N More Ltd — Lloydminster Sign Shop" },
      { property: "og:description", content: "Custom signs, vehicle wraps, banners & promo products. Trusted by Lloydminster businesses for over a decade." },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Signs 'N More Ltd",
          image: "/og.jpg",
          telephone: "+1-306-825-4716",
          address: {
            "@type": "PostalAddress",
            streetAddress: "1C1, 1809 50 Ave",
            addressLocality: "Lloydminster",
            addressRegion: "SK",
            addressCountry: "CA",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.0", reviewCount: "10" },
          openingHours: "Mo-Fr 09:00-17:00",
        }),
      },
    ],
  }),
  component: Index,
});

const PHONE = "+1 306-825-4716";
const PHONE_HREF = "tel:+13068254716";

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Gallery />
      <Stats />
      <Reviews />
      <CTA />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-block size-3 bg-primary" aria-hidden />
          <span className="font-display text-lg tracking-wider">SIGNS<span className="text-primary">'</span>N MORE</span>
        </a>
        <nav className="hidden gap-8 text-sm font-medium uppercase tracking-wider md:flex">
          <a href="#services" className="hover:text-primary">Services</a>
          <a href="#work" className="hover:text-primary">Work</a>
          <a href="#process" className="hover:text-primary">Process</a>
          <a href="#reviews" className="hover:text-primary">Reviews</a>
          <a href="#contact" className="hover:text-primary">Contact</a>
        </nav>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 bg-primary px-4 py-2 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:brightness-110"
        >
          <span aria-hidden>☎</span>
          <span className="hidden sm:inline">{PHONE}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div className="container-x relative grid gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
        <div className="lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="size-1.5 bg-primary" /> Lloydminster, SK · Est. Local
          </div>
          <h1 className="text-[clamp(2.75rem,7vw,6rem)] leading-[0.95]">
            Signs that <span className="text-primary">work</span> as hard
            <br />
            as your business.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            From rolling billboards to storefronts that pull traffic — we design, print, and install
            signage that gets you noticed across the prairies.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:brightness-110"
            >
              Get a free quote <span aria-hidden>→</span>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-border bg-surface px-6 py-3.5 text-sm font-bold uppercase tracking-wider hover:border-primary"
            >
              See our work
            </a>
          </div>
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            <Stat label="Years serving" value="15+" />
            <Stat label="Projects done" value="2,400" />
            <Stat label="Google rating" value="4.0★" />
          </dl>
        </div>
        <div className="relative lg:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden border border-border">
            <img
              src={heroImg}
              alt="Custom vehicle wrap being installed at Signs 'N More"
              width={1600}
              height={1100}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-5">
              <p className="font-display text-sm tracking-widest text-primary">Latest build</p>
              <p className="text-sm text-foreground/90">Fleet wrap · matte black + ember vinyl</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden border border-primary bg-background p-4 sm:block">
            <p className="font-display text-3xl text-primary">24h</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Rush turnaround</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="sr-only">{label}</dt>
      <dd className="font-display text-3xl">{value}</dd>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

function Marquee() {
  const items = [
    "Vehicle Wraps", "Channel Letters", "Vinyl Banners", "Decals",
    "Trade Show Displays", "Apparel Print", "Magnetic Signs", "ACM Panels",
    "Reflective Decals", "Window Graphics",
  ];
  return (
    <div className="overflow-hidden border-b border-border bg-surface py-5">
      <div className="marquee flex w-max items-center gap-12 whitespace-nowrap">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-2xl tracking-widest text-muted-foreground">
            {t} <span className="ml-12 text-primary">✕</span>
          </span>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    n: "01",
    title: "Vehicle Wraps & Decals",
    body: "Partial wraps, full wraps, fleet branding, and cut lettering. High-performance vinyl built for prairie winters.",
    img: vehicleImg,
  },
  {
    n: "02",
    title: "Storefront & Business Signs",
    body: "Illuminated channel letters, dimensional signage, ACM panels, and exterior installs that earn second looks.",
    img: storefrontImg,
  },
  {
    n: "03",
    title: "Banners & Event Signage",
    body: "Vinyl banners, retractable displays, trade show backdrops — printed sharp, shipped fast.",
    img: bannerImg,
  },
  {
    n: "04",
    title: "Promo Products & Apparel",
    body: "Branded merch, custom apparel, hats and giveaways — your logo on the things that get used every day.",
    img: promoImg,
  },
];

function Services() {
  return (
    <section id="services" className="border-b border-border py-24">
      <div className="container-x">
        <SectionHead eyebrow="What we make" title="Built in-house. Installed by us." />
        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2">
          {services.map((s) => (
            <article key={s.n} className="group relative overflow-hidden bg-background p-8 transition hover:bg-surface">
              <div className="flex items-start justify-between">
                <span className="font-display text-sm text-primary">{s.n}</span>
                <span className="font-display text-sm text-muted-foreground transition group-hover:text-primary">→</span>
              </div>
              <h3 className="mt-6 text-3xl">{s.title}</h3>
              <p className="mt-3 max-w-md text-muted-foreground">{s.body}</p>
              <div className="mt-8 aspect-[16/10] overflow-hidden border border-border">
                <img
                  src={s.img}
                  alt={s.title}
                  width={1200}
                  height={750}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          <span className="h-px w-8 bg-primary" /> {eyebrow}
        </p>
        <h2 className="text-4xl md:text-5xl">{title}</h2>
      </div>
    </div>
  );
}

const steps = [
  { n: "01", t: "Tell us what you need", d: "Call, email or stop by the shop. We listen first — then quote fast." },
  { n: "02", t: "Design & proof", d: "Our team mocks it up. You approve every detail before a single inch is printed." },
  { n: "03", t: "Print & fabricate", d: "Production happens on-site with commercial-grade materials made to last." },
  { n: "04", t: "Install & stand back", d: "We install on-vehicle or on-building — clean, level, ready to work for you." },
];

function Process() {
  return (
    <section id="process" className="border-b border-border bg-surface py-24">
      <div className="container-x">
        <SectionHead eyebrow="How it works" title="Four steps. Zero surprises." />
        <ol className="mt-16 grid gap-px bg-border md:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="bg-surface p-8">
              <p className="font-display text-4xl text-primary">{s.n}</p>
              <h3 className="mt-6 text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="work" className="border-b border-border py-24">
      <div className="container-x">
        <SectionHead eyebrow="Recent work" title="Out on the road. Up on the wall." />
        <div className="mt-16 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          <GalleryItem src={heroImg} caption="Fleet wrap · pickup" className="md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" />
          <GalleryItem src={storefrontImg} caption="Channel letter storefront" />
          <GalleryItem src={bannerImg} caption="Event banner" />
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ src, caption, className = "" }: { src: string; caption: string; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden border border-border ${className}`}>
      <img
        src={src}
        alt={caption}
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/95 to-transparent p-4 text-xs uppercase tracking-widest">
        <span>{caption}</span>
        <span className="text-primary">↗</span>
      </figcaption>
    </figure>
  );
}

function Stats() {
  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="container-x grid gap-8 py-16 sm:grid-cols-2 md:grid-cols-4">
        {[
          ["15+", "Years in Lloydminster"],
          ["2,400+", "Signs delivered"],
          ["24h", "Rush turnaround"],
          ["100%", "Locally owned"],
        ].map(([v, l]) => (
          <div key={l} className="border-l-2 border-primary-foreground/30 pl-5">
            <p className="font-display text-5xl">{v}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest">{l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const reviews = [
  { q: "Amazing place, will definitely do business with them again.", a: "Google review" },
  { q: "Quick and nice quality.", a: "Google review" },
  { q: "They are my go-to sign and promotion shop in town.", a: "Google review" },
];

function Reviews() {
  return (
    <section id="reviews" className="border-b border-border py-24">
      <div className="container-x">
        <SectionHead eyebrow="What customers say" title="Trusted across the border city." />
        <div className="mt-16 grid gap-px bg-border md:grid-cols-3">
          {reviews.map((r, i) => (
            <blockquote key={i} className="bg-background p-8">
              <div className="mb-5 flex gap-1 text-primary" aria-label="5 stars">
                {"★★★★★".split("").map((s, j) => <span key={j}>{s}</span>)}
              </div>
              <p className="text-xl leading-snug">"{r.q}"</p>
              <footer className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">— {r.a}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden border-b border-border py-24">
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div className="container-x relative grid gap-12 lg:grid-cols-2">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-8 bg-primary" /> Get started
          </p>
          <h2 className="text-4xl md:text-6xl">
            Got a sign in mind? <span className="text-primary">Let's build it.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lg text-muted-foreground">
            Drop by the shop, give us a call, or send a message. Free quotes — always.
          </p>
          <div className="mt-10 space-y-6">
            <ContactLine label="Call" value={PHONE} href={PHONE_HREF} />
            <ContactLine label="Visit" value="1C1, 1809 50 Ave, Lloydminster, SK" href="https://maps.google.com/?q=1809+50+Ave+Lloydminster+SK" />
            <ContactLine label="Hours" value="Mon–Fri · 9 AM – 5 PM" />
          </div>
        </div>
        <form
          className="border border-border bg-surface p-8"
          onSubmit={(e) => {
            e.preventDefault();
            const f = new FormData(e.currentTarget);
            const body = `Hi Signs 'N More,%0D%0A%0D%0AName: ${f.get("name")}%0D%0APhone: ${f.get("phone")}%0D%0A%0D%0A${f.get("message")}`;
            window.location.href = `mailto:info@signsnmore.ca?subject=Quote request&body=${body}`;
          }}
        >
          <h3 className="text-2xl">Request a quote</h3>
          <div className="mt-6 grid gap-4">
            <Field name="name" label="Your name" placeholder="Jane Smith" required />
            <Field name="phone" label="Phone" placeholder="306-000-0000" required />
            <Field name="project" label="Project type" placeholder="e.g. vehicle wrap" />
            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Project details
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Tell us about size, timeline, materials…"
                className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-primary px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition hover:brightness-110"
            >
              Send request →
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({ name, label, placeholder, required }: { name: string; label: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}

function ContactLine({ label, value, href }: { label: string; value: string; href?: string }) {
  const Inner = (
    <>
      <p className="text-xs font-semibold uppercase tracking-widest text-primary">{label}</p>
      <p className="mt-1 font-display text-2xl">{value}</p>
    </>
  );
  return (
    <div className="border-l-2 border-primary pl-5">
      {href ? <a href={href} className="block hover:opacity-80">{Inner}</a> : Inner}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-background py-12">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block size-3 bg-primary" aria-hidden />
          <span className="font-display tracking-wider">SIGNS'N MORE LTD</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Signs 'N More Ltd · Lloydminster, SK · {PHONE}
        </p>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold uppercase tracking-widest text-muted-foreground hover:text-primary"
        >
          Instagram ↗
        </a>
      </div>
    </footer>
  );
}
