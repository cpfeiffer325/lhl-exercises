let interval = 0
let position = ['|', '/', '-', '\\',]


while (interval < 500) {
  let rotation = interval % 4

  setTimeout(() => {
    process.stdout.write(`\r${position[rotation]}   `)
  }, 100 * interval)
  interval++
}
