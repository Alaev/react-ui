import React from 'react';
import Anime from 'react-anime';

const App = props => (
  <React.Fragment>
    <Anime
      delay={(el, index) => (index + 1) * 500}
      opacity={[0.5, 1]}
      easing={[0.91, -0.54, 0.29, 1.56]}
      translateX={250}
      rotate={540}
      translateX="50vw">
      <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }} />
      <div style={{ backgroundColor: 'green', width: '100px', height: '100px' }} />
      <div style={{ backgroundColor: 'blue', width: '100px', height: '100px' }} />
    </Anime>
    <div style={{ backgroundColor: 'black', width: '100px', height: '100px' }} />
  </React.Fragment>
);

export default App;
