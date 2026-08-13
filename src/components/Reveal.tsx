// src/components/Reveal.tsx
import { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
  children: ReactNode;
  variant?: 'rise' | 'mask' | 'fade';
  delay?: number;
  className?: string;
  as?: 'div' | 'h2' | 'h3' | 'p' | 'span' | 'figure' | 'li';
}

/** Scroll reveal — fires once, never re-animates on scroll-by. */
export default function Reveal({ children, variant = 'rise', delay = 0, className = '', as: Tag = 'div' }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: '-90px 0px', threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      // @ts-expect-error — polymorphic ref
      ref={ref}
      data-visible={visible}
      className={`reveal-${variant} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
