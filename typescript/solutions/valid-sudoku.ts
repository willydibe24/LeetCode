function isValidSudoku(board: string[][]): boolean {
    const rowValues: Set<string> = new Set();
    const colValues: Set<string> = new Set();
    const squareValues: Set<string> = new Set();

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            const value: string = board[row][col];
            
            if (value === ".") continue;

            const square: number = Math.floor(row / 3) * 3 + Math.floor(col / 3);

            const rKey = `r${row}v${value}`;
            const cKey = `c${col}v${value}`;
            const sKey = `s${square}v${value}`;

            if (rowValues.has(rKey) || colValues.has(cKey) || squareValues.has(sKey)) {
                return false;
            }

            rowValues.add(rKey);
            colValues.add(cKey);
            squareValues.add(sKey);
        }
    }
    return true;
}
