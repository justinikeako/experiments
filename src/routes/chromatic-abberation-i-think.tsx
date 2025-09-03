import { createFileRoute } from "@tanstack/react-router";
import { cn } from "#/lib/utils";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/chromatic-abberation-i-think")({
  component: Page,
});

export default function Page() {
  return (
    <main className="flex h-full w-screen overflow-hidden">
      <div
        className="size-full"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle, #f00, #f00 1px, #0f0 1px, #0f0 2px, #00f 2px, #00f 3px)",
        }}
      />
      <Draggable
        className="size-[150%] animate-bounce touch-manipulation"
        style={{
          backgroundImage:
            "repeating-radial-gradient(circle, #000, #000 1px, transparent 1px, transparent 2px)",
        }}
      />
    </main>
  );
}

function Draggable(props: React.ComponentProps<"div">) {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const { x, y } = e.currentTarget.getBoundingClientRect();
    setMouseOffset({ x: e.clientX - x, y: e.clientY - y });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      console.log("isDragging");
      if (isDragging) {
        setPosition({
          x: e.clientX - mouseOffset.x,
          y: e.clientY - mouseOffset.y,
        });
      }
    };

    window.addEventListener("pointermove", handleMouseMove);

    return () => {
      window.removeEventListener("pointermove", handleMouseMove);
    };
  }, [isDragging, mouseOffset]);

  return (
    <div
      {...props}
      onPointerDown={handleMouseDown}
      onPointerUp={handleMouseUp}
      className={cn("absolute top-0 left-0", props.className)}
      style={{
        ...props.style,
        translate: `${position.x}px ${position.y}px`,
      }}
    />
  );
}
