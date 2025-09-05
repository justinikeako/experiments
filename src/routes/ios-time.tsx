import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ios-time")({
  component: RouteComponent,
});

const hours = [...Array(12).keys()].map((hour) => hour + 1);
const minutes = [...Array(60).keys()].map((minute) => minute);

function RouteComponent() {
  return (
    <div className="flex h-lvh items-center justify-center gap-4">
      <div className="scrollbar-hidden flex h-32 flex-col overflow-y-scroll tabular-nums">
        {hours.map((hour) => (
          <div key={hour}>{hour}</div>
        ))}
      </div>
      <div className="scrollbar-hidden flex h-32 flex-col overflow-y-scroll tabular-nums">
        {minutes.map((minute) => (
          <div key={minute}>{minute}</div>
        ))}
      </div>
      <div className="scrollbar-hidden flex h-32 flex-col overflow-y-scroll tabular-nums">
        {["AM", "PM"].map((period) => (
          <div key={period}>{period}</div>
        ))}
      </div>
    </div>
  );
}
