import { useEffect, useRef, useState } from "react";

export default function useNearScreen({
  distance = "100px",
  externalRef,
  once = true,
} = {}) {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(function () {
    console.log("fromRef",fromRef ,externalRef)
    const element = externalRef ? externalRef.current : fromRef.current;
    const onChange = (entries, observer) => {
      const [el] = entries;
      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      }else{
        !once && setShow(false)
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });
    if (externalRef) observer.observe(element);

    return () => observer.disconnect();
  });
  return { isNearScreen, fromRef };
}
