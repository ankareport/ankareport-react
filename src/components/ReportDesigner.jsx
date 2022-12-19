import { useDesigner } from "../hooks/useDesigner";

export function ReportDesigner({ dataSource, layout, onChange }) {
  const { designer, designerRef } = useDesigner({ dataSource, layout, onChange });

  console.log("Designer: ", designer);

  return (
    <div ref={designerRef} style={{ height: '100%' }}></div>
  );
}
