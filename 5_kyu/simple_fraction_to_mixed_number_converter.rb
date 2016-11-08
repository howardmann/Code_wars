# Test.assert_equals(mixed_fraction('42/9'), '4 2/3')
# Test.assert_equals(mixed_fraction('6/3'), '2')
# Test.assert_equals(mixed_fraction('4/6'), '2/3')
# Test.assert_equals(mixed_fraction('0/18891'), '0')
# Test.assert_equals(mixed_fraction('-10/7'), '-1 3/7')
# Test.assert_equals(mixed_fraction('-22/-7'), '3 1/7')
# Test.expect_error("Must raise ZeroDivisionError") do mixed_fraction("0/0") end
# Test.expect_error("Must raise ZeroDivisionError") do mixed_fraction("3/0") end

def mixed_fraction(s)
  arr = s.split('/').map{|s| s.to_f}

  result = arr[0] / arr[1]
  remainder = Rational(result.abs % 1).rationalize(0.000000000001)
  if arr[0] > 0 || (arr[0] * arr[1]) > 0
    whole = (result - (result.abs % 1)).to_i
  else
    whole = -(result.abs - (result.abs % 1)).to_i
  end

  if remainder == 0
    whole.to_s
  elsif arr[0].abs < arr[1]
    Rational(result).rationalize(0.000000000001).to_s
  elsif whole == 0
    remainder.to_s
  else
    whole.to_s + ' ' + remainder.to_s
  end
end

# p mixed_fraction('42/9')
# p mixed_fraction('6/3')
# p mixed_fraction('4/6')
# p mixed_fraction('0/18891')
# p mixed_fraction('-10/7')
p mixed_fraction('-22/-7')
# p mixed_fraction('-4/6')
# p mixed_fraction('4/6')
# p mixed_fraction('-706643/-40125') # 17 24518/40125
# p mixed_fraction('721527/349096') # 2 23335/349096
p mixed_fraction('-990132/525121') # -1 465011/525121
