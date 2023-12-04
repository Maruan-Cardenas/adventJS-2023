function manufacture(gifts, materials) {
    const newGifts = [...gifts]
    const listOfMaterials = new Set(materials.split(''))

    for (const gift of gifts) {
        const giftArr = gift.split('')
        for (const letter of giftArr) {
            if (!listOfMaterials.has(letter)) {
                const index = newGifts.indexOf()
                newGifts.splice(index, 1)
                break
            }
        }
    }
    return newGifts
}

const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

console.log(manufacture(gifts, materials))