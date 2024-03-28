export default function Page() {
  return (
    <main className="group flex h-full touch-none select-none items-center justify-center overflow-hidden perspective-400">
      <input type="checkbox" id="toggle" className="peer hidden" />

      <label htmlFor="toggle" className="absolute inset-0 z-10 block">
        <span className="sr-only">Toggle</span>
      </label>

      <h1 className="relative flex -translate-y-[.25em] translate-x-[.5em] transform items-center justify-start text-6xl transition-transform -rotate-x-30 rotate-y-45 ease-spring spring-[1500/0] group-has-[:checked]:-translate-x-[.5em] group-has-[:checked]:-translate-y-0 group-has-[:checked]:-rotate-y-30 group-has-[:checked]:rotate-x-30 group-has-[:checked]:rotate-z-12 group-has-[:checked]:translate-z-32 sm:text-7xl sm:group-has-[:checked]:-translate-x-[.75em] md:text-8xl lg:text-9xl lg:group-has-[:checked]:-translate-x-[1em]">
        <span className="block origin-left text-[3.5em] font-semibold tracking-tighter transition-transform ease-spring spring-[1500/0] group-has-[:checked]:scale-x-0 group-has-[:checked]:scale-y-[0.3]">
          Big
        </span>
        <span className="absolute block origin-right scale-x-0 scale-y-[3.5] text-nowrap text-[1em] font-semibold tracking-tighter transition-transform ease-spring spring-[1500/0] group-has-[:checked]:scale-x-100 group-has-[:checked]:scale-y-100">
          and bigger
        </span>
      </h1>
    </main>
  );
}
