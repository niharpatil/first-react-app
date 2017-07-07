import * as React from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import Tile from './components/tile.js'
import reducer from './reducers/index.js'
import {grid, SIDE_LENGTH} from './initialState'
import * as timer from './timer'
import * as _ from 'lodash'
import io from 'socket.io-client'

const socket = io('localhost:3000')

const store = createStore(reducer)
timer.setStore(store)
timer.run()

class Main extends React.Component {
  constructor(){
    super()
    this.state = {}
    this.state['grid'] = grid;
    let tiles = [];
    this.state.grid.forEach((s,index) => {
      tiles.push(<Tile store={store} key={_.uniqueId()} index={index} />)
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