Array.prototype.snail = function (rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return [];
    }

    // Создаём пустую матрицу rowsCount x colsCount
    const result = Array.from({length: rowsCount}, () => new Array(colsCount));

    let index = 0;
    for (let col = 0; col < colsCount; col++) {
        if (col % 2 === 0) {
            // чётный столбец (0, 2, 4, ...) — идём сверху вниз
            for (let row = 0; row < rowsCount; row++) {
                result[row][col] = this[index++];
            }
        } else {
            // нечётный столбец (1, 3, 5, ...) — идём снизу вверх
            for (let row = rowsCount - 1; row >= 0; row--) {
                result[row][col] = this[index++];
            }
        }
    }

    return result;
};


let arr = new Array(3).fill(new Array(3).fill(0));

for (let i = 0; i < arr.length; i++) {
    // for (let j = 0; j < arr.length; j++) {
    //     console.log(arr[i][j]);
    // }
    // console.log('come into the loop')
    console.log('-'.repeat(10));
    arr.forEach(j => console.log(j === arr[i]));
}





