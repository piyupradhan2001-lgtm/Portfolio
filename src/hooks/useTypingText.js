import { useEffect, useState } from 'react';

export function useTypingText(words, speed = 80, pause = 1300) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1));
          if (text === current) setDeleting(true);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setDeleting(false);
            setWordIndex((index) => (index + 1) % words.length);
          }
        }
      },
      !deleting && text === current ? pause : deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [deleting, pause, speed, text, wordIndex, words]);

  return text;
}
