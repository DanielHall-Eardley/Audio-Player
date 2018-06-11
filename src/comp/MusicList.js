import React, { Component } from 'react';
import {Link, Switch, Route} from "react-router-dom"
import Details from './Details.js';

class MusicList extends Component{
  render(){
  const{match} = this.props
    return (
      /*renders each song item*/
      <div className="list_container">
        {this.props.songs.map((element)=>{
        return <div className="list_item">
         <h2>{element.title}</h2>
         <button className="play" onClick={()=>this.props.playSong(element.id)}>Play</button>
         <Link to= { match.url+"/Details/"+element.id}><button
          className="play">Details</button></Link>
      </div>
       })}

      {/*renders the details page for each song when clicked*/}
       <div className="details" >
      <Switch>
      <Route path={match.url+'/Details/:SongId'} render={routerProps=>(
      <Details
      {...routerProps}
      songs={this.props.songs}
      playSong={this.props.playSong}
      />)}
      />
      </Switch>
      </div> 
      </div>
    );
  }
}

export default MusicList;