import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { HomeTrustBadges } from "@/components/sections/HomeTrustBadges";
import { EnglishContactSection } from "@/components/sections/EnglishContactSection";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { BreadcrumbJsonLd } from "@/components/ui/BreadcrumbJsonLd";
import { WhatsAppIcon } from "@/components/ui/icons/WhatsAppIcon";
import { buildEnglishPsychologistFaqJsonLd, englishPsychologistFaqs } from "@/lib/english-psychologist-faq";
import {
  aboutServiceSections,
  audienceCards,
  englishServiceCards,
  englishTrustBadges,
  englishWhatsappUrl,
  expatTherapySections,
} from "@/lib/english-psychologist-landing";
import {
  anxietyTherapySections,
  englishInternalLinks,
  expatChallengesSections,
  firstSessionSections,
  onlineTherapyIntlSections,
  relationshipTherapySections,
  type SeoContentBlock,
  whyChoosePracticeSections,
  whyTherapyInEnglishSections,
} from "@/lib/english-psychologist-seo-content";
import { englishGoogleReviews } from "@/lib/english-psychologist-reviews";
import { siteConfig } from "@/lib/site";

const heroPortrait = "/images/profil.webp";
const pagePath = "/english-speaking-psychologist-istanbul";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "English Speaking Psychologist Istanbul" },
] as const;

function ProseSection({
  title,
  titleId,
  blocks,
  variant,
  relatedLink,
}: {
  title: string;
  titleId: string;
  blocks: readonly SeoContentBlock[];
  variant: "white" | "muted";
  relatedLink?: { href: string; label: string; note: string };
}) {
  const bg = variant === "muted" ? "bg-slate-50/80" : "bg-white";

  return (
    <section className={`${bg} py-12 md:py-20`} aria-labelledby={titleId}>
      <div className="mx-auto max-w-3xl px-6 md:px-4">
        <h2 id={titleId} className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
          {title}
        </h2>
        <div className="mt-8 space-y-10">
          {blocks.map((block) => (
            <div key={block.heading}>
              <h3 className="font-display text-lg font-semibold text-brand-navy md:text-xl">{block.heading}</h3>
              {block.paragraphs?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
              {block.subsections?.map((sub) => (
                <div key={sub.subheading} className="mt-4">
                  <h4 className="font-display text-base font-semibold text-brand-navy md:text-lg">{sub.subheading}</h4>
                  <div className="mt-3 space-y-4">
                    {sub.paragraphs.map((paragraph) => (
                      <p
                        key={paragraph.slice(0, 48)}
                        className="text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {relatedLink && (
          <p className="mt-8 text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
            {relatedLink.note}{" "}
            <Link href={relatedLink.href} className="font-semibold text-brand-accent hover:underline">
              {relatedLink.label}
            </Link>
            .
          </p>
        )}
      </div>
    </section>
  );
}

function EnglishLandingJsonLd() {
  const base = siteConfig.url.replace(/\/$/, "");
  const pageUrl = `${base}${pagePath}`;

  const medicalWebPage = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "English Speaking Psychologist in Istanbul",
    description:
      "English-speaking psychologist in Istanbul offering professional therapy and counseling for expats, international students and foreign residents.",
    url: pageUrl,
    inLanguage: "en",
    about: {
      "@type": "Psychologist",
      name: siteConfig.name,
      url: base,
      telephone: siteConfig.phoneTel,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Istanbul",
        addressRegion: "Beşiktaş",
        addressCountry: "TR",
      },
    },
  };

  const psychologist = {
    "@context": "https://schema.org",
    "@type": "Psychologist",
    name: siteConfig.name,
    jobTitle: "English Speaking Psychologist in Istanbul",
    url: pageUrl,
    image: `${base}/images/profil.webp`,
    telephone: siteConfig.phoneTel,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Hacettepe University",
    },
    knowsLanguage: ["en", "tr"],
    areaServed: "Istanbul",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(psychologist) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildEnglishPsychologistFaqJsonLd()) }}
      />
    </>
  );
}

export function EnglishPsychologistPageView() {
  return (
    <div lang="en">
      <BreadcrumbJsonLd items={[...breadcrumbs]} path={pagePath} />
      <EnglishLandingJsonLd />

      {/* HERO */}
      <section
        className="relative overflow-x-hidden bg-gradient-to-b from-brand-sky to-white"
        aria-labelledby="english-hero-heading"
      >
        <div className="mx-auto max-w-6xl px-6 py-10 md:px-4 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(0,260px)_1fr] md:gap-10 lg:gap-12">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[240px] overflow-hidden rounded-2xl border border-slate-200/80 bg-brand-sky shadow-md shadow-slate-900/10 sm:max-w-xs md:mx-0 md:max-w-none">
              <Image
                src={heroPortrait}
                alt="English speaking psychologist in Istanbul — Psk. A. Alparslan Sancar"
                fill
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0 max-w-2xl">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-slate-600 sm:text-sm">
                Istanbul · Beşiktaş · Online
              </p>
              <h1
                id="english-hero-heading"
                className="mt-3 font-display text-[1.65rem] font-bold leading-snug tracking-tight text-brand-navy sm:text-3xl md:text-4xl md:leading-tight lg:text-[2.35rem]"
              >
                English Speaking Psychologist in Istanbul
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
                Professional therapy and psychological counseling services in English for expats, international students,
                foreign residents and international professionals living in Istanbul.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={englishWhatsappUrl}
                  data-ads-conversion="contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand-accent px-5 text-sm font-bold text-white shadow-md transition-colors hover:bg-brand-accent-hover md:text-base"
                >
                  Book Appointment
                </a>
                <a
                  href={englishWhatsappUrl}
                  data-ads-conversion="contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand-navy bg-white px-5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-sky md:text-base"
                >
                  <WhatsAppIcon className="size-5" />
                  WhatsApp Consultation
                </a>
              </div>
              <p className="mt-4 text-sm text-slate-700">
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  data-ads-conversion="contact"
                  className="inline-flex min-h-11 items-center font-semibold text-brand-navy hover:underline"
                >
                  Call now
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeTrustBadges items={englishTrustBadges} ariaLabel="Trust indicators" />

      <TestimonialsMarquee
        reviews={englishGoogleReviews}
        locale="en"
        heading="Client Reviews"
        description="Real Google reviews from clients. Swipe horizontally to read more."
        listAriaLabel="Scrollable client reviews"
        linkAriaLabel="Open all Google reviews in a new tab"
        linkText="Read all reviews on Google"
      />

      {/* WHO THIS IS FOR */}
      <section className="bg-white py-12 md:py-20" aria-labelledby="audience-heading">
        <div className="mx-auto max-w-6xl px-6 md:px-4">
          <h2 id="audience-heading" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Therapy Services for English-Speaking Individuals in Istanbul
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {audienceCards.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-4 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-5 shadow-sm transition-colors hover:border-brand-navy/15"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-brand-navy shadow-sm ring-1 ring-slate-200/80">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="font-display text-sm font-bold text-brand-navy md:text-base">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-700 md:text-[15px]">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <EnglishContactSection />

      {/* ABOUT THE SERVICE */}
      <section className="bg-slate-50/80 py-12 md:py-20" aria-labelledby="about-service-heading">
        <div className="mx-auto max-w-3xl px-6 md:px-4">
          <h2 id="about-service-heading" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Professional Psychological Support in English
          </h2>
          <div className="mt-8 space-y-10">
            {aboutServiceSections.map((block) => (
              <div key={block.heading}>
                <h3 className="font-display text-lg font-semibold text-brand-navy md:text-xl">{block.heading}</h3>
                <div className="mt-4 space-y-4">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPAT THERAPY */}
      <section className="bg-white py-12 md:py-20" aria-labelledby="expat-heading">
        <div className="mx-auto max-w-3xl px-6 md:px-4">
          <h2 id="expat-heading" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Therapy for Expats and Foreign Residents in Istanbul
          </h2>
          <div className="mt-8 space-y-10">
            {expatTherapySections.map((block) => (
              <div key={block.heading}>
                <h3 className="font-display text-lg font-semibold text-brand-navy md:text-xl">{block.heading}</h3>
                <div className="mt-4 space-y-4">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)} className="text-base leading-relaxed text-slate-800 md:text-lg md:leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProseSection
        title="Why International Clients Choose Therapy in English"
        titleId="why-english-heading"
        variant="muted"
        blocks={whyTherapyInEnglishSections}
      />

      <ProseSection
        title="Common Challenges Faced by Expats in Istanbul"
        titleId="expat-challenges-heading"
        variant="white"
        blocks={expatChallengesSections}
        relatedLink={{
          href: englishInternalLinks.contact,
          label: "contact the practice",
          note: "If relocation stress is affecting your wellbeing, you can",
        }}
      />

      <ProseSection
        title="Anxiety Therapy in Istanbul"
        titleId="anxiety-therapy-heading"
        variant="muted"
        blocks={anxietyTherapySections}
        relatedLink={{
          href: englishInternalLinks.anxietyTherapy,
          label: "anxiety and panic therapy services",
          note: "For clinical detail on anxiety-focused support, see our",
        }}
      />

      <ProseSection
        title="Relationship and Couples Therapy"
        titleId="relationship-therapy-heading"
        variant="white"
        blocks={relationshipTherapySections}
        relatedLink={{
          href: englishInternalLinks.couplesTherapy,
          label: "couples and marriage counseling",
          note: "Learn more about",
        }}
      />

      <ProseSection
        title="Online Therapy for International Clients"
        titleId="online-therapy-intl-heading"
        variant="muted"
        blocks={onlineTherapyIntlSections}
        relatedLink={{
          href: englishInternalLinks.onlineTherapy,
          label: "online therapy in Turkey",
          note: "Explore format options and practical details on",
        }}
      />

      <ProseSection
        title="What To Expect During Your First Session"
        titleId="first-session-heading"
        variant="white"
        blocks={firstSessionSections}
        relatedLink={{
          href: englishInternalLinks.book,
          label: "book an appointment",
          note: "Ready to begin? You can",
        }}
      />

      <ProseSection
        title="Why Choose Our Practice"
        titleId="why-choose-heading"
        variant="muted"
        blocks={whyChoosePracticeSections}
        relatedLink={{
          href: englishInternalLinks.depressionTherapy,
          label: "depression therapy support",
          note: "For mood-related concerns, you may also review",
        }}
      />

      {/* SERVICES */}
      <section className="bg-blue-50/30 py-12 md:py-20" aria-labelledby="english-services-heading">
        <div className="mx-auto max-w-6xl px-6 md:px-4">
          <h2 id="english-services-heading" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Areas of Support
          </h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            In-person sessions in Beşiktaş and online therapy in Turkey and internationally.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {englishServiceCards.map(({ icon: Icon, title, text, href }) => (
              <li key={title}>
                <Link
                  href={href}
                  className="group flex h-full min-h-[240px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-orange-400 hover:shadow-lg"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-orange-50">
                    <Icon className="size-5 text-orange-500" strokeWidth={2} aria-hidden />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug text-brand-navy group-hover:underline md:text-lg">
                    {title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-800">{text}</p>
                  <span className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-brand-accent">
                    Learn more
                    <ArrowRight className="size-4 shrink-0 text-orange-500" strokeWidth={2} aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="scroll-mt-24 bg-slate-50/80 py-12 md:py-20"
        aria-labelledby="english-faq-heading"
      >
        <div className="mx-auto max-w-3xl px-6 md:px-4">
          <h2 id="english-faq-heading" className="font-display text-2xl font-bold text-brand-navy md:text-3xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 space-y-3">
            {englishPsychologistFaqs.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-slate-200 bg-white px-4 py-1 shadow-sm open:shadow-md"
              >
                <summary className="flex min-h-11 cursor-pointer list-none items-center py-3 font-semibold text-brand-navy marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-slate-700 md:text-[15px] md:leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="border-y border-slate-200 bg-gradient-to-br from-brand-navy to-[#1a3a5c] py-12 text-white md:py-16"
        aria-labelledby="final-cta-heading"
      >
        <div className="mx-auto max-w-3xl px-6 text-center md:px-4">
          <h2 id="final-cta-heading" className="font-display text-2xl font-bold md:text-3xl">
            Start Your Therapy Journey Today
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/90 md:text-lg">
            Confidential, evidence-based support in English — in-person in Beşiktaş or online. Reach out today and take
            the first step with a psychologist in Istanbul who understands expat and international life.
          </p>
          <ul className="mx-auto mt-6 flex max-w-xl flex-col gap-2 text-left text-sm text-white/95 sm:items-center">
            {englishTrustBadges.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 shrink-0 text-emerald-300" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={englishWhatsappUrl}
              data-ads-conversion="contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-brand-accent px-6 text-sm font-bold text-white shadow-lg transition-colors hover:bg-brand-accent-hover sm:w-auto md:text-base"
            >
              Book Appointment
            </a>
            <a
              href={englishWhatsappUrl}
              data-ads-conversion="contact"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg border-2 border-white/90 bg-transparent px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto md:text-base"
            >
              <WhatsAppIcon className="size-5" />
              Contact via WhatsApp
            </a>
          </div>
          <p className="mt-4 text-sm text-white/80">
            <a href={`tel:${siteConfig.phoneTel}`} data-ads-conversion="contact" className="inline-flex min-h-11 items-center font-semibold hover:underline">
              <Phone className="mr-1.5 inline size-4" aria-hidden />
              {siteConfig.phoneDisplay}
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
