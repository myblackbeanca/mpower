import React, { useState } from 'react';
import { AlertCircle, Menu, X, Music2 } from 'lucide-react';

export function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleLogin = (code: string) => {
    if (code === 'hellominy') {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      document.documentElement.classList.add('miny-verified');
    }
  };

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Discover', href: '#releases' },
    { label: 'Artists', href: '#' },
    { label: 'Events', href: '#' },
  ];

  return (
    <header className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
      </div>
      
      {/* MINY Header Menu */}
      <div className="absolute top-0 left-0 right-0 bg-black/30 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Music2 className="text-purple-400" size={24} />
              <span className="font-bold text-xl">MINY</span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {!isLoggedIn ? (
                <button 
                  onClick={() => setShowLoginModal(true)}
                  className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-full transition-colors"
                >
                  Login
                </button>
              ) : (
                <span className="text-green-400 flex items-center gap-2">
                  <AlertCircle size={16} />
                  MINY Access Verified
                </span>
              )}

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setShowMenu(!showMenu)}
                className="md:hidden"
              >
                {showMenu ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm md:hidden z-50">
          <nav className="container mx-auto px-4 py-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-3 text-gray-300 hover:text-white transition-colors"
                onClick={() => setShowMenu(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mt-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Support Ethereal Echoes
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Experience music like never before. Your support helps bring exclusive music experiences to life.
          </p>
          <div className="flex gap-4">
            <a 
              href="#rewards"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              Power This Release
            </a>
            <a 
              href="https://miny.subwaymusician.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full text-lg font-medium transition-colors"
            >
              View EPK
            </a>
          </div>
        </div>
      </div>

      {showLoginModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-xl max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4">Verify MINY Access</h3>
            <input
              type="text"
              placeholder="Enter access code"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 mb-4"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleLogin((e.target as HTMLInputElement).value);
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
                onClick={() => handleLogin('hellominy')}
                className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
              >
                Verify
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}