import { useState } from 'react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const skillCategories = {
    Frontend: [
      { name: 'React', level: 65 },
      {name:'Java',level:75},
      { name: 'HTML/CSS', level: 70 },
      { name: 'JavaScript', level: 75 },
    ],
    Backend: [
      { name: 'Node.js', level: 65 },
      { name: 'Python', level: 80 },
      { name: 'Express', level: 70 },
      { name: 'REST APIs', level: 62 },
      { name: 'SQL', level: 68 },
    ],
    Tools: [
      { name: 'Git', level: 75 },
      { name: 'VS Code', level: 80 },
    ],
    'Core CS': [
      { name: 'Data Structures', level: 68 },
      { name: 'Algorithms', level: 75 },
      { name: 'OOP', level: 80 },
      { name: 'DBMS', level: 72 },
    ],
  };

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-slate-800/50 text-gray-400 hover:text-cyan-400 hover:bg-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-fadeIn">
          {skillCategories[activeCategory as keyof typeof skillCategories].map(
            (skill, index) => (
              <div
                key={skill.name}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between mb-3">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-progressBar"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 100}ms`,
                    }}
                  ></div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
