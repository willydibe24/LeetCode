function sortArray(nums: number[]): number[] {
    const n: number = nums.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapSort(nums, n, i);
    }

    for (let i = n - 1; i > 0; i--) {
        [nums[0], nums[i]] = [nums[i], nums[0]];
        heapSort(nums, i, 0);
    }
    return nums;
};


function heapSort(nums: number[], n: number, i: number) {
    let max: number = i;
    let l: number = 2 * i + 1;
    let r: number = 2 * i + 2;

    if (l < n && nums[l] > nums[max]) {
        max = l;
    }

    if (r < n && nums[r] > nums[max]) {
        max = r;
    }

    if (max !== i) {
        [nums[i], nums[max]] = [nums[max], nums[i]];
        heapSort(nums, n, max);
    }
    return nums;
}