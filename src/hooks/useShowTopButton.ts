import { useState, useEffect, RefObject } from 'react';

export function useShowTopButton(ref: RefObject<HTMLDivElement | null>): boolean {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      setShow(el.scrollTop > window.innerHeight);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [ref]);

  return show;
}
