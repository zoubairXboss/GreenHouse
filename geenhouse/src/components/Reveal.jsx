import React, { useEffect, useRef, useState } from 'react';



const Reveal = ({ 
  children, 
  width = 'fit-content', 
  delay = 0, 
  duration = 0.6, 
  y = 30,
  className = "" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref} style={{ width }} className={className}>
      <div
        style={{
          transform: isVisible ? 'translateY(0)' : `translateY(${y}px)`,
          opacity: isVisible ? 1 : 0,
          transition: `all ${duration}s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Reveal;