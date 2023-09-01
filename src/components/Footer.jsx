import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 px-6 sm:px-12  mt-auto">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} SHOPPING X. All rights reserved.
        </p>
        <div className="mt-4">
          <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">Contact</a>
          <a href="#" className="text-gray-600 hover:text-gray-800 mx-2">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;