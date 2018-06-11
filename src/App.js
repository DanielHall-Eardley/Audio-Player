import React, { Component } from 'react';
import axios from "axios"
import {Route, Switch, Link} from 'react-router-dom'
import MusicList from './comp/MusicList.js'
import './App.css';

class App extends Component {
  state={
    songs:[{id: "",}],
    currentTrack:{},
    playing: false,
    time:0
  }

audioPlayer = React.createRef()
//this chooses song, taking the id as an index and pushing that song
//into the currentTrack state, also sets play state to true
  playFunkyMusic=(id)=>{
    this.setState({
currentTrack: this.state.songs[id],
playing:true
    },()=>{
   this.audioPlayer.current.play()
    })
  }

  /*couldn't get this one to work:(
  showTime=()=>{
    this.setState({
      time:this.audioPlayer.current.currentTime()
    })
  }*/

//pauses music and sets the playing state to false,
//to preserve the state of play
  pauseFunkyMusic=()=>{
    this.audioPlayer.current.pause()
    this.setState({
      playing:false
    })
    }
//chooses the next song by incrementing index by one and
//playing or staying paused depending on state
    nextSong=(id)=>{
      let newTrack;
      if(id===undefined){
      newTrack=0
      }else{
        if(id===this.state.songs.length-1){
          newTrack=0
        }else{
      newTrack=id+1
        }
      }
      this.setState({
        currentTrack: this.state.songs[newTrack]
      },()=>{
        if(this.state.playing===true){
          this.audioPlayer.current.play()
          }else{
          this.audioPlayer.current.pause()
        }
      })
     }
//same principle of nextSong except the index is decremented
     prevSong=(id)=>{
       let newTrack;
      if(id===undefined){
      newTrack=0
      }else{
        if(id===0){
          newTrack=this.state.songs.length-1
        }else{
      newTrack=id-1
        }
      }
      console.log(id, newTrack)
      this.setState({
        currentTrack: this.state.songs[newTrack]
      },()=>{
        if(this.state.playing===true){
         this.audioPlayer.current.play()
          }else{
          this.audioPlayer.current.pause()
        }
      })
     }
//gets songs data on startup
  componentDidMount(){
    axios.get('/Home')
    .then((res)=>{ 
      this.setState({
        songs:res.data,
        currentTrack:res.data[0]
      })
    })
    .catch((err)=>{
       console.log(err)
    })
  }

  render() {
    return (
      <div className="App">
      <h1>Soundplace, "The place for Bass"</h1>
      {/*audio player*/}
      <div className="audio_player_container">
      <div className="audio_title">
      <h2>{this.state.currentTrack.title} {/*Runtime:{this.state.time}*/}</h2>
      <audio /*onTimeUpdate={this.showTime}*/ ref={this.audioPlayer} src={this.state.currentTrack.src}></audio>
      </div>
      {/*Audio controls and Links*/}
      <div className="audio_controls">
      <button className="play" onClick={()=>this.playFunkyMusic(this.state.currentTrack.id)}>Play</button>
      <button className="pause" onClick={this.pauseFunkyMusic}>Pause</button>
      <button className="skipF" onClick={()=> this.nextSong(this.state.currentTrack.id)}>Skip Forward</button>
      <button className="skipB" onClick={()=> this.prevSong(this.state.currentTrack.id)} >Skip Back</button>
      <Link to="/Music"><button className="play">Show Music</button></Link>
      <Link to="/"><button className="play">Hide Music</button></Link>
      </div>
      </div>
      
      <div className="song_list">
      <Switch>
      <Route path="/Music" render={routerProps=>(
      <MusicList
      {...routerProps}
       songs={this.state.songs}
       playSong={this.playFunkyMusic}
      />)}
      />
      </Switch>
      </div>
      </div>
    );
  }
}

export default App;
