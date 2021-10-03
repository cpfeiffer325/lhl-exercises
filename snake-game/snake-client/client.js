const { write } = require("fs");
const net = require("net");
const { IP, PORT } = require("./constants");

// create connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log(data);
  });

  conn.on("connect", () => {
    conn.write("Name: CLP")
    console.log("You are Connected!")
  });

  return conn;
};

module.exports = { connect };
