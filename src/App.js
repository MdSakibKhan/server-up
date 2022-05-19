import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <React.Suspense fallback={"Loading ..."}>
          <Layout/>
        </React.Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
