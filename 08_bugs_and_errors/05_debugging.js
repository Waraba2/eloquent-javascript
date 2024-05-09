debugger;
function numberToString(n, base = 10) {
  let result = "", sign = "";
  if (n < 0) {
    sign = "-";
    n = -n;
  }
  do {
    result = String(n % base) + result;
    console.log(n); // The console that log gives us the ability to see changes in line 11
    n = Math.floor(n / base); // instead of n /= base;
  } while (n > 0) {
    return sign + result;
  }
}
console.log(numberToString(13, 10));
// → 1.5e-3231.3e-3221.3e-3211.3e-3201.3e-3191.3e-3181.3…
// 13
// 1.3
// 0.13
// 0.013
// …
// 1.5e-323
