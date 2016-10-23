def delete_nth(arr,n)
  arr.each do |el|
    if arr.count(el) > n
      index = arr.rindex(el)
      arr.delete_at(index)
    end
  end
  p arr
end

delete_nth([1,2,3,1,2,1,2,3],2)
