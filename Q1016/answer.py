minNum, maxNum = map(int, input().split())
arr = [False for i in range (maxNum - minNum + 1)]
result = maxNum - minNum + 1
for j in range(2, maxNum):
  if j * j > maxNum: break
  for k in range(int(minNum/(j*j)), int(maxNum/(j*j)) + 1):
    if j*j*k > maxNum: break
    if j*j*k < minNum: continue
    if arr[j*j*k - minNum] == False:
      arr[j*j*k - minNum] = True
      result = result - 1
print(result)