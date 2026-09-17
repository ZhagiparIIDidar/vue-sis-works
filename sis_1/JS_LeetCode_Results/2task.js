var createCounter = function (n) {
    return function () {
        return n++;
    };
};

const counter = createCounter(10);
console.log(counter()); // 10  (вернули n=10, теперь n=11)
console.log(counter()); // 11  (вернули n=11, теперь n=12)
console.log(counter()); // 12