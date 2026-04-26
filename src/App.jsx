import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PhoneMockup from './components/PhoneMockup';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <PhoneMockup />
      </main>
    </div>
  );
}

export default App;
