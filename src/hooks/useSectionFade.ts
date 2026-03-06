import { useEffect } from 'react';

export function useSectionFade() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.section-fade').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
