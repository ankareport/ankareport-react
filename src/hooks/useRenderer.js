import { useEffect, useRef, useState } from "react";

export function useRenderer({ layout, data }) {
  const rendererRef = useRef();
  const [renderer, setRenderer] = useState();

  useEffect(() => {
    const el = rendererRef.current;

    if (el) {
      const rendererInstance = window.AnkaReport.render({
        element: rendererRef.current,
        layout,
        data,
      });

      setRenderer(rendererInstance);

      return () => {
          el.innerHTML = "";
      };
    }
  }, [rendererRef, layout, data]);

  return {
    renderer,
    rendererRef,
  };
}
