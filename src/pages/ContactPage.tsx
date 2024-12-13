import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

export default function ContactPage() {
  return (
    <main className="bg-gray-50 pt-20">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Get in touch with us to discuss your project or learn more about our services.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-5xl">
          <ContactInfo />
          
          <div className="mt-16">
            <div className="rounded-lg bg-white p-8 shadow-sm ring-1 ring-gray-900/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}