// process.stdout.write('.')

process.stdin.on('data', (key) => {
  process.stdout.write('.');
});

console.log('after callback')
