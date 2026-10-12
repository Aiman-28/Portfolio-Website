import { useEffect, useState } from 'react';
import { prefersReducedMotion } from '../utils/motion';

/** Typewriter effect that cycles through `words` (pass a stable array). */
export default function useTyping(words, { type = 85, erase = 40, hold = 1800, pause = 400, start = 900 } = {}) {
  const [text, setText] = useState('');

  useEffect(() => {
    if (prefersReducedMotion()) {
      setText(words[0]);
      return undefined;
    }
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const word = words[wordIndex];
      charIndex += deleting ? -1 : 1;
      setText(word.slice(0, charIndex));

      let delay = deleting ? erase : type;
      if (!deleting && charIndex === word.length) {
        deleting = true;
        delay = hold;
      } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = pause;
      }
      timer = setTimeout(tick, delay);
    };

    timer = setTimeout(tick, start);
    return () => clearTimeout(timer);
  }, [words, type, erase, hold, pause, start]);

  return text;
}
