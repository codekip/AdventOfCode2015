function read_instruction(input) {
    const words = input.split(" ")
    const offset = (words[0] === "turn") ? 1 : 0

    const [startx, starty] = words[1 + offset].split(",").map(n => parseInt(n, 10))
    const [endx, endy] = words[3 + offset].split(",").map(m => parseInt(m, 10))
    const instruction = words[0 + offset]

    return {
        instruction,
        startx,
        starty,
        endx,
        endy
    }
}

function lights_in_area(startx, starty, endx, endy) {
    const lights = []
    for (let x = startx; x <= endx; x++) {
        for (let y = starty; y <= endy; y++) {
            lights.push({ x, y })
        }
    }
    return lights
}