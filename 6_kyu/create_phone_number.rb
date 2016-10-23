# createPhoneNumber(Array[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"

# Non regex way
def createPhoneNumber(arr)
  prefix = "(#{arr[0..2].join('')})"
  digits = " #{arr[3..5].join('')}-#{arr[6..9].join('')}"
  number = prefix + digits
end

p createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

# Regex way with match
def createPhoneNumberRegex(arr)
  str = arr.join('')
  matched = str.match(/(\d{3})(\d{3})(\d{4})/)
  number = "(#{matched[1]}) #{matched[2]}-#{matched[3]}"
end

p createPhoneNumberRegex([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

# Regex way with gsub. Sugar baby
def createPhoneNumberRegexGsub(arr)
  arr.join('').gsub(/(\d{3})(\d{3})(\d{4})/,'(\1) \2-\3')
end

p createPhoneNumberRegexGsub([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
