def is_vowel(char):
    return char.upper() == 'A' or char.upper() == 'E' or char.upper() == 'I' or char.upper() == 'O' or char.upper() == 'U'

def disemvowel(str):
    disemvowel_word = ""
    for char in str:
        if not is_vowel(char): 
            disemvowel_word += char
    return disemvowel_word