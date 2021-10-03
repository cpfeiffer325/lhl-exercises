const {
  BYE,
  EXIT,
  KEY_DOWN,
  KEY_LEFT,
  KEY_RIGHT,
  KEY_UP,
  LONGEST,
  TAUNT
} = require("./constants")

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

  switch (key) {
    case '\u0003':
      stdout.write(EXIT)
      process.exit()
    case 'w':
      connection.write(KEY_UP)
      break
    case 'a':
      connection.write(KEY_LEFT)
      break
    case 's':
      connection.write(KEY_DOWN)
      break
    case 'd':
      connection.write(KEY_RIGHT)
      break
    case 'q':
      connection.write(TAUNT)
      break
    case 'e':
      connection.write(LONGEST)
      break
    case 'f':
      connection.write(BYE)
      break
  }
}

module.exports = { setupInput }
