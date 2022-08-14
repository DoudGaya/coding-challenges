
# [Domain Name](https://github.com/DoudGaya/coding-challenges/blob/main/codility/domain.js)
## [Domain Name](https://www.codewars.com/kata/domain-name/)
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
## examples of valid URLs
1. url = "http://github.com/carbonfive/raygun" -> domain name = "github"
1. url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
1. url = "https://www.cnet.com"                -> domain name = cnet"



# [Roman Numberals Decorder]
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

solution('XXI'); // should return 21

1. Symbol    Value
1. I          1
1. V          5
1. X          10
1. L          50
1. C          100
1. D          500
1. M          1,000