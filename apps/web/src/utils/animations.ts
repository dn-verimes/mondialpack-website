
/**
 * Set up intersection observer for animations
 */
export const setupAnimations = () => {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
  });

  return observer;
};

/**
 * Handle the transparent to glass header transition
 */
export const setupHeaderScroll = () => {
  if (typeof window === 'undefined') return;

  const handleScroll = () => {
    const header = document.querySelector('header');
    if (!header) return;

    if (window.scrollY > 20) {
      header.classList.add('scrolled');
      header.classList.add('backdrop-blur-md');
      header.classList.add('bg-white/70');
    } else {
      header.classList.remove('scrolled');
      header.classList.remove('backdrop-blur-md');
      header.classList.remove('bg-white/70');
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  // Initial check
  handleScroll();

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};
