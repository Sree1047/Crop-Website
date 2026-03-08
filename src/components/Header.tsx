import React from 'react';
import { Sprout } from 'lucide-react';

export default function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-green-600 to-green-800 py-16 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/30"></div>
        <img
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80"
          alt="Farm background"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex items-center gap-3">
          <Sprout className="h-12 w-12 hover-float" />
          <h1 className="text-4xl font-bold">CropGuide</h1>
        </div>
        <p className="mt-4 max-w-2xl text-xl">
          Your comprehensive guide to understanding crops and agricultural practices
        </p>
      </div>
    </header>
  );
}