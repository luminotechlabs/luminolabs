"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link001 } from "@/components/v1/skiper40";
import { Mail, Phone, MapPin, Clock, ArrowUpRight, Send, Check } from "lucide-react";

export const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Web Development",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
            <div className="rounded-3xl border border-sage-200/70 bg-white p-7 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-3">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-100 text-sage-700">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-sage-900">
                    Message Received
                  </h3>
                  <p className="text-sm text-sage-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out. We have received your inquiry and our team will get back to you within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                    className="mt-4"
                  >
                    Send another note
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-base font-bold text-sage-900">
                    Send us a note
                  </h3>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-sage-600 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Joseph Vijay"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-2xl border border-sage-200 bg-sage-50/50 px-3.5 py-2.5 text-sm text-sage-900 placeholder:text-sage-400 focus:border-sage-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sage-300 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-sage-600 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@yourcompany.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-2xl border border-sage-200 bg-sage-50/50 px-3.5 py-2.5 text-sm text-sage-900 placeholder:text-sage-400 focus:border-sage-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sage-300 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-sage-600 mb-1.5">
                      Service of Interest
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full rounded-2xl border border-sage-200 bg-sage-50/50 px-3.5 py-2.5 text-sm text-sage-900 focus:border-sage-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sage-300 transition-all"
                    >
                      <option>Web Development</option>
                      <option>Mobile App Development</option>
                      <option>Digital Marketing &amp; SEO</option>
                      <option>Social Media Architecture</option>
                      <option>Full Retainer / Custom Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-sage-600 mb-1.5">
                      Tell us about your project
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Briefly describe what you are building, timeline goals, or challenges you are facing..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-2xl border border-sage-200 bg-sage-50/50 px-3.5 py-2.5 text-sm text-sage-900 placeholder:text-sage-400 focus:border-sage-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-sage-300 transition-all resize-y"
                    />
                  </div>

                  <Button type="submit" size="default" className="w-full sm:w-auto">
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="h-3.5 w-3.5" />
                    </span>
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
