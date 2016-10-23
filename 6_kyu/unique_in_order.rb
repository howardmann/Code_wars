# unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
# unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
# unique_in_order([1,2,2,3,3])       == [1,2,3]

def unique_in_order(iterable)
  def chomp(str)
    str.scan(/((\w)\2*)/).map{|el| el[1]}
  end

  if iterable.is_a?(String)
    chomp(iterable)
  elsif iterable.all? {|e| e.is_a?(Integer) }
    chomp(iterable.join('')).map{|e| e.to_i}
  else
    chomp(iterable.join(''))
  end
  # if iterable.is_a?(Array)
  #   if iterable[0].is_a?(Numeric)
  #     iterable = iterable.join('')
  #     return iterable.scan(/((\w)\2*)/).map{|el| el[1].to_i}
  #   else
  #     iterable = iterable.join('')
  #     return iterable.scan(/((\w)\2*)/).map{|el| el[1]}
  #   end
  # end
  #
  # iterable.scan(/((\w)\2*)/).map{|el| el[1]}
end
p unique_in_order('AAAABBBCCDAABBB') #== ['A', 'B', 'C', 'D', 'A', 'B']
# p unique_in_order('ABBCcAD')         #== ['A', 'B', 'C', 'c', 'A', 'D']
p unique_in_order([1,2,2,3,3])       #== [1,2,3]
p unique_in_order(["a","a","b","b",'C'])       #== [1,2,3]
#
# p ["a","a","b","b",'C'].join('')



# (iterable.is_a?(String) ? iterable.chars : iterable).chunk { |x| x }.map(&:first)
