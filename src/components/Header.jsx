import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">Elite Estates</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Properties</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
        <Button>Login</Button>
      </div>
    </header>
  );
};

export default Header;