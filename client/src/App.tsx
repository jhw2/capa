import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <section id='contents'>
        <Main />
      </section>
    </>
  );
}

export default App;
