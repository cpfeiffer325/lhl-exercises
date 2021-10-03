const titleCase  = function(text) {
  return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

let result = titleCase('maRy hAd a lIttLe LaMb');
console.log(result);
