import { useEffect, useState } from "react";
import "./WordCycle.css";

const WORDS = [
  "Continuity",
  "Consistency",
  "Credibility",
  "Continuance",
  "Commitment",
];

export function WordCycle() {
  const [text, setText] = useState(WORDS[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];
    const speed = isDeleting ? 60 : 90;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // typing
        setText(currentWord.slice(0, text.length + 1));

        if (text === currentWord) {
          setTimeout(() => setIsDeleting(true), 900);
        }
      } else {
        // deleting back to "C"
        if (text.length > 1) {
          setText(currentWord.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
          setText("C");
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <span className="word-cycle">
      {text}
    </span>
  );
}
