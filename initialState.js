const SIDE_LENGTH = 40

const grid = []
for (let i = 0; i < SIDE_LENGTH * SIDE_LENGTH; i++) {
  grid.push("BLACK")
}

module.exports = {grid, SIDE_LENGTH}