import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import tailwindcssAnimate from "tailwindcss-animate";
import tailwind3Dtransforms from "@xpd/tailwind-3dtransforms";
import { spring } from "popmotion";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },

      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    // Mask gradient utilities
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "mask-gradient-to": (value) => ({
            "--tw-mask-gradient-stops":
              "rgb(0 0 0 / var(--tw-mask-from-opacity)) var(--tw-mask-from-position), rgb(0 0 0 / var(--tw-mask-to-opacity)) var(--tw-mask-to-position)",
            maskImage: `linear-gradient(to ${value}, var(--tw-mask-gradient-stops))`,
          }),
        },
        {
          values: {
            tl: "top left",
            t: "top",
            tr: "top right",
            l: "left",
            DEFAULT: "",
            r: "right",
            bl: "bottom left",
            b: "bottom",
            br: "bottom right",
          },
        },
      );

      matchUtilities(
        {
          "mask-radial-gradient": (value) => ({
            "--tw-mask-gradient-stops":
              "rgb(0 0 0 / var(--tw-mask-from-opacity)) var(--tw-mask-from-position), rgb(0 0 0 / var(--tw-mask-to-opacity)) var(--tw-mask-to-position)",
            maskImage: `radial-gradient(var(--tw-radial-gradient-shape) var(--tw-radial-gradient-size) at ${value}, var(--tw-mask-gradient-stops))`,
          }),
        },
        {
          values: {
            DEFAULT: "center",
            t: "top",
            tl: "top left",
            tr: "top right",
            r: "right",
            l: "left",
            bl: "bottom left",
            b: "bottom",
            br: "bottom right",
          },
        },
      );

      matchUtilities(
        {
          "mask-from": (value) => ({
            "--tw-mask-from-opacity": value,
          }),

          "mask-to": (value) => ({
            "--tw-mask-to-opacity": value,
          }),
        },
        {
          values: theme("opacity"),
        },
      );

      matchUtilities(
        {
          "mask-from": (value) => ({
            "--tw-mask-from-position": value,
          }),

          "mask-to": (value) => ({
            "--tw-mask-to-position": value,
          }),
        },
        {
          values: {
            "5%": "5%",
            "10%": "10%",
            "15%": "15%",
            "20%": "20%",
            "25%": "25%",
            "30%": "30%",
            "35%": "35%",
            "40%": "40%",
            "45%": "45%",
            "50%": "50%",
            "55%": "55%",
            "60%": "60%",
            "65%": "65%",
            "70%": "70%",
            "75%": "75%",
            "80%": "80%",
            "85%": "85%",
            "90%": "90%",
            "95%": "95%",
          },
        },
      );
    }),

    // Mask image utilities
    plugin(function ({ addUtilities, matchUtilities }) {
      addUtilities({
        ".mask-cover": {
          "mask-size": "cover",
        },
        ".mask-contain": {
          "mask-size": "contain",
        },
        ".mask-luminance": {
          "mask-type": "luminance",
        },
        ".mask-center": {
          "mask-position": "center center",
        },
        ".mask-no-repeat": {
          "mask-repeat": "no-repeat",
        },
      });

      matchUtilities({
        mask: (value) => ({
          maskImage: value,
        }),
      });
    }),

    plugin(function ({ addUtilities, matchUtilities }) {
      addUtilities({
        ".ease-spring": {
          transitionTimingFunction: "var(--tw-spring-function)",
          transitionDuration: "var(--tw-spring-duration)",
        },
      });

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
              "--tw-spring-function": `linear(${points.join(",")})`,
              "--tw-spring-duration": duration + "ms",
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
    }),
  ],
};

export default config;
