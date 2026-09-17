Array.prototype.last = function () {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};

const nums = [null, {}, 3];
console.log(nums.last()); // 3

const empty = [];
console.log(empty.last()); // -1