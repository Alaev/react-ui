import React from 'react';
import Anime from 'react-anime';

const App = (props) => (
  <React.Fragment >
    <Anime delay={(e, i) => i * 100}
      scale={[.1, 1]}
      opacity={[0, 1]}>
      <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }} />
      <div style={{ backgroundColor: 'green', width: '100px', height: '100px' }} />
      <div style={{ backgroundColor: 'blue', width: '100px', height: '100px' }} />
    </Anime>
    <div style={{ backgroundColor: 'black', width: '100px', height: '100px' }}></div>
  </ React.Fragment>
);

export default App