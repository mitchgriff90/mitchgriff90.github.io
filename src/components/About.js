import React, { Component } from 'react';
import axios from "axios";


export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        axios.get('https://api.github.com/users/mitchgriff90')
            .then(res => {
                this.setState({
                    data: res.data
                })
            })
    }
    hireable() {
        if (this.state.data.hireable) {
            return <p>Hireable: <span className="badge badge-success">Yes</span></p>
        } else {
            return <p>Hireable: <span className="badge badge-danger">No</span></p>
        }
    }

  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src={this.state.data.avatar_url} alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
                   {this.state.data.bio}
               </p>
               <p>
                   {this.hireable()}
               </p>
               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}