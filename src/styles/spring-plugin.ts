import plugin from "tailwindcss/plugin";
import { spring } from "popmotion";

const springPlugin = plugin(function ({ addUtilities, matchUtilities }) {
  matchUtilities(
    {
      spring: (values) => {
        let [duration, bounce] = values
          .split("/")
          .map((value) => parseFloat(value));

        const animation = spring({
          from: 0,
          to: 1,
          duration: duration,
          bounce,
        });

        // Define the number of steps for the animation
        const numSteps = 20;

        // Array to store the positions of the points
        const points = [];

        // Calculate the position of each point for each step of the animation
        for (let i = 0; i <= numSteps; i++) {
          // Resolve the animation at the current timestamp
          const { value, done } = animation.next((i / numSteps) * duration);

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
        fast: "300/0.2",
        standard: "500/0.3",
        slow: "1000/0.4",
      },
    },
  );
});

export default springPlugin;
