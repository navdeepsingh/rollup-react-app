import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.js",
    format: "iife", // immediately-invoked function expression — suitable for <script> tags
    sourcemap: true,
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify("production"),
      __buildDate__: () => JSON.stringify(new Date()),
      __buildVersion: 15,
    }),
    resolve(), // tells Rollup how to find date-fns in node_modules
    babel({ babelHelpers: "bundled" }),
    commonjs(), // converts date-fns to ES modules
    production && terser(), // minify, but only in production
  ],
};
