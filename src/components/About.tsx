import { Code, Users, Award } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Problem Solver',
      description: 'Love tackling complex challenges with innovative solutions',
    },
    {
      icon: <Users size={24} />,
      title: 'Team Player',
      description: 'Experienced in collaborative development and agile methodologies',
    },
    {
      icon: <Award size={24} />,
      title: 'Achievement Driven',
      description: 'Committed to delivering high-quality results',
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slideInLeft">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a final year B.Tech student with a strong passion for full stack
              development and technology. Throughout my academic journey, I've
              developed a solid foundation in computer science principles and
              hands-on experience with modern development tools.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm actively seeking opportunities to apply my skills in a
              professional environment, contribute to meaningful projects, and
              continue growing as a software engineer.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors">
                Full Stack Development
              </span>
              <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20 hover:bg-blue-500/20 transition-colors">
                Machine Learning
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slideInRight">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <div className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
