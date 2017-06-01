import * as React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Tile from './components/tile.jsx'
import reducer from './reducers/index.js'
import {grid, SIDE_LENGTH} from './initialState'
import * as timer from './timer'
import * as _ from 'lodash'

const store = createStore(reducer)

timer.setStore(store)
timer.run()

class Main extends React.Component {
  constructor(){
    super()
    this.state = {}
    this.state['grid'] = grid;
    let tiles = [];
    this.state.grid.forEach((faded, j) => {
      tiles.push(<Tile store={store} key={_.uniqueId()} index={j} />)
    })
    this.state['tiles'] = tiles
  }
  render(){
    return(
      <div style={{width: (14 * SIDE_LENGTH) + 'px'}}>
        {this.state.tiles}
      </div>
    )
  }
}

ReactDOM.render(
  <Main/>,
  document.getElementById('root')
)