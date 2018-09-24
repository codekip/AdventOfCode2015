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


function puzzle_run() {
    let puzzle_text = puzzle_input.split("\n")
    let rows = puzzle_text.map(elem => elem.split("x"))
    let numeric = rows.map(elem => elem.map(x => parseInt(x, 10)))
    let result = numeric.map(x => total_area(x[0], x[1], x[2]))
        .reduce((a, b) => a + b, 0)
    return result

}