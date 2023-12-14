function cyberReindeer(road, time) {
  let arrRoad = road.split('')
  const result = [road]
  let positionS = road.indexOf('S')
  let lastCharter= '.'
  
  for (let i = 0; i < time - 1; i++) {
    if (i === 4) {
      const newRoad = arrRoad.join('').replaceAll('|', '*')
      arrRoad = newRoad.split('')      
    }
    
    if (arrRoad[positionS + 1] !== '|') {
      if (i === 0) arrRoad[positionS] = '.'
      else arrRoad[positionS] = lastCharter
      lastCharter = arrRoad[positionS + 1]
      arrRoad[positionS + 1] = 'S'
      positionS++
    }

    result.push(arrRoad.join(''))
  }
  

  return result
}

const road = 'S..||...||..'
const time = 10
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
