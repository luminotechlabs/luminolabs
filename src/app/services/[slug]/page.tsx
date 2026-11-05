import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SERVICES_DATA } from "@/lib/services-data";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { EnquiryForm } from "@/components/ui/enquiry-form";

interface ServicePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = SERVICES_DATA[params.slug];
  if (!service) return { title: "Service Not Found — Luminotechlabs" };

  return {
    title: `${service.title} — Luminotechlabs`,
    description: service.shortDescription,
  };
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = SERVICES_DATA[params.slug];

  if (!service) {
    notFound();
  }

  // Find other services for "Explore Other Disciplines" footer navigation
  const allServices = Object.values(SERVICES_DATA);
  const otherServices = allServices.filter((s) => s.slug !== service.slug);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-sage-200 selection:text-sage-900">
      <Navbar />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/#services"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-600 transition-colors hover:text-sage-900"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to All Services</span>
            </Link>
          </div>

          {/* Hero Header */}
          <div className="space-y-6 pb-14 border-b border-sage-200/70">
            <div className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white px-3.5 py-1 text-xs font-mono font-medium text-sage-700 shadow-xs">
              <span>{service.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-sage-900 leading-[1.08]">
              {service.title}
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-sage-800 leading-snug max-w-3xl">
              {service.heroHeadline}
            </p>

            <p className="text-base sm:text-lg text-sage-600 leading-relaxed max-w-3xl">
              {service.heroStatement}
            </p>

            {/* Quick Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full bg-sage-700 hover:bg-sage-800 text-white">
                <a href="#enquiry" className="flex items-center gap-2">
                  <span>Start a {service.title} Project</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-full border-sage-300 text-sage-800 hover:bg-sage-50">
                <a href="#deliverables">
                  View Full Deliverables
                </a>
              </Button>
            </div>
          </div>

          {/* Section: The Problem We Solve */}
          <section className="py-16 md:py-20 border-b border-sage-200/70">
            <div className="max-w-xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-2">
                Why typical approaches fail
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sage-900">
                {service.theProblemWeSolve.heading}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-sage-600 leading-relaxed">
                {service.theProblemWeSolve.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.theProblemWeSolve.points.map((point, i) => (
                <div
                  key={point.title}
                  className="rounded-3xl border border-sage-200/70 bg-white p-6 shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-mono font-bold text-sage-400 mb-3 block">
                      [ 0{i + 1} ]
                    </span>
                    <h3 className="text-lg font-bold text-sage-900 mb-2.5">
                      {point.title}
                    </h3>
                    <p className="text-sm text-sage-600 leading-relaxed">
                      {point.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Core Deliverables */}
          <section id="deliverables" className="py-16 md:py-20 border-b border-sage-200/70">
            <div className="max-w-xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-2">
                Concrete scope &amp; execution
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sage-900">
                What you actually receive
              </h2>
              <p className="mt-2 text-sm sm:text-base text-sage-600 leading-relaxed">
                No hand-wavy consulting decks. We hand you production-ready software, clean assets, and documented repositories.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.deliverables.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-sage-200/80 bg-white p-7 shadow-xs hover:border-sage-400 hover:shadow-md transition-all duration-300"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sage-100 text-sage-700">
                    <Layers className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-sage-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-sage-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-sage-100">
                    {item.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-sage-700">
                        <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-sage-500 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Tech Stack & Rationale */}
          <section className="py-16 md:py-20 border-b border-sage-200/70">
            <div className="max-w-xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-2">
                Engineered for longevity
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sage-900">
                Our Tooling &amp; Technology Stack
              </h2>
              <p className="mt-2 text-sm sm:text-base text-sage-600 leading-relaxed">
                We select technologies based on developer ergonomics, long-term maintenance, and end-user speed.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {service.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="rounded-2xl border border-sage-200/60 bg-white p-5 shadow-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4 text-sage-500" />
                      <span className="text-xs font-mono font-medium text-sage-400">
                        {tech.role}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-sage-900 mb-1.5">
                    {tech.name}
                  </h3>
                  <p className="text-xs text-sage-600 leading-relaxed">
                    {tech.rationale}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Process & Timeline */}
          <section className="py-16 md:py-20 border-b border-sage-200/70">
            <div className="max-w-xl mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-2">
                Clear expectations from day one
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sage-900">
                How We Deliver
              </h2>
              <p className="mt-2 text-sm sm:text-base text-sage-600 leading-relaxed">
                Predictable 4-phase execution cycles with zero mystery meetings and direct engineer communication.
              </p>
            </div>

            <div className="space-y-6">
              {service.process.map((step) => (
                <div
                  key={step.step}
                  className="rounded-3xl border border-sage-200/70 bg-white p-6 sm:p-7 shadow-xs flex flex-col md:flex-row md:items-start justify-between gap-6"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-sage-100 font-mono text-sm font-bold text-sage-800">
                      {step.step}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1.5">
                        <h3 className="text-lg font-bold text-sage-900">
                          {step.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 rounded-full bg-sage-50 border border-sage-200 px-2.5 py-0.5 text-[11px] font-mono text-sage-600">
                          <Clock className="h-3 w-3" />
                          <span>{step.timeframe}</span>
                        </span>
                      </div>
                      <p className="text-sm text-sage-600 leading-relaxed max-w-2xl">
                        {step.summary}
                      </p>
                    </div>
                  </div>

                  <div className="md:text-right border-t md:border-t-0 pt-3 md:pt-0 border-sage-100 flex-shrink-0">
                    <p className="text-xs font-mono uppercase text-sage-400 mb-1">
                      Deliverable
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-sage-800 max-w-xs">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Direct FAQs */}
          <section className="py-16 md:py-20 border-b border-sage-200/70">
            <div className="max-w-xl mb-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-2">
                Common questions
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sage-900">
                Frequently Answered
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-sage-200/70 bg-white p-6 shadow-xs"
                >
                  <h3 className="text-base font-bold text-sage-900 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-sage-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Explore Other Disciplines */}
          <section className="py-16 md:py-20 border-b border-sage-200/70">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-1.5">
                  Full-stack capabilities
                </p>
                <h2 className="text-2xl font-bold tracking-tight text-sage-900">
                  Explore Other Services
                </h2>
              </div>
              <Link
                href="/#services"
                className="text-xs font-semibold text-sage-700 hover:text-sage-900 inline-flex items-center gap-1"
              >
                <span>View all services overview</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {otherServices.map((other) => (
                <Link
                  key={other.slug}
                  href={`/services/${other.slug}`}
                  className="group rounded-3xl border border-sage-200/80 bg-white p-5 shadow-xs hover:border-sage-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sage-400 block mb-2">
                      {other.badge}
                    </span>
                    <h3 className="text-lg font-bold text-sage-900 group-hover:text-sage-700 transition-colors mb-2">
                      {other.title}
                    </h3>
                    <p className="text-xs text-sage-600 line-clamp-2 leading-relaxed">
                      {other.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-sage-100 flex items-center justify-between text-xs font-medium text-sage-600 group-hover:text-sage-900">
                    <span>Read breakdown</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Section: Direct Service Enquiry Form */}
          <section id="enquiry" className="py-16 md:py-20 border-b border-sage-200/70">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              <div className="lg:col-span-5 space-y-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-sage-500">
                  Instant Project Scoping
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-sage-900">
                  Commission {service.title}
                </h2>
                <p className="text-sm text-sage-600 leading-relaxed">
                  Have an active roadmap item, an upcoming MVP deadline, or an existing system that needs architectural overhaul? Send us your project overview.
                </p>

                <div className="pt-2 space-y-3">
                  <div className="flex items-center gap-2.5 text-xs text-sage-700">
                    <CheckCircle2 className="h-4 w-4 text-sage-600 flex-shrink-0" />
                    <span>Direct engineering consultation with zero sales middlemen</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-sage-700">
                    <CheckCircle2 className="h-4 w-4 text-sage-600 flex-shrink-0" />
                    <span>Technical assessment &amp; scoping within 2 hours</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs text-sage-700">
                    <CheckCircle2 className="h-4 w-4 text-sage-600 flex-shrink-0" />
                    <span>Full NDA compliance and transparent milestone estimation</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <EnquiryForm
                  defaultService={service.title}
                  title={`Enquire about ${service.title}`}
                  subtitle="Fill in your project details and we will follow up with technical architecture & timeline estimates."
                  source={`Service Page: ${service.title}`}
                />
              </div>
            </div>
          </section>

          {/* Final Call to Action Box */}
          <section className="pt-16 md:pt-20">
            <div className="rounded-3xl border border-sage-200/80 bg-sage-900 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-lg">
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-sage-700/30 blur-3xl" />
              <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-sage-500/20 blur-3xl" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-5">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-mono text-sage-300 backdrop-blur-sm">
                  <ShieldCheck className="h-3.5 w-3.5 text-sage-400" />
                  <span>DIRECT ACCESS TO LEAD ARCHITECTS</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to build your {service.title.toLowerCase()} pipeline?
                </h2>

                <p className="text-sm sm:text-base text-sage-200 leading-relaxed">
                  Tell us what you are trying to ship, your timeline goals, or what is holding back your existing product. We respond within 2 hours with real technical feedback.
                </p>

                <div className="pt-3 flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="rounded-full bg-white text-sage-950 hover:bg-sage-100 font-semibold px-8">
                    <Link href="/#contact" className="flex items-center gap-2">
                      <span>Book a Discovery Call</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full border-sage-700 text-sage-200 hover:bg-white/10 hover:text-white">
                    <Link href="/#work">
                      View Shipped Works
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
