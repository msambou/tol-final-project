def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while True:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid
        else:
            right = mid
