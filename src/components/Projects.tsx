import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Gledati - Your Ultimate Movie Explorer',
      description:
        'a full-stack web application built using the TMDB API that allows users to explore trending movies, upcoming releases, movies by genre and language, and even track whats new on OTT platforms.',
      tech: ['React', 'Node.js', 'MongoDB', 'TMDB API'],
      image: 'https://media.licdn.com/dms/image/v2/D5612AQGtdmaHFHnyLQ/article-cover_image-shrink_423_752/B56ZiXGeQXG4AU-/0/1754881759115?e=1764201600&v=beta&t=kxlxHL3iWPD3uRvkrEllsD5_WzVnhyfLTXZwk9ZOUSc',
      github: 'https://github.com/muralivsrisai/gledati-movie-recommendation-app',
      live: 'https://gledati.vercel.app/home',
    },
    {
      title: 'Cardiovascular Risk Predictor',
      description:
        'A Deep learning and AI-powered application that predicts cardiovascular risk based on wearable device health data.',
      tech: ['Python', 'Deep Lerning', 'Streamlit'],
      image: 'data:image/jpeg;base64,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',
      github: 'https://github.com/muralivsrisai/real-time-cardiovascular-risk-prediction',
      live: 'https://real-time-cardio.streamlit.app/',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Interactive weather application with location-based forecasts, historical data visualization, and severe weather alerts.',
      tech: ['React', 'APIs', 'MongoDB', 'CSS'],
      image: 'https://images.pexels.com/photos/1529360/pexels-photo-1529360.jpeg?auto=compress&cs=tinysrgb&w=600',
      github: 'https://github.com/muralivsrisai/weather-app',
      live: 'https://weathweb.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-sm rounded-full border border-cyan-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
  >
    <Github size={20} />
    <span>Code</span>
  </a>

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
  >
    <ExternalLink size={20} />
    <span>Live Demo</span>
  </a>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
