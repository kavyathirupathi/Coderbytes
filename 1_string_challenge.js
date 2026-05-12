// ============================================
// STRING CHALLENGE
// ============================================
function StringChallenge(str) {
  let maxUnique = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        const unique = new Set(str.slice(i + 1, j)).size;
        maxUnique = Math.max(maxUnique, unique);
      }
    }
  }
  return maxUnique;
}

console.log(StringChallenge("mmmerme"));    // 3
console.log(StringChallenge("abccdefghi")); // 0
console.log(StringChallenge("ahyjakh"));    // 4
