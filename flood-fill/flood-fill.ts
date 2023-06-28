function floodFill(
    image: number[][],
    sr: number,
    sc: number,
    color: number
): number[][] {
    const oldColor = image[sr][sc];
    const newColor = color;

    // if same color then return without changing color
    if (oldColor === newColor) {
        return image;
    }

    const newImage = [...image];

    const rows = image.length;
    const cols = image[0].length;

    function floodFillRecursive(row: number, col: number): void {
        // if out of bounds and same with old color then ignore it
        if (
            row < 0 ||
            row >= rows ||
            col < 0 ||
            col >= cols ||
            newImage[row][col] !== oldColor
        ) {
            return;
        }

        newImage[row][col] = newColor;

        // 4-direction flood fill
        floodFillRecursive(row + 1, col); //Down
        floodFillRecursive(row - 1, col); //Up
        floodFillRecursive(row, col + 1); //Right
        floodFillRecursive(row, col - 1); //Left
    }

    floodFillRecursive(sr, sc);

    return newImage;
}

// answer = [ [ 2, 2, 2 ], [ 2, 2, 0 ], [ 2, 0, 1 ] ]
console.log(
    floodFill(
        [
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ],
        1,
        1,
        2
    )
);

// answer = [[0,0,0],[0,0,0]]
console.log(
    floodFill(
        [
            [0, 0, 0],
            [0, 0, 0],
        ],
        0,
        0,
        0
    )
);
