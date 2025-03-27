import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
    'Node.js', 'Express', 'MongoDB', 'Git', 'RESTful APIs'
  ];

  return (
    <section id="about" className="my-8 pt-16">
      <motion.h2 
        className="text-3xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        About Me
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-4">
            I am a passionate full-stack developer with a strong foundation in web development.
            I love creating responsive and user-friendly applications that solve real-world problems.
          </p>
          <p className="text-gray-600 mb-4">
            With a background in computer science and several years of experience in web development,
            I specialize in building modern web applications using React and related technologies.
          </p>
          <p className="text-gray-600">
            I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            My goal is to create efficient, scalable, and maintainable solutions that make a difference.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 