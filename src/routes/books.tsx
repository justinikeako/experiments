import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/books")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="group flex h-svh items-center justify-center perspective-near">
      <Book />
    </div>
  );
}

function Book() {
  return (
    <div className="animate-pan-3d relative h-64 w-48 transition-transform transform-3d *:flex *:items-center *:justify-center">
      <div className="face-front absolute inset-0 bg-blue-500">Front</div>
      <div className="face-back absolute inset-0 -translate-z-8 bg-red-500">
        Back
      </div>
      <div className="face-left absolute inset-y-0 right-full w-8 bg-blue-600">
        <span className="writing-vertical-rl text-sideways">Left</span>
      </div>
      <div className="face-right absolute inset-y-0 left-full w-8 bg-blue-300">
        <span className="writing-vertical-rl text-sideways">Right</span>
      </div>
      <div className="face-top absolute inset-x-0 bottom-full h-8 bg-blue-400">
        Top
      </div>
      <div className="face-bottom absolute inset-x-0 top-full h-8 bg-blue-400">
        Bottom
      </div>
    </div>
  );
}
