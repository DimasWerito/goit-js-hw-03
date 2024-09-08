function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}

// Перевірка функції
console.log(slugify('Arrays for beginers')); // "arrays-for-beginers"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
