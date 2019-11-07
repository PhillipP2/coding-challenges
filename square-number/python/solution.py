import math

def is_negative(n):
    return n < 0;

def is_square(n):
    if is_negative(n):
        return False

    sqrt_n = math.sqrt(n)
    sqrt_n_floor = math.floor(sqrt_n)

    if sqrt_n == sqrt_n_floor:
        return True
    else:
        return False

print(is_square(9))