import React from 'react';
import Anime from 'react-anime';
import { ToastContainer } from 'react-toastify';
import { toastSuccess } from '../toast'

const App = props => (
  <React.Fragment>
    <Anime
      delay={(el, index) => (index + 1) * 500}
      opacity={[0.5, 1]}
      easing={[0.91, -0.54, 0.29, 1.56]}
      translateX={250}
      rotate={540}
      translateX="50vw"
    >
      <div onClick={toastSuccess} style={{ backgroundColor: 'red', width: '100px', height: '100px', color:'white' }} >Click Me</div>
      <div style={{ backgroundColor: 'green', width: '100px', height: '100px' }} />
      <div style={{ backgroundColor: 'blue', width: '100px', height: '100px' }} />
    </Anime>
    <div style={{ backgroundColor: 'black', width: '100px', height: '100px', color:'white' }}>no animation</div>

    <ToastContainer />
  </React.Fragment>
);

export default App;
