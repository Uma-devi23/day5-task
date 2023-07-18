function spotlightMap(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
  
    const result = [];
  
    for (let i = 0; i < rows; i++) {
      result.push([]);
      for (let j = 0; j < cols; j++) {
        let sum = 0;
  
        for (let r = Math.max(0, i - 1); r <= Math.min(rows - 1, i + 1); r++) {
          for (let c = Math.max(0, j - 1); c <= Math.min(cols - 1, j + 1); c++) {
            sum += grid[r][c];
          }
        }
  
        result[i].push(sum);
      }
    }
  
    return result;
  }
  
  const grid1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  
  console.log(spotlightMap(grid1));

  const grid2 = [
    [2, 6, 1, 3, 7],
    [8, 5, 9, 4, 0],
  ];
  
  console.log(spotlightMap(grid2));

  const grid3 = [[3]];
  
  console.log(spotlightMap(grid3)); 
  