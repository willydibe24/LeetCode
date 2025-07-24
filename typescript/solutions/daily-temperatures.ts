function dailyTemperatures(temperatures: number[]): number[] {
    const answer: number[] = new Array(temperatures.length).fill(0);
    const indexStack: number[] = [];

    for (let i = temperatures.length - 1; i >= 0; --i) {
        while (indexStack.length && temperatures[indexStack[indexStack.length - 1]] <= temperatures[i]) {
            indexStack.pop();
        }

        if (indexStack.length) {
            answer[i] = indexStack[indexStack.length - 1] - i;
        }

        indexStack.push(i);
    }
    return answer;
}
