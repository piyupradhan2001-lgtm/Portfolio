import { motion, useMotionValue, useSpring } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';

export default function AnimatedCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 18, mass: 0.4 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 18, mass: 0.4 });

  useEffect(() => {
    const move = (event) => {
      mouseX.set(event.clientX - 160);
      mouseY.set(event.clientY - 160);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x: springX, y: springY }}
      className="pointer-events-none fixed z-[5] hidden h-80 w-80 rounded-full bg-accent/10 blur-3xl md:block"
    />
  );
}
