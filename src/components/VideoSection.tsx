import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function VideoSection() {
  return (
    <section className="py-16" id="video">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-video bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden">
          <iframe
            src="https://player.vimeo.com/video/1026519121"
            allow="autoplay; fullscreen; picture-in-picture"
            className="w-full h-full"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6">Artist Showcase</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Experience the journey, passion, and creative process behind Ethereal Echoes. 
            Our vision is to create music that transcends boundaries and connects with people on a deeper level.
          </p>
          <a 
            href="https://miny.subwaymusician.xyz" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full flex items-center gap-2 w-fit transition-colors"
          >
            <ExternalLink size={18} />
            View EPK
          </a>
        </div>
      </div>
    </section>
  );
}