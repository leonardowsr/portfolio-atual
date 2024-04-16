import React from 'react';

function useTypingEffect(text, durationInMs, initial = 0) {
  const [currentPosition, setCurrentPosition] = React.useState(initial);
  const currentPositionRef = React.useRef(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentPosition((value) => value + 1);
      currentPositionRef.current += 1;
      if (currentPositionRef.current > text.length) {
        clearInterval(id);
      }
    }, durationInMs);
    return () => {
      clearInterval(id);
    };
  }, [durationInMs, text]);

  return text.substring(0, currentPosition);
}

export default useTypingEffect;
