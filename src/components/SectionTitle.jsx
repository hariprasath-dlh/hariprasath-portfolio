import { motion } from 'framer-motion'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6 }}
      className="mb-12 text-center"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-red-300">
        Portfolio Section
      </p>
      <h2 className="text-3xl font-semibold tracking-[0.08em] text-zinc-50 sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">{subtitle}</p>
      )}
    </motion.div>
  )
}

export default SectionTitle
