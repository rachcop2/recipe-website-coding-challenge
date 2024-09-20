
module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!axios)"],
}
