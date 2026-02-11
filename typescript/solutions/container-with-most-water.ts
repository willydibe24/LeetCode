function maxArea(height: number[]): number {
    let leftIndex: number = 0;
    let rightIndex: number = height.length - 1;
    let area: number = 0;

    for (let i: number = 0; i < height.length; i++) {

        // If the current height is greater of one of the saved heights
        if (height[i] > Math.min(height[leftIndex], height[rightIndex])) {

            // We have to check that the new leftIndex is less than rightIndex
            if (height[leftIndex] < height[rightIndex] && i < rightIndex) {
                leftIndex = i;
            }
            // Same thing here, but the new rightIndex must be greater than leftIndex
            else if (i > leftIndex) {
                rightIndex = i;
            }
        }

        const currentArea: number = (rightIndex - leftIndex) * Math.min(height[leftIndex], height[rightIndex]);
        area = Math.max(area, currentArea);
    }
    return area;
}

const testCases = [
    { input: [1,2,3,4,5,25,24,3,4], output: 24 },
    { input: [1,3,2,5,25,24,5], output: 24 },
    { input: [8,7,2,1], output: 7 },
    { input: [3,6,1], output: 3 },
];

for (let i = 0; i < testCases.length; i++) {
    const output: number = maxArea(testCases[i].input);
    const success: boolean = output === testCases[i].output;
    console.log(`Testcase ${i + 1}: ${success ? "OK" : "KO"} (output: ${output})`);
}