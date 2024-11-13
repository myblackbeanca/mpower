import React from 'react';
import { CalendarDays, Music, Mic, Wand2, Radio, Disc } from 'lucide-react';

const timelineStages = [
  {
    id: 1,
    date: "March 15, 2024",
    stage: "Album Concept",
    status: "completed",
    description: "Ethereal Echoes concept finalized with the team",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80",
    icon: Music
  },
  {
    id: 2,
    date: "March 20, 2024",
    stage: "Songwriting",
    status: "completed",
    description: "12 tracks written and arranged",
    image: "https://images.unsplash.com/photo-1517334526174-f8c7e96b7df3?auto=format&fit=crop&q=80",
    icon: Mic
  },
  {
    id: 3,
    date: "April 1, 2024",
    stage: "Recording",
    status: "in-progress",
    description: "Studio sessions in progress (70% complete)",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80",
    icon: Radio
  },
  {
    id: 4,
    date: "May 1, 2024",
    stage: "Mixing",
    status: "upcoming",
    description: "Professional mixing with Grammy-winning engineer",
    image: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&q=80",
    icon: Wand2
  },
  {
    id: 5,
    date: "May 15, 2024",
    stage: "Mastering",
    status: "upcoming",
    description: "Final touches and mastering",
    image: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?auto=format&fit=crop&q=80",
    icon: Disc
  }
];

export default function UpdatesSection() {
  return (
    <section className="py-16" id="updates">
      <div className="flex items-center gap-2 mb-12">
        <CalendarDays className="text-purple-400" size={24} />
        <h2 className="text-3xl font-bold">Album Timeline</h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>

        {/* Timeline Items */}
        <div className="space-y-12 relative">
          {timelineStages.map((stage, index) => (
            <div 
              key={stage.id}
              className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Hexagon Image */}
              <div className="w-32 h-32 relative group">
                <div className="hexagon-container absolute inset-0 overflow-hidden bg-gray-800 group-hover:scale-105 transition-transform duration-300">
                  <img 
                    src={stage.image} 
                    alt={stage.stage}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <stage.icon 
                      className={`w-8 h-8 ${
                        stage.status === 'completed' ? 'text-green-400' :
                        stage.status === 'in-progress' ? 'text-purple-400' :
                        'text-gray-400'
                      }`} 
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 relative">
                  {/* Status Indicator */}
                  <div 
                    className={`absolute top-6 ${
                      index % 2 === 0 ? 'left-0 md:right-0' : 'left-0'
                    } w-3 h-3 rounded-full transform -translate-x-1/2 md:translate-x-7 ${
                      stage.status === 'completed' ? 'bg-green-400' :
                      stage.status === 'in-progress' ? 'bg-purple-400' :
                      'bg-gray-400'
                    }`}
                  ></div>

                  <div className="flex items-center gap-2 text-sm text-purple-400 mb-2">
                    <CalendarDays size={14} />
                    <span>{stage.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{stage.stage}</h3>
                  <p className="text-gray-300">{stage.description}</p>
                  
                  {/* Status Badge */}
                  <span 
                    className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-4 ${
                      stage.status === 'completed' ? 'bg-green-400/20 text-green-400' :
                      stage.status === 'in-progress' ? 'bg-purple-400/20 text-purple-400' :
                      'bg-gray-400/20 text-gray-400'
                    }`}
                  >
                    {stage.status.charAt(0).toUpperCase() + stage.status.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}