import React, { useState } from 'react';
import { Play, Crown } from 'lucide-react';
import { Notification } from './Notification';

const mixtapes = [
  {
    id: 1,
    title: "Midnight Chronicles",
    cover: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80",
    year: "2023"
  },
  {
    id: 2,
    title: "Urban Echoes",
    cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80",
    year: "2022"
  },
  {
    id: 3,
    title: "Neon Dreams",
    cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80",
    year: "2021"
  }
];

export default function MixtapeSection() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleClaimMiny = () => {
    setShowLoginModal(true);
  };

  const handleVerify = (code: string) => {
    if (code === 'hellominy') {
      setShowLoginModal(false);
      setShowNotification(true);
      setTimeout(() => {
        window.location.href = 'https://minyfy.subwaymusician.xyz/catalog';
      }, 1500);
    }
  };

  return (
    <section className="py-16 relative overflow-hidden" id="releases">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Album Collection</h2>
        <div className="flex justify-center flex-wrap gap-12">
          {mixtapes.map((mixtape) => (
            <div key={mixtape.id} className="group w-72 space-y-4">
              {/* Hexagon Container */}
              <div className="relative w-72 h-72">
                <div className="hexagon-container absolute inset-0 overflow-hidden bg-gray-800">
                  <img 
                    src={mixtape.cover} 
                    alt={mixtape.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="absolute inset-0 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{mixtape.title}</h3>
                      <p className="text-gray-300">{mixtape.year}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Buttons Outside Hexagon */}
              <div className="flex gap-2 justify-center">
                <button className="bg-purple-600/80 backdrop-blur-sm hover:bg-purple-700 text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors">
                  <Play size={16} />
                  Listen
                </button>
                <button 
                  onClick={handleClaimMiny}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors"
                >
                  <Crown size={16} />
                  Claim MINY
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Verify MINY Access</h3>
            <input
              type="text"
              placeholder="Enter access code"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 mb-4"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleVerify((e.target as HTMLInputElement).value);
                }
              }}
            />
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowLoginModal(false)}
                className="px-4 py-2 text-gray-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => handleVerify('hellominy')}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification */}
      <Notification 
        show={showNotification} 
        message="Thank you! Redirecting to catalog..." 
      />
    </section>
  );
}