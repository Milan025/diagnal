import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useIntersectionObserver = (onIntersect) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      onIntersect();
    }
  }, [inView, onIntersect]);

  return ref;
};
