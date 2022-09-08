NOME = input("Digite seu nome: ")

for letter in range(len(NOME)):
    for i in range(len(NOME) - letter):
        print(NOME[i], end="")
    print()
