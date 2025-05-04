
import React, { useState } from 'react';
const BuyNumberModal = ({ isOpen, onClose }) => {
    const [selectedCountry, setSelectedCountry] = useState('United States');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const countries = [
      { name: 'United States', flag: '🇺🇸' },
      { name: 'Australia', flag: '🇦🇺' },
      { name: 'Canada', flag: '🇨🇦' }
    ];
    
    // Removed phone numbers array
  
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-4xl overflow-hidden">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-medium">Buy a Number</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Left Panel - Region */}
            <div className="border-r p-4">
              <div className="mb-2">Region</div>
              <div className="relative">
                <button 
                  className="w-full flex items-center justify-between border border-gray-300 rounded-md p-2 bg-white"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{countries.find(c => c.name === selectedCountry)?.flag}</span>
                    <span>{selectedCountry}</span>
                  </div>
                  <ChevronDown size={20} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                    {countries.map((country) => (
                      <div 
                        key={country.name}
                        className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setSelectedCountry(country.name);
                          setIsDropdownOpen(false);
                        }}
                      >
                        <span className="mr-2">{country.flag}</span>
                        <span>{country.name}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
  
            {/* Right Panel - Phone Numbers */}
            <div className="col-span-2 p-4">
              {/* Search Box */}
              <div className="relative mb-4">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search size={20} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search numbers..." 
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg"
                />
              </div>
              
              {/* Simple Message */}
              <div className="py-8 text-center">
                <p className="text-gray-500 mb-4">Available phone numbers will appear here.</p>
                <p className="text-sm text-gray-400">Select a region to see available numbers.</p>
              </div>
              
  
            </div>
          </div>
        </div>
      </div>
    );
  };


export default BuyNumberModal;