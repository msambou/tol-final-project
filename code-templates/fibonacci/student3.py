def fibonacci(n):
    a, b = 0, 1
    while a < n:
        a, b = b, a + b
    return b
