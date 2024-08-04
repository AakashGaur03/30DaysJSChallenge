// Activity 4: N-Queens
// Task 4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n queens on an n×n chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
// Log the distinct solutions for a few test cases

// N-Queens
// Hard
// Topics
// Companies
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.



// Example 1:


// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]


/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let board = Array.from({ length: n }, () => Array(n).fill("."));

    let res = [];

    let isPossible = function (col, row, board) {
        let dupRow = row;
        let dupCol = col;

        while (col >= 0 && row >= 0) {
            if (board[row][col] == 'Q') return false;
            col--;
            row--;
        }

        row = dupRow;
        col = dupCol;

        while (col >= 0) {
            if (board[row][col] == 'Q') return false;
            col--;
        }

        row = dupRow;
        col = dupCol;

        while (row < n && (row) < n) {
            if (board[row][col] == 'Q') return false;
            col--;
            row++;
        }

        return true;
    }


    let backtrack = function (col, board, res) {
        if (col == n) {
            let newArr = [];
            for (let row = 0; row < n; row++)
                newArr[row] = board[row].join("")
            res.push(newArr)
            return;
        }

        for (let row = 0; row < n; row++) {
            if (isPossible(col, row, board)) {
                board[row][col] = 'Q';
                backtrack(col + 1, board, res);
                board[row][col] = '.';
            }
        }
    }

    backtrack(0, board, res);
    return res;
};


n = 4
// n = 1
console.log(solveNQueens(n))