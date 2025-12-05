import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import emailjs from '@emailjs/browser';
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.from_name.trim() || !formData.from_email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all fields');
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      setErrorMessage('Please enter a valid email address');
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 5000);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const templateParams = {
        from_name: formData.from_name,
        from_email: formData.from_email,
        message: formData.message,
        to_email: 'zahra_steel@hotmail.com'
      };

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('Email sent successfully:', response);
      
      setSubmitStatus('success');
      setFormData({ from_name: "", from_email: "", message: "" });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        setErrorMessage('Failed to send message. Please try again or contact us directly.');
      }
      
      setSubmitStatus('error');
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setErrorMessage('');
      }, 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <footer id="contact">
      <div ref={sectionRef} className="bg-gradient-to-br from-gray-50 to-gray-100 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          
          <div className="text-center mb-16">
            <div 
              className="flex items-center justify-center gap-4 mb-4 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '100ms',
              }}
            >
              <div className="h-px w-12 bg-[#ed1b24]"></div>
              <span className="text-xs font-body tracking-[0.35em] text-gray-500 uppercase">
                Get In Touch
              </span>
            </div>
            
            <h2 
              className="text-2xl md:text-3xl font-heading mb-6 leading-tight transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '300ms',
              }}
            >
              <span
                className="inline-block bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=800')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Start Your Venture Now
              </span>
            </h2>
            
            <div 
              className="flex items-center justify-center gap-3 mb-6 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transitionDelay: '500ms',
              }}
            >
              <div 
                className="h-px bg-gradient-to-r from-[#ed1b24] to-transparent transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? '64px' : '0px',
                  transitionDelay: '500ms',
                }}
              ></div>
              <div className="w-2 h-2 bg-[#ed1b24] rotate-45"></div>
            </div>
            
            <p 
              className="font-body text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '700ms',
              }}
            >
              Get expert guidance, tailored solutions, and exceptional value for your steel fabrication needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              <div
                className="transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                  transitionDelay: '900ms',
                }}
              >
                <h3 className="text-xl font-heading mb-6 text-gray-800 border-l-4 border-[#ed1b24] pl-4">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    value={formData.from_name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#ed1b24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />

                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    value={formData.from_email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#ed1b24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border-b-2 border-gray-300 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#ed1b24] transition-colors resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-gray-700 text-white font-body uppercase text-xs tracking-[0.2em] hover:bg-black transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden group mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-700"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </span>
                    <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>

                  {submitStatus === 'success' && (
                    <div className="mt-4 p-4 bg-green-50 border-l-4 border-green-500 text-green-700 text-sm rounded-r">
                      <div className="flex items-start gap-2">
                        <span className="text-lg">✓</span>
                        <div>
                          <strong className="font-semibold">Success!</strong>
                          <p className="mt-1">Message sent successfully! We will get back to you soon.</p>
                        </div>
                      </div>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="mt-4 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded-r">
                      <div className="flex items-start gap-2">
                        <span className="text-lg">✗</span>
                        <div>
                          <strong className="font-semibold">Error</strong>
                          <p className="mt-1">{errorMessage || 'Failed to send message. Please ensure all fields are filled or contact us directly.'}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>

              <div 
                className="space-y-10 transition-all duration-700 ease-out"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                  transitionDelay: '1100ms',
                }}
              >
                
                <div>
                  <h3 className="text-xl font-heading mb-6 text-gray-800 border-l-4 border-[#ed1b24] pl-4">Direct Contact</h3>
                  <p className="text-gray-600 text-base leading-relaxed mb-6 pl-4">
                    For immediate assistance, feel free to reach out directly.
                  </p>

                  <div className="space-y-4 pl-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-[#ed1b24] mt-0.5" strokeWidth={1.5} />
                      <div className="text-sm text-gray-700 leading-relaxed">
                        06-5369255 | 050-4284908 | 055-9974813
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-[#ed1b24] mt-0.5" strokeWidth={1.5} />
                      <div className="text-sm text-gray-700">
                        zahra_steel@hotmail.com
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading mb-6 text-gray-800 border-l-4 border-[#ed1b24] pl-4">Visit Us</h3>
                  
                  <div className="pl-4 space-y-4">
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-[#ed1b24] mt-0.5" strokeWidth={1.5} />
                      <div>
                        <div className="text-sm text-gray-700 font-body mb-1">Al Sajaa, Emirates Industrial City, Sharjah</div>
                        <div className="text-sm text-gray-600">Office Hours: 8:00 AM to 5:00 PM, Monday to Saturday</div>
                      </div>
                    </div>
                    
                    <a
                      href="https://www.google.com/maps/place/Najmat+Al+Zahra+Steel/@25.3433831,55.6332345,17z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-48 bg-gray-200 border border-gray-300 hover:border-[#ed1b24] transition-colors duration-300 relative group overflow-hidden"
                    >
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.849668741916!2d55.6332345!3d25.3433831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f36f49f5c267:0x83c6f47bf6f50148!2sNajmat%20Al%20Zahra%20Steel!5e0!3m2!1sen!2s!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="pointer-events-none"
                        title="Najmat Al Zahra Steel Location"
                      ></iframe>
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white px-4 py-2 rounded shadow-lg">
                          <span className="text-sm text-gray-800 font-body">Click to open in Google Maps</span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-6 py-16 max-w-7xl flex items-center justify-center min-h-[400px]">
          <div className="grid md:grid-cols-3 gap-12 w-full max-w-5xl">
            
            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '1300ms',
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <img src={logo} alt="Najmat Al Zahra Steel" className="h-10 w-10" />
                <div className="flex flex-col">
                  <span className="font-heading text-base leading-none text-gray-900">NAJMAT AL ZAHRA</span>
                  <span className="font-body text-xs text-gray-600 leading-none">STEEL</span>
                </div>
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                Premium steel solutions engineered for strength, coated for perfection, built to last.
              </p>
            </div>

            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '1450ms',
              }}
            >
              <h3 className="font-heading text-gray-900 mb-6 text-sm uppercase tracking-wider">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#hero" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Home</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">About</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Services</a></li>
                <li><a href="#clients" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">Clients</a></li>
              </ul>
            </div>

            <div
              className="transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '1600ms',
              }}
            >
              <h3 className="font-heading text-gray-900 mb-6 text-sm uppercase tracking-wider">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-gray-600 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5 uppercase tracking-wider">Phone</div>
                    <div className="text-gray-700 text-sm">06-5369255</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-gray-600 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5 uppercase tracking-wider">Email</div>
                    <div className="text-gray-700 text-sm">zahra_steel@hotmail.com</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-gray-600 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5 uppercase tracking-wider">Location</div>
                    <div className="text-gray-700 text-sm">Al Sajaa, Emirates Industrial City, Sharjah</div>
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-200">
          <div 
            className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '1750ms',
            }}
          >
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} Najmat Al Zahra Steel. All rights reserved.
            </p>

            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;