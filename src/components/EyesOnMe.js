
import React from 'react'

class EyesOnMe extends React.Component {

    needToF = () => console.log('Good!')
    needToB = () => console.log('Hey! Eyes on me!')

  render(){
    return(
        <button onFocus={this.needToF} onBlur={this.needToB}>
        Eyes on me, please!
        </button>
    )
  }
}

export default EyesOnMe
