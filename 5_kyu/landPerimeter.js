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
  let count = 0
  console.log(arrXY);
  let perimeter = 0
  arrXY.forEach((row,x) => {
    row.forEach((col,y) => {
      count++
      // Check each square for 'X' and add 4
      if (arrXY[x][y] === 'X') {
        perimeter += 4
        // Deduct 2 if right square is an 'X'
        if (row[y + 1] === 'X') { perimeter -= 2 }
        // Deduct 2 if bottom square is an 'X'
        // if (arrXY[x + 1][y] === 'X') { perimeter -= 2 }
      }
    })
  })
  console.log(count);
  return perimeter
}

// landPerimeter(arr) // 20

let arr60 = [
  "OXOOOX", 
  "OXOXOO", 
  "XXOOOX", 
  "OXXXOO", 
  "OOXOOX", 
  "OXOOOO", 
  "OOXOOX", 
  "OOXOOO", 
  "OXOOOO", 
  "OXOOXX"
]
console.log(landPerimeter(arr60));

// Test.assertEquals(landPerimeter(["OXOOOX", "OXOXOO", "XXOOOX", "OXXXOO", "OOXOOX", "OXOOOO", "OOXOOX", "OOXOOO", "OXOOOO", "OXOOXX"]), "Total land perimeter: 60");
// Test.assertEquals(landPerimeter(["OXOOO", "OOXXX", "OXXOO", "XOOOO", "XOOOO", "XXXOO", "XOXOO", "OOOXO", "OXOOX", "XOOOO", "OOOXO"]), "Total land perimeter: 52");
// Test.assertEquals(landPerimeter(["XXXXXOOO", "OOXOOOOO", "OOOOOOXO", "XXXOOOXO", "OXOXXOOX"]), "Total land perimeter: 40");
// Test.assertEquals(landPerimeter(["XOOOXOO", "OXOOOOO", "XOXOXOO", "OXOXXOO", "OOOOOXX", "OOOXOXX", "XXXXOXO"]), "Total land perimeter: 54");
// Test.assertEquals(landPerimeter(["OOOOXO", "XOXOOX", "XXOXOX", "XOXOOO", "OOOOOO", "OOOXOO", "OOXXOO"]), "Total land perimeter: 40");
