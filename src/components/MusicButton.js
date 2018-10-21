import React from 'react';

const MusicButton = (props) => (
  <div className="col-4 text-center mt-5">
    <button type="button" className="btn btn-primary">{props.name}</button>
  </div>
);

export default MusicButton
