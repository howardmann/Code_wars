def title_case(title, *minor_words)
  array = title.downcase.split(' ')
  minor = minor_words.join(' ').downcase

  array.each_index do |i|
    unless minor.include?(array[i])
      array[i].capitalize!
    end
  end
  array[0].capitalize!
  # array.map! do |el|
  #   unless minor.include?(el)
  #     el.capitalize
  #   else
  #     el.downcase
  #   end
  # end
  # array[0].capitalize!
  p array.join(' ')

end

title_case('a clash of KINGS', 'a an the of')
title_case('The WIND IN THE WILLOWS', 'The In')
title_case('the quick brown fox')
