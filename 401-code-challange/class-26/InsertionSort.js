'use strict';

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i];
        let j;
        for (j = i - 1; j >= 0 && arr[j] > current; j--) {  
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = current;
    }
    return arr;
}

console.log(insertionSort([5, 3, 6, 1, 4])); // [1, 3, 4, 5, 6]
console.log(insertionSort([11, 15, 12, 10, -2])); // [-2, 10, 11, 12, 15]

module.exports = insertionSort ;