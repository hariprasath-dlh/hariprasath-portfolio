import { motion } from 'framer-motion'
import { FaArrowLeft, FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router-dom'
import projects from '../data/projects'

const detailSections = [
  { key: 'problemStatement', title: 'Problem Statement' },
  { key: 'features', title: 'Features' },
  { key: 'techStack', title: 'Tech Stack' },
  { key: 'whatILearned', title: 'What I Learned' },
]

const ProjectDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const project = projects.find((item) => item.id === id)

  const goHome = () => {
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 text-center shadow-[0_0_30px_rgba(255,50,50,0.08)] backdrop-blur-xl">
          <h1 className="text-3xl font-semibold text-zinc-100">Project not found</h1>
          <button
            onClick={goHome}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-red-400/30 px-5 py-3 text-sm uppercase tracking-[0.18em] text-red-300 transition-all duration-300 hover:bg-red-400/10"
          >
            <FaArrowLeft />
            Back to Home
          </button>
        </div>
      </main>
    )
  }

  const {
    title,
    fullDescription,
    problemStatement,
    features,
    techStack,
    githubLink,
    linkedinPost,
    liveLink,
    images,
    whatILearned,
  } = project

  const sectionContent = {
    problemStatement,
    features,
    techStack,
    whatILearned,
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,rgba(255,42,42,0.14),transparent_24%),linear-gradient(180deg,#0a0a0a_0%,#120707_50%,#0a0a0a_100%)] px-6 pb-16 pt-24 md:px-12 lg:px-20 lg:pt-28">
      <div className="mx-auto max-w-[1200px]">
        <button
          onClick={goHome}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-sm uppercase tracking-[0.18em] text-zinc-300 transition-all duration-300 hover:border-red-400/30 hover:text-red-300"
        >
          <FaArrowLeft />
          Back to Home
        </button>

        <section className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(255,50,50,0.08)] backdrop-blur-xl sm:p-8 lg:p-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.34em] text-red-300">
              Project Showcase
            </p>
            <h1 className="text-3xl font-semibold tracking-[0.06em] text-zinc-50 sm:text-4xl lg:text-5xl">{title}</h1>
            <p className="mt-6 max-w-4xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">{fullDescription}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-red-400/30 px-5 py-3 text-sm uppercase tracking-[0.16em] text-zinc-100 transition-all duration-300 hover:bg-red-400/10"
                >
                  <FaGithub />
                  View GitHub
                </a>
              )}

              {linkedinPost && (
                <a
                  href={linkedinPost}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-red-400/30 px-5 py-3 text-sm uppercase tracking-[0.16em] text-zinc-100 transition-all duration-300 hover:bg-red-400/10"
                >
                  <FaLinkedin />
                  View LinkedIn Post
                </a>
              )}

              {liveLink && (
                <a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-red-400/30 px-5 py-3 text-sm uppercase tracking-[0.16em] text-zinc-100 transition-all duration-300 hover:bg-red-400/10"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          {detailSections.map((section, index) => {
            const content = sectionContent[section.key]

            return (
              <motion.article
                key={section.key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7"
              >
                <h2 className="text-xl font-semibold text-zinc-100 sm:text-2xl">{section.title}</h2>

                {Array.isArray(content) ? (
                  <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-300">
                    {content.map((item) => (
                      <li key={item} className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                    <p className="mt-5 text-sm leading-7 text-zinc-300 sm:leading-8">{content}</p>
                )}
              </motion.article>
            )
          })}
        </section>

        {images?.length > 0 && (
          <section className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl sm:p-7">
            <h2 className="text-xl font-semibold text-zinc-100 sm:text-2xl">Project Gallery</h2>
            <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {images.map((image, index) => (
                <motion.div
                  key={image}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="overflow-hidden rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.28)]"
                >
                  <img
                    src={image}
                    alt={`${title} screenshot ${index + 1}`}
                    className="h-full w-full rounded-xl object-cover transition-transform duration-300 hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

export default ProjectDetails
