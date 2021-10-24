from sys import stdin
r1, c1, r2, c2 = map(int, stdin.readline().split(' '))

def val(x, y):
  if x == 0 and y == 0: return 1
  lap = max(abs(x), abs(y))
  if y == lap: return (2 * lap + 1)**2 - (lap - x)
  elif x == -lap: return (2 * lap + 1)**2 - (2 * lap) - (lap - y)
  elif y == -lap: return (2 * lap + 1)**2 - 2 * (2 * lap) - (lap + x)
  else: return (2 * lap + 1)**2 - 3 * (2 * lap) - (lap + y)

maxLen = max(len(str(val(c1, r1))), len(str(val(c2, r2))))

for i in range(r1, r2 + 1):
  for j in range(c1, c2 + 1):
    print(('%' + str(maxLen) + 'd') % val(j, i), end=' ')
  print()