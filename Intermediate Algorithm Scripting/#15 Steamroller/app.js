function steamrollArray(arr) {
    const flat = ar => {
        if (ar.length === 0) {
            return [];
        }
        let accum = [];
        for (let i = 0; i < ar.length; i++) {
            if (!Array.isArray(ar[i])) {
                accum = accum.concat(ar[i]);
            } else accum = accum.concat(flat(ar[i]))
        }
        return accum;
    };
    return flat(arr);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
document.write(steamrollArray([1, [2], [3, [[4]]]]));