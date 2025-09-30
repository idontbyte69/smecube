import { useEffect, useRef } from 'react';

/**
 * Company data with placeholder company logos.
 * To replace with actual clients:
 * 1. Update the 'name' field with your client's name
 * 2. Replace the 'logo' URL with your client's logo URL
 * 3. You can add or remove companies as needed
 */
const companies = [
  { 
    id: 1, 
    name: 'Google', 
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png' 
  },
  { 
    id: 2, 
    name: 'Microsoft', 
    logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31' 
  },
  { 
    id: 3, 
    name: 'Amazon', 
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg' 
  },
  { 
    id: 4, 
    name: 'Apple', 
    logo: 'https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png' 
  },
  { 
    id: 5, 
    name: 'Meta', 
    logo: 'https://about.meta.com/wp-content/uploads/2021/10/Meta-Logo.png' 
  },
  { 
    id: 6, 
    name: 'IBM', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' 
  },
  { 
    id: 7, 
    name: 'Samsung', 
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png' 
  },
  { 
    id: 8, 
    name: 'Oracle', 
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Oracle-Logo.png' 
  },
];

export default function ServiceProviders() {
  const sliderRef = useRef(null);
  const sliderContainerRef = useRef(null);
  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const animationRef = useRef(null);
  
  useEffect(() => {
    const slider = sliderRef.current;
    const sliderContainer = sliderContainerRef.current;
    let position = 0;
    let speed = 1.5; // Controls the scroll speed (pixels per frame)
    
    // Calculate the total width of a single set of logos
    const calculateLogoSetWidth = () => {
      if (!slider || !slider.children || slider.children.length < companies.length) return 0;
      
      // Measure the width of the first set of company logos
      let totalWidth = 0;
      for (let i = 0; i < companies.length; i++) {
        totalWidth += slider.children[i].offsetWidth;
        
        // Add the gap between logos (margin-right)
        if (i < companies.length - 1) {
          const computedStyle = window.getComputedStyle(slider.children[i]);
          totalWidth += parseInt(computedStyle.marginRight) + parseInt(computedStyle.marginLeft);
        }
      }
      return totalWidth;
    };
    
    const animate = () => {
      const logoSetWidth = calculateLogoSetWidth();
      
      // Only proceed if we have a valid width
      if (logoSetWidth > 0) {
        // Move the slider position
        position += speed;
        
        // If we've scrolled past one logo set, reset position to create infinite loop
        if (position >= logoSetWidth) {
          position = 0;
          
          // Move the first set of logos to the end
          for (let i = 0; i < companies.length; i++) {
            const clone = slider.children[0].cloneNode(true);
            slider.appendChild(clone);
            slider.removeChild(slider.children[0]);
          }
        }
        
        // Apply the transform
        slider.style.transform = `translateX(${position * -1}px)`;
      }
      
      // Continue the animation
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Pause and resume functions
    const pauseAnimation = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
    
    const resumeAnimation = () => {
      if (!animationRef.current && !isMouseDown.current) {
        animationRef.current = requestAnimationFrame(animate);
      }
    };
    
    // Manual scrolling handlers
    const handleMouseDown = (e) => {
      isMouseDown.current = true;
      startX.current = e.pageX - sliderContainer.offsetLeft;
      scrollLeft.current = position;
      pauseAnimation();
      sliderContainer.style.cursor = 'grabbing';
    };
    
    const handleMouseUp = () => {
      isMouseDown.current = false;
      sliderContainer.style.cursor = 'grab';
      resumeAnimation();
    };
    
    const handleMouseLeave = () => {
      if (isMouseDown.current) {
        isMouseDown.current = false;
        sliderContainer.style.cursor = 'grab';
        resumeAnimation();
      }
    };
    
    const handleMouseMove = (e) => {
      if (!isMouseDown.current) return;
      e.preventDefault();
      
      const x = e.pageX - sliderContainer.offsetLeft;
      const walk = (startX.current - x) * 1.5; // Scroll multiplier
      position = scrollLeft.current + walk;
      
      // Don't let scroll go negative
      if (position < 0) position = 0;
      
      slider.style.transform = `translateX(${position * -1}px)`;
    };
    
    // Touch event handlers
    const handleTouchStart = (e) => {
      isMouseDown.current = true;
      startX.current = e.touches[0].pageX - sliderContainer.offsetLeft;
      scrollLeft.current = position;
      pauseAnimation();
    };
    
    const handleTouchEnd = () => {
      isMouseDown.current = false;
      resumeAnimation();
    };
    
    const handleTouchMove = (e) => {
      if (!isMouseDown.current) return;
      
      const x = e.touches[0].pageX - sliderContainer.offsetLeft;
      const walk = (startX.current - x) * 1.5;
      position = scrollLeft.current + walk;
      
      // Don't let scroll go negative
      if (position < 0) position = 0;
      
      slider.style.transform = `translateX(${position * -1}px)`;
    };
    
    // Add event listeners
    sliderContainer.addEventListener('mousedown', handleMouseDown);
    sliderContainer.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);
    sliderContainer.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
    document.addEventListener('touchmove', handleTouchMove);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      
      sliderContainer.removeEventListener('mousedown', handleMouseDown);
      sliderContainer.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
      sliderContainer.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchend', handleTouchEnd);
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-[#f6f9fe]">
      <div className="container-max">
        <h2 className="text-3xl font-bold text-center mb-3">সার্ভিস গ্রহণকারী প্রতিষ্ঠান</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">আমাদের বিশ্বস্ত ক্লায়েন্টদের সাথে আপনার প্রতিষ্ঠানকেও যোগ করুন এবং ব্যবসায়িক সাফল্যের নতুন উচ্চতায় পৌঁছান।</p>
        
        <div 
          className="relative overflow-hidden cursor-grab rounded-xl shadow-soft px-4 py-8" 
          ref={sliderContainerRef}
        >
          <div 
            className="flex items-center transition-transform duration-100 ease-linear"
            ref={sliderRef}
          >
            {/* First set of logos */}
            {companies.map((company) => (
              <div 
                key={company.id} 
                className="flex-shrink-0 mx-6 flex flex-col items-center justify-center"
              >
                <div className="h-20 w-40 relative">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="absolute inset-0 w-full h-full object-contain hover:scale-110 transition-transform"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 font-medium">{company.name}</p>
              </div>
            ))}
            
            {/* Second set of logos (for seamless looping) */}
            {companies.map((company) => (
              <div 
                key={`second-${company.id}`} 
                className="flex-shrink-0 mx-6 flex flex-col items-center justify-center"
              >
                <div className="h-20 w-40 relative">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="absolute inset-0 w-full h-full object-contain hover:scale-110 transition-transform"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 font-medium">{company.name}</p>
              </div>
            ))}
            
            {/* Third set of logos (for extra safety in looping) */}
            {companies.map((company) => (
              <div 
                key={`third-${company.id}`} 
                className="flex-shrink-0 mx-6 flex flex-col items-center justify-center"
              >
                <div className="h-20 w-40 relative">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="absolute inset-0 w-full h-full object-contain hover:scale-110 transition-transform"
                  />
                </div>
                <p className="mt-2 text-sm text-gray-600 font-medium">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * IMPORTANT: For production use, it's recommended to:
 * 1. Download the company logos and store them locally in src/assets/client-logos/
 * 2. Import them from localLogos.js (see that file for instructions)
 * 3. This approach prevents broken images if the external URLs change or become unavailable
 */