import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="animate-slideInDown">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Adabala Murali Veera Sri Sai
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-4 animate-slideInUp">
            B.Tech - Computer Science Final Year 
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Passionate about technology and innovation. Seeking opportunities to
            contribute and grow in the field of software engineering.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fadeIn delay-500">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
          >
            Get In Touch
          </a>
          <a
  href="https://drive.google.com/uc?export=download&id=1Qn2piLZ16emZ9p6HRnpjMWjr_Cc4W7q6"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center gap-2"
>
  <Download size={20} />
  Download Resume
</a>

        </div>

        <div className="flex justify-center gap-6 animate-fadeIn delay-700">
          <a
            href="https://github.com/muralivsrisai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/adabala-murali-veera-sri-sai-32aba228a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="mailto:2200030745cseh@gmail.com"
            className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110 transform duration-300"
          >
            <Mail size={28} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-400 animate-bounce"
        >
          <ChevronDown size={36} />
        </button>
      </div>
    </section>
  );
}
