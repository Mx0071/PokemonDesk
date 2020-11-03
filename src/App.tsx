import React from 'react';

import s from './App.module.scss';
import Footer from './components/Footer';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <div className={s.content}>This is App Component!</div>
      <Footer />
    </div>
  );
};

export default App;
