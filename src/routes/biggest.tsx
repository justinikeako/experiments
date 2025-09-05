import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/biggest")({
  component: Page,
});
function Page() {
  return (
    <main className="group flex h-svh touch-none items-center justify-center overflow-hidden select-none perspective-[400px]">
      <input type="checkbox" id="toggle" className="peer hidden" />

      <label htmlFor="toggle" className="absolute inset-0 z-10 block">
        <span className="sr-only">Toggle</span>
      </label>

      <h1 className="spring-[0/1500] relative flex translate-x-[.5em] -translate-y-[.25em] translate-z-0! -rotate-x-30 rotate-y-45 transform items-center justify-start text-6xl transition-transform ease-in-out group-has-checked:-translate-x-[.5em] group-has-checked:-translate-y-0 group-has-checked:translate-z-32! group-has-checked:rotate-x-30 group-has-checked:-rotate-y-30 group-has-checked:rotate-z-12 sm:text-7xl sm:group-has-checked:-translate-x-[.75em] md:text-8xl lg:text-9xl lg:group-has-checked:-translate-x-[1em]">
        <span className="spring-[0/1500] block origin-left text-[3.5em] font-semibold tracking-tighter transition-transform ease-in-out group-has-checked:scale-x-0 group-has-checked:scale-y-[0.3]">
          Big
        </span>
        <span className="spring-[0/1500] absolute block origin-right scale-x-0 scale-y-[3.5] text-[1em] font-semibold tracking-tighter text-nowrap transition-transform ease-in-out will-change-transform group-has-checked:scale-x-100 group-has-checked:scale-y-100">
          and bigger
        </span>
      </h1>
    </main>
  );
}
