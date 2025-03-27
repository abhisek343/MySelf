import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'CI/CD'] },
    { category: 'Other', items: ['UI/UX Design', 'Agile', 'Problem Solving', 'Team Leadership'] },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary-dark/5 dark:to-accent-dark/5" />
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-text-main dark:text-text-main-dark max-w-2xl mx-auto">
            I'm a passionate full-stack developer with a keen eye for design and a love for creating
            seamless user experiences. With a strong foundation in both frontend and backend technologies,
            I strive to build applications that are not only functional but also beautiful and intuitive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-text-main dark:text-text-main-dark mb-6">
              Skills & Expertise
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-surface dark:bg-surface-dark p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-primary dark:text-primary-light mb-2">
                    {skillGroup.category}
                  </h4>
                  <ul className="space-y-1">
                    {skillGroup.items.map((skill) => (
                      <li
                        key={skill}
                        className="text-text-main dark:text-text-main-dark flex items-center"
                      >
                        <svg
                          className="w-4 h-4 mr-2 text-secondary dark:text-secondary-light"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-text-main dark:text-text-main-dark mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              {[
                {
                  title: 'Senior Full Stack Developer',
                  company: 'Tech Company',
                  period: '2020 - Present',
                  description: 'Leading development of enterprise applications using React, Node.js, and cloud technologies.',
                },
                {
                  title: 'Full Stack Developer',
                  company: 'Startup',
                  period: '2018 - 2020',
                  description: 'Developed and maintained multiple web applications using modern technologies.',
                },
              ].map((exp, index) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary dark:border-primary-light"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary dark:bg-primary-light" />
                  <h4 className="text-lg font-semibold text-text-main dark:text-text-main-dark">
                    {exp.title}
                  </h4>
                  <p className="text-secondary dark:text-secondary-light mb-1">{exp.company}</p>
                  <p className="text-sm text-text-main/70 dark:text-text-main-dark/70 mb-2">
                    {exp.period}
                  </p>
                  <p className="text-text-main dark:text-text-main-dark">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 