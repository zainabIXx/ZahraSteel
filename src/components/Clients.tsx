import React, { useEffect, useState, useRef } from "react";
import c1 from "../assets/c1.jpeg";
import c2 from "../assets/c2.jpeg";
import c3 from "../assets/c3.jpeg";
import c4 from "../assets/c4.jpeg";

const Clients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleLogos, setVisibleLogos] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const clients = [
    { id: 1, review: "Their steel fabrication quality is exceptional. Professional, fast, and extremely reliable.", name: "Omar H." },
    { id: 2, review: "We've partnered with them on multiple large-scale builds. Always on time, always top quality.", name: "Aisha T." },
    { id: 3, review: "Outstanding service and craftsmanship. Easily one of the best steel suppliers in the region.", name: "Rashid K." },
    { id: 4, review: "Their attention to detail and durability is unmatched. Highly recommended for major projects.", name: "Fatima L." },
    { id: 5, review: "Dependable team with excellent communication. Truly elevated our project standards.", name: "Mohammed S." },
  ];

  const logos = [
    { id: 1, src: c1, alt: "Client Logo 1" },
    { id: 2, src: c2, alt: "Client Logo 2" },
    { id: 3, src: c3, alt: "Client Logo 3" },
    { id: 4, src: c4, alt: "Client Logo 4" },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "13+", label: "Years in Business" },
  ];

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleLogos(true);
        }
      },
      { threshold: 0.3 }
    );

    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (logoRef.current) {
        observer.unobserve(logoRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % clients.length);
        setIsTransitioning(false);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, [clients.length]);

  return (
    <section 
      id="clients" 
      ref={sectionRef}
      className="min-h-screen bg-white flex items-center py-24"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="flex items-center justify-center gap-4 mb-4 transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '50ms',
            }}
          >
            <div className="h-px w-12 bg-[#ed1b24]"></div>
            <span className="text-xs font-body tracking-[0.35em] text-gray-500 uppercase">
              Our Clients
            </span>
          </div>
          
          <h2 
            className="text-2xl md:text-3xl font-heading mb-6 leading-tight transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              transitionDelay: '150ms',
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
              Stories of Reliability & Results
            </span>
          </h2>
          
          <div 
            className="flex items-center justify-center gap-3 mb-6 transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transitionDelay: '250ms',
            }}
          >
            <div 
              className="h-px bg-gradient-to-r from-[#ed1b24] to-transparent transition-all duration-1000 ease-out"
              style={{
                width: isVisible ? '64px' : '0px',
                transitionDelay: '250ms',
              }}
            ></div>
            <div className="w-2 h-2 bg-[#ed1b24] rotate-45"></div>
          </div>
          
          <p 
            className="font-body text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed transition-all duration-700 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: '350ms',
            }}
          >
            Real partnerships, real impact. Hear directly from clients who trust us to deliver precision, quality, and on-time results across diverse projects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">

            {/* LEFT — REVIEW CAROUSEL */}
            <div 
              className="relative bg-white border-l-4 border-[#ed1b24] p-8 overflow-hidden shadow-lg transition-all duration-700 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
                transitionDelay: '450ms',
              }}
            >
              <div className="relative flex items-center justify-center" style={{ minHeight: "360px" }}>
                {clients.map((client, index) => (
                  <div
                    key={client.id}
                    className={`absolute inset-0 flex flex-col justify-center items-center text-center px-6 py-8 transition-all duration-300 ease-in-out ${
                      index === currentIndex && !isTransitioning ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    <svg
                      className="w-12 h-12 text-[#ed1b24] opacity-20 mb-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <div className="flex flex-col justify-center h-full">
                      <p className="text-gray-700 text-base leading-relaxed mb-6 font-body">
                        {client.review}
                      </p>
                      <p className="text-gray-800 font-semibold text-base font-heading">
                        {client.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Slide Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {clients.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 transition-all ${
                      currentIndex === index ? 'bg-[#ed1b24] w-8' : 'bg-gray-400'
                    }`}
                    aria-label={`Go to review ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT — STATS */}
            <div 
              className="flex flex-col justify-center space-y-8 transition-all duration-700 ease-out" 
              style={{ 
                minHeight: "360px",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                transitionDelay: '500ms',
              }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="pb-8 border-b border-gray-300 last:border-0 text-center lg:text-left transition-all duration-700 ease-out"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transitionDelay: `${1300 + index * 150}ms`,
                  }}
                >
                  <h3 className="text-2xl md:text-3xl font-heading text-gray-800 leading-tight mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-base font-body text-gray-600 leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* LOGO MARQUEE */}
        <div 
          ref={logoRef}
          className="mt-20 overflow-hidden relative transition-all duration-700 ease-out"
          style={{
            opacity: visibleLogos ? 1 : 0,
            transform: visibleLogos ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 22s linear infinite;
            }
            .animate-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="flex gap-10 animate-scroll">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex-shrink-0 w-36 h-36 flex items-center justify-center bg-white shadow-lg border border-gray-200 hover:scale-105 transition-all duration-300"
              >
                <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain p-3" />
              </div>
            ))}
          </div>
        </div>

        {/* Footer tagline */}
        <div 
          className="text-center mt-10 transition-all duration-700 ease-out"
          style={{
            opacity: visibleLogos ? 1 : 0,
            transform: visibleLogos ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '100ms',
          }}
        >
          <p className="text-base font-body text-gray-600 leading-relaxed">
            Our Esteemed Partners
          </p>
        </div>
      </div>
    </section>
  );
};

export default Clients;