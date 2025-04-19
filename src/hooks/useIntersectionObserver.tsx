
import { useEffect, useState, useRef } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  root?: Element | null;
}

export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
  root = null
}: IntersectionObserverOptions = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Clean up previous observer if it exists
    if (observerRef.current && ref.current) {
      observerRef.current.unobserve(ref.current);
    }
    
    // Create a new observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (once && ref.current && observerRef.current) {
            observerRef.current.unobserve(ref.current);
          }
        } else if (!once) {
          setIsIntersecting(false);
        }
      },
      { threshold, rootMargin, root }
    );

    const currentRef = ref.current;
    if (currentRef && observerRef.current) {
      observerRef.current.observe(currentRef);
    }

    return () => {
      if (currentRef && observerRef.current) {
        observerRef.current.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin, once, root]);

  return { ref, isIntersecting };
}
