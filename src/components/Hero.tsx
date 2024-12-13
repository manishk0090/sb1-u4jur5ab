import React from 'react';
import { Brain, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
      <div className="mx-auto max-w-7xl pb-24 pt-40 sm:pb-32 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-40">
        <div className="px-6 lg:px-0 lg:pt-4">
          <div className="mx-auto max-w-2xl">
            <div className="max-w-lg">
              <div className="mb-8 flex items-center gap-x-4">
                <Brain className="h-8 w-8 text-indigo-600" />
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  NEURODEUS
                </h1>
              </div>
              <p className="text-lg font-semibold text-indigo-600">
                Innovating with the power of thought
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Pioneering the future through cutting-edge software development, AI innovation,
                and digital transformation solutions that empower businesses to thrive in the
                digital age.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  to="/services"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Explore Services
                </Link>
                <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <ChevronRight className="inline h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-screen">
          <div className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36" />
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              <div className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36" />
              <div className="relative px-6 pt-8 sm:pt-16 md:pl-16 md:pr-0">
                <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                  <img
                    src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                    alt="AI Visualization"
                    className="w-full rounded-xl shadow-xl ring-1 ring-white/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}