import { cn } from "#/lib/utils";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/books")({ component: RouteComponent });

function RouteComponent() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-black" />
      <div className="group h-svh overflow-y-scroll tracking-tighter perspective-distant">
        <div className="group zoom-2 flex flex-col items-center gap-20 py-16 transform-3d lg:gap-10">
          {[...Array(10)].map((_, index) => (
            <Book
              key={index}
              index={index}
              selectedIndex={selected}
              onSelect={() => setSelected(selected === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function Book({
  index,
  selectedIndex,
  onSelect,
  ...props
}: {
  index: number;
  selectedIndex: number | null;
  onSelect: () => void;
}) {
  return (
    <button
      {...props}
      type="button"
      onClick={onSelect}
      data-any-selected={selectedIndex !== null || undefined}
      data-selected={index === selectedIndex || undefined}
      className={cn(
        "group spring-[0.2/2000] relative h-8 w-64 text-left text-white transition-transform transform-3d",
        "not-data-any-selected:hover:translate-z-4",
        "data-selected:-translate-x-1/3 data-selected:rotate-x-15 data-selected:-rotate-y-65 data-selected:rotate-z-75 data-selected:delay-0",
        "data-any-selected:not-data-selected:pointer-events-none data-any-selected:not-data-selected:opacity-0",
      )}
    >
      <div className="face-front absolute inset-0 transform-3d">
        <div className="absolute inset-x-0 inset-y-0.25 flex translate-z-0.5 items-center bg-red-600 px-2">
          Spine {index + 1}
        </div>

        <div className="absolute inset-x-0 top-0 h-0.5 origin-top rotate-x-45 bg-red-600"></div>
        <div className="absolute inset-x-0 bottom-0 h-0.5 origin-bottom -rotate-x-45 bg-red-600"></div>
      </div>

      <div className="face-top absolute inset-x-0 bottom-full h-48 origin-bottom transform-3d">
        <div className="absolute inset-x-0 bottom-0 h-3.25 origin-bottom rotate-x-11 bg-linear-to-b from-red-500 from-75% to-red-600">
          <div className="absolute inset-y-0 right-0 w-0.5 bg-linear-to-r from-transparent to-red-600"></div>
        </div>
        <div className="absolute inset-x-0 bottom-2.75 h-1.25 origin-top -rotate-x-37 bg-gradient-to-b from-red-500 via-red-600 to-red-500">
          <div className="absolute inset-y-0 right-0 w-0.5 bg-linear-to-r from-transparent to-red-600"></div>
        </div>
        <div className="absolute inset-x-0 top-0 bottom-4 overflow-clip rounded-t-xs bg-red-500">
          Front {index + 1}
          <div className="absolute inset-y-0 right-0 w-0.5 bg-linear-to-r from-transparent to-red-600"></div>
        </div>
      </div>

      <div className="face-bottom absolute inset-x-0 top-full h-48 transform-3d">
        <div className="absolute inset-x-0 top-0 h-3.25 origin-top -rotate-x-11 bg-linear-to-t from-red-500 from-75% to-red-600" />
        <div className="absolute inset-x-0 top-2.75 h-1.25 origin-bottom rotate-x-37 bg-gradient-to-t from-red-500 via-red-600 to-red-500" />
        <div className="absolute inset-x-0 top-4 bottom-0 rounded-b-xs bg-red-500">
          Back
        </div>
      </div>

      <div className="face-right absolute inset-y-0.75 right-full w-47 translate-x-1 bg-gradient-to-b from-stone-400 to-stone-300" />
      <div className="absolute inset-x-1 inset-y-0.75 -translate-z-47 bg-red-400 bg-gradient-to-b from-stone-400 to-stone-300" />
      <div className="face-left absolute inset-y-0.75 left-full w-47 -translate-x-1 bg-gradient-to-b from-stone-600 via-stone-400 to-stone-300" />
    </button>
  );
}
