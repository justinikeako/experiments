/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
export default {
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindAttributes: ["classNames", "appearance"],
  tailwindFunctions: ["cva", "cn"],
};
