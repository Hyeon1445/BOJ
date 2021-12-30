def solveAC(arr: list[int], num: int, AC: str):
  isReserved = False
  for i in AC:
    if i == 'R':
      isReserved = not isReserved
    elif i == 'D':
      if num < 1:
        print('error')
        return
      else:
        if isReserved:
          arr.pop(-1)
          num = num - 1
        else:
          arr.pop(0)
          num = num - 1

  if num == 0:
    print('[]')
    return

  if isReserved:
    print(str(list(map(int, arr))[::-1]).replace(' ', ''))
  else:
    if len(arr) > 0:
      print(str(list(map(int, arr))).replace(' ', ''))

n = int(input())
for _ in range(n):
  AC = list(input())
  num = int(input())
  arr = input()[1:-1].split(',')
  solveAC(arr, num, AC)