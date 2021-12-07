// 1.Same Frequency
const sameFreq = (arr1, arr2) => {
    let freq1 = {} , freq2 = {};
    for(let val of arr1){
        freq1[val] = (freq1[val] || 0) + 1;
    }
    for(let val of arr2) {
        freq2[val] = (freq2[val] || 0) + 1;
    }
    for(let key in freq1){
        if(!(key ** 2 in freq2)) return false;
    }
    return true;
}

// 2.Anagram
const Anagram = (arr1,arr2) => {
    let freq1 = {} , freq2 = {};
    if(arr1.length !== arr2.length) return false;

    for(let val of arr1) {
        freq1[val] = (freq1[val] || 0) + 1;
    }

    for(let val of arr2) {
        freq2[val] = (freq2[val] || 0) + 1;
    }
    
    for(let key in freq1){
        if(!(key in freq2)) return false;
    }
    return true;
}