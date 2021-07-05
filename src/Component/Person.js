import React, { Component } from 'react'
import Name from './fullName'
import Bio from './bio'
import Profession from './profession'
import ProfilePhoto from './imgSrc'

const state = {
    fullName: "Arij",
    bio:"vide",
    imgSrc:{ProfilePhoto},
    profession:"web developer",
    };
 class Person extends Component {
    
    state = {
        timer: 0,
      };
    
      componentWillMount() {
        console.log("Component Will Mount()");
      }
    
      componentDidMount() {
        console.log("Component did Mount()");
    
        this.setState({
          intervall: setInterval(
            () => this.setState({ timer: this.state.timer + 1 }),
            1000
          ),
        });
      }
    
      componentWillUnmount() {
        console.log("Component will unMount()");
        clearInterval(this.state.intervall);
      }
    
      render() {
        console.log("Render()");
    
        const TIME = () => {
          var ss = this.state.timer % 60;
          var mn = Math.floor((this.state.timer / 60) % 60);
          var hh = Math.floor(this.state.timer / (60 * 60));
          return `${hh} H : ${mn} M : ${ss} S`;
        };

        return (
            
            <div>
                <h3>
                    <TIME/>
                </h3>
           < Name fullName={state.fullName} />
           <Bio bio={state.bio}/>
           <Profession profession={state.Profession}/>
           <ProfilePhoto imgSrc={state.imgSrc}/>

            </div>
        )
    }
  }

export default Person

