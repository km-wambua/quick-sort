
function quickSort(array) {
    if(array.length === 1) {
        return array
    }

    const pivot = array[array.length - 1]
    const leftArr = []
    const rightArr = []

    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] < pivot) {
            leftArr.push(array[i])
        } else {
            rightArr.push(array[i])
        }
    }

    if(leftArr.length > 0 && rightArr.length > 0) {
        return [...quickSort(leftArr), pivot, ...quickSort(rightArr)]
    } else if(leftArr.length > 0) {
        return [...quickSort(leftArr), pivot]
    } else if(rightArr.length > 0) {
        return [pivot, ...quickSort(rightArr)]
    }
}

const arr1 = [2, 1, 5, 3 , 8, 0, 2, 1, 5]

console.log(quickSort(arr1))

