function topKFrequent(nums: number[], k: number): number[] {
    // Map<number, frequency>
    const frequencies: Map<number, number> = new Map();
    
    for (let n of nums) {
        frequencies.set(n, (frequencies.get(n) || 0) + 1);
    }

    // Map<frequency, numbers>
    const numbersGroupedByFrequency: Map<number, number[]> = new Map();
    let maxFrequency = 0;
    
    frequencies.forEach((frequency, number) => {
        if (numbersGroupedByFrequency.has(frequency)) {
            numbersGroupedByFrequency.get(frequency)!.push(number);
        }
        else {
            maxFrequency = Math.max(maxFrequency, frequency);
            numbersGroupedByFrequency.set(frequency, [number]);
        }
    });

    const mostFrequentNumbers: number[] = [];

    for (let i = maxFrequency; i > 0 && mostFrequentNumbers.length < k; i--) {
        if (numbersGroupedByFrequency.has(i)) {
            mostFrequentNumbers.push(...(numbersGroupedByFrequency.get(i)!));
        }
    }
    return mostFrequentNumbers.slice(0, k);
};

console.log(topKFrequent([1, 1, 1, 1, 2, 2, 3], 2));