cnt = int(input())

result = 0
for i in range(cnt):
  word = input()
  alphabet = [False for i in range(26)]
  for j in range(len(word)):
    if j != len(word) - 1 and word[j] == word[j+1]: continue
    if not alphabet[ord(word[j]) - ord('a')]: alphabet[ord(word[j]) - ord('a')] = True
    else: break
    if j == len(word) - 1: result = result + 1

print(result)