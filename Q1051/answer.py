row, col = map(int, input().split())
arr =  [list(map(int, input())) for _ in range(row)]

result = 0
for i in range(min(row, col), 0, -1):
  for j in range(0, col - i + 1):
    for k in range(0, row - i + 1):
      if arr[k][j] == arr[k][j + i - 1] and arr[k + i - 1][j] == arr[k + i - 1][j + i - 1] and arr[k][j] == arr[k + i - 1][j + i - 1]:
        result = i * i
  if result: break

print(result)