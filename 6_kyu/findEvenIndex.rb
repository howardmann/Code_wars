# Test.assert_equals(find_even_index([1,2,3,4,3,2,1]),3)
# Test.assert_equals(find_even_index([1,100,50,-51,1,1]),1,)
# Test.assert_equals(find_even_index([1,2,3,4,5,6]),-1)
# Test.assert_equals(find_even_index([20,10,30,10,10,15,35]),3)
# Test.assert_equals(find_even_index([20,10,-80,10,10,15,35]),0)
# Test.assert_equals(find_even_index([10,-80,10,10,15,35,20]),6)
# Test.assert_equals(find_even_index(Array(1..100)),-1)
# Test.assert_equals(find_even_index([0,0,0,0,0]),0,"Should pick the first index if more cases are valid")
# Test.assert_equals(find_even_index([-1,-2,-3,-4,-3,-2,-1]),3)
# Test.assert_equals(find_even_index(Array(-100..-1)),-1)

def findEvenIndex(arr)
  arr.each_index do |i|
    j = i
    unless j == 0
      leftSum = arr[0..(j-1)].reduce{|sum,el| sum += el}
    else
      leftSum = 0
    end

    unless j == (arr.length - 1)
      rightSum = arr[j+1..arr.length].reduce{|sum,el| sum += el}
    else
      rightSum = 0
    end

    if leftSum == rightSum
      return j
    end
  end
  return -1
end
arr = [10,-80,10,10,15,35]
p arr.reduce{|sum,el| sum+= el}
p findEvenIndex([10,-80,10,10,15,35,20])
