function makeArray(firstArray, secondArray, maxLength) {
  // Об'єднуємо два масиви в один
  const combinedArray = firstArray.concat(secondArray);

  // Якщо довжина об'єднаного масиву більше maxLength, повертаємо копію масиву з довжиною maxLength
  if (combinedArray.length > maxLength) {
    return combinedArray.slice(0, maxLength);
  }

  // Якщо довжина менше або дорівнює maxLength, повертаємо весь об'єднаний масив
  return combinedArray;
}

// Перевірка функції
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
