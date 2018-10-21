import React, { Component } from 'react';
import './index.scss';
import MusicButton from './components/MusicButton';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-3">Bear Studio SoundBox</h1>
          </div>
        </div>
        <div className="row">
          <MusicButton name="DAVIIIIIIIID" />
          <MusicButton />
          <MusicButton />
          <MusicButton />
          <MusicButton />
          <MusicButton />
          <MusicButton />
          <MusicButton />
          <MusicButton />
          <MusicButton />
          <MusicButton />
          <MusicButton />
        </div>
      </div>
    );
  }
}

export default App;
