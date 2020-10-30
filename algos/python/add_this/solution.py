def split(string):
    return [i for i in string]


def addThis(n):
    if n > 9:
        string = str(n)
        strArr = split(string)
        numArr = [int(i) for i in strArr]
        sum = 0
        for num in numArr:
            sum += num
        return sum
    else:
        return n


print(addThis(38))
