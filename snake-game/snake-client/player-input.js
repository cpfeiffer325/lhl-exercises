const { EXIT, KEY_LOOKUP } = require("./constants")

let connection
let lastKeyPressed

const setupInput = (conn) => {
  connection = conn

  const stdin = process.stdin
  stdin.setRawMode(true)
  stdin.setEncoding("utf8")
  stdin.resume()
  stdin.on("data", handleUserInput)
  return stdin
}

const handleUserInput = (key) => {
  const stdout = process.stdout

  if (key === '\u0003') {
    stdout.write(EXIT)
    process.exit()
  } else {
    clearInterval(lastKeyPressed)
    lastKeyPressed = setInterval(() => {
      connection.write(KEY_LOOKUP[key]);
    }, 100)
  }
}

module.exports = { setupInput }
