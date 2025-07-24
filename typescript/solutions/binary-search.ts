function search(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;

    while (right >= left) {
        let middle: number = left + Math.floor((right - left) / 2);
        if (nums[middle] === target) return middle;

        if (nums[middle] > target) {
            right = middle - 1;
        }
        else {
            left = middle + 1;
        }
    }
    return -1;
}
