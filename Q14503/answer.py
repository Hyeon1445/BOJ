def calculateCount():
  row, col = map(int, input().split())
  y,x, direction = map(int, input().split())
  arr = [list(map(int, input().split())) for _ in range(row)]

  DIRTY = 0
  WALL = 1
  CLEAN = 2

  cnt = 1
  arr[y][x] = CLEAN
  while 1:
    nextDir = [(x, y - 1), (x + 1, y), (x, y + 1), (x - 1, y)]
    for i in range(1,5):
      if arr[nextDir[(direction - i + 4) % 4][1]][nextDir[(direction - i + 4) % 4][0]] == DIRTY:
        cnt = cnt + 1
        direction = (direction - i + 4) % 4
        x = nextDir[direction][0]
        y = nextDir[direction][1]
        arr[y][x] = CLEAN
        # print(cnt, y, x)
        break
      if i == 4:
        if arr[nextDir[(direction + 2) % 4][1]][nextDir[(direction + 2) % 4][0]] != WALL:
          x = nextDir[(direction + 2) % 4][0]
          y = nextDir[(direction + 2) % 4][1]
          break
        else:
          print(cnt)
          return


calculateCount()