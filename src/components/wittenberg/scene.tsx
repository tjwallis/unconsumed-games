import { useEffect, useRef } from "react";

/**
 * The four title layers, centered the way the 1280×640 preview composites them:
 * sky is 640×320, and far / mid / near are 656×320 with 8px of bleed each side.
 */
export function WittenbergScene({
  className = "",
  parallax = false,
}: {
  className?: string;
  parallax?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!parallax) return undefined;
    const el = ref.current;
    if (!el) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    if (!window.matchMedia("(pointer: fine)").matches) return undefined;

    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      if (r.width === 0) return;
      el.style.setProperty("--px", String((e.clientX - r.left) / r.width - 0.5));
      el.style.setProperty("--py", String((e.clientY - r.top) / r.height - 0.5));
    };
    const onLeave = () => {
      el.style.setProperty("--px", "0");
      el.style.setProperty("--py", "0");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [parallax]);

  return (
    <div ref={ref} className={"wscene " + className} aria-hidden="true">
      <i className="l sky" />
      <i className="l far" />
      <i className="l mid" />
      <i className="l near" />
    </div>
  );
}
