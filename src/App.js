import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './UserOutput/UserOutput.css';
import './UserInput/UserInput.css'
class App extends Component {
  state = {
    // userOutputs:[
    //   {name: 'Hannah1' }
    // ]
      name:'hannah1'
  }

  changeHandler = (event) => {
    this.setState({
      // userOutputs: [
      //   {name: event.target.value},
      // ]
      name:event.target.value
    })
  }
  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '0.1rem solid pink',
      padding: '0.5rem',
      cursor: 'pointer',
      textAlign: 'center'
      
    }
    return (
      <div className="App" style={style}>
        <ol >
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        
        <UserOutput name='Hannah'/>
        {/* <UserOutput name={this.state.userOutputs[0].name}/> */}
        <UserOutput name={this.state.name}/>
        {/* <UserInput name={this.state.userOutputs[0].name} changed={this.changeHandler} ></UserInput> */}
        <UserInput name={this.state.name} changed={this.changeHandler} ></UserInput>

      </div>
    );
  }
}

export default App;
