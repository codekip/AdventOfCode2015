const compass = {
    '^': {
        x: 0,
        y: 1
    },
    '>': {
        x: 1,
        y: 0
    },
    'v': {
        x: 0,
        y: -1
    },
    '<': {
        x: -1,
        y: 0
    }
}

function houses_visited(directions) {
    let x = 0
    let y = 0
    let s = new Set()

    s.add('0,0') // we start at 0,0

    directions.split("")
        .map(direction => compass[direction])
        .forEach(dir => {
            x += dir.x
            y += dir.y
            s.add(x + ',' + y)
        })

    return s
}
// part 2 //
function houses_visited_with_robot(directions) {

    const filters = [0, 1].map(modulus => (item, ix) => (ix % 2 === modulus))
    const all_visited = new Set()

    filters.forEach(function (filter) {
        const instructions = directions.split('')
            .filter(filter)
            .join('')
        houses_visited(instructions)
            .forEach(house => all_visited.add(house))

    })
    return all_visited
}