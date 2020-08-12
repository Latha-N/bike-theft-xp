import React from 'react';
import List from '../src/components/list'
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
    
      
      <Link to="/bikes">bikes</Link>
      <Route path="/bikes" component={List}/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
