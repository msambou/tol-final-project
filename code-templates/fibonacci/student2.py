def fibonacci(n):
    sequence = [1, 1]
    for i in range(2, n):
        sequence.append(sequence[-1] + sequence[-2])
    return sequence
