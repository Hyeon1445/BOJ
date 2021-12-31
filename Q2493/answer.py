n = int(input())
arr = list(map(int, input().split(' ')))

stack = [{'idx': 0, 'val': 0}]
result = list([])

for i in range(n):
  while stack[-1]['idx'] > 0 and stack[-1]['val'] <= arr[i]:
    stack.pop(-1)
  result.append(str(stack[-1]['idx']))
  stack.append({'idx': i + 1, 'val': arr[i]})

print(" ".join(result))