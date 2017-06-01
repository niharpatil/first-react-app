import * as React from 'react'

const divStyle = {
  height: '10px',
  width: '10px',
  margin: '2px',
  float: 'left'
}
class Tile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index: this.props.index,
      faded: false,
    }
  }
  handleClick(){
    this.props.store.dispatch({type:'TILE_FLIP', index: this.state.index});
  }
  componentDidMount(){
    var self = this;
    this.props.store.subscribe(() => {
      var state = self.props.store.getState();
      var newTileState = {faded: state[self.state.index]}
      self.setState(newTileState)
    })
  }
  render(){
    return (
      <div className={(this.state.faded ? 'faded' : 'not-faded')} style={divStyle} onClick={()=>{this.handleClick()}}
      ></div>
      )
  }
}

module.exports = Tile