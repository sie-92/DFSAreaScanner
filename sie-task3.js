const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', (line) => {
    var matrix = [];
    var lines = line.split(";");
    lines.forEach(row => {
        var array = row.split(",").map(Number);
        matrix.push(array);
    });
    console.log(countAreasWithDFS(matrix));

});


function countAreasWithDFS(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const visited = new Array(rows).fill(0).map(() => new Array(cols).fill(false));
    let count = 0;

    function DFS(row, col) {
        if (row >= 0 && row < rows && col >= 0 && col < cols && matrix[row][col] === 1 && !visited[row][col]) {

            visited[row][col] = true;

            DFS(row - 1, col);
            DFS(row + 1, col);
            DFS(row, col - 1);
            DFS(row, col + 1);
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 1 && !visited[i][j]) {
                DFS(i, j);
                count++;
            }
        }
    }

    return count;
}