
const isFibonacci = (num) => {
  if (num < 0) return false;

  let a = 0, b = 1;

  while (a <= num) {
    if (a === num) return true;

    let next = a + b;
    a = b;
    b = next;
  }

  return false;
}

console.log(isFibonacci(5))