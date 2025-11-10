import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'K L University',
      year: '2022 - 2026',
      cgpa: '9.48 / 10',
      icon: <GraduationCap size={32} />,
    },
    {
      degree: 'Intermediate',
      field: 'Science',
      institution: 'Sri Chaitanya Junior College',
      year: '2020 - 2022',
      cgpa: '93%',
      icon: <BookOpen size={32} />,
    },
    {
      degree: 'SSC',
      field: 'Science',
      institution: 'Holy Angels EM High School',
      year: '2019 - 2020',
      cgpa: '98%',
      icon: <BookOpen size={32} />,
    },
  ];

  const achievements = [
    'Red Hat Certified Enterprise Application Developer',
    'Published research paper on Machine Learning : PulmoScan',
    'Salesforce Certified AI Associate',
    'Automation Anywhere Certified Essentials RPA Professional',
  ];

  return (
    <section id="education" className="py-20 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Education & Achievements
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slideInLeft">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <GraduationCap className="text-cyan-400" size={28} />
              Educational Background
            </h3>
            {education.map((edu, index) => (
              <div
                key={index}
                className="p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10 group"
              >
                <div className="flex items-start gap-4">
                  <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-400 mb-2">{edu.field}</p>
                    <p className="text-gray-400 mb-1">{edu.institution}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 text-sm">{edu.year}</span>
                      <span className="text-cyan-400 font-semibold">
                        {edu.cgpa}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="animate-slideInRight">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="text-cyan-400" size={28} />
              Achievements & Certifications
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:translate-x-2 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                    <p className="text-gray-300 group-hover:text-cyan-400 transition-colors">
                      {achievement}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
              <h4 className="text-xl font-bold text-white mb-3">
                Additional Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Problem Solving',
                  'Teamwork',
                  'Communication'
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800/70 text-cyan-400 text-sm rounded-full border border-cyan-500/20 hover:bg-slate-800 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
