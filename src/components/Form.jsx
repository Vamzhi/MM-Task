import React from 'react';

const Form = () => {
  return (
    <div className='font-poppins'>
       <h2 className="text-lg font-semibold mb-2">Contact US</h2>
      <p className="text-sm text-gray-600 mb-4">
        Please complete and submit the form below to help us answer your e-mail as completely and quickly as possible.
      </p>
    <form className="bg-[#fffaf4] w-full max-w-xl mt-20 flex flex-col gap-4">
     
      <div className="mb-4">
        <label className="block mb-1 font-medium">This is about: *</label>
        <select className="w-full p-2 border rounded">
          <option>Advertising Inquiry</option>
          <option>Customer Support</option>
          <option>Melody Mocktail Support</option>
          <option>Deals Mocktail Support</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Message subject: *</label>
        <input className="w-full p-2 border rounded" type="text" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Message: *</label>
        <textarea className="w-full p-2 border rounded" rows="3"></textarea>
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email address: *</label>
        <input className="w-full p-2 border rounded" type="email" />
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Phone number:</label>
        <input className="w-full p-2 border rounded" type="tel" />
      </div>
      <p className="text-xs text-gray-500 mb-4">
        * Required Field<br />
        When you press the submit button below, you will receive an acknowledgement that your e-mail was received. Your
        personal information and privacy is protected. Please read our <a href="#" className="underline">privacy policy</a>
        for details.
      </p>
      <button className="px-6 py-2 rounded border border-[#d94e64] text-[#d94e64] w-full hover:bg-[#d94e64] hover:text-white">
        Submit
      </button>
    </form>
    </div>
  );
};

export default Form;