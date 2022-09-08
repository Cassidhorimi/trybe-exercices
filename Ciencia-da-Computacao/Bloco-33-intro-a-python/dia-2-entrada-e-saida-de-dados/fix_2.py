NUMS = input("Insira aqui seus valores separados por espaço: ")

nums_arr = NUMS.split(" ")

SUM = 0

for num in nums_arr:
    if not num.isdigit():
        print(f"Erro ao somar valores, {num} não é um digito")
    else:
        SUM += int(num)
10
print(f"A soma dos valores válidos é: {SUM}")
