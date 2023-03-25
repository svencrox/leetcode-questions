function twoSum(nums, target) {
    var obj = {};
    for (var i = 0; i < nums.length; i++) {
        var next = target - nums[i];
        if (next in obj) {
            console.log(obj[next]);
            return [obj[next], i];
        }
        obj[nums[i]] = i;
    }
    return [];
}
function test1() {
    var test = [2, 7, 11, 15];
    var testTarget = 9;
    console.log(twoSum(test, testTarget));
}
function test2() {
    var test = [3, 2, 4];
    var testTarget = 6;
    console.log(twoSum(test, testTarget));
}
console.log(test1());
console.log(test2());
