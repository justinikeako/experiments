import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";

export const Route = createFileRoute("/blob")({
  component: Page,
});

function Page() {
  return (
    <div
      className="flex h-full items-center justify-center bg-white"
      style={{
        filter: "blur(10px) contrast(20) saturate(60%)",
      }}
    >
      <div className="h-128 w-32 bg-gray-900"></div>

      <MovableBlob />
    </div>
  );
}

// mouse movable blob
function MovableBlob() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handlePointerDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const { x, y } = event.currentTarget.getBoundingClientRect();
    setMouseOffset({ x: event.clientX - x, y: event.clientY - y });
    setIsDragging(true);
  };

  const handlePointerUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (isDragging) {
        setPosition({
          x: event.clientX - mouseOffset.x,
          y: event.clientY - mouseOffset.y,
        });
      }
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isDragging, mouseOffset]);

  return (
    <div
      className="outline-red absolute top-0 left-0 size-24 rounded-full bg-red-500 outline-15 outline-white"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    />
  );
}
