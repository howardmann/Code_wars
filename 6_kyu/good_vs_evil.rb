# Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain 'worth' when battling against others. On the side of good we have the following races, with their associated worth:
#
# Hobbits - 1
# Men - 2
# Elves - 3
# Dwarves - 3
# Eagles - 4
# Wizards - 10
# On the side of evil we have:
#
# Orcs - 1
# Men - 2
# Wargs - 2
# Goblins - 2
# Uruk Hai - 3
# Trolls - 5
# Wizards - 10
# Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.
#
# Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

# Test.expect( goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') == 'Battle Result: No victor on this battle field', 'Should be a tie' )
# Test.expect( goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') == 'Battle Result: Good triumphs over Evil', 'Good should triumph' )
# Test.expect( goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') == 'Battle Result: Good triumphs over Evil', 'Good should triumph' )

def goodVsEvil(good, evil)
  goodStats = {
    :hobbits => 1,
    :men => 3,
    :elves => 3,
    :dwarves => 3,
    :eagles => 4,
    :wizards => 10
  }
  evilStats = {
    :orcs => 1,
    :men => 2,
    :wargs => 2,
    :goblins => 2,
    :urukHai => 3,
    :trolls => 5,
    :wizards => 10
  }

  def getScore(side, stats)
    getArr = side.split(' ').each_with_index.map{|e,i| e.to_i * stats.values[i]}
    getArr.reduce{|sum,el| sum+= el}
  end

  goodScore = [getScore(good, goodStats), 2147483647].min
  evilScore = [getScore(evil, evilStats), 2147483647].min

  if goodScore == evilScore
    return  "Battle Result: No victor on this battle field"
  elsif goodScore > evilScore
    return "Battle Result: Good triumphs over Evil"
  elsif evilScore > goodScore
    return "Battle Result: Evil eradicates all trace of Good"
  end
end

p goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0')
p goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')
p goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0')
