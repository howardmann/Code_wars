const arr = [
  'X0000',
  'X000X',
  'X00XX',
  'X000X',
  '00000'
]

// Add 4 for each X
// Deduct 2 for any right or bottom adjacent X's
const landPerimeter = (arr) => {
  // Split into array of arrays
  let arrXY = arr.map(el => el.split(''))

  let perimeter = 0
  arrXY.forEach((arrX,x) => {
    arrX.forEach((cell,y) => {
      // Check each square for 'X' and add 4
      if (cell === 'X') {
        perimeter += 4
        // Deduct 2 if available right square is an 'X'
        if ([y+1] < arrX.length && arrX[y + 1] === 'X') { perimeter -= 2 }
        // Deduct 2 if available bottom square is an 'X'
        if ([x+1] < arrXY.length && arrXY[x+1][y] === 'X') {perimeter -= 2}        
      }
    })
  })
  return perimeter
}

landPerimeter(arr) // 20

