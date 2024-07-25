function isMatch(s: string, p: string): boolean {
    return s.match(`^${p}$`) !== null;
};

// function isMatch(s: string, p: string): boolean {
//     return recursiveIsMatch(s, p);
// }

// function recursiveIsMatch(s: string, p: string, sIndex: number = 0, pIndex: number = 0): boolean {
//     if (pIndex === p.length) {
//         return sIndex === s.length;
//     }
//     const isFirstMatch = sIndex < s.length && (p[pIndex] === s[sIndex] || p[pIndex] === '.');

//     if (pIndex + 1 < p.length && p[pIndex + 1] === '*') {
//         return recursiveIsMatch(s, p, sIndex, pIndex + 2) || (isFirstMatch && recursiveIsMatch(s, p, sIndex + 1, pIndex));
//     } 
//     return isFirstMatch && recursiveIsMatch(s, p, sIndex + 1, pIndex + 1);
// }
