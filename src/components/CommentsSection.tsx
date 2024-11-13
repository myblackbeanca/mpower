import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Heart } from 'lucide-react';

const comments = [
  {
    id: 1,
    user: "Sarah K.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    comment: "The fusion of electronic and classical elements in your music is mind-blowing! Can't wait for the new album.",
    likes: 124,
    timestamp: "2 days ago"
  },
  {
    id: 2,
    user: "Mike R.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    comment: "Been following since Urban Echoes, and each release just gets better. This project sounds incredible!",
    likes: 98,
    timestamp: "3 days ago"
  },
  {
    id: 3,
    user: "Elena M.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
    comment: "The Midnight Chronicles album changed how I think about electronic music. Pure genius!",
    likes: 87,
    timestamp: "4 days ago"
  },
  {
    id: 4,
    user: "David L.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
    comment: "Your live shows are always an experience. Looking forward to the new material!",
    likes: 76,
    timestamp: "5 days ago"
  },
  {
    id: 5,
    user: "Sophie T.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80",
    comment: "The way you blend genres is incredible. Each track tells its own story.",
    likes: 65,
    timestamp: "6 days ago"
  },
  {
    id: 6,
    user: "James H.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    comment: "That preview track was fire! Can't wait to hear the full album.",
    likes: 54,
    timestamp: "1 week ago"
  },
  {
    id: 7,
    user: "Lily P.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80",
    comment: "The production quality on your tracks is always top-notch. Pure excellence!",
    likes: 43,
    timestamp: "1 week ago"
  },
  {
    id: 8,
    user: "Alex W.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
    comment: "Your music has been the soundtrack to my creative sessions. Thank you!",
    likes: 32,
    timestamp: "1 week ago"
  },
  {
    id: 9,
    user: "Nina R.",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80",
    comment: "The way you interact with fans is amazing. Really feels like we're part of the journey.",
    likes: 28,
    timestamp: "2 weeks ago"
  },
  {
    id: 10,
    user: "Tom K.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80",
    comment: "Been supporting since day one. The evolution of your sound is incredible!",
    likes: 21,
    timestamp: "2 weeks ago"
  }
];

export default function CommentsSection() {
  const [visibleComments, setVisibleComments] = useState(5);

  return (
    <section className="py-16" id="comments">
      <div className="flex items-center gap-2 mb-8">
        <MessageCircle className="text-purple-400" />
        <h2 className="text-3xl font-bold">Fan Comments</h2>
      </div>
      <div className="space-y-6">
        {comments.slice(0, visibleComments).map((comment) => (
          <div key={comment.id} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6">
            <div className="flex items-start gap-4">
              <img 
                src={comment.avatar} 
                alt={comment.user} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">{comment.user}</h3>
                  <span className="text-sm text-gray-400">{comment.timestamp}</span>
                </div>
                <p className="text-gray-300 mb-4">{comment.comment}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors">
                    <ThumbsUp size={16} />
                    <span>{comment.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-red-400 transition-colors">
                    <Heart size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {visibleComments < comments.length && (
        <div className="text-center mt-8">
          <button 
            onClick={() => setVisibleComments(prev => prev + 5)}
            className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-full transition-colors"
          >
            Show More Comments
          </button>
        </div>
      )}
    </section>
  );
}