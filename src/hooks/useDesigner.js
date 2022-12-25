import { useEffect, useRef, useState } from "react";

export function useDesigner({ dataSource, layout, onChange }) {
  const designerRef = useRef();
  const [designer, setDesigner] = useState();

  useEffect(() => {
    const el = designerRef.current;

    if (el) {
      const designerInstance = window.AnkaReport.designer({
        element: designerRef.current,
        dataSource,
        layout,
      });

      setDesigner(designerInstance);

      return () => {
        el.innerHTML = "";
      };
    }
  }, [designerRef, dataSource, layout]);

  useEffect(() => {
    if (designer) {
      designer.addEventListener("change", (e) => onChange && onChange(e));

      // return () => {
      //   designer.removeEventListener("change", (e) => onChange && onChange(e));
      // };
    }
  }, [designer, onChange]);

  return {
    designer,
    designerRef,
  };
}
