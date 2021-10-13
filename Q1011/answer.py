num = int(input())

def calcCount(x,y):
  distance = y - x
  sum = 1
  count = 1
  if distance == 1:
    return 1
  while 1:
    if sum * 2 >= distance:
      return count * 2
    if sum * 2 + count + 1 >= distance:
      return count * 2 + 1
    count = count + 1
    sum = sum + count

for i in range(num):
  x,y = input().split()
  print(calcCount(int(x),int(y)))

# 1 - 1이하
# 1 1 - 2이하
# 1 2 1 - 4이하
# 1 2 2 1 - 6이하
# 1 2 3 2 1 - 9이하
# 1 2 3 3 2 1 - 12이하
# 1 2 3 4 3 2 1 - 16이하
