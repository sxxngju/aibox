const useScroll = (element: string, behavior?: 'auto' | 'smooth' | 'instant') => {
  const section = document.querySelector(element);
  if (!section) return;

  const yOffset = -100;
  const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

  return window.scrollTo({ top: y, behavior: behavior || 'smooth' });
};

export default useScroll;
