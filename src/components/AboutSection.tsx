import React from 'react';
import { Music2, Users, Trophy, Mic } from 'lucide-react';

export function AboutSection() {
  return (
    <section className="py-16 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1598387993441-a364f854c3e1?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ethereal Echoes
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              A groundbreaking fusion of traditional and electronic music, 
              pushing the boundaries of what's possible in modern sound production. 
              This project isn't just about creating music—it's about building a 
              community-driven experience where fans become part of the creative journey.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Music2, label: '3 Albums Released' },
                { icon: Users, label: '50K+ Community' },
                { icon: Trophy, label: '2 Grammy Nominations' },
                { icon: Mic, label: '100+ Live Shows' }
              ].map(({ icon: Icon, label }, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg flex items-center gap-3">
                  <Icon className="text-purple-400" />
                  <span className="text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-video bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
            <iframe
              src="https://player.vimeo.com/video/1023628517"
              allow="autoplay; fullscreen; picture-in-picture"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}