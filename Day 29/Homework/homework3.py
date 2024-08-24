def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        for a in range(n - 1):
            if arr[a] > arr[a + 1]:
                arr[a], arr[a + 1] = arr[a + 1], arr[a]

arr = [64, 34, 25, 12, 22, 11, 90]
bubble_sort(arr)
print(arr)