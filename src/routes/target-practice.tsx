import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useMotionValue,
} from "motion/react";

export const Route = createFileRoute("/target-practice")({
  component: RouteComponent,
});

const cellSize = 64;

// Limit columns and rows (for performance reasons)
const maxColumns = 40;
const maxRows = 40;

// No arrows are rendered outside of the viewport
const columnCount = Math.min(
  maxColumns,
  Math.round(window.innerWidth / cellSize),
);
const rowCount = Math.min(maxRows, Math.round(window.innerHeight / cellSize));

type ArrowCoords = [number, number][];

function RouteComponent() {
  // Initialize mouse position at the center of the screen
  const mouseX = useMotionValue(window.innerWidth / 2);
  const mouseY = useMotionValue(window.innerHeight / 2);
  const [arrowCoords, setArrowCoords] = useState<ArrowCoords>([[0, 0]]);

  useEffect(() => {
    const arrows = document.querySelectorAll("[data-arrow]");

    const arrowCoords: ArrowCoords = [];

    for (const arrow of arrows) {
      const { left, top } = arrow.getBoundingClientRect();

      arrowCoords.push([left + 6, top + 1]);
    }

    setArrowCoords(arrowCoords);
  }, []);

  return (
    <div
      className="h-lvh overflow-hidden bg-black"
      onPointerMove={(event) => {
        event.preventDefault();

        mouseX.set(event.pageX);
        mouseY.set(event.pageY);
      }}
    >
      <motion.div
        className="grid place-items-center"
        style={
          {
            "--cell-size": `${cellSize}px`,
            "--mouse-x": mouseX,
            "--mouse-y": mouseY,
            gridTemplateRows: `repeat(${rowCount}, var(--cell-size))`,
            gridTemplateColumns: `repeat(${columnCount}, var(--cell-size))`,
          } as React.CSSProperties
        }
      >
        {[...Array(columnCount * rowCount).keys()].map((index) => (
          <div
            style={
              {
                "--diff-x": `calc(var(--mouse-x) - ${arrowCoords[index]?.[0] ?? 0})`,
                "--diff-y": `calc(var(--mouse-y) - ${arrowCoords[index]?.[1] ?? 0})`,
                "--_dfc":
                  "calc(sqrt(pow(var(--diff-x), 2) + pow(var(--diff-y), 2)))",
                "--distance-from-center": "max(var(--_dfc), -1 * var(--_dfc))",
                scale:
                  "calc(1 + 2 * exp(-1 * pow(var(--distance-from-center) / 100, 7)) * 10)",
                rotate: "calc(atan2(var(--diff-y), var(--diff-x)))",
              } as React.CSSProperties
            }
            className="h-0.5 w-1 origin-[150%_center] bg-orange-500 [clip-path:polygon(75%_0%,100%_50%,75%_100%,0_100%,0_0%)]"
            data-arrow
          />
        ))}
      </motion.div>

      {/* <motion.div
        className="absolute -top-2 -left-2 flex size-4 items-center justify-center rounded-full border border-white"
        style={{ x: mouseX, y: mouseY }}
      >
        <div className="size-6 before:absolute before:top-1/2 before:h-px before:w-full before:bg-white after:absolute after:left-1/2 after:h-full after:w-px after:bg-white" />
      </motion.div> */}

      <footer className="fixed right-0 bottom-0 left-0 p-4 text-sm text-gray-400">
        <p>
          By&nbsp;
          <a
            target="_blank"
            className="text-white underline"
            href="https://twitter.com/jikeako"
          >
            @jikeako
          </a>
          , inspired by&nbsp;
          <a
            target="_blank"
            className="text-white underline"
            href="https://twitter.com/kaihenthoiwane/status/1666984871221415937"
          >
            @kaihenthoiwane
          </a>
        </p>
        <a
          className="button"
          href="https://codesandbox.io/p/sandbox/target-practice-fq2sx4?file=%2Fsrc%2FApp.tsx%3A1%2C1"
        >
          View Code
        </a>
      </footer>
    </div>
  );
}
