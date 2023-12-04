"use client";
import { useState, useMemo, useCallback } from "react";

function useSize() {
  const [rect, setRect] = useState<DOMRect | null>(null);

  const resizer = useMemo(() => {
    return typeof window !== "undefined" && "ResizeObserver" in window
      ? new ResizeObserver((entries) => {
          entries?.[0] && setRect(entries[0].contentRect);
        })
      : null;
  }, []);

  const ref = useCallback(
    (node: HTMLElement | null) => {
      if (node !== null && resizer !== null) {
        resizer.observe(node);
        setRect(node.getBoundingClientRect());
      }
    },
    [resizer],
  );

  return {
    rect,
    ref,
  };
}

export default useSize;
