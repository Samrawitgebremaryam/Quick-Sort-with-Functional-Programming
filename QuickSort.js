var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function quicksort(xs) {
    if (xs.length == 0) {
        return [];
    }
    var pivot = xs[0], tail = xs.slice(1);
    // we can use a lambda fucntion to find if x is less than or  greater than pivot.
    var smaller = filter(tail, function (x) { return x <= pivot; });
    var larger = filter(tail, function (x) { return x > pivot; });
    return __spreadArray(__spreadArray(__spreadArray([], quicksort(smaller), true), [pivot], false), quicksort(larger), true);
}
function filter(xs, func) {
    if (xs.length == 0) {
        return [];
    }
    var head = xs[0], tail = xs.slice(1);
    return func(head)
        ? __spreadArray([head], filter(tail, func), true) : filter(tail, func);
}
var nums = [10, 2, 5, 3, 1, 6, 7, 4, 2, 3, 4, 8, 9];
console.log(quicksort(nums));
