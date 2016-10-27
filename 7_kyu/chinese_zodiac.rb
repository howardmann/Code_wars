# // Test.assertEquals(chineseZodiac(1965), "Wood Snake")
# // Test.assertEquals(chineseZodiac(1938), "Earth Tiger")
# // Test.assertEquals(chineseZodiac(1998), "Earth Tiger")
# // Test.assertEquals(chineseZodiac(2016), "Fire Monkey")
# // Test.assertEquals(chineseZodiac(1924), "Wood Rat")
# // Test.assertEquals(chineseZodiac(1968), "Earth Monkey")
# // Test.assertEquals(chineseZodiac(2162), "Water Dog")


$animals = ['Rat', 'Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat', 'Monkey', 'Rooster', 'Dog', 'Pig'];

$elements = ['Wood', 'Fire', 'Earth', 'Metal', 'Water'];


def chineseZodiac(year)
  diff = year - 1924
  animal = $animals[diff % 12]
  element = $elements[((diff % 10) * 0.5).floor]
  return "#{element} #{animal}"
end

p chineseZodiac(1924)
p chineseZodiac(1925)
p chineseZodiac(2162)
p chineseZodiac(1968)
