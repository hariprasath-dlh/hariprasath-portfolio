import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'
import skills from '../data/skills'

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          title="Skills"
          subtitle="Focused tools, no percentage bars, only the stack that matters."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((column, index) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl"
            >
              <h3 className="mb-6 text-lg font-semibold text-zinc-100">{column.title}</h3>
              <div className="flex flex-wrap gap-3">
                {column.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-red-400/30 px-4 py-2 text-sm text-red-300 transition-all hover:bg-red-400/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
