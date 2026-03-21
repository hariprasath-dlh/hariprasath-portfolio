import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'
import activities from '../data/activities'
import SectionTitle from './SectionTitle'

const floatingShapes = [
  {
    className: 'left-[-6%] top-[10%] h-36 w-36 bg-gradient-to-br from-red-500/35 to-pink-500/10',
    animate: { x: [0, 40, -10, 0], y: [0, 20, 50, 0], opacity: [0.25, 0.5, 0.3, 0.25] },
    duration: 14,
  },
  {
    className: 'right-[8%] top-[16%] h-24 w-24 bg-gradient-to-br from-red-400/30 to-pink-400/10',
    animate: { x: [0, -30, 10, 0], y: [0, 40, 10, 0], opacity: [0.18, 0.42, 0.22, 0.18] },
    duration: 12,
  },
  {
    className: 'bottom-[8%] left-[18%] h-28 w-28 bg-gradient-to-br from-pink-500/25 to-red-500/10',
    animate: { x: [0, 24, -20, 0], y: [0, -34, 12, 0], opacity: [0.14, 0.32, 0.22, 0.14] },
    duration: 16,
  },
]

const Activities = () => {
  const [selectedActivity, setSelectedActivity] = useState(null)
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = (activity) => {
    setSelectedActivity(activity)
    setIsOpen(true)
  }

  const handleClose = () => {
    setIsOpen(false)
    setSelectedActivity(null)
  }

  useEffect(() => {
    if (!isOpen) {
      return undefined
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <>
      <section id="activities" className="px-6 py-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-[1100px]">
          <SectionTitle
            title="Activities"
            subtitle="Hackathons and project experiences that strengthened my execution, communication, and product thinking."
          />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {activities.map((activity, index) => (
              <motion.button
                key={activity.id}
                type="button"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                onClick={() => handleOpen(activity)}
                className="overflow-hidden rounded-xl border border-red-400/20 bg-white/[0.04] text-left backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-red-400/35 hover:shadow-[0_0_30px_rgba(255,50,50,0.16)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                </div>

                <div className="p-6">
                  <span className="rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-300">
                    {activity.date}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold leading-8 text-zinc-100 sm:text-xl">
                    {activity.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400 sm:text-base">
                    {activity.description}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {isOpen && selectedActivity && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[70] bg-black/70 backdrop-blur"
          >
            <div className="flex min-h-full items-center justify-center p-4 sm:p-6 md:p-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.94, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 16 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                onClick={(event) => event.stopPropagation()}
                className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-red-500/20 bg-black/80 p-5 shadow-[0_0_50px_rgba(255,50,50,0.18)] sm:p-6"
              >
                <div className="pointer-events-none absolute inset-0 overflow-hidden">
                  {floatingShapes.map((shape, index) => (
                    <motion.div
                      key={index}
                      className={`absolute rotate-45 blur-2xl ${shape.className}`}
                      animate={shape.animate}
                      transition={{ duration: shape.duration, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close activity modal"
                  className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-red-400/25 bg-black/40 text-red-300 transition-all duration-300 hover:bg-red-500/10"
                >
                  <FaTimes />
                </button>

                <div className="relative z-10">
                  <h3 className="pr-12 text-xl font-semibold text-red-400">{selectedActivity.title}</h3>
                  <div className="mt-2 inline-flex rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-red-300">
                    {selectedActivity.date}
                  </div>

                  <div className="mt-6 max-h-[70vh] space-y-4 overflow-y-auto pr-2 text-sm leading-relaxed text-neutral-300 [scrollbar-width:none] sm:text-base [&::-webkit-scrollbar]:hidden">
                    {selectedActivity.fullContent.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Activities
