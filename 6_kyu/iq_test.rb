# iq_test("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
#
# iq_test("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

def iq_test(numbers)
  arr = numbers.split(' ').map{|e| e.to_i}
  evenCount = arr.select {|e| e.even?}.count
  oddCount = arr.select {|e| e.odd?}.count

  arr.each_with_index do |e,i|
    if evenCount > oddCount
      return i + 1 if e.odd?
    else
      return i + 1 if e.even?
    end
  end
end

p iq_test("2 4 7 8 10")
p iq_test("1 2 1 1")
