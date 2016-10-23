# spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
# spinWords( "This is a test") => returns "This is a test"
# spinWords( "This is another test" )=> returns "This is rehtona test"

# First solution
def spinWords(str)
  arr = str.split(' ')
  arr.each do |word|
    if word.length > 4
      word.reverse!
    end
  end
  arr.join(' ')
end

p spinWords('Hey fellow warriors')
p spinWords('This is a test')
p spinWords('This is another test')


# Regex solution
def spinWordsReg(str)
  str.gsub(/\w{5,}/) {|word| word.reverse}
  # Sugar below
  # str.gsub(/\w{5,}/, &:reverse )
end
p spinWordsReg('Hey fellow warriors')
