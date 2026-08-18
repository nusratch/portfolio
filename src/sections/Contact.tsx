"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import Container from "@/src/components/Container";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSending(true);
    setSuccess(false);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          company: formData.get("company"),
          email: formData.get("email"),
          service: formData.get("service"),
          message: formData.get("message"),
        }),
      });

      if (!response.ok) {
        throw new Error("Email could not be sent.");
      }

      setSuccess(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 lg:py-36"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid overflow-hidden rounded-[40px] bg-white shadow-[0_30px_80px_rgba(200,92,142,0.12)] lg:grid-cols-[420px_1fr]"
        >
        
          <div className="relative overflow-hidden bg-gradient-to-br from-[#C85C8E] via-[#d46a9b] to-[#f2b6cf] p-10 text-white lg:p-14">
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white/20" />
            <div className="absolute right-10 top-10 h-24 w-24 rounded-full bg-white/10" />

            <div className="relative z-10">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-white/70">
                Get In Touch
              </p>

              <h3 className="mb-6 text-3xl font-bold">
                Contact Information
              </h3>

              <p className="mb-12 leading-8 text-white/80">
                Let's discuss your next digital project and build something
                beautiful together.
              </p>

              <div className="space-y-8">
                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/60">
                    Email
                  </p>

                  <p className="break-all text-lg font-medium">
                    nusratchy.0119@gmail.com
                  </p>
                </div>

                <div>
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-white/60">
                    Location
                  </p>

                  <p className="text-lg font-medium">
                    Chattogram, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          
          <div className="p-10 lg:p-14">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-3 block text-sm font-medium">
                    Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-[#C85C8E] focus:ring-2 focus:ring-[#C85C8E]/10"
                  />
                </div>

                <div>
                  <label className="mb-3 block text-sm font-medium">
                    Company Name
                  </label>

                  <input
                    name="company"
                    type="text"
                    placeholder="Enter company name"
                    className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-[#C85C8E] focus:ring-2 focus:ring-[#C85C8E]/10"
                  />
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-[#C85C8E] focus:ring-2 focus:ring-[#C85C8E]/10"
                />
              </div>

              <div>
                <p className="mb-5 font-medium">What do you need?</p>

                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {[
                    "Portfolio",
                    "Business Website",
                    "Landing Page",
                    "Custom Website",
                    "E-Commerce",
                
                  ].map((service, index) => (
                    <label
                      key={service}
                      className="flex cursor-pointer items-center gap-2"
                    >
                      <input
                        type="radio"
                        name="service"
                        value={service}
                        defaultChecked={index === 0}
                        className="accent-[#C85C8E]"
                      />

                      {service}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-3 block text-sm font-medium">
                  Message
                </label>

                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your idea..."
                  className="w-full resize-none rounded-xl border border-zinc-200 px-4 py-3 outline-none transition focus:border-[#C85C8E] focus:ring-2 focus:ring-[#C85C8E]/10"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="rounded-2xl bg-[#C85C8E] px-10 py-4 font-semibold text-white transition-all hover:bg-[#b54c7d] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send Email"}
              </button>

              {error && (
                <p className="text-sm font-medium text-red-500">
                  {error}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </Container>

      
      {success && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/20 px-6 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-[430px] rounded-[30px] bg-white p-9 text-center shadow-[0_30px_100px_rgba(200,92,142,0.25)]"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-pink-50 text-3xl text-[#C85C8E]">
              ✓
            </div>

            <h3 className="text-2xl font-bold text-[#C85C8E]">
              Email Sent Successfully!
            </h3>

            <p className="mt-4 leading-7 text-zinc-500">
              Thank you for reaching out. I'll get back to you as soon as
              possible.
            </p>

            <button
              type="button"
              onClick={() => setSuccess(false)}
              className="mt-7 rounded-full bg-[#C85C8E] px-8 py-3 font-semibold text-white transition hover:bg-[#b54c7d]"
            >
              Done
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}