function pth(n) {
  const factor = (n) => [...Array(n + 1).keys()].filter((i) => n % i === 0);
  console.log(factor(n));
  return factor(n);
}
console.log(pth(24));
console.log(pth(24));
