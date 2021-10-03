const { connect } = require("./client");
const { setupInput } = require("./player-input");
const { CONNECTING } = require("./constants")

console.log(CONNECTING);
setupInput(connect());
