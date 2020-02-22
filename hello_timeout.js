words = ['4311o', 'th3r3', 'w0r1d']

for (let word in words) {
  setTimeout(() => {console.log(words[word])}, 1000 * word)
}

