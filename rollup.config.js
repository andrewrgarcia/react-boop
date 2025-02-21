import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.tsx",
  output: [
    {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true
    },
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "reactBoop",
      exports: "named",
      sourcemap: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM"
      }
    }
  ],
  plugins: [resolve(), commonjs(), typescript()],
  external: (id) => /^react($|\/)/.test(id) || /^react-dom($|\/)/.test(id)
};
