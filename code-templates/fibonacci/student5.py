def fibonacci(n):
    if n <= 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]
    else:
        a = 0
        b = 1
        result = [a, b]
        for i in range(n):
            c = a + b
            result.append(c)
            a = b
            b = c
        return result
