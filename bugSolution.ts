function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result1 = add(1, '2' as any); // Type assertion - not recommended
console.log(result1); // Output: 12

const result2 = addSafe(1, 2);
console.log(result2); // Output: 3

const result3 = addSafe(1, '2' as number); //Type assertion - not recommended
console.log(result3); // throws error

const result4 = addSafe(1, parseInt('2'));
console.log(result4); //Output: 3