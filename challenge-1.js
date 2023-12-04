// function findFirstRepeated(gifts) {
//     let duplicateNumber = -1 
//     const duplicateGifts = [...gifts].reverse()
//     for (let i = 0; i <= gifts.length - 1; i++) {
//         for (let x = 1; x <= gifts.length -1; x++) {
//             if (duplicateGifts[i] === duplicateGifts[x+i]) {
//                 duplicateNumber = duplicateGifts[i]
//             }
//         }
//     }
//     return duplicateNumber
// }

// console.log(findFirstRepeated([5, 1, 5, 1]))

function findFirstRepeated(gifts) {
    const seen = {}
    for (const id of gifts) {
        if (seen[id]) return id
        seen[id] = 1
    }
    return -1
}

console.log(findFirstRepeated([2, 1, 3, 5, 3, 2]))