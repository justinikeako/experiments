import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/spring")({
  component: Page,
});

function Page() {
  return (
    <main className="flex h-svh items-center justify-center">
      <label
        className="group h-8 w-12 rounded-full bg-gray-300 ring-1 ring-black/10 transition-colors [zoom:4] has-checked:bg-green-500"
        htmlFor="switch"
      >
        <input type="checkbox" id="switch" className="peer hidden" />

        <div className="spring-standard size-8 p-0.5 transition-transform group-has-checked:translate-x-4">
          <div className="size-full rounded-full bg-white shadow-xs ring-1 ring-black/10"></div>
        </div>
      </label>
    </main>
  );
}
