import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/icon.png" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>About Us</h2>
               <p>
               {
                 resumeData.aboutme
               }
               <br></br>
               <br></br>
               <span>Server #1 (Modded Chernarus PVP): 135.148.136.106:2502</span>
               <br></br>
               <span>Server #2 (Modded Takistan PVP): 135.148.136.106:2302</span>
               <br></br>
               <span>Server #3 (Vanilla Namalsk Hardcore): 135.148.136.106:2402</span>
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact</h2>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
                    <span>{resumeData.website}</span>
       					   </p>

                  <h2>Discord</h2>
                  <p className="address">
       						<span>https://www.discord.gg/jZBARHvWW9</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}