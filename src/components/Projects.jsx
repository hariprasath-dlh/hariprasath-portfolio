import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import SectionTitle from './SectionTitle'
import projects from '../data/projects'

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          title="Things I Have Built"
          subtitle="Selected work across product interfaces, APIs, and practical full-stack systems."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
