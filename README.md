This program counts the number of connected "areas" of 1s in a binary matrix using Depth-First Search (DFS).
Input Format:

    It reads a single line from the console.

    Expects a matrix in the format like:

1,0,0;0,1,1;0,1,0

This translates to:

    [
      [1, 0, 0],
      [0, 1, 1],
      [0, 1, 0]
    ]

✅ How It Works:

    The input string is split into a 2D array (matrix).

    DFS is used to traverse each group of connected 1s (4-directionally: up, down, left, right).

    Each time it finds an unvisited 1, it counts that as a new area and explores all connected 1s recursively.

✅ Output:

    The total number of distinct connected regions of 1s is printed.
