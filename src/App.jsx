import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Side from './components/Side';
import AdBanner from './components/AdBanner';

function App() {
  return (
    <div>
      <Header />
      <div className="bg-[#fffaf4] p-6 md:p-10 flex flex-col md:flex-row gap-10">
        <div className="md:w-2/3 flex flex-col md:flex-row gap-6">
          <Form />
          <Side />
        </div>
        <div className="md:w-1/3">
          <AdBanner />
        </div>
      </div>
    </div>
  );
}

export default App;
