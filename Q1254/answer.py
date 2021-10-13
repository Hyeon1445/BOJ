s = input()

def isPalindrome(st):
  return st == st[::-1]

def makePalindrome(st):
  for i in range(len(st)):
    newSt = st + st[:i][::-1]
    if isPalindrome(newSt):
      return len(newSt)

print(makePalindrome(s))