const api = require("./api");
const auth = require("./auth");
const broadcast = require("./broadcast");
const config = require("./config");
const formatter = require("./formatter")(api);
const utils = require("./utils");

const beowulf = {
  api,
  auth,
  broadcast,
  config,
  formatter,
  utils
};

if (typeof window !== "undefined") {
  window.beowulf = beowulf;
}

if (typeof global !== "undefined") {
  global.beowulf = beowulf;
}

exports = module.exports = beowulf;
