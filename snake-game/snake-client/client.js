const { write } = require("fs")
const net = require("net")
const { CONNECTED, IP, NAME, PORT } = require("./constants")

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
    conn.write(NAME)
    // setInterval( func = () => {
    //   conn.write("Move: up");
    // }, 1000);

    console.log(CONNECTED)
  });

  return conn;
};

module.exports = { connect };
