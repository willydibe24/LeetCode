function fib(n: number): number {
    return Math.trunc(1 / Math.sqrt(5) * (
        Math.pow((1 + Math.sqrt(5)) / 2, n) -
        Math.pow((1 - Math.sqrt(5)) / 2, n)
    ));
}