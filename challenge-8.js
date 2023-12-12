function organizeGifts(gifts) {
    const numbers = gifts.match(/\d+/g)
    const chars = gifts.match(/[a-zA-Z]+/g);
    let result = []

    numbers.forEach((number, index) => {
        const newNumber = Number(number)

        const maxGift = (Math.trunc(newNumber / 10) * 10)
        const minGift = newNumber - maxGift
        const totalBox = maxGift / 10

        const packOfGifts = (Math.trunc(totalBox / 5) * 5)
        const extraGifts = totalBox - packOfGifts
        const pallets = packOfGifts / 5

        for (let i = 0; i < pallets; i++) {
            result.push(`[${chars[index]}]`);
        }
        for (let i = 0; i < extraGifts; i++) {
            result.push(`{${chars[index]}}`);
        }
        if (minGift > 0) {
            const gifBag = []
            for (let i = 0; i < minGift; i++) {
                gifBag.push(`${chars[index]}`);
            }
            result.push(`(${gifBag.join('')})`)
        }
    })

    
    return result.join('')
  }

const result1 = organizeGifts(`76a11b`)
console.log(result1)