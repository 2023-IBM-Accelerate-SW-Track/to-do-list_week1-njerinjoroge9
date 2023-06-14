import React, { Component } from 'react';
import "./About.css";
import profilePic from '../assets/profile_pic.jpg';

  
export default class About extends Component {
  render() {
    return (
      <div>
        <div>
        <div className="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src={profilePic} 
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Kash </div>
            <div className="brief_description">
              Hi there, my name is Njeri(officially), but I prefer to go by Kash. I'm originally from Kenya but currently live in New Jersey. I am a rising junior at Bard College studying mathematics and computer science with a focus in machine learning. I am really interested in complex systems analysis, particularly in looking at how seemingly unrelated phenomena emerges from complex systems. So yeah, I lean pretty heavy into the mathy aspect of machine learning. In my free time I like to make music. 
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
}