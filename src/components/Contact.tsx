import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: '2200030745cseh@gmail.com',
      link: 'mailto:2200030745cseh@gmail.com',
    },
    {
      icon: <Phone size={24} />,
      title: 'Phone',
      value: '+91 63011 77876',
      link: 'tel:+916301177876',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Location',
      value: 'Rajahmundry,India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-16 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a
          question or just want to say hi, feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slideInLeft">
            <h3 className="text-2xl font-bold text-white mb-6">
              Contact Information
            </h3>
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="flex items-center gap-4 p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{info.title}</p>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20">
              <h4 className="text-xl font-bold text-white mb-3">
                Let's Connect
              </h4>
              <p className="text-gray-400 mb-4">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Schedule Call
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 animate-slideInRight"
          >
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors"
                placeholder="Subject"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400">
            Made with Love by a B.Tech student
          </p>
          <p className="text-gray-500 text-sm mt-2">
            © 2025 All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
