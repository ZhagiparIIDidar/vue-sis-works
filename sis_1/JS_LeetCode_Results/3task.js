var filter = function (arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            result.push(arr[i]);
        }
    }
    return result;
};

arr = [-2, -1, 0, 1, 2]
fn = function plusOne(n) {
    return n + 1;
}

// i=0: arr[0]=-2, fn(-2,0) = -1  → truthy → добавляем -2
// i=1: arr[1]=-1, fn(-1,1) = 0   → falsy  → пропускаем
// i=2: arr[2]=0,  fn(0,2)  = 1   → truthy → добавляем 0
// i=3: arr[3]=1,  fn(1,3)  = 2   → truthy → добавляем 1
// i=4: arr[4]=2,  fn(2,4)  = 3   → truthy → добавляем 2

// Результат: [-2, 0, 1, 2]