class Solution(object):
    def defangIPaddr(self, address):
        """
        :type address: str
        :rtype: str
        """

        addressList = [i for i in address]

        newAddressList = []

        for i in addressList:
            if i == ".":
                j = "[" + i + "]"
                newAddressList.append(j)
            else:
                newAddressList.append(i)

        newAddressString = "".join(newAddressList)

        return newAddressString
