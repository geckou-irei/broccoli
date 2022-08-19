// build/index.js
const fs = require("fs-extra");
const { resolve } = require("path");

// Rename: _nuxt to static
fs.moveSync(
  resolve(__dirname, "../docs/_nuxt"),
  resolve(__dirname, "../docs/static")
);
