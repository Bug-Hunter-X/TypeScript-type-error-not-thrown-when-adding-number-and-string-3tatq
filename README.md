# TypeScript Type Error Bug

This repository demonstrates a subtle bug in TypeScript where a type error is not thrown when adding a number to a string.  The unexpected behavior leads to incorrect results, highlighting a weakness in type safety.

## Bug Description

The `add` function is defined to accept two numbers and return a number. However, when a number and a string are passed as arguments, TypeScript does not report a type error. Instead, the string is implicitly converted to a number and concatenation occurs.

## Reproduction

1. Clone this repository.
2. Compile and run `bug.ts`. Observe the unexpected output.

## Solution

The solution file (`bugSolution.ts`) demonstrates how to address this issue using stricter type checking and explicit type assertions.