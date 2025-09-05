import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/squircles")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="h-svh snap-y snap-mandatory overflow-y-auto">
      <section className="flex h-svh snap-start flex-wrap items-center justify-center gap-8 text-white">
        <div className="corner-round flex size-48 items-center justify-center rounded-[3rem] bg-blue-500">
          Round
        </div>
        <div className="corner-squircle flex size-48 items-center justify-center rounded-[3rem] bg-blue-500">
          Squircle
        </div>
        <div className="corner-bevel flex size-48 items-center justify-center rounded-[3rem] bg-blue-500">
          Bevel
        </div>
        <div className="corner-notch flex size-48 items-center justify-center rounded-[3rem] bg-blue-500">
          Notch
        </div>
        <div className="corner-scoop flex size-48 items-center justify-center rounded-[3rem] bg-blue-500">
          Scoop
        </div>
      </section>
      <section className="relative flex h-svh snap-start flex-wrap items-center justify-center gap-8 overflow-hidden">
        <div className="zoom-40 corner-round absolute bottom-0 left-0 size-8 -translate-x-1/2 translate-y-1/2 rounded-lg border border-dashed border-red-500"></div>
        <div className="zoom-40 corner-squircle absolute right-0 bottom-0 size-8 translate-x-1/2 translate-y-1/2 rounded-2xl border border-dashed border-red-500"></div>
      </section>
    </main>
  );
}
