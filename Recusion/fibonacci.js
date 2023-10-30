function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// To print the first 10 numbers of the Fibonacci series:
for (let i = 0; i < 10; i++) {
  console.log(fibonacci(i));
}
