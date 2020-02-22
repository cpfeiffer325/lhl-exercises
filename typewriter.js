const sentence = "hello there from lighthouse labs"
let array = sentence.split('')

setTimeout(() => {
  for (const char in array) {
    setTimeout(() => {process.stdout.write(array[char])}, 50 * char)
  }
})
