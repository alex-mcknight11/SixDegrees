import React from 'react';
import Header from "./components/header";
import actors from './components/actor-array';

function App() {
  return (
    <React.Fragment>
      <Header />
      <actors />
    </React.Fragment>
  );
}

export default App;