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
      stdout.write("Exited snek game. Bye bye.\n")
      process.exit()
    case 'w':
      connection.write("Move: up")
      break
    case 'a':
      connection.write("Move: left")
      break
    case 's':
      connection.write("Move: down")
      break
    case 'd':
      connection.write("Move: right")
      break
    case 'q':
      connection.write("Say: You are going down")
      break
    case 'e':
      connection.write("Say: I am the longest")
      break
    case 'f':
      connection.write("Say: bye bye bye")
      break
  }
}

module.exports = { setupInput }
