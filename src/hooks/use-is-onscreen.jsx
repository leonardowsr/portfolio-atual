import React from 'react';

function useIsOnscreen(elementRef, threshouldRef = [0]) {
  const [isOnscreen, setIsOnscreen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsOnscreen(entry.isIntersecting);
      },
      { threshold: threshouldRef },
    );
    observer.observe(elementRef.current);
  }, [elementRef, threshouldRef]);
  return isOnscreen;
}

export default useIsOnscreen;
