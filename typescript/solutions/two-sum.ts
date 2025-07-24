function twoSum(numbers: number[], target: number): number[] {
    let leftIndex = 0;
    let rightIndex = numbers.length - 1;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[leftIndex] + numbers[rightIndex] > target) {
            rightIndex--;
        }
        else if (numbers[leftIndex] + numbers[rightIndex] < target) {
            leftIndex++;
        }
        else {
            return [leftIndex + 1, rightIndex + 1];
        }
    }

    return [];
}
