const SIDE_LENGTH = 50

const grid = []
for (let i = 0; i < SIDE_LENGTH * SIDE_LENGTH; i++) {
  grid.push(false)
}

module.exports = {grid, SIDE_LENGTH}