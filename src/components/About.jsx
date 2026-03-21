import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

const aboutCards = [
  {
    title: 'Technically About Me',
    sections: [
      {
        title: '',
        items: [
          'I enjoy building practical and useful software solutions',
          'Strong interest in web development and automation',
          'Curious about how different technologies work together',
          'Work mainly with Python, Java, and JavaScript',
          'Continuously improving coding and problem-solving skills',
          'Prefer learning by building real-world projects',
        ],
      },
      {
        title: "Projects I've worked on",
        items: ['ParkLynk - urban parking solution', 'AI automation workflows using n8n'],
      },
      {
        title: "What I've learned",
        items: [
          'Breaking real-world problems into smaller parts',
          'Designing simple and working solutions',
          'Connecting multiple tools and technologies',
        ],
      },
      {
        title: 'Current Focus',
        items: ['AI-powered workflows', 'Backend development', 'System design basics'],
      },
      {
        title: 'Mindset',
        items: [
          'Focus on clean and understandable code',
          'Consistent and curious learner',
          'Improving step by step',
        ],
      },
    ],
  },
  {
    title: 'About Me as a Person',
    sections: [
      {
        title: 'A short intro:',
        items: [
          'My name is Hariprasath L V. I am currently pursuing my undergraduate degree in B.Tech Artificial Intelligence and Data Science at Dr. N.G.P Institute of Technology, Coimbatore. I completed my schooling from LKG to 12th grade at AVB Matric Higher Secondary School, Coimbatore, near NSN Palayam.',
        ],
      },
      {
        title: 'My style: ',
        items: [
          'Believe in continuous learning and self-improvement',
          'Enjoy exploring new ideas and experimenting',
          'Like solving problems in simple and efficient ways',
          'Value consistency and patience in learning',
          'Naturally curious about how things work',
        ],
      },
      {
        title: 'Work Style',
        items: [
          'Prefer small steps and gradual improvement',
          'Enjoy working independently',
          'Open to collaboration and learning from others',
        ],
      },
      {
        title: 'Personal Values',
        items: [
          'Focus on long-term growth',
          'Believe discipline matters more than talent',
          'Stay consistent and goal-oriented',
        ],
      },
    ],
  },
]

const About = () => {
  return (
    <section id="about" className="px-6 py-20 md:px-12 lg:px-20">
      <div className="mx-auto max-w-[1200px]">
        <SectionTitle
          title="About Me"
          subtitle="Two perspectives: the way I build, and the way I think."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {aboutCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.65, delay: index * 0.1 }}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 shadow-[0_0_30px_rgba(255,50,50,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-red-400/25 hover:shadow-[0_0_40px_rgba(255,50,50,0.16)]"
            >
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.3em] text-red-400">
                {card.title}
              </p>

              <div className="space-y-8">
                {card.sections.map((section, sectionIndex) => (
                  <div key={`${card.title}-${sectionIndex}`} className="space-y-3">
                    {section.title && (
                      <h3 className="text-sm font-semibold text-red-400">{section.title}</h3>
                    )}

                    <ul className="space-y-3 text-sm leading-relaxed text-neutral-300">
                      {section.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 transition-all duration-300 hover:text-red-300"
                        >
                          <span className="mt-2 h-2.5 w-2.5 rounded-full bg-red-400 shadow-[0_0_12px_rgba(248,113,113,0.8)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
