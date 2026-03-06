import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds: string[], offset = 120) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const updateActive = () => {
      const sections = sectionIds
        .map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          return { id, top: el.getBoundingClientRect().top };
        })
        .filter((section): section is { id: string; top: number } => Boolean(section));

      const visibleSections = sections.filter((section) => section.top <= offset + 2);
      if (visibleSections.length) {
        const current = visibleSections.reduce((prev, curr) => (curr.top > prev.top ? curr : prev));
        setActiveId(current.id);
      } else if (sections.length) {
        setActiveId(sections[0].id);
      }
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
  }, [sectionIds, offset]);

  return activeId;
}
