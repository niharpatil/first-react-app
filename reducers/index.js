import {grid, SIDE_LENGTH} from '../initialState'

const reducer = (state = grid, action) => {
  switch (action.type) {
    case 'TILE_FLIP':
      let index = action.index
      let newState = state.slice(0)
      newState[index] = !newState[index]
      return newState
    case 'STEP':
      return updateTilesFade(state)
  }
}

const updateTilesFade = (tiles) => {
  let newTiles = [...tiles]
  tiles.map( (val, ind) => {
    if (val) {
      let x = ind % SIDE_LENGTH;
      let y = Math.floor(ind / SIDE_LENGTH);

      let l = x !== 0 && ind - 1;
      let r = x !== SIDE_LENGTH - 1 && ind + 1;
      let t = y !== 0 && ind - SIDE_LENGTH;
      let b = y !== SIDE_LENGTH - 1 && ind + SIDE_LENGTH;

      if(tiles[l] !== undefined){
        newTiles[l] = val;
      }
      if(tiles[r] !== undefined){
        newTiles[r] = val;
      }
      if(tiles[t] !== undefined){
        newTiles[t] = val;
      }
      if(tiles[b] !== undefined){
        newTiles[b] = val;
      }
    }
  })
  
  return newTiles
}


module.exports = reducer