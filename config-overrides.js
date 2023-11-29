const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@animations": "src/animations",
    "@data": "src/_helpers/data",
    "@assets": "src/assets",
    "@images": "src/assets/images",
    "@icons": "src/assets/icons",
    "@styles": "src/styles",
    "@components": "src/components",
    "@store": "src/store",
  })(config);

  return config;
};
