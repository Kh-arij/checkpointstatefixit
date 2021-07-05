import React, { Component } from 'react'




state = {
    fullName: "Sara",
    bio:"vide",
    imgSrc:"https://www.onblastblog.com/wp-content/uploads/2019/09/09aea00fc018749c1c255ddfd594b218.jpeg",
    profession:"web developer",
    showPerson:false
    };
 class Person extends Component {
    render() {
        return (
            <>
            <div>
            <h1> {this.props.name}</h1>
       <p>
      {this.props.bio}
      </p>
     <img src={this.props.imgSrc} width="220px" /> 
      <p>
     {this.props.profession}
     </p>
            </div>
            </>
        )
    }
}

export default Person

