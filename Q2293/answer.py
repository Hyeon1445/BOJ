[n, k] = list(map(int, input().split(' ')))
inp = []
for i in range(n):
  inp.append(int(input()))

arr = [0 for _ in range(k + 1)]
arr[0] = 1
for i in range(0, n):
  for j in range(inp[i], k + 1):
    arr[j] += arr[j - inp[i]]

print(arr[k])