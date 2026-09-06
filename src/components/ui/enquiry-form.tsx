"use client";

import React, { useState } from "react";
import { Send, Check, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { submitEnquiry } from "@/lib/appwrite";

interface EnquiryFormProps {
  defaultService?: string;
  className?: string;
  title?: string;
  subtitle?: string;
  source?: string;
}

export function EnquiryForm({
  defaultService = "Web Development",
  className = "",
  title = "Send an Inquiry",
  subtitle = "Tell us about your objectives. We will get back to you within 2 hours.",
  source,
}: EnquiryFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(defaultService);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      await submitEnquiry({
        name,
        email,
        service,
        message,
        sourceUrl: source || (typeof window !== "undefined" ? window.location.pathname : ""),
      });
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Unable to submit your enquiry at this moment. Please try again or reach out directly."
      );
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setService(defaultService);
    setStatus("idle");
    setErrorMessage("");
  };

  if (status === "success") {
    return (
      <div className={`rounded-3xl border border-sage-200/80 bg-white p-7 shadow-sm text-center py-12 space-y-4 ${className}`}>
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-100 text-sage-800">
          <Check className="h-6 w-6" />
        </div>
        <div className="space-y-1.5">
          <h3 className="text-xl font-bold text-sage-900">
            Enquiry Submitted Successfully
          </h3>
          <p className="text-sm text-sage-600 max-w-md mx-auto leading-relaxed">
            Thank you, <span className="font-semibold text-sage-800">{name}</span>. Our technical leads have received your details and will follow up with actionable scoping within 2 hours.
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleReset}
          className="mt-4 rounded-full border-sage-200 text-sage-700 hover:bg-sage-50"
        >
          Submit another inquiry
        </Button>
      </div>
    );
  }

  return (
    <div className={`rounded-3xl border border-sage-200/80 bg-white p-6 sm:p-8 shadow-sm ${className}`}>
      <div className="mb-6">
        <h3 className="text-lg sm:text-xl font-bold text-sage-900">{title}</h3>
        {subtitle && (
          <p className="mt-1 text-xs sm:text-sm text-sage-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {status === "error" && (
        <div className="mb-5 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-xs text-rose-800">
          <AlertCircle className="h-4 w-4 flex-shrink-0 text-rose-600 mt-0.5" />
          <div>
            <p className="font-semibold">Submission failed</p>
            <p className="mt-0.5">{errorMessage}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-sage-700 mb-1.5">
              Your Name <span className="text-sage-400">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Joseph Vijay"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={status === "submitting"}
              className="w-full rounded-2xl border border-sage-200 bg-sage-50/50 px-3.5 py-2.5 text-sm text-sage-900 placeholder:text-sage-400 focus:border-sage-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sage-200 transition-all disabled:opacity-60"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-sage-700 mb-1.5">
              Work Email <span className="text-sage-400">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "submitting"}
              className="w-full rounded-2xl border border-sage-200 bg-sage-50/50 px-3.5 py-2.5 text-sm text-sage-900 placeholder:text-sage-400 focus:border-sage-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sage-200 transition-all disabled:opacity-60"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-sage-700 mb-1.5">
            Service of Interest
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            disabled={status === "submitting"}
            className="w-full rounded-2xl border border-sage-200 bg-sage-50/50 px-3.5 py-2.5 text-sm text-sage-900 focus:border-sage-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sage-200 transition-all disabled:opacity-60"
          >
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="Digital Marketing & SEO">Digital Marketing &amp; SEO</option>
            <option value="Social Media Architecture">Social Media Architecture</option>
            <option value="Full Retainer / Custom Project">Full Retainer / Custom Project</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-sage-700 mb-1.5">
            Project Details <span className="text-sage-400">*</span>
          </label>
          <textarea
            rows={4}
            required
            placeholder="Briefly describe what you are building, your expected timeline, or current technical bottlenecks..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={status === "submitting"}
            className="w-full rounded-2xl border border-sage-200 bg-sage-50/50 px-3.5 py-2.5 text-sm text-sage-900 placeholder:text-sage-400 focus:border-sage-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-sage-200 transition-all resize-y disabled:opacity-60"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full sm:w-auto rounded-full bg-sage-800 hover:bg-sage-900 text-white font-medium px-7 transition-all"
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              <span>Submitting to Appwrite...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <span>Send Enquiry</span>
              <Send className="h-3.5 w-3.5" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
}
