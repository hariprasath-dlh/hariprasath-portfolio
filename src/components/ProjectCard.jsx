import { motion } from 'framer-motion'
import { FaArrowRight, FaLayerGroup } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const ProjectCard = ({ project }) => {
  const navigate = useNavigate()
  const { id, title, shortDescription, techStack, images } = project

  const handleNavigate = () => {
    navigate(`/project/${id}`)
  }

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
      onClick={handleNavigate}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          handleNavigate()
        }
      }}
      role="button"
      tabIndex={0}
      className="flex h-full cursor-pointer flex-col overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] shadow-[0_0_24px_rgba(255,50,50,0.06)] backdrop-blur-xl transition-all duration-300 hover:border-red-400/25 hover:shadow-[0_0_40px_rgba(255,50,50,0.14)]"
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-white/10 bg-black/30">
        {images?.[0] ? (
          <img
            src={images[0]}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm uppercase tracking-[0.24em] text-zinc-500">
            Project Preview
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-zinc-100">{title}</h3>
          <div className="mt-1 rounded-full border border-red-400/20 bg-red-500/10 p-3 text-red-300">
            <FaLayerGroup />
          </div>
        </div>

        <p className="mb-6 text-sm leading-7 text-zinc-400">{shortDescription}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-red-400/20 px-3 py-1 text-xs uppercase tracking-[0.14em] text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-red-300">
          View Project
          <FaArrowRight />
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
