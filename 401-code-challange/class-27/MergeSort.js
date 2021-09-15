function merge(left, right) {
    let arr = []
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift())
        } else {
            arr.push(right.shift())
        }
    }
    return [...arr, ...left, ...right]
}

function mergeSort(array) {
    const half = array.length / 2
    if (array.length < 2) {
        return array
    }
    const left = array.splice(0, half)
    return merge(mergeSort(left), mergeSort(array))
}


array = [4, 8, 7, 2, 11, 1, 3];//[ 1, 2,  3, 4 , 7, 8, 11]
console.log(mergeSort(array));

module.exports=mergeSort