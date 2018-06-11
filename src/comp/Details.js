import React, { Component } from 'react';
import {Link} from "react-router-dom"


class Details extends Component {
 render(){
   
    const {match} = this.props
    const id = match.params.SongId  
  
  return (
    /*renders out a details page using the dynamic url to set the index 
    for the individual song*/
    <div>
       <h3>Details</h3>
       <p><b>Genre:</b> {this.props.songs[id].genre}</p>
       <p><b>Song Description:</b> {this.props.songs[id].songDesc}</p>
       <p><b>Artist Bio:</b> {this.props.songs[id].artistBio}</p>
      <button className="play" onClick={()=>this.props.playSong(match.params.SongId)}>Play</button>
       <Link to="/Music"><button className="play">Hide Details</button></Link>
      </div>
    );
  }
}

export default Details;