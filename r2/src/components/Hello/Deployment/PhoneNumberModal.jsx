
import React, { useState } from 'react';
const PhoneNumberModal = ({ isOpen, onClose, onBuyClick }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-full max-w-lg">
          {/* Modal Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-medium">Phone Numbers</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X size={20} />
            </button>
          </div>
          
          {/* Search Box */}
          <div className="p-4">
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search number" 
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300"
              />
              <button 
                className="absolute inset-y-0 right-0 flex items-center pr-3"
                onClick={() => {
                  onClose();
                  onBuyClick();
                }}
              >
                <ShoppingCart size={20} className="text-gray-400" />
              </button>
            </div>
          </div>
          
          {/* No Numbers Found Message */}
          <div className="flex flex-col items-center justify-center py-10 px-4">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
                <div className="w-6 h-0.5 bg-gray-300 transform rotate-45"></div>
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Sorry — we couldn't find any numbers</h3>
            <p className="text-gray-500 text-center mb-6">Purchase a phone number in order to make phone calls.</p>
            <button 
              className="flex items-center px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
              onClick={() => {
                onClose();
                onBuyClick();
              }}
            >
              <ShoppingCart size={18} className="mr-2" />
              <span>Buy phone number</span>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default PhoneNumberModal;
