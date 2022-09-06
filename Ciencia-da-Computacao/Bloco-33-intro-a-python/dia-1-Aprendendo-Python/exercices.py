def bigger(intA, intB):
    if intA > intB:
        return intA
    return intB


def average(arr):
    result = 0
    for n in arr:
        result += n
    return result / len(arr)


def draw_square(n):
    print("\ndraw square\n")
    for row in range(n):
        print(n * "*")


def bigger_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print("Bigger\n", bigger(24, 42))
print("\naverage\n", average([3, 4, 5, 2, 5, 6]))
draw_square(7)
print("\nbigger name\n", bigger_name(["Cassid", "Horimi", "Eduardo"]))
