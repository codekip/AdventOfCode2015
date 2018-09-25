function area(l, w, h) {
    return (2 * l * w) + (2 * w * h) + (2 * h * l)
}

function smallest_product(l, w, h) {
    let all = [l, w, h]
    let largest = Math.max(l, w, h)
    let product = all.reduce((x, y) => x * y)
    return product / largest
}

function total_area(l, w, h) {
    return area(l, w, h) + smallest_product(l, w, h)
}

function part_one() {
    return sumof(puzzle_run(total_area))
}

function part_two() {
    return sumof(puzzle_run(total_material))
}

function sumof(params) {
    return params.reduce((a, b) => a + b, 0)
}

function puzzle_run(func) {
    let puzzle_text = puzzle_input.split("\n")
    let rows = puzzle_text.map(elem => elem.split("x").map(x => parseInt(x, 10)))
    let result = rows.map(x => func(x[0], x[1], x[2]))
    return result
}

function total_material(l, w, h) {
    let dimensions = [l, w, h]
    let sorted_array = dimensions.sort((a, b) => a - b)
    let total = (l * w * h) + (sorted_array[0] * 2) + (sorted_array[1] * 2)
    return total
}