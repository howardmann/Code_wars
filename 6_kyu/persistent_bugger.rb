# // persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
# //                       // and 4 has only one digit
# //
# // persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
# //                        // 1*2*6 = 12, and finally 1*2 = 2
# //
# // persistence(4) === 0 // because 4 is already a one-digit number

def persistence(num)
  count = 0
  while num.to_s.length > 1 do
    count+=1
    num = num.to_s.split('').map{|el| el.to_i}.reduce{|a,b| a*b}
  end
  return count
end

p persistence(39)
