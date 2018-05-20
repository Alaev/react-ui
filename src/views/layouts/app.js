import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import routes from '../../routes';

const App = () => (
  <div>
    <header>
      <Link to="/">MAIN</Link>
      <Link to="/home">Home</Link>
    </header>

    {routes.map(route => <Route key={route.path} {...route} />)}

    <footer style={{
      position:'absolute',
      bottom:0,
      width:'100%',
      height:'40px',
      background:'#6cf',
      textAlign:'right',
      paddingRight:'10px',
      lineHeight:'40px',
      color:'white',
      fontWeight:'bold'
    }}>react ui playground</footer>
  </div>
);
export default App;
