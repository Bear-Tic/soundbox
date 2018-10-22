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
          <MusicButton id={1} name="DAVIIIIIIIID" src="sons/DAVIIIIID.mp3" />
          <MusicButton id={2} name="Tu mérites pas le Bear Studio" src="sons/merite.mp3" />
          <MusicButton id={3} name="POPOPOOOOOOO" src="sons/popopoooo.mp3" />
        </div>
      </div>
    );
  }
}

export default App;
