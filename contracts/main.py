"""
Determine how many unique paths there are from start to finish.
"""

grid = [[0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]]


def adj(coords):
    """
    The coordinates of the possible next steps from [coords], if they are in-bounds of the grid.
    """
    i, j = coords
    ad = [(i, j + 1), (i + 1, j)]
    for r, c in ad:
        if 0 <= r < len(grid) and 0 <= c < len(grid[0]) and grid[r][c] != 1:
            yield r, c


ptr = (0, 0)
frontier = [ptr]
seen = {ptr: 1}
paths = 0
while len(frontier):
    print(frontier)
    g = frontier.pop(0)
    for v in adj(g):
        if v not in seen:
            frontier.append(v)
            seen[v] = 1
        else:
            seen[v] += 1
        if v == (len(grid) - 1, len(grid[0]) - 1):
            paths += 1
print(seen[(len(grid) - 1, len(grid[0]) - 1)])




'''
while (frontier not empty) {
    Node g = frontier.pop(); // g is a gray node
    for (v successor of g) {
        if (v.color == white) {
            frontier.push(v);
            v.color = gray;
        }
    }
    g.color = black;
}



Algorithmic Stock Trader IV
You are attempting to solve a Coding Contract. You have 10 tries remaining, after which the contract will self-destruct.


You are given the following array with two elements:

[4, [127,3,129,41,99,196,62,76,17,10,175,155,162,42,172,46,200,195,145,23]]

The first element is an integer k. The second element is an array of stock prices (which are numbers) where the i-th element represents the stock price on day i.

Determine the maximum possible profit you can earn using at most k transactions. A transaction is defined as buying and then selling one share of the stock. Note that you cannot engage in multiple transactions at once. In other words, you must sell the stock before you can buy it again.

If no profit can be made, then the answer should be 0.

one of the servers csec runnable







foodnstff > zer0 > neo-net > crush-fitness > zb-institute

Unique Paths in a Grid II
You are attempting to solve a Coding Contract. You have 10 tries remaining, after which the contract will self-destruct.


You are located in the top-left corner of the following grid:

0,0,0,0,0,
1,0,0,0,0,
0,0,1,0,0,
0,0,1,0,0,
0,0,1,1,0,
0,0,0,0,0,
0,0,0,0,0,

You are trying reach the bottom-right corner of the grid, but you can only move down or right on each step. Furthermore, there are obstacles on the grid that you cannot move onto. These obstacles are denoted by '1', while empty spaces are denoted by 0.

Determine how many unique paths there are from start to finish.

NOTE: The data returned for this contract is an 2D array of numbers representing the grid.



automate shoplifting 15k 2seconds, robbing 400k 1 min

larceny 800k 90 hack 120 dex, agil, 90 sec 

'''
