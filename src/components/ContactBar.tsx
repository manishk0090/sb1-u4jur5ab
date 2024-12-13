import React from 'react';
import { Phone, Mail } from 'lucide-react';

export default function ContactBar() {
  return (
    <div className="bg-indigo-600 py-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-end space-x-6 text-sm text-white">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>+1-555-123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>contact@neurodeus.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}