import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import CropCard from './components/CropCard';
import CategoryFilter from './components/CategoryFilter';
import { Search } from 'lucide-react';
import { crops } from './data/crops';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = useMemo(() => 
    Array.from(new Set(crops.map(crop => crop.category))),
    []
  );

  const filteredCrops = useMemo(() => {
    return crops.filter(crop => {
      const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || crop.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 py-12">
        <div className="mb-8 space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search crops..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
            />
          </div>
          
          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCrops.map((crop, index) => (
            <div
              key={crop.name}
              className="opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CropCard {...crop} />
            </div>
          ))}
        </div>

        {filteredCrops.length === 0 && (
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">No crops found matching your search criteria.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;