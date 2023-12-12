function maxDistance(movements) {
    let distance1 = 0
    let distance2 = 0
    let distance3 = 0
    for (const direction of movements) {
        if (direction === '>') {
            distance1++
        } else if (direction === '<') {
            distance2++
        } else {
            distance3++
        }
    }
    if (distance1 > distance2 || distance1 === distance2) { 
        return (distance1 + distance3) - distance2
    } 
    else if (distance2 > distance1) {
        return (distance2 + distance3) - distance1
    }
  }