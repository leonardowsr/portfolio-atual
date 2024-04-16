import React from 'react';

export function useScroll() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    let lastScrollY = window.scrollY;
    function handleScroll() {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setVisible(true);
      }
      lastScrollY = currentScrollY;
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [visible]);

  return visible;
}
