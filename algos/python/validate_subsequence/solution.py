def isValidSubsequence(array, sequence):
    substring = []
    j = 0
    for i in array:
        if i == sequence[j]:
            substring.append(i)
            j += 1
        if len(substring) == len(sequence):
            return substring == sequence

    return substring == sequence
