import plugin from "tailwindcss/plugin";
import { spring } from "popmotion";

const springPlugin = plugin(function ({ matchUtilities }) {
  matchUtilities(
    {
      spring: (values) => {
        let [bounce, duration] = values
          .split("/")
          .map((value) => parseFloat(value));

        const animation = spring({
          from: 0,
          to: 1,
          duration: duration,
          bounce,
        });

        const pointCount = 20;

        const points = [];

        // Calculate the position of each point for each step of the animation
        for (let i = 0; i <= pointCount; i++) {
          // Resolve the animation at the current timestamp
          const { value, done } = animation.next((i / pointCount) * duration);

          // Store the resolved value (position) in the points array
          points.push(value);

          if (done) break;
        }

        return {
          transitionTimingFunction: `linear(${points.join(",")})`,
          transitionDuration: duration + "ms",
        };
      },
    },
    {
      values: {
        fast: "0.2/300",
        standard: "0.3/500",
        slow: "0.4/1000",
      },
    },
  );
});

export default springPlugin;
