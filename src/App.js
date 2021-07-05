import './App.css';
import React ,{Component} from 'react'
import Person from './Component/Person'

class App extends Component {
  state={showPerson:false}
  render() {
    return(
      <>
       <button
          className="on-off-btn"
          onClick={() => {
            this.setState({
              showPerson: !this.state.showPerson,
            });
          }}
        >
          {this.state.showPerson ? "Hide Person" : "Show Person"}
        </button>
        {this.state.showPerson && <Person />}
      </>
    )
  }
}

export default App;
