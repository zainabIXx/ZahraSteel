import React, { useState, useEffect, useRef } from "react";

const Services: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleServices, setVisibleServices] = useState<boolean[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      title: "Steel Fabrication",
      image: "/src/assets/fab.jpeg",
      description: "Expert steel fabrication services for industrial and commercial projects with precision-engineered solutions."
    },
    {
      title: "Laser Cutting",
      image: "/src/assets/las.jpg",
      description: "State-of-the-art laser cutting technology for precise metal work with clean cuts and intricate designs."
    },
    {
      title: "Powder & PVC Coating",
      image: "/src/assets/pvc.jpg",
      description: "Professional coating services providing superior protection, corrosion resistance, and long-lasting finish."
    },
    {
      title: "Steel & Wooden Cable Drums",
      image: "/src/assets/dru.jpeg",
      description: "High-quality cable drums manufactured to industry standards for safe storage and transportation."
    },
    {
      title: "Fencing Solutions",
      image: "/src/assets/fen.jpg",
      description: "Durable and secure fencing systems for residential, industrial, and commercial environments."
    },
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
    const observers = serviceRefs.current.map((ref, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleServices(prev => {
              const newState = [...prev];
              newState[idx] = true;
              return newState;
            });
          }
        },
        { threshold: 0.3 }
      );

      if (ref) {
        observer.observe(ref);
      }

      return observer;
    });

    return () => {
      observers.forEach((observer, idx) => {
        if (serviceRefs.current[idx]) {
          observer.unobserve(serviceRefs.current[idx]!);
        }
      });
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="min-h-screen py-24 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center"
    >
      <div className="container mx-auto px-6 max-w-7xl">
      
        {/* Header Section */}
        <div className="text-center mb-20">
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
              Our Services
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
              End-to-end Steel Services
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
            A refined service framework engineered to optimize workflow, strengthen outcomes, and support every phase with professional precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={el => serviceRefs.current[idx] = el}
              className="group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                opacity: visibleServices[idx] ? 1 : 0,
                transform: visibleServices[idx] ? 'translateY(0)' : 'translateY(50px)',
                transition: 'all 0.8s ease-out',
              }}
            >
              <div className={`
                grid grid-cols-1 md:grid-cols-12 gap-8 items-center
                ${idx % 2 === 0 ? '' : 'md:grid-flow-dense'}
                transition-all duration-500
              `}>
              
                {/* Image */}
                <div
                  className={`
                    md:col-span-6 relative overflow-hidden rounded-2xl
                    ${idx % 2 === 0 ? '' : 'md:col-start-7'}
                    transition-all duration-500
                    ${hoveredIndex === idx ? 'shadow-2xl scale-[1.02]' : 'shadow-lg'}
                  `}
                  style={{ height: '280px' }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className={`
                      w-full h-full object-cover
                      transition-transform duration-700 ease-out
                      ${hoveredIndex === idx ? 'scale-110' : 'scale-100'}
                    `}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
                </div>

                {/* Content */}
                <div
                  className={`
                    md:col-span-6 space-y-4
                    ${idx % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}
                    transition-all duration-500
                    ${hoveredIndex === idx ? 'translate-x-0' : ''}
                  `}
                >
                  <div className="inline-block">
                    <span className="text-sm font-body tracking-wider text-gray-400 uppercase">
                      0{idx + 1}
                    </span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-heading text-gray-800 leading-tight">
                    {service.title}
                  </h3>
                  
                  <div
                    className={`
                      h-1 w-16 bg-[#ed1b24]
                      transition-all duration-500
                      ${hoveredIndex === idx ? 'w-24' : 'w-16'}
                    `}
                  ></div>
                  
                  <p className="text-base font-body text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;