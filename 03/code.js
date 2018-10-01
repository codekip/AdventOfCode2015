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

function count_of_houses(directions) {
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

    return s.size
}