
// The second argument/parameter is expected to be a function
let findWaldo = (arr, found) => {
  arr.forEach((waldo, index) => {
    if (waldo === "Waldo") {
      found(index);   // execute callback
    }
  });
}

findWaldo(["Alice", "Bob", "Robert", "Waldo", "Winston"], (index) => {
  console.log(`Found Waldo at index ${index}`);
});
