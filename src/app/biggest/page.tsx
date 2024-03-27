export default function Page() {
  return (
    <main className="group flex h-full touch-none select-none items-center justify-center overflow-hidden perspective-400">
      <h1 className="md:8xl relative flex translate-x-[.5em]  transform items-center justify-start text-6xl transition-transform duration-1000 -rotate-x-30 rotate-y-45 group-active:-translate-x-[.5em] group-active:translate-y-[.125em] group-active:-rotate-y-30 group-active:rotate-x-30 group-active:rotate-z-12 group-active:translate-z-32 sm:text-7xl sm:group-active:-translate-x-[.75em] md:text-8xl   lg:text-9xl lg:group-active:-translate-x-[1em]">
        <span className="block origin-left text-[3.5em] font-semibold tracking-tighter transition-transform duration-1000 group-active:scale-x-0 group-active:scale-y-[0.3]">
          Big
        </span>
        <span className="absolute block origin-right scale-x-0 scale-y-[3.5] text-nowrap text-[1em] font-semibold tracking-tighter transition-transform duration-1000 group-active:scale-x-100 group-active:scale-y-100">
          and bigger
        </span>
      </h1>
    </main>
  );
}
