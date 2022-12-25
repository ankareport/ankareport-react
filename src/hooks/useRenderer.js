import { useEffect, useRef, useState } from "react";

export function useRenderer({ layout, data }) {
  const rendererRef = useRef();
  const [renderer, setRenderer] = useState();

  useEffect(() => {
    if (rendererRef.current) {
      const rendererInstance = window.AnkaReport.render({
        element: rendererRef.current,
        layout,
        data,
      });

      setRenderer(rendererInstance);

      return () => {
        rendererRef.current.innerHTML = "";
      };
    }
  }, [rendererRef.current, layout, data]);

  return {
    renderer,
    rendererRef,
  };
}
