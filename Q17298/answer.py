n = int(input())
arr = list(map(int, input().split(' ')))
result = []
stack = []

for i in range(n-1, -1, -1):
  while len(stack) and stack[-1] <= arr[i]: stack.pop(-1)
  if len(stack): result.append(str(stack[-1]))
  else: result.append('-1')
  stack.append(arr[i])

print(" ".join(result[::-1]))