inp = int(input())

# 이진수

stick = 64
result = 0

while stick >= 1:
  if inp >= stick:
    inp = inp - stick
    result = result + 1
  stick = stick/2

print(result)