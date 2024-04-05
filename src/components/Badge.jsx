import React from "react";
import Bio from "./Bio.jsx";

class Badge extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      firstName: props.firstName,
      lastName: props.lastName,
      avatarImage: props.avatarImage,
      hobbies: props.hobbies,
      description: props.description
    };
  }
  render() {
      return (
        <div
          style={{
            border: "1px solid black",
            width: "320px",
            borderRadius: "8px",
            padding: "8px",
            display: "flex",
            height: "400",
          }}
        >
          <div style={{ width: "75%" }}>
            <h4>{this.state.firstName}</h4>
            <h5>{this.state.lastName}</h5>
            {this.state.hobbies.some(hobby => hobby.toLowerCase().includes('java') || hobby.toLowerCase().includes('react')) ? <h5>Software developer: TRUE</h5> : <h5>Software developer: FALSE</h5>}
            <Bio
              birthday={this.state.birthday}
              description={this.state.description}
              hobbies={this.state.hobbies}
            />
          </div>
          <div>
            <img src={this.state.avatarImage} height="64px" />
          </div>
        </div>
        
      );
  }
}

  export default Badge;
