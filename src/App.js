import React from 'react';
// Commit 1

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      txt: 'this is the state txt'
   }
  }
  update(e){
    this.setState({txt: e.target.value})
  }
  render(){
    return (
      <div>
        <h1>{this.state.txt}</h1>
        <Widget update={this.update.bind(this)} />
        </div>
    )
  }
}

const Widget = (props) => 
  <input type="text" onChange={props.update.bind(this)}/>

export default App