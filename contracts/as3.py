"""
Algorithmic Stock Trader III

You are given the following array of stock prices (which are numbers) where the i-th element represents the stock
price on day i:

164,17,92,9,192,99

Determine the maximum possible profit you can earn using at most two transactions. A transaction is defined as buying
and then selling one share of the stock.
You must sell the stock before you buy it again.

If no profit can be made, then the answer should be 0
"""
# print(192-9)
# print(92-17)
# print(192-9+92-17)

# days = [164,17,92,9,192,99]
# maxprof = 0
# for i in range(len(days)):
#     for j in range(i, len(days)-i):
#         for k in range(j, len(days)-j):
#             for l in range(k, len(days)-k):
#                 prof = (days[j] - days[i]) + (days[l] - days[k])
#                 if prof > maxprof:
#                     maxprof = prof
#                     print(j, l);
#                     print('found: ', days[i], ', ', days[j], ', ', days[k], ', ', days[l])
# print(maxprof)


"""
Subarray with Maximum Sum
Given the following integer array, find the contiguous subarray (containing at least one number) which has the 
largest sum and return that sum. 'Sum' refers to the sum of all the numbers in the subarray.
"""

big = 0
arr = [8, -1, 1, 1, -8, -2, 2, 4, -8, 7, 5, -3, -2, 4, -6, 8]
for start in range(len(arr)):
    for end in range(start + 1, len(arr)):
        sub = sum(arr[start:end + 1])
        if sub > big:
            big = sub
            print('found: ', start, end, big)
