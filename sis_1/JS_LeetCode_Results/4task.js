var expect = function (val) {
    return {
        toBe: function (val2) {
            if (val === val2) {
                return true;
            }
            throw new Error("Not Equal");
        },
        notToBe: function (val2) {
            if (val !== val2) {
                return true;
            }
            throw new Error("Equal");
        }
    };
};

expect(5).toBe(5);       // val=5, val2=5 → 5===5 → true
expect(5).toBe(null);    // val=5, val2=null → 5===null? нет → throw "Not Equal"
expect(5).notToBe(null); // val=5, val2=null → 5!==null? да → true