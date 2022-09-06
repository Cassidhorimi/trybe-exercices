PI = 3.14
P = 2


def square(side):
    '''Calculate area of square.'''
    return side * side


def rectangle(length, width):
    '''Calculate area of rectangle.'''
    return length * width


def circle(radius):
    '''Calculate area of circle.'''
    return PI * radius**P


if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 4))
    print("Área do círculo", circle(3))
