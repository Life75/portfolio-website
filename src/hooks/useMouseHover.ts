import { useEffect, useState } from "react";

type MousePosition = {
  x: number;
  y: number;
};

export function useMouseOver() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  const [isMouseOnScreen, setMouseStatus] = useState<boolean>(false)


  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handleMouseLeave = (e: MouseEvent) => {
        if (!e.relatedTarget) {
            setMouseStatus(false) 
          //setMousePosition(null);
        } else setMouseStatus(true)
      };
    

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave)

    };
  }, []);

  return {mousePosition, isMouseOnScreen};
}
