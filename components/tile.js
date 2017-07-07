import * as React from 'react'


class Tile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      index: this.props.index,
      color: 'BLACK',
      divStyle: {
        height: '10px',
        width: '10px',
        margin: '2px',
        float: 'left',
        borderRadius: '50%',
      }
    }
  }
  handleClick(){
    var currentColor = this.state.color
    var c
    if(currentColor === 'BLACK'){
      c = 'RED'
    } else if (currentColor === 'RED'){
      c = 'WHITE'
    } else {
      c = 'BLACK'
    }
    this.props.store.dispatch({type:'TILE_FLIP', index: this.state.index, color:c});
  }
  componentDidMount(){
    var self = this;
    this.props.store.subscribe(() => {
      var state = self.props.store.getState();
      var newTileState = {color: state[self.state.index]}
      self.setState(newTileState)
    })
  }
  render(){
    return (
      <div className={this.state.color} style={this.state.divStyle} onClick={()=>{this.handleClick()}}
      ></div>
      )
  }
}

module.exports = Tile