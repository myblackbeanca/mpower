import React from 'react';

interface ProgressBarProps {
  current: number;
  goal: number;
}

export default function ProgressBar({ current, goal }: ProgressBarProps) {
  const percentage = (current / goal) * 100;

  return (
    <div className="w-full">
      <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-400">
        <span>${current.toLocaleString()} raised</span>
        <span>${goal.toLocaleString()} goal</span>
      </div>
    </div>
  );
}