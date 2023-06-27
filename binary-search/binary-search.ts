function search(nums: number[], target: number): number {
    if (nums.indexOf(target) !== null) {
        return nums.indexOf(target);
    } else {
        return -1;
    }
}

// output = 4; 9 exists in nums and its index is 4
console.log(search([-1, 0, 3, 5, 9, 12], 9));
// output = -1; 2 does not exist in nums so return -1
console.log(search([-1, 0, 3, 5, 9, 12], 2));
// output = 0; 5 does not exist in nums so return 0
console.log(search([5], 5));
