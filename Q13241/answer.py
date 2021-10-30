from sys import stdin
num1, num2 = map(int, stdin.readline().split(' '))

for i in range(num1, 0, -1):
  if num1 % i == 0 and num2 % i == 0:
    print(int(i * (num1 / i) * (num2  / i)))
    break
