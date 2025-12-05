import React, { useState, useEffect } from "react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const highlights = [
    "ISO Certified Quality",
    "Precision Engineering",
    "Custom Solutions",
    "Timely Delivery"
  ];

  return (
    <section id="hero" className="h-screen bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden flex items-center">
      
      {/* Diagonal Triangle Image - Downward from Left with Slide-in Animation */}
      <div 
        className="absolute top-0 left-0 w-[65%] h-full transition-all duration-1000 ease-out"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 50% 100%, 0 100%)',
          boxShadow: '20px 0 80px rgba(0, 0, 0, 0.25)',
          transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
          opacity: isVisible ? 1 : 0,
        }}
      >
        <img
          src="/src/assets/main.jpg"
          alt="Steel Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent"></div>
        
        {/* Animated Accent Line */}
        <div 
          className="absolute top-0 right-0 w-0.5 bg-gradient-to-b from-[#ed1b24] via-white to-transparent opacity-60 transition-all duration-1500 ease-out"
          style={{
            height: isVisible ? '100%' : '0%',
          }}
        ></div>
      </div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#ed1b24] rounded-full animate-float opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i * 0.5}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Content - Right Side with Staggered Animations */}
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        <div className="ml-auto max-w-xl lg:max-w-2xl">
          
          {/* Main Heading Section */}
          <div className="space-y-6 pl-10 border-l-4 border-[#ed1b24]">
            
            {/* Est. 2012 - Fade in */}
            <div 
              className="flex items-center gap-4 mb-4 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
                transitionDelay: '100ms',
              }}
            >
              <div className="h-px w-12 bg-[#ed1b24]"></div>
              <span className="text-xs font-body tracking-[0.35em] text-white uppercase">
                Est. 2012
              </span>
            </div>
            
            {/* Main Heading - Fade in with delay */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading leading-tight transition-all duration-700 ease-out"
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
                Excellence in Steel
              </span>
              <br />
              <span className="text-gray-900 font-light italic">Built for Tomorrow</span>
            </h1>
            
            {/* Decorative Line - Expand animation */}
            <div 
              className="flex items-center gap-3 transition-all duration-700 ease-out"
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
            
            {/* Description - Fade in */}
            <p 
              className="text-lg font-body text-gray-700 leading-relaxed transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transitionDelay: '100ms',
              }}
            >
              Leading steel fabrication and engineering solutions across the UAE. 
              Delivering precision-crafted excellence in every project.
            </p>

            {/* CTA Buttons - Slide in from bottom */}
            <div 
              className="flex flex-wrap gap-4 pt-6 transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '100ms',
              }}
            >
              <a
                href="#services"
                className="px-8 py-4 bg-gray-700 text-white font-body uppercase text-xs tracking-[0.2em] hover:bg-black transition-all duration-500 shadow-lg hover:shadow-2xl relative overflow-hidden group"
              >
                <span className="relative z-10">Explore Services</span>
                <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-gray-900 font-body uppercase text-xs tracking-[0.2em] border border-gray-300 hover:border-[#ed1b24] hover:text-[#ed1b24] transition-all duration-300 shadow-md"
              >
                Get in Touch
              </a>
            </div>

            {/* Highlights - Staggered fade in */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-8 mt-8 border-t border-gray-300">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 group cursor-pointer transition-all duration-500 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                    transitionDelay: `${1300 + idx * 100}ms`,
                  }}
                >
                  <div className="w-1 h-1 bg-[#ed1b24] group-hover:scale-150 transition-transform duration-300"></div>
                  <span className="text-xs font-body text-gray-600 uppercase tracking-wider group-hover:text-[#ed1b24] transition-colors duration-300">{highlight}</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>

      {/* Decorative Elements with Rotation Animation */}
      <div 
        className="absolute bottom-10 right-10 w-32 h-32 border border-gray-300 opacity-20 transition-all duration-1000 ease-out"
        style={{
          transform: isVisible ? 'rotate(45deg) scale(1)' : 'rotate(0deg) scale(0)',
          transitionDelay: '100ms',
        }}
      ></div>
      <div 
        className="absolute top-20 right-20 w-20 h-20 border border-[#ed1b24] opacity-10 transition-all duration-1000 ease-out"
        style={{
          transform: isVisible ? 'rotate(12deg) scale(1)' : 'rotate(0deg) scale(0)',
          transitionDelay: '100ms',
        }}
      ></div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>

    </section>
  );
};

export default Hero;