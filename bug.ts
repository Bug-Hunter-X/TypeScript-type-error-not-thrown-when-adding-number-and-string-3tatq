function add(a: number, b: number): number {
  return a + b;
}

const result = add(1, '2'); // Type error is not thrown here
console.log(result); // Output: 12