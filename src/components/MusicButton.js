import React from 'react';
import PropTypes from 'prop-types';

class MusicButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      src: this.props.src,
      id: 'data_' + this.props.id,
    };
  }

  lancerSon = () => {
    const audio = document.getElementById(this.state.id);
    console.log(audio);
    audio.volume = 1;
    audio.play();
  };

  render() {
    const {src, name, id} = this.state;
    return (
      <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-center mt-5">
        <audio hidden={true} id={id} >
          <source src={src} type="audio/mp3" />
        </audio>
        <button className="btn btn-primary" onClick={this.lancerSon}>{name}</button>
      </div>
    );
  }
}

MusicButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MusicButton;
