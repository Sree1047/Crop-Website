import React from 'react';
import { Leaf, Thermometer, Droplets, Timer, Sprout, DollarSign, Warehouse } from 'lucide-react';
import type { Crop } from '../data/crops';

interface CropCardProps extends Crop {}

export default function CropCard({
  name,
  season,
  waterNeeds,
  temperature,
  soilType,
  growthDuration,
  description,
  cultivation,
  imageUrl,
  fertilizer,
  averagePrice,
  investmentPerAcre,
  category
}: CropCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">
      <div className="absolute right-2 top-2 z-10 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-gray-700 shadow-md">
        {category}
      </div>
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="mb-3 text-2xl font-bold text-gray-800">{name}</h3>
        
        <div className="mb-4 grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-green-600" />
            <span className="text-sm text-gray-600">{season}</span>
          </div>
          <div className="flex items-center gap-2">
            <Thermometer className="h-5 w-5 text-red-600" />
            <span className="text-sm text-gray-600">{temperature}</span>
          </div>
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-gray-600">{waterNeeds}</span>
          </div>
          <div className="flex items-center gap-2">
            <Timer className="h-5 w-5 text-purple-600" />
            <span className="text-sm text-gray-600">{growthDuration}</span>
          </div>
        </div>

        <div className="mb-4 space-y-3 rounded-lg bg-gray-50 p-4">
          <div>
            <span className="font-semibold text-gray-700">Soil Type:</span>
            <span className="ml-2 text-gray-600">{soilType}</span>
          </div>
          <div>
            <span className="font-semibold text-gray-700">Fertilizer:</span>
            <span className="ml-2 text-gray-600">{fertilizer}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span className="font-semibold text-gray-700">Average Price:</span>
            <span className="text-gray-600">{averagePrice}</span>
          </div>
          <div className="flex items-center gap-2">
            <Warehouse className="h-4 w-4 text-blue-600" />
            <span className="font-semibold text-gray-700">Investment/Acre:</span>
            <span className="text-gray-600">{investmentPerAcre}</span>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-gray-600">{description}</p>
          <div className="rounded-lg bg-green-50 p-4">
            <div className="mb-2 flex items-center gap-2">
              <Sprout className="h-5 w-5 text-green-600" />
              <span className="font-semibold text-green-800">Cultivation Tips</span>
            </div>
            <p className="text-sm text-green-700">{cultivation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}