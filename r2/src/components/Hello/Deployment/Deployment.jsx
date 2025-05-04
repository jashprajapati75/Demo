import React, { useState } from 'react';
import PhoneNumberModal from './PhoneNumberModal';
import BuyNumberModal from './BuyNumberModal';

const DeploymentInterface = () => {
  const [webhook, setWebhook] = useState('https://example.com/webhook/placeholder');
  const [phoneModal, setPhoneModal] = useState(false);
  const [buyModal, setBuyModal] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  const handleInitialize = () => {
    setIsInitialized(true);
  };
  
  const handleCopyAssistantId = () => {
    navigator.clipboard.writeText('17...46200');
  };
  
  const handleCopyApiKey = () => {
    navigator.clipboard.writeText('17...75300');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Deployment</h2>
      
      <div className="shadow-sm border border-gray-200 rounded-md">
        <div className="p-6">
          <div className="flex flex-col md:flex-row mb-4 gap-6">
            {/* Phone number section */}
            <div className="w-full md:w-1/2">
              <label className="block text-base font-medium text-gray-700 mb-2">
                Phone number
              </label>
              <div className="relative">
                <input 
                  value="Select a phone number"
                  readOnly
                  className="border border-gray-300 rounded px-3 py-2 w-full bg-gray-50 pr-20"
                />
                <button 
                  className="absolute right-0 top-0 bottom-0 px-4 border-l border-gray-300 font-medium bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setPhoneModal(true)}
                >
                  Change
                </button>
              </div>
            </div>
            
            {/* Webhook section */}
            <div className="w-full md:w-1/2">
              <div className="mb-2 flex items-center">
                <span className="text-base font-medium text-gray-700 mr-2">Webhook</span>
                <span className="text-violet-600 bg-violet-100 px-2 py-1 text-xs rounded-full cursor-pointer">
                  Learn more
                </span>
              </div>
              <div className="flex items-center">
                <input 
                  value={webhook}
                  onChange={(e) => setWebhook(e.target.value)}
                  className="border border-gray-300 rounded mr-2 px-3 py-2 w-full"
                />
                <button 
                  className={`border border-gray-300 px-4 py-2 rounded transition-colors ${
                    isInitialized 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  }`}
                  disabled={isInitialized}
                  onClick={handleInitialize}
                >
                  Initialize
                </button>
              </div>
              <div className="mt-1">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  isInitialized 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-200 text-gray-700'
                }`}>
                  {isInitialized ? 'Active' : 'Disabled'}
                </span>
              </div>
            </div>
          </div>
          
          {/* ID and API Key section */}
          <div className="mt-2">
            <div className="flex items-center mb-1">
              <span className="text-sm text-gray-600 mr-2">Assistant ID: 17...46200</span>
              <button 
                onClick={handleCopyAssistantId}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                {/* <Copy size={16} /> */}
              </button>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">API Key: 17...75300</span>
              <button
                onClick={handleCopyApiKey}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                {/* <Copy size={16} /> */}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Phone Number Modal */}
      <PhoneNumberModal 
        isOpen={phoneModal} 
        onClose={() => setPhoneModal(false)} 
        onBuyClick={() => {
          setPhoneModal(false);
          setBuyModal(true);
        }}
      />

      {/* Buy Number Modal */}
      <BuyNumberModal
        isOpen={buyModal}
        onClose={() => setBuyModal(false)}
      />
    </div>
  );
};

export default DeploymentInterface;