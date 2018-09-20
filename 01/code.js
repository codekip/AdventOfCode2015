/*function navigate(directions) {
    return directions.split("")
        .map(convert)
        .reduce((a, b) => a + b, 0)
}
*/
const navigate = directions => directions.split("").map(convert).reduce((a, b) => a + b, 0)



function convert(char) {
    return char === ')' ? -1 : 1
}

/*
function enters_basement(directions) {
    let floor = 0
    let position = 0
    let rv = 0
    directions.split("")
        .map(convert)
        .forEach(direction => {
            position++
            floor += direction
            if (rv === 0 && floor === -1) {
                rv = position
            }
        })
    return rv
}
*/




const reduce_to_first_basement = (accumulator, direction, position) => {
    const floor = (accumulator.floor || 0) + 1
    const basement = (floor === -1) ? (position + 1) : 0

    console.log(accumulator)

    return {
        "floor": floor,
        "first_basement": (accumulator.first_basement || basement)
    }
}

const enters_basement = directions => directions.split("")
    .map(convert)
    .reduce(reduce_to_first_basement)
    .first_basement