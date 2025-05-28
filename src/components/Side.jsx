import React from 'react';

const Side = () => {
  return (
    <div className="flex flex-col gap-6 mt-46 mr-10 w-72 ">
      <div className="border p-7 bg-white font-poppins">
        <h3 className="font-semibold mb-2 p-2 ">Connect with us</h3>
        <ul className="space-y-2 text-blue-500 text-xs">
          <li>• <a href="#">Find us on Facebook</a></li>
          <li>• <a href="#">Join the Company Facebook group</a></li>
          <li>• <a href="#">Tweet us @Company</a></li>
          <li>• <a href="#">Connect with us on LinkedIn</a></li>
          <li>• <a href="#">Follow us on Instagram</a></li>
        </ul>
      </div>
      <div className="border p-4 bg-white font-poppins">
        <h3 className="font-semibold mb-2 p-3">Licensing and Reuse of Content:</h3>
        <p className="text-sm text-gray-600">
         Contact our official partner, Wrights Modia about ava able usages, license teas, and award seal artwork at companyascsaxs.com. Please note that Wright's Medic is the only authorized company that can provide Company brand materiais Please note that Wright's Media is the only authorized company
        </p>
        <a href="#" className="text-blue-500 text-sm mt-2 inline-block">License with us at Company Media</a>
      </div>
    </div>
  );
};

export default Side;