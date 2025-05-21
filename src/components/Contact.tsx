import { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    const SERVICE_ID = 'service_nfe5lwi';
    const TEMPLATE_ID = 'template_ssgcavp';
    const PUBLIC_KEY = '4n1N-mbVlRhRFEiXT';

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitMessage(null), 5000);
    } catch {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'error',
        text: 'Oops! Something went wrong. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Have a question or want to work together? Feel free to contact me
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">girisankartkd004@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+91 6369130145</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 mr-4 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">TamilNadu , India</p>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">
              Connect With Me
            </h3>
            
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/girisankar-g-13522b255/" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://github.com/Girisankar-G" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                aria-label="GitHub profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://x.com/GiriSan05055478" 
                className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors"
                aria-label="Twitter profile"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Send Me a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email Address
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="johndoe@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition resize-y"
                  placeholder="I'd like to discuss a project..."
                ></textarea>
              </div>
              
              {submitMessage && (
                <div className={`rounded-lg px-4 py-3 text-sm ${
                  submitMessage.type === 'success' 
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' 
                    : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'
                }`}>
                  {submitMessage.text}
                </div>
              )}
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors shadow-md hover:shadow-lg flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;