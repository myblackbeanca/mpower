import React, { useState } from 'react';
import { DollarSign, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const rewards = [
  { amount: 10, name: 'Digital Supporter', description: 'Early access to singles + exclusive behind-the-scenes content' },
  { amount: 25, name: 'Album Pioneer', description: 'Digital album + exclusive remixes and bonus tracks' },
  { amount: 50, name: 'Collector\'s Edition', description: 'Limited edition vinyl + digital content + name in credits' },
  { amount: 100, name: 'VIP Experience', description: 'Virtual studio session + signed merchandise + all previous rewards' },
  { amount: 500, name: 'Executive Producer', description: 'Join a mixing session + custom vinyl message + all previous rewards' },
  { amount: 1000, name: 'Legacy Maker', description: 'Private listening party + producer credit + lifetime VIP access' },
];

export default function RewardSlider() {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const navigate = useNavigate();
  const selectedReward = rewards.find(r => r.amount === selectedAmount);

  const handlePowerRelease = () => {
    // Simulate payment processing
    setTimeout(() => {
      navigate('/thank-you');
    }, 1000);
  };

  return (
    <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-8 border border-gray-700">
      <div className="mb-8">
        <input
          type="range"
          min="0"
          max="1000"
          step="25"
          value={selectedAmount}
          onChange={(e) => setSelectedAmount(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
        />
        <div className="flex justify-between mt-4">
          {rewards.map(({ amount }) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${
                selectedAmount === amount 
                  ? 'bg-purple-500 text-white' 
                  : 'bg-gray-700 text-gray-400'
              }`}
            >
              {amount}
            </button>
          ))}
        </div>
      </div>

      {selectedReward && (
        <div className="bg-gray-900/50 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-bold">{selectedReward.name}</h3>
              <p className="text-gray-400">{selectedReward.description}</p>
            </div>
            <div className="bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full flex items-center gap-2">
              <DollarSign size={18} />
              <span className="font-bold">{selectedReward.amount}</span>
            </div>
          </div>
          <button 
            onClick={handlePowerRelease}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Sparkles size={18} />
            Power This Release
          </button>
        </div>
      )}
    </div>
  );
}