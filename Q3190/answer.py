def calculate_seconds():
  n = int(input())
  k = int(input())
  arr = [[0 for i in range(n)] for j in range(n)]

  none = 0
  snake = 1
  apple = 2
  arr[0][0] = snake
  snake_position = [[0, 0]]

  for _ in range(k):
    inp = input().split(' ')
    arr[int(inp[0]) - 1][int(inp[1]) - 1] = apple

  l = int(input())
  direction_change = []
  for _ in range(l):
    dir = input().split(' ')
    direction_change.append(dir)

  snake_direction = 1
  seconds = 0

  def is_out_of_range(num):
    return num < 0 or num >= n

  while 1:
    next_head_position = [
      [snake_position[0][0] - 1, snake_position[0][1]],
      [snake_position[0][0], snake_position[0][1] + 1],
      [snake_position[0][0] + 1, snake_position[0][1]],
      [snake_position[0][0], snake_position[0][1] - 1],
    ]
    seconds = seconds + 1
    if is_out_of_range(next_head_position[snake_direction][0]) or is_out_of_range(next_head_position[snake_direction][1]):
      print(seconds)
      return
    snake_position.insert(0, next_head_position[snake_direction])

    if arr[snake_position[0][0]][snake_position[0][1]] == snake:
      print(seconds)
      return
    elif arr[snake_position[0][0]][snake_position[0][1]] == apple:
      arr[snake_position[0][0]][snake_position[0][1]] = snake
    else:
      arr[snake_position[0][0]][snake_position[0][1]] = snake
      arr[snake_position[len(snake_position) - 1][0]][snake_position[len(snake_position) - 1][1]] = none
      snake_position.pop(-1)
    
    if len(direction_change) and seconds == int(direction_change[0][0]):
      if direction_change[0][1] == 'L':
        snake_direction = (snake_direction + 3) % 4
      else:
        snake_direction = (snake_direction + 1) % 4
      direction_change.pop(0)

calculate_seconds()