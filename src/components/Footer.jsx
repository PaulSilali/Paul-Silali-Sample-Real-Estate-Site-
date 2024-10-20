import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Elite Estates</h3>
            <p className="text-sm">Luxury living redefined.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">Properties</a></li>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">789 Luxury Ave, Prestige City</p>
            <p className="text-sm">Phone: (987) 654-3210</p>
            <p className="text-sm">Email: info@eliteestates.com</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400">Facebook</a>
              <a href="#" className="text-white hover:text-blue-400">Twitter</a>
              <a href="#" className="text-white hover:text-blue-400">Instagram</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          © 2023 Elite Estates. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;