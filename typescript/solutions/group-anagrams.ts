function groupAnagrams(strs: string[]): string[][] {
    // <Frequency, string>
    const frequencies: Map<string, string[]> = new Map();
    for (let str of strs) {
        let tmpFrequency = new Array(26).fill(0);
        for (let i = 0; i < str.length; i++) {
            tmpFrequency[str.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        }
        if (frequencies.has(tmpFrequency.toString())) {
            frequencies.get(tmpFrequency.toString())!.push(str);
        } 
        else {
            frequencies.set(tmpFrequency.toString(), [str]);
        }
    }
    return Array.from(frequencies.values());
};
