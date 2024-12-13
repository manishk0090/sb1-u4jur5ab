import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
        <div className="rounded-full bg-indigo-600/10 p-3">
          <Phone className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Phone</h3>
          <p className="mt-1 text-gray-600">+1-555-123-4567</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
        <div className="rounded-full bg-indigo-600/10 p-3">
          <Mail className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Email</h3>
          <p className="mt-1 text-gray-600">contact@neurodeus.com</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
        <div className="rounded-full bg-indigo-600/10 p-3">
          <MapPin className="h-6 w-6 text-indigo-600" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Address</h3>
          <p className="mt-1 text-gray-600">123 Innovation Drive, Tech City, TC 12345</p>
        </div>
      </div>
    </div>
  );
}