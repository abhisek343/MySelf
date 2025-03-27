import React from 'react';

const About: React.FC = () => {
  const skills = [
    'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3',
    'Node.js', 'Express', 'MongoDB', 'Git', 'RESTful APIs'
  ];

  return (
    <section id="about" className="my-8 pt-16">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
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
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 