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
// part 2 //

function split_house_count(directions) {
    let santa = new Set()
    let robot = new Set()

    santa.add('0,0')
    robot.add('0,0')

    let x = 0
    let y = 0

    let all = directions.split("")

    for (let i = 0; i < all.length; i++) {
        // let x = 0
        // let y = 0

        if (i % 2 === 0) {
            let direction = compass[all[i]]
            x += direction.x
            y += direction.y

            santa.add(x + ',' + y)
        } else {

            let direction = compass[all[i]]
            x += direction.x
            y += direction.y
            robot.add(x + ',' + y)
        }
    }

    console.log(santa)
    console.log(robot)
    let combined = new Set([...santa, ...robot])

    return combined.size

}