def searchResult(arr):
  num1 = arr[0]
  num2 = arr[-1]
  leftIdx = 0
  rightIdx = len(arr) - 1
  while 1:
    if arr[leftIdx] + arr[rightIdx] == 0:
      print(num1, num2)
      return
    elif arr[leftIdx] + arr[rightIdx] < 0: leftIdx = leftIdx + 1
    else: rightIdx = rightIdx - 1
    
    if leftIdx >= rightIdx: break
    if abs(arr[leftIdx] + arr[rightIdx]) < abs(num1 + num2):
      num1, num2 = arr[leftIdx], arr[rightIdx]
  print(num1, num2)

n = int(input())
arr = list(map(int, input().split(' ')))
arr.sort()
searchResult(arr)