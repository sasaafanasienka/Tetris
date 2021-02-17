function blockGen() {
    return [
        [1, 1],
        [1, 1]
    ]
}

export default function newBlock(area) {
    const block = blockGen();
    const renderStartPoint = Math.round((10 - block.length) / 2)
        for (let i = 0; i < block.length; i++) {
            for (let a = 0; a < block[i].length; a++) {
                area[i][a + renderStartPoint] = 1
            }
        }
    return area
}