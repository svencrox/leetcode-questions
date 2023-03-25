function twoSum(nums: number[], target: number): number[] {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const next = target - nums[i];
    if (next in obj) {
      console.log(obj[next]);
      return [obj[next], i];
    }
    obj[nums[i]] = i;
  }
  return [];
}

function test1() {
  let test = [2, 7, 11, 15];
  let testTarget = 9;
  console.log(twoSum(test, testTarget));
}

function test2() {
  let test = [3, 2, 4];
  let testTarget = 6;
  console.log(twoSum(test, testTarget));
}

console.log(test1());
console.log(test2());
