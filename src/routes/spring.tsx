import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/spring")({
  component: Page,
});

function Page() {
  const [checked, setChecked] = useState(false);

  return (
    <main className="flex h-svh items-center justify-center tracking-tighter">
      <div className="zoom-4 grid grid-cols-[3rem_auto] gap-x-8 gap-y-4">
        <input
          type="checkbox"
          id="switch"
          className="peer hidden"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />

        <div className="col-span-2 grid grid-cols-subgrid items-center gap-2">
          <label
            className="group h-8 w-12 rounded-full bg-gray-300 ring-1 ring-black/10 transition-colors data-checked:bg-green-500"
            htmlFor="switch"
            data-checked={checked || undefined}
          >
            <div className="spring-[0.2/300] size-8 p-0.5 transition-transform group-data-checked:translate-x-4">
              <div className="size-full rounded-full bg-white shadow-xs ring-1 ring-black/10"></div>
            </div>
          </label>
          <span>Spring</span>
        </div>

        <div className="col-span-2 grid grid-cols-subgrid items-center gap-2">
          <label
            className="group h-8 w-12 rounded-full bg-gray-300 ring-1 ring-black/10 transition-colors data-checked:bg-green-500"
            htmlFor="switch"
            data-checked={checked || undefined}
          >
            <div className="size-8 p-0.5 transition-transform ease-in-out group-data-checked:translate-x-4">
              <div className="size-full rounded-full bg-white shadow-xs ring-1 ring-black/10"></div>
            </div>
          </label>
          <span>Ease In Out</span>
        </div>

        <div className="col-span-2 grid grid-cols-subgrid items-center gap-2">
          <label
            className="group h-8 w-12 rounded-full bg-gray-300 ring-1 ring-black/10 transition-colors data-checked:bg-green-500"
            htmlFor="switch"
            data-checked={checked || undefined}
          >
            <div className="size-8 p-0.5 transition-transform ease-linear group-data-checked:translate-x-4">
              <div className="size-full rounded-full bg-white shadow-xs ring-1 ring-black/10"></div>
            </div>
          </label>
          <span>Linear</span>
        </div>
      </div>
    </main>
  );
}
