# 💻 Coderbyte Challenges — Solutions

This repository contains my solutions to coding challenges completed on Coderbyte as part of the Busibud interview process.

## 🛠️ Built With
- JavaScript
- HTML5
- CSS3

---

## 📝 Challenges Solved

### 1. String Challenge
**Problem:** Find the largest number of unique characters between a pair of matching letters in a string.

**Approach:**
- Looped through string to find matching character pairs
- Extracted substring between matching pairs
- Used JavaScript `Set` to find unique characters
- Tracked and returned the maximum count

---

### 2. Front-end Toggle Button Challenge
**Problem:** Toggle a button between ON and OFF state on click without replacing the DOM element.

**Approach:**
- Used `addEventListener` on the button element
- On each click checked `innerHTML` value
- If ON → changed to OFF, if OFF → changed to ON
- Only replaced text content, not the DOM element

---

### 3. Searching Challenge (Matrix/DFS)
**Problem:** Count contiguous regions of 0s in a 2D matrix of 0s and 1s.

**Approach:**
- Converted input strings into a 2D grid
- Used Depth First Search (DFS) on each unvisited 0
- Marked all connected 0s as visited in 4 directions (up, down, left, right)
- Each DFS call counted as one region

---

### 4. Array Challenge (Binary Tree Validation)
**Problem:** Check if given integer pairs form a valid binary tree.

**Approach:**
- Parsed pairs to build parent-child relationship map
- Validated three conditions:
  - No node has more than 2 children
  - Every node has exactly one parent
  - There is exactly one root (node with no parent)
- Returned `true` if valid, `false` otherwise

---

## 💡 Key Concepts Used
- JavaScript Set for unique values
- DOM manipulation (getElementById, innerHTML, addEventListener)
- Depth First Search (DFS) for matrix traversal
- Tree data structure validation

## 👩‍💻 Developer
Kavya T — B.Tech IT, KGISL Institute of Technology (2026)

## 📬 Contact
- GitHub: [@kavyathirupathi](https://github.com/kavyathirupathi)
