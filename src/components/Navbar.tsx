import React from 'react';
import { Gift, HelpCircle, Bell, MessageCircle } from 'lucide-react';

export function Navbar() {
  const navItems = [
    { label: 'Campaign Rewards', icon: Gift, href: '#rewards' },
    { label: 'FAQ', icon: HelpCircle, href: '#faq' },
    { label: 'Updates', icon: Bell, href: '#updates' },
    { label: 'Comments', icon: MessageCircle, href: '#comments' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-gray-900/30 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8">
          {navItems.map(({ label, icon: Icon, href }) => (
            <button
              key={label}
              onClick={() => scrollToSection(href)}
              className="px-4 py-4 text-gray-400 hover:text-white flex items-center gap-2 transition-colors relative group"
            >
              <Icon size={18} />
              <span>{label}</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 scale-x-0 group-hover:scale-x-100 transition-transform"></div>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}