import React, { useState } from 'react';
import { ChevronRight, Gift, Music2, Calendar, Users, Crown, X } from 'lucide-react';

const tourSteps = [
  {
    title: "Welcome to Ethereal Echoes",
    description: "Join us in creating a groundbreaking fusion of traditional and electronic music. Your support makes this possible.",
    icon: Music2,
    highlight: "#rewards"
  },
  {
    title: "Exclusive Rewards",
    description: "Choose from various support tiers, each with unique perks from digital content to private studio sessions.",
    icon: Gift,
    highlight: "#rewards"
  },
  {
    title: "Project Timeline",
    description: "Follow our journey from concept to release. Stay updated on each milestone of the album creation.",
    icon: Calendar,
    highlight: "#updates"
  },
  {
    title: "Join the Community",
    description: "Connect with other supporters and be part of the creative process through exclusive updates and events.",
    icon: Users,
    highlight: "#comments"
  },
  {
    title: "MINY Access",
    description: "Get special privileges and early access to new releases, merchandise, and virtual events.",
    icon: Crown,
    highlight: "#releases"
  }
];

export default function TourGuide() {
  const [currentStep, setCurrentStep] = useState(0);
  const [showTour, setShowTour] = useState(true);

  const handleNext = () => {
    if (currentStep < tourSteps.length - 1) {
      setCurrentStep(currentStep + 1);
      const element = document.querySelector(tourSteps[currentStep + 1].highlight);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else {
      setShowTour(false);
    }
  };

  if (!showTour) return null;

  const currentTourStep = tourSteps[currentStep];

  return (
    <div className="fixed bottom-8 right-8 z-50 max-w-sm w-full animate-slide-in">
      <div className="bg-gray-800/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-500/20">
        <button 
          onClick={() => setShowTour(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div className="bg-purple-500/20 p-3 rounded-lg">
            <currentTourStep.icon className="text-purple-400" size={24} />
          </div>
          <div>
            <h3 className="font-bold text-lg">{currentTourStep.title}</h3>
            <p className="text-sm text-gray-400">Step {currentStep + 1} of {tourSteps.length}</p>
          </div>
        </div>

        <p className="text-gray-300 mb-6">{currentTourStep.description}</p>

        <div className="flex justify-between items-center">
          <div className="flex gap-1">
            {tourSteps.map((_, index) => (
              <div 
                key={index}
                className={`w-8 h-1 rounded-full transition-colors ${
                  index === currentStep ? 'bg-purple-500' : 'bg-gray-700'
                }`}
              ></div>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            {currentStep === tourSteps.length - 1 ? 'Finish' : 'Next'}
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}