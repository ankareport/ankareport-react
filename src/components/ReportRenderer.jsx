import { useRenderer } from "../hooks/useRenderer";

export function ReportRenderer({ layout, data }) {
  const { renderer, rendererRef } = useRenderer({ layout, data });

  console.log("Renderer: ", renderer);

  return (
    <div ref={rendererRef} style={{ height: '100%' }}></div>
  );
}
