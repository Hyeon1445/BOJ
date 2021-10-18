r1, c1, r2, c2 = map(int, input().split(' '))

m = max(-r1, r2, -c1, c2)

arr = [[0 for i in range(r2 - r1 + 1)] for j in range(c2 - c1 + 1)]
x = m
y = m
count = 1
if r1 + m < y and r2 + m > y and c1 + m < x and c2 + m > x:
  arr[x][y] = count

for i in range(m):
  count = count +1
  x = x + 1
  if r1 + m <= y and r2 + m >= y and c1 + m <= x and c2 + m >= x:
    arr[x][y] = count
  for j in range((i+1)*2-1):
    count = count +1
    y = y - 1
    if r1 + m <= y and r2 + m >= y and c1 + m <= x and c2 + m >= x:
      arr[x][y] = count
  for j in range((i+1)*2):
    count = count + 1
    x = x - 1
    if r1 + m <= y and r2 + m >= y and c1 + m <= x and c2 + m >= x:
      arr[x][y] = count
  for j in range((i+1)*2):
    count = count + 1
    y = y + 1
    if r1 + m <= y and r2 + m >= y and c1 + m <= x and c2 + m >= x:
      arr[x][y] = count
  for j in range((i+1) * 2):
    count = count + 1
    x = x + 1
    if r1 + m <= y and r2 + m >= y and c1 + m <= x and c2 + m >= x:
      arr[x][y] = count

      
max_len = max(len(str(arr[c1 + m][r1 + m])), len(str(arr[c2 + m][r1 + m])))


for i in range(r1 + m, r2 + m + 1):
  for j in range(c1 + m, c2 + m + 1):
    k = '                        ' + str(arr[j][i])
    print(k[-max_len:], end = ' ')
  print()

#런타임 에러