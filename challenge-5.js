function cyberReindeer(road, time) {
  let arrRoad = road.split('')
  const result = []
  let positionS = road.indexOf('S')
  for (let i = 0; i < time -1; i++) {
    
    if (arrRoad[i - 1] === 'S' && arrRoad[i] === '.') {
      arrRoad[i-1] = '.'
      arrRoad[i] = 'S'
      positionS++
    }

    console.log(arrRoad[positionS])

    if (i === 5) {
      const newRoad = arrRoad.join('').replaceAll('|', '*')
      arrRoad = newRoad.split('')      
    }
  
    result.push(arrRoad.join(''))
  }


  return result
}

const road = 'S..||...||..'
const time = 15
console.log(cyberReindeer(road, time))

/*
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
