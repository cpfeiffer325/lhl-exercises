const { EXIT, KEY_LOOKUP } = require("./constants")

let connection

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
    connection.write(KEY_LOOKUP[key])
  }
}

module.exports = { setupInput }
