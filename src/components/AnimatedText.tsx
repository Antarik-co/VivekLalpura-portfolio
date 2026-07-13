import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, wordIndex) => {
        const chars = word.split('');
        return (
          <span key={`word-${wordIndex}`} className="inline-block mr-1 lg:mr-2">
            {chars.map((char, charIndex) => {
              // Calculate a relative position for each character to map its opacity
              // 0 means start, 1 means end of text
              const totalCharsBefore = words
                .slice(0, wordIndex)
                .reduce((acc, w) => acc + w.length, 0) + charIndex;
              const totalChars = text.replace(/ /g, '').length;
              const progressStart = totalCharsBefore / totalChars;
              const progressEnd = progressStart + 1 / totalChars;

              const opacity = useTransform(
                scrollYProgress,
                [progressStart, progressEnd],
                [0.2, 1]
              );

              return (
                <span key={`char-${wordIndex}-${charIndex}`} className="relative inline-block">
                  <span className="invisible">{char}</span>
                  <motion.span
                    className="absolute left-0 top-0"
                    style={{ opacity }}
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
}
