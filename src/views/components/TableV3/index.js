import React from 'react';
import Anime from 'react-anime';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () =>
  toast('Anime Clicked', {
    position: toast.POSITION.BOTTOM_RIGHT,
  });

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
      <div onClick={notify} style={{ backgroundColor: 'red', width: '100px', height: '100px', color:'white' }} >Click Me</div>
      <div style={{ backgroundColor: 'green', width: '100px', height: '100px' }} />
      <div style={{ backgroundColor: 'blue', width: '100px', height: '100px' }} />
    </Anime>
    <div style={{ backgroundColor: 'black', width: '100px', height: '100px', color:'white' }}>no animation</div>

    <ToastContainer />
  </React.Fragment>
);

export default App;
