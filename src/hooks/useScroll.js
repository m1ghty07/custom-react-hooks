import { useEffect, useRef } from "react";

export default function useScroll(parentRef, childRef, callback) {
  const observe = useRef();

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 0,
    };
    observe.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        console.log("isIntersecting");
        callback();
      }
    }, options);
    observe.current.observe(childRef.current);

    return function () {
      observe.current.unobserve(childRef.current);
    };
  }, [callback]);
}
