function findNaughtyStep(original, modified) {
    const originalArr = original.split('')
    const modifiedArr = modified.split('')
    let letterModify = ''
    for (let i = 0; i <= modified.length - 1; i++) {
        if (modifiedArr[i] !== originalArr[i]) {
          if (original.length > modified.length) letterModify = originalArr[i]
          if (original.length < modified.length) letterModify = modifiedArr[i]
            break
        }
    }

    return letterModify
}

const original = 'abcd'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified))