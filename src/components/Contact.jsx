import { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import SectionTitle from './SectionTitle'

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const Contact = () => {
  const [form, setForm] = useState(initialForm)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured yet. Please add the EmailJS environment variables.',
      })
      return
    }

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: 'hariprasathdlhdlh@gmail.com',
        },
        {
          publicKey,
        }
      )

      setForm(initialForm)
      setStatus({ type: 'success', message: 'Message sent successfully!' })
    } catch {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="Contact"
          subtitle="A simple direct form for projects, collaborations, or technical conversations."
        />

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_30px_rgba(255,50,50,0.08)] backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm text-zinc-300">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-400/40 focus:shadow-[0_0_24px_rgba(255,50,50,0.12)]"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm text-zinc-300">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-400/40 focus:shadow-[0_0_24px_rgba(255,50,50,0.12)]"
              />
            </label>
          </div>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm text-zinc-300">Subject</span>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-400/40 focus:shadow-[0_0_24px_rgba(255,50,50,0.12)]"
            />
          </label>

          <label className="mt-5 block">
            <span className="mb-2 block text-sm text-zinc-300">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-zinc-100 outline-none transition-all duration-300 placeholder:text-zinc-500 focus:border-red-400/40 focus:shadow-[0_0_24px_rgba(255,50,50,0.12)]"
            />
          </label>

          {status.message && (
            <p
              className={`mt-5 text-sm ${
                status.type === 'success' ? 'text-green-400' : 'text-red-300'
              }`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={isSending}
            className="mt-6 inline-flex items-center justify-center rounded-full border border-red-400/30 bg-red-500/90 px-7 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-white shadow-[0_0_40px_rgba(255,50,50,0.35)] transition-all duration-300 hover:bg-red-500 hover:shadow-[0_0_50px_rgba(255,50,50,0.45)] disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none"
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
