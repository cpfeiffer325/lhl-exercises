const { connect } = require("./client");
const { setupInput } = require("./player-input");

console.log("Connecting ...");
setupInput(connect());
