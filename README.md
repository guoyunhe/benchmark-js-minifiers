# Benchmark JavaScript Minifiers

Compare performance of terser, esbuild and swc as minifiers

## Sample Code

antd + lodash + react + react-dom + three.js

## Output Standard

- Bundled into one JS file with webpack
- IIFE format output
- Minified without source maps

## Test Devices

### ThinkPad T480

System information:

- CPU: i7-8550U
- RAM: 32 GB 2667 MHz DDR4
- Node: 16.14.1
- OS: openSUSE Tumbleweed Linux 5.16.14

Benchmark results:

1. esbuild: 5.167s, 1.9MB
2. swc: 8.702s, 1.9MB
3. terser: 21.845s, 1.8MB
4. no-minify: 4.677s, 4.7MB

### MacBook Pro 16 (2019)

System information:

- CPU: i7-9750H
- RAM: 16 GB 2667 MHz DDR4
- Node: 16.14.0
- OS: macOS Monterey 12.2.1

Benchmark results:

1. esbuild: 4.181s, 1.9MB
2. swc: 6.867s, 1.9MB
3. terser: 19.099s, 1.8MB
4. no-minify: 3.980s, 4.7MB

## Summary

Only based on my test, may be not true for your real-world projects.
