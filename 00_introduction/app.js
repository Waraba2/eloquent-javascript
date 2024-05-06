// Calculate total
let total = 0,
  count = 1;

while (count <= 10) {
  total += count;
  count += 1;
}

console.log(total);
// -> 55

// Same as above using helper functions
function range(start, end) {
  const length = end - start + 1;
  return Array.from({ length }, (_, i) => start + i);
}

function sum(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(range(1, 10)));
// -> 55

function factorial(n) {
  if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

console.log(factorial(8));
// -> 40320
