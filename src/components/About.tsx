import React from 'react';
import { Users, Trophy, Target, Lightbulb } from 'lucide-react';

const stats = [
  { id: 1, name: 'Years of Experience', value: '10+' },
  { id: 2, name: 'Projects Completed', value: '500+' },
  { id: 3, name: 'Team Members', value: '50+' },
  { id: 4, name: 'Client Satisfaction', value: '98%' },
];

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            For over a decade, NEURODEUS has been at the forefront of technological innovation,
            delivering cutting-edge solutions that transform businesses and drive growth.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
          <div className="relative lg:order-last lg:col-span-5">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
              alt="Team collaboration"
              className="w-full rounded-2xl object-cover"
            />
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              At NEURODEUS, we believe in the power of innovation to solve complex challenges
              and create meaningful impact. Our team of dedicated professionals brings together
              expertise in software development, artificial intelligence, IoT, and digital
              transformation to deliver solutions that exceed expectations.
            </p>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <Users className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Expert Team.</strong> Our diverse team
                  of skilled professionals brings together years of industry experience.
                </span>
              </li>
              <li className="flex gap-x-3">
                <Trophy className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Proven Track Record.</strong> A decade
                  of successful project deliveries across various industries.
                </span>
              </li>
              <li className="flex gap-x-3">
                <Target className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Client Focus.</strong> We prioritize
                  understanding and meeting our clients' unique needs and objectives.
                </span>
              </li>
              <li className="flex gap-x-3">
                <Lightbulb className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-gray-900">Innovation First.</strong> We stay
                  ahead of technological trends to provide cutting-edge solutions.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}