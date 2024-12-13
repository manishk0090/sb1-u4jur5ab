import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500">+1-555-123-4567</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-gray-400" />
            <span className="text-gray-500">contact@neurodeus.com</span>
          </div>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} NEURODEUS INNOVATIONS LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}