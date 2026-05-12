// ============================================
// ARRAY CHALLENGE (Valid Binary Tree)
// ============================================
function ArrayChallenge(strArr) {
  const pairs = strArr.map(s => s.match(/\d+/g).map(Number));
  const childCount = {}, parentCount = {}, allNodes = new Set();

  for (const [child, parent] of pairs) {
    allNodes.add(child);
    allNodes.add(parent);
    childCount[parent] = (childCount[parent] || 0) + 1;
    if (childCount[parent] > 2) return "false";
    parentCount[child] = (parentCount[child] || 0) + 1;
    if (parentCount[child] > 1) return "false";
  }

  let roots = 0;
  for (const node of allNodes)
    if (!parentCount[node]) roots++;

  return roots === 1 ? "true" : "false";
}

console.log(ArrayChallenge(["(1,2)","(2,4)","(5,7)","(7,2)","(9,5)"])); // true
console.log(ArrayChallenge(["(1,2)","(3,2)","(2,12)","(5,2)"]));        // false
