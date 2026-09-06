"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link001 } from "@/components/v1/skiper40";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { EnquiryForm } from "@/components/ui/enquiry-form";

export const ContactSection = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "luminotechlabs@gmail.com",
      subtext: "Typical response within 2 hours",
      href: "mailto:luminotechlabs@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9025078201",
      subtext: "Anytime",
      href: "tel:+91905078201",
    },
    {
      icon: MapPin,
      label: "Studio Location",
      value: "Remote",
      subtext: "",
      href: "https://maps.google.com",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "24/7",
      subtext: "All the time",
    },
  ];

  const socialLinks = [
    { label: "Twitter / X", href: "https://twitter.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "GitHub", href: "https://github.com" },
    { label: "Instagram", href: "https://instagram.com" },
  ];

  return (
    <section id="contact" className="w-full px-4 py-20 md:py-28">
      <div className="mx-auto max-w-4xl">
        {/* Header with scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-lg"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-sage-500">
            Get in touch
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-sage-900 sm:text-4xl">
            Let&apos;s talk about your next project.
          </h2>
          <p className="mt-3 text-base text-sage-600 leading-relaxed">
            Have a project in mind, an existing product to revamp, or simply want to explore possibilities? We&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Asymmetrical 2-column layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 md:col-span-5"
          >
            <div className="rounded-3xl border border-sage-200/70 bg-white p-6 shadow-sm space-y-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-sage-700">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="group flex items-start gap-3.5 p-2 -mx-2 rounded-2xl transition-colors hover:bg-sage-50/70">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-sage-100 text-sage-700 transition-colors group-hover:bg-sage-200">
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-medium text-sage-400">
                          {item.label}
                        </p>
                        <p className="text-sm font-semibold text-sage-900 group-hover:text-sage-700 transition-colors truncate">
                          {item.value}
                        </p>
                        <p className="text-xs text-sage-500 mt-0.5">
                          {item.subtext}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-sage-100">
                <p className="text-xs font-semibold uppercase tracking-wider text-sage-400 mb-3">
                  Connect With Us
                </p>
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {socialLinks.map((s) => (
                    <Link001
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-sage-600 hover:text-sage-900 flex items-center gap-0.5"
                    >
                      {s.label}
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </Link001>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Inquiry Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-7"
          >
            <EnquiryForm
              title="Send us a note"
              subtitle="Have a project in mind, an existing product to revamp, or simply want to explore possibilities? We'd love to hear from you."
              source="Home Contact Section"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
