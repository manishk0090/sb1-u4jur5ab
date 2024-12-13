import React from 'react';
import type { Project } from '../types';

const projects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered Analytics Platform',
    description: 'Advanced analytics platform using machine learning algorithms for predictive insights.',
    category: 'AI',
    imageUrl: 'https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '2',
    title: 'Smart Home IoT System',
    description: 'Comprehensive IoT solution for home automation and energy management.',
    category: 'IoT',
    imageUrl: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '3',
    title: 'E-commerce Mobile App',
    description: 'Feature-rich mobile application for a leading e-commerce platform.',
    category: 'Mobile Apps',
    imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  },
  {
    id: '4',
    title: 'Corporate Website Redesign',
    description: 'Modern website redesign for a Fortune 500 company.',
    category: 'Websites',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'
  }
];

export default function Projects() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Projects</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover how we've helped businesses transform through technology
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <span className="inline-flex items-center rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30">
                  {project.category}
                </span>
              </div>
              <h3 className="mt-3 text-lg font-semibold leading-6 text-white">
                <span>
                  {project.title}
                </span>
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-300">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}