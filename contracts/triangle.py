"""
Minimum Path Sum in a Triangle


Given a triangle, find the minimum path sum from top to bottom. In each step of the path, you may only move to
adjacent numbers in the row below. The triangle is represented as a 2D array of numbers:

[
      [5],
     [6,1],
    [6,7,9],
   [5,9,7,8],
  [7,3,4,8,1]
]

Example: If you are given the following triangle:

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]

The minimum path sum is 11 (2 -> 3 -> 5 -> 1).
"""

tri = [
      [5],
     [6,1],
    [6,7,9],
   [5,9,7,8],
  [7,3,4,8,1]
]

print(sum([5, 6, 6, 5, 3]))
print(sum([5, 6, 7, 7, 4]))

print(sum([5, 1, 7, 7, 4]))
print(sum([5, 1, 9, 8, 1]))