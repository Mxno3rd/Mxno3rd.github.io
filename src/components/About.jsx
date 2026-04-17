import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiCode, HiLightningBolt, HiHeart, HiAcademicCap } from 'react-icons/hi';

const stats = [
  { number: '50+', label: 'Projects Completed' },
  { number: '30+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '99%', label: 'Client Satisfaction' },
];

const highlights = [
  { icon: HiCode, title: 'Clean Code', desc: 'Writing maintainable, scalable code' },
  { icon: HiLightningBolt, title: 'Fast Delivery', desc: 'Efficient workflow, on-time delivery' },
  { icon: HiHeart, title: 'Passion', desc: 'Love what I do, it shows in my work' },
  { icon: HiAcademicCap, title: 'Always Learning', desc: 'Staying updated with latest tech' },
];

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <span className="text-primary font-medium">GET TO KNOW ME</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20" />
              <div className="relative rounded-2xl overflow-hidden glass p-8">
                <img
                  src="[images.unsplash.com](https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop)"
                  alt="Working"
                  className="w-full rounded-xl"
                />
              </div>
            </div>

            {/* Experience Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl"
            >
              <div className="text-center text-white">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years Exp</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-6">
              A Passionate Developer Based in <span className="gradient-text">Bangkok, Thailand</span>
            </h3>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm a Full Stack Developer with over 5 years of experience crafting 
              beautiful, functional, and user-centered digital experiences. My passion 
              lies in transforming complex problems into simple, elegant solutions.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or sharing my knowledge through 
              tech blogs and community meetups.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass p-4 rounded-xl card-hover"
                >
                  <item.icon className="text-primary text-2xl mb-2" />
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center glass p-6 rounded-2xl card-hover">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
