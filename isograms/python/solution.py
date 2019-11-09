def is_isogram(string):
    repeat_char = set()
    for char in string.lower():
        if char in repeat_char:
            return False
        repeat_char.add(char)
    return True
    
