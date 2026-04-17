import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiExternalLink, HiCode } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
    image: '[images.unsplash.com](https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop)',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    github: '[github.com](https://github.com)',
    live: '[example.com](https://example.com)',
    featured: true,
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management app with AI-powered prioritization and natural language processing.',
    image: '[images.unsplash.com](https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop)',
    tags: ['React', 'Python', 'OpenAI', 'FastAPI'],
    github: '[github.com](https://github.com)',
    live: '[example.com](https://example.com)',
    featured: true,
  },
  {
    title: 'Real-time Chat App',
    description: 'Scalable chat application with video calls, file sharing, and end-to-end encryption.',
    image: '[images.unsplash.com](https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=600&h=400&fit=crop)',
    tags: ['React', 'Socket.io', 'WebRTC', 'Redis'],
    github: '[github.com](https://github.com)',
    live: '[example.com](https://example.com)',
    featured: true,
  },
  {
    title: 'Portfolio Dashboard',
    description: 'Investment portfolio tracker with real-time market data and analytics visualization.',
    image: '[images.unsplash.com](https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop)',
    tags: ['Vue.js', 'D3.js', 'Node.js', 'MongoDB'],
    github: '[github.com](https://github.com)',
    live: '[example.com](https://example.com)',
  },
  {
    title: 'Health & Fitness App',
    description: 'Comprehensive fitness tracking with workout plans, nutrition logging, and progress analytics.',
    image: '[images.unsplash.com](https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop)',
    tags: ['React Native', 'GraphQL', 'AWS', 'TensorFlow'],
    github: '[github.com](https://github.com)',
    live: '[example.com](https://example.com)',
  },
  {
    title: 'DevOps Automation Tool',
    description: 'CI/CD pipeline automation tool with container orchestration and monitoring.',
    image: '[images.unsplash.com](https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop)',
    tags: ['Go', 'Docker', 'Kubernetes', 'Terraform'],
    github: '[github.com](https://github.com)',
    live: '[example.com](https://example.com)',
  },
];

export default function Projects() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium">MY WORK</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className={`group glass rounded-2xl overflow-hidden card-hover ${
                project.featured ? 'ring-1 ring-primary/30' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-darker via-transparent to-transparent" />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary/80 text-xs font-medium">
                    Featured
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                  >
                    <FaGithub size={20} />
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors"
                  >
                    <HiExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="[github.com](https://github.com/yourusername)"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass text-white font-medium hover:bg-white/10 transition-all"
          >
            <HiCode />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
