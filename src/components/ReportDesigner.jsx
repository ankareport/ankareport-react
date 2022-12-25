import { useEffect } from "react";
import { useDesigner } from "../hooks/useDesigner";

export function ReportDesigner({ dataSource, layout, onChange, onCreate }) {
  const { designer, designerRef } = useDesigner({ dataSource, layout, onChange });

  console.log("Designer: ", designer);

  useEffect(() => {
    if (typeof onCreate === "function") {
      onCreate(designer);
    }
  }, [onCreate, designer]);

  return (
    <div ref={designerRef} style={{ height: '100%' }}></div>
  );
}
