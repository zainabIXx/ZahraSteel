import { useEffect, useRef, useState } from "react";
import b1 from "../assets/b1.jpeg";
import b2 from "../assets/b2.jpeg";
import b3 from "../assets/b3.jpeg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      
      {/* Content */}
      <div className="container mx-auto px-6 max-w-4xl">
        <div 
          ref={contentRef}
          className="text-center space-y-6"
        >
          
          {/* Section Header */}
          <div className="space-y-4">
            <div 
              className="flex items-center justify-center gap-4 mb-2 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '50ms',
              }}
            >
              <div className="h-px w-12 bg-[#ed1b24]"></div>
              <span className="text-xs font-body tracking-[0.35em] text-gray-500 uppercase">
                About Us
              </span>
            </div>
            
            <h2 
              className="text-2xl md:text-3xl font-heading text-gray-900 leading-tight transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '100ms',
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
                Crafting Excellence Since 2012
              </span>
            </h2>
            
            <div 
              className="flex items-center justify-center gap-3 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transitionDelay: '100ms',
              }}
            >
              <div 
                className="h-px bg-gradient-to-r from-[#ed1b24] to-transparent transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? '64px' : '0px',
                  transitionDelay: '100ms',
                }}
              ></div>
              <div className="w-2 h-2 bg-[#ed1b24] rotate-45"></div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-5 text-lg font-body text-gray-700 leading-relaxed max-w-3xl mx-auto pt-4">
            <p
              className="transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '100ms',
              }}
            >
              <span className="font-bold text-[#ed1b24]">Najmat Al Zahra Steel</span> is a leading provider of specialized steel fabrication and advanced coating solutions, trusted across the region for over 13 years. We transform raw steel into durable, high-performance, and aesthetically refined products, delivering precision and quality across more than 500 completed projects.
            </p>
            
            <p 
              className="text-gray-600 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '100ms',
              }}
            >
              From major industrial builds to fully customized solutions, we ensure one commitment: dependable performance, guaranteed quality, and continuous support at every stage.
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-6xl mx-auto">
            {[
              { src: b1, alt: "Project 1" },
              { src: b2, alt: "Project 2" },
              { src: b3, alt: "Project 3" }
            ].map((image, idx) => (
              <div
                key={idx}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]"
                style={{ 
                  height: '220px',
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                  transition: 'all 0.5s ease-out',
                  transitionDelay: `${800 + idx * 100}ms`,
                }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default About;