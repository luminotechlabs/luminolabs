import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/sections/navbar";
import { Footer } from "@/components/sections/footer";
import { ArrowLeft, ShieldCheck, Scale, Clock, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms & Conditions — Luminotechlabs",
  description:
    "Official Terms and Conditions governing digital engineering, design, marketing, and consulting engagements with Luminotechlabs.",
};

export default function TermsPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-sage-200 selection:text-sage-900">
      <Navbar />

      <main className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-sage-600 transition-colors hover:text-sage-900"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4 pb-10 border-b border-sage-200/70">
            <div className="inline-flex items-center gap-2 rounded-full border border-sage-200 bg-white px-3.5 py-1 text-xs font-mono font-medium text-sage-700 shadow-xs">
              <Scale className="h-3.5 w-3.5 text-sage-600" />
              <span>CLIENT SERVICE AGREEMENT</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-sage-900 leading-[1.1]">
              Terms &amp; Conditions
            </h1>

            <p className="text-sm sm:text-base text-sage-600 leading-relaxed max-w-2xl">
              These terms establish clear, upfront expectations between Luminotechlabs and our clients. They protect both parties, define delivery conditions, payment schedules, intellectual property rights, and serve as binding proof for all commissioned engagements.
            </p>

            <p className="text-xs font-mono text-sage-400">
              Last Updated: November 2026 &bull; Version 2.1
            </p>
          </div>

          {/* Quick Notice Highlight Cards */}
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-3xl border border-sage-200/80 bg-white p-6 shadow-xs flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-sage-700">
                <Clock className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h2 className="text-sm font-bold text-sage-900">Delivery Contingent on Approvals</h2>
                <p className="text-xs text-sage-600 leading-relaxed">
                  Project schedules strictly rely on timely client input. Any delay in client feedback, assets, or milestone approvals automatically extends delivery dates.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-sage-200/80 bg-white p-6 shadow-xs flex items-start gap-4">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-sage-100 text-sage-700">
                <AlertTriangle className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h2 className="text-sm font-bold text-sage-900">Unforeseen Operational Situations</h2>
                <p className="text-xs text-sage-600 leading-relaxed">
                  If unforeseen situations arise from our side (critical outages, emergency technical blockers), schedules may be reasonably adjusted with proactive communication.
                </p>
              </div>
            </div>
          </div>

          {/* Legal Clauses */}
          <div className="space-y-12 pt-4 text-sage-800 leading-relaxed text-sm sm:text-base">
            {/* Clause 1 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sage-500 bg-sage-100 px-2 py-0.5 rounded-md">01</span>
                <h2 className="text-lg sm:text-xl font-bold text-sage-900">Parties &amp; Acceptance of Terms</h2>
              </div>
              <p className="text-sage-600">
                This Client Service Agreement is entered into by and between <strong>Luminotechlabs</strong> (&ldquo;Agency&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) and the business entity or individual commissioning our services (&ldquo;Client&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;).
              </p>
              <p className="text-sage-600">
                Engaging Luminotechlabs, approving any proposal, Statement of Work (SOW), project specification, paying an invoice, or submitting a project brief through our platforms constitutes full, unconditional acceptance of these Terms and Conditions. Individual SOWs may outline specific technical milestones, which supersede these general terms solely on items explicitly modified in writing.
              </p>
            </section>

            {/* Clause 2 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sage-500 bg-sage-100 px-2 py-0.5 rounded-md">02</span>
                <h2 className="text-lg sm:text-xl font-bold text-sage-900">Scope of Work &amp; Change Orders</h2>
              </div>
              <p className="text-sage-600">
                All engineering, design, marketing, and media services are strictly bounded by the itemized deliverables documented in the approved SOW or project invoice.
              </p>
              <div className="rounded-2xl border border-sage-200/70 bg-sage-50/50 p-4 space-y-2 text-xs sm:text-sm text-sage-700">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Scope Revisions:</strong> Any feature additions, structural design pivots, third-party integrations not specified initially, or scope alterations requested by the Client will be quoted separately as a formal <strong>Change Order</strong> with adjusted cost and delivery projections before execution.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-sage-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Incidental Consulting:</strong> Work requested outside agreed scope hours is billed at Luminotechlabs&apos; prevailing standard hourly engineering rate.</span>
                </div>
              </div>
            </section>

            {/* Clause 3 - HIGHLIGHTED REQUIREMENT */}
            <section className="space-y-3 rounded-3xl border border-sage-200 bg-white p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sage-600 bg-sage-100 px-2 py-0.5 rounded-md">03</span>
                <h2 className="text-lg sm:text-xl font-bold text-sage-900">
                  Project Delivery, Estimation &amp; Client Approval Dependencies
                </h2>
              </div>
              <p className="text-sage-700">
                All estimated delivery dates, sprint schedules, and milestone targets provided by Luminotechlabs are professional technical projections that are <strong>strictly contingent upon prompt Client approvals, feedback, and material provision</strong>.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-sage-600 list-disc pl-5">
                <li>
                  <strong>Client Approval Windows:</strong> The Client agrees to inspect milestone releases, staging previews, or architectural proposals and provide consolidated written feedback or approval within <strong>5 business days</strong> of submission.
                </li>
                <li>
                  <strong>Automatic Timeline Extension on Client Delay:</strong> If the Client delays in providing required assets (credentials, copy, media, API access), delays milestone sign-offs, or takes longer than the allotted feedback window, <strong>the project delivery date will automatically be extended</strong> on at least a day-for-day basis, subject to engineer availability and sprint rescheduling.
                </li>
                <li>
                  <strong>Extended Inactivity / Project Freeze:</strong> If a project is held in an unapproved or paused state by the Client for more than <strong>14 calendar days</strong>, Luminotechlabs reserves the right to archive active staging environments and issue an invoice for all completed work to date. Unfreezing an archived project may incur a project reactivation fee.
                </li>
              </ul>
            </section>

            {/* Clause 4 - HIGHLIGHTED REQUIREMENT */}
            <section className="space-y-3 rounded-3xl border border-sage-200 bg-white p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sage-600 bg-sage-100 px-2 py-0.5 rounded-md">04</span>
                <h2 className="text-lg sm:text-xl font-bold text-sage-900">
                  Operational Contingencies &amp; Unforeseen Circumstances
                </h2>
              </div>
              <p className="text-sage-700">
                While Luminotechlabs employs robust engineering workflows to hit all scheduled target dates, both parties recognize that complex digital software engineering and online service management may encounter unexpected conditions.
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-sage-600 list-disc pl-5">
                <li>
                  <strong>Unforeseen Situations on Agency Side:</strong> If unexpected technical blockers, upstream provider outages (e.g. GitHub, AWS, Appwrite, Vercel platform outages), sudden breaking changes in third-party APIs, critical security vulnerabilities requiring emergency patching, acute illness or emergency affecting core technical staff, or Force Majeure occurrences arise from our side, <strong>delivery milestones may be reasonably extended</strong> without incurring financial penalties, liquidated damages, or breach of agreement.
                </li>
                <li>
                  <strong>Proactive Transparency:</strong> In any such rare event, Luminotechlabs shall notify the Client promptly, detail the nature of the technical or operational delay, and provide a revised, expedited completion roadmap.
                </li>
              </ul>
            </section>

            {/* Clause 5 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sage-500 bg-sage-100 px-2 py-0.5 rounded-md">05</span>
                <h2 className="text-lg sm:text-xl font-bold text-sage-900">Payments, Milestone Billing &amp; Late Fees</h2>
              </div>
              <p className="text-sage-600">
                Unless otherwise specified in a custom SOW:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-sage-600 list-disc pl-5">
                <li><strong>Fixed-Scope Projects:</strong> Standard terms require a <strong>50% non-refundable deposit</strong> prior to project initiation and sprint planning, and the remaining <strong>50% balance</strong> upon final staging sign-off prior to production deployment or source code handover.</li>
                <li><strong>Retainers &amp; Recurring Services:</strong> Retainers for marketing, SEO, and social media handling are payable in advance on or before the 1st of each calendar month.</li>
                <li><strong>Late Settlement:</strong> Invoices remaining unpaid after 7 business days from the due date are subject to a late charge of 1.5% per month. Luminotechlabs reserves the right to pause active development, suspend staging servers, or withhold production releases until all outstanding balances are cleared.</li>
              </ul>
            </section>

            {/* Clause 6 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sage-500 bg-sage-100 px-2 py-0.5 rounded-md">06</span>
                <h2 className="text-lg sm:text-xl font-bold text-sage-900">Intellectual Property &amp; Code Ownership</h2>
              </div>
              <p className="text-sage-600">
                <strong>Transfer Upon Full Payment:</strong> Full copyright and ownership of bespoke custom source code, graphic deliverables, and software architecture created specifically for the Client transfer to the Client <strong>exclusively upon 100% receipt of all agreed payments</strong>. Until full payment is settled, Luminotechlabs retains all proprietary rights.
              </p>
              <p className="text-sage-600">
                <strong>Pre-Existing Tools &amp; Open Source:</strong> Luminotechlabs retains ownership of its proprietary starter scaffolding, utility scripts, and reusable libraries. Open-source libraries used within the project remain subject to their respective open-source licenses (MIT, Apache 2.0, BSD).
              </p>
              <p className="text-sage-600">
                <strong>Portfolio &amp; Showcase Rights:</strong> Unless restricted by an explicit, separate non-disclosure agreement (NDA) signed prior to project kickoff, Luminotechlabs reserves the right to feature the completed work, public links, and case studies in its agency portfolio, marketing collateral, and award entries.
              </p>
            </section>

            {/* Clause 7 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sage-500 bg-sage-100 px-2 py-0.5 rounded-md">07</span>
                <h2 className="text-lg sm:text-xl font-bold text-sage-900">Third-Party Services &amp; Subscriptions</h2>
              </div>
              <p className="text-sage-600">
                All subscriptions, hosting fees, domain registrations, Appwrite Cloud tiers, email dispatchers (Resend, SendGrid), payment gateway processing charges (Stripe, Razorpay), external APIs, and ad network spend (Google Ads, Meta Ads) are the direct financial responsibility of the Client.
              </p>
              <p className="text-sage-600">
                Luminotechlabs is not responsible for policy changes, price hikes, downtime, account suspensions, or service discontinuations imposed by third-party platforms.
              </p>
            </section>

            {/* Clause 8 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sage-500 bg-sage-100 px-2 py-0.5 rounded-md">08</span>
                <h2 className="text-lg sm:text-xl font-bold text-sage-900">30-Day Launch Warranty &amp; Maintenance</h2>
              </div>
              <p className="text-sage-600">
                Luminotechlabs provides a <strong>30-day complimentary bug-fix warranty</strong> commencing on the date of final production deployment or handover. This warranty covers demonstrable bugs and malfunctions that deviate from the agreed specifications in the original staging environment.
              </p>
              <p className="text-sage-600">
                The warranty expressly excludes bugs or errors resulting from: (a) unauthorized modifications to the codebase or server configuration made by the Client or third parties; (b) failure of third-party plugins or APIs; or (c) browser/OS updates released after launch. Ongoing support, updates, and continuous optimization are provided under a separate Monthly Retainer.
              </p>
            </section>

            {/* Clause 9 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sage-500 bg-sage-100 px-2 py-0.5 rounded-md">09</span>
                <h2 className="text-lg sm:text-xl font-bold text-sage-900">Project Cancellation &amp; Kill Fees</h2>
              </div>
              <p className="text-sage-600">
                Either party may terminate an engagement by providing <strong>7 business days&apos; written notice</strong>. In the event of early termination by the Client:
              </p>
              <ul className="space-y-1.5 text-xs sm:text-sm text-sage-600 list-disc pl-5">
                <li>The initial 50% deposit remains strictly non-refundable to cover sprint allocation and discovery.</li>
                <li>The Client shall be invoiced for all billable hours and completed milestones accrued up to the date of cancellation.</li>
                <li>All work completed and paid for up to the date of termination will be packaged and delivered to the Client upon final settlement.</li>
              </ul>
            </section>

            {/* Clause 10 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sage-500 bg-sage-100 px-2 py-0.5 rounded-md">10</span>
                <h2 className="text-lg sm:text-xl font-bold text-sage-900">Limitation of Liability &amp; Indemnity</h2>
              </div>
              <p className="text-sage-600">
                To the maximum extent permitted by applicable law, the cumulative liability of Luminotechlabs for any and all claims, damages, or losses arising out of or related to this agreement, regardless of the form of action, shall not exceed the <strong>total amount actually paid by the Client to Luminotechlabs</strong> under the specific SOW in question.
              </p>
              <p className="text-sage-600">
                In no event shall Luminotechlabs be liable for lost revenue, lost profits, business interruption, loss of data, reputational damage, or any indirect, special, or consequential damages. The Client agrees to indemnify and hold harmless Luminotechlabs from any claims or legal actions resulting from content, images, copy, or data supplied by the Client that infringes upon third-party rights.
              </p>
            </section>

            {/* Clause 11 */}
            <section className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-sage-500 bg-sage-100 px-2 py-0.5 rounded-md">11</span>
                <h2 className="text-lg sm:text-xl font-bold text-sage-900">Governing Law &amp; Jurisdiction</h2>
              </div>
              <p className="text-sage-600">
                These Terms and Conditions and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of <strong>Tamil Nadu, India</strong>.
              </p>
              <p className="text-sage-600">
                Both parties agree to submit to a mandatory 14-day informal negotiation period before initiating formal arbitration or legal proceedings in the competent courts having jurisdiction in Tamil Nadu, India.
              </p>
            </section>
          </div>

          {/* Bottom Card */}
          <div className="mt-16 rounded-3xl border border-sage-200/80 bg-sage-900 text-white p-8 sm:p-10 text-center relative overflow-hidden shadow-lg">
            <div className="relative z-10 max-w-xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-mono text-sage-300">
                <ShieldCheck className="h-3.5 w-3.5 text-sage-400" />
                <span>FAIR, TRANSPARENT &amp; BULLETPROOF</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Have questions regarding our terms?
              </h2>
              <p className="text-xs sm:text-sm text-sage-200 leading-relaxed">
                If you need a custom Statement of Work, a dedicated Non-Disclosure Agreement (NDA), or custom enterprise terms for your upcoming project, talk to our lead engineers.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-4">
                <Button asChild size="default" className="rounded-full bg-white text-sage-950 hover:bg-sage-100 font-semibold px-6">
                  <Link href="/#contact">Contact Legal / Engineering</Link>
                </Button>
                <Button asChild variant="outline" size="default" className="rounded-full border-sage-700 text-sage-200 hover:bg-white/10 hover:text-white">
                  <Link href="/#services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
