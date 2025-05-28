import React from 'react';
import ad1 from '../images/ad1.jpg';
import ad2 from '../images/ad2.jpg';
import ad3 from '../images/ad3.jpg';
import ad4 from '../images/ad4.jpg';

const AdBanner = () => {
  return (
    <div className="flex flex-col gap-4">
      <img src={ad1} alt="Ad 1" className="rounded shadow" />
      <img src={ad2} alt="Ad 2" className="rounded shadow" />
      <div className="flex gap-2">
        <img src={ad3} alt="Ad 3" className="w-1/2 rounded shadow" />
        <img src={ad4} alt="Ad 4" className="w-1/2 rounded shadow" />
      </div>
    </div>
  );
};

export default AdBanner;