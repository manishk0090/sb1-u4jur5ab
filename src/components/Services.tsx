import React from 'react';
import { Code2, Globe, Smartphone, Megaphone, Server, Brain } from 'lucide-react';
import type { Service } from '../types';

const services: Service[] = [
  {
    id: '1',
    title: 'Software Development',
    description: 'Custom AI and IoT solutions tailored to your business needs',
    icon: 'Code2'
  },
  {
    id: '2',
    title: 'Website Development',
    description: 'Responsive and modern websites that drive results',
    icon: 'Globe'
  },
  {
    id: '3',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    icon: 'Smartphone'
  },
  {
    id: '4',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing solutions for growth',
    icon: 'Megaphone'
  },
  {
    id: '5',
    title: 'Web Hosting',
    description: 'Reliable and secure hosting solutions',
    icon: 'Server'
  },
  {
    id: '6',
    title: 'AI Solutions',
    description: 'Advanced artificial intelligence integration',
    icon: 'Brain'
  }
];

const iconMap = {
  Code2,
  Globe,
  Smartphone,
  Megaphone,
  Server,
  Brain
};

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive solutions to drive your business forward in the digital age
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              return (
                <div key={service.id} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <IconComponent className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {service.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
    </div>
  );
}