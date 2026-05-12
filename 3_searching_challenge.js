// ============================================
// SEARCHING CHALLENGE (Count 0-regions)
// ============================================
function SearchingChallenge(strArr) {
  const grid = strArr.map(row => row.split(''));
  const rows = grid.length;
  const cols = grid[0].length;
  let holes = 0;

  function dfs(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || grid[r][c] !== '0') return;
    grid[r][c] = '1';
    dfs(r + 1, c); dfs(r - 1, c);
    dfs(r, c + 1); dfs(r, c - 1);
  }

  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      if (grid[r][c] === '0') { holes++; dfs(r, c); }

  return holes;
}

console.log(SearchingChallenge(["01111","01101","00011","11110"])); // 3
console.log(SearchingChallenge(["1011","0010"]));                   // 2
