
const mergeTwoLists = function(l1, l2) {
    let merged = []
    let i = 0 
    let j = 0
    while(i < l1.length && j < l2.length) {
        if (l1[i] < l2[j]) {
            merged.push(l1[i])
            i++
        } else {
            merged.push(l2[j])
            j++
        }
    }

    while (i < l1.length) {
      // add remaining of l2 array to merged array
        merged.push(l1[i])
        i++
    }

    while (j < l2.length) {
      // add remaining of l1 array to merged array
        merged.push(l2[j])
        j++
    }

    return merged
}

console.log(mergeTwoLists([1,10,50], [2,14,99,100]))