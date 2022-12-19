import { useEffect, useRef, useState } from "react";

export function useDesigner({ dataSource, layout, onChange }) {
  const designerRef = useRef();
  const [designer, setDesigner] = useState();

  useEffect(() => {
    if (designerRef.current) {
      const designerInstance = window.AnkaReport.designer({
        element: designerRef.current,
        dataSource,
        layout,
      });

      designerInstance.addEventListener("change", (e) => onChange && onChange(e));

      setDesigner(designerInstance);

      return () => {
        designerRef.current.innerHTML = "";
      };
    }
  }, [designerRef.current, dataSource, layout]);

  return {
    designer,
    designerRef,
  };
}
