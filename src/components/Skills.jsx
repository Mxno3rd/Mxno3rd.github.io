import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaAws, FaGitAlt,
  FaFigma, FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb,
  SiPostgresql, SiGraphql, SiRedis, SiKubernetes
} from 'react-icons/si';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: FaReact, level: 95, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, level: 90, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, level: 88, color: '#3178C6' },
      { name: 'Tailwind', icon: SiTailwindcss, level: 92, color: '#06B6D4' },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 90, color: '#339933' },
      { name: 'Python', icon: FaPython, level: 85, color: '#3776AB' },
      { name: 'GraphQL', icon: SiGraphql, level: 82, color: '#E10098' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 88, color: '#4169E1' },
    ]
  },
  {
    title: 'DevOps & Tools',
    skills: [
      { name: 'Docker', icon: FaDocker, level: 85, color: '#2496ED' },
      { name: 'AWS', icon: FaAws, level: 80, color: '#FF9900' },
      { name: 'Git', icon: FaGitAlt, level: 92, color: '#F05032' },
      { name: 'Figma', icon: FaFigma, level: 78, color: '#F24E1E' },
    ]
  },
];

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-32 relative animated-bg">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium">WHAT I KNOW</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: catIndex * 0.2 }}
              className="glass rounded-2xl p-8 card-hover"
            >
              <h3 className="text-xl font-bold mb-8 text-center gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: catIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon 
                          className="text-2xl" 
                          style={{ color: skill.color }} 
                        />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: catIndex * 0.2 + skillIndex * 0.1 }}
                        className="h-full rounded-full"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})` 
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-6"
        >
          {[SiMongodb, SiRedis, SiKubernetes, FaDatabase].map((Icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, y: -5 }}
              className="w-14 h-14 glass rounded-xl flex items-center justify-center text-2xl text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
