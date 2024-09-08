function filterArray(numbers, value) {
  // Створюємо порожній масив для збереження чисел, що відповідають умовам
  const filteredNumbers = [];

  // Проходимо по кожному числу в масиві numbers
  for (let i = 0; i < numbers.length; i++) {
    // Якщо число більше за value, додаємо його в filteredNumbers
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }

  // Повертаємо новий масив із відфільтрованими числами
  return filteredNumbers;
}

// Перевірка функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
