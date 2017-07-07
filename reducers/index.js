import {grid, SIDE_LENGTH} from '../initialState'

const reducer = (state = grid, action) => {
  switch (action.type) {
    case 'TILE_FLIP':
      let index = action.index
      let newState = state.slice(0)
      let v = newState[index]
      newState[index] = action.color
      return newState
    case 'STEP':
      return updateTilesFade(state)
  }
}

const updateTilesFade = (tiles) => {
  let newTiles = [...tiles]
  tiles.map( (val, ind) => {
    if (val === 'WHITE') {
      let x = ind % SIDE_LENGTH;
      let y = Math.floor(ind / SIDE_LENGTH);

      let l = x !== 0 && ind - 1;
      let r = x !== SIDE_LENGTH - 1 && ind + 1;
      let t = y !== 0 && ind - SIDE_LENGTH;
      let b = y !== SIDE_LENGTH - 1 && ind + SIDE_LENGTH;

      if(tiles[l] !== undefined){
        if(tiles[l] === 'RED'){
          newTiles[l] = val;
        }
      }
      if(tiles[r] !== undefined){
        if(tiles[r] === 'RED'){
          newTiles[r] = val;
        }
      } 
      if(tiles[t] !== undefined){
        if(tiles[t] === 'RED'){
          newTiles[t] = val;
        }
      }
      if(tiles[b] !== undefined){
        if(tiles[b] === 'RED'){
          newTiles[b] = val;
        }
      }
  } else if (val === 'RED') {
      let x = ind % SIDE_LENGTH;
      let y = Math.floor(ind / SIDE_LENGTH);

      let l = x !== 0 && ind - 1;
      let r = x !== SIDE_LENGTH - 1 && ind + 1;
      let t = y !== 0 && ind - SIDE_LENGTH;
      let b = y !== SIDE_LENGTH - 1 && ind + SIDE_LENGTH;

      if(tiles[l] !== undefined){
        if(tiles[l] === 'BLACK'){
          newTiles[l] = val;
        }
      }
      if(tiles[r] !== undefined){
        if(tiles[r] === 'BLACK'){
          newTiles[r] = val;
        }
      }
      if(tiles[t] !== undefined){
        if(tiles[t] === 'BLACK'){
          newTiles[t] = val;
        }
      }
      if(tiles[b] !== undefined){
        if(tiles[b] === 'BLACK'){
          newTiles[b] = val;
        }
      }
    } else if (val === 'BLACK') {
      let x = ind % SIDE_LENGTH;
      let y = Math.floor(ind / SIDE_LENGTH);

      let l = x !== 0 && ind - 1;
      let r = x !== SIDE_LENGTH - 1 && ind + 1;
      let t = y !== 0 && ind - SIDE_LENGTH;
      let b = y !== SIDE_LENGTH - 1 && ind + SIDE_LENGTH;

      if(tiles[l] !== undefined){
        if(tiles[l] === 'WHITE'){
          newTiles[l] = val;
        }
      }
      if(tiles[r] !== undefined){
        if(tiles[r] === 'WHITE'){
          newTiles[r] = val;
        }
      }
      if(tiles[t] !== undefined){
        if(tiles[t] === 'WHITE'){
          newTiles[t] = val;
        }
      }
      if(tiles[b] !== undefined){
        if(tiles[b] === 'WHITE'){
          newTiles[b] = val;
        }
      }
    }
  })
  
  return newTiles
}


module.exports = reducer