import React from 'react';
import { CheckCircle } from 'lucide-react';

interface NotificationProps {
  show: boolean;
  message: string;
}

export function Notification({ show, message }: NotificationProps) {
  if (!show) return null;

  return (
    <div className="fixed top-4 right-4 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-slide-in z-50">
      <CheckCircle size={18} />
      {message}
    </div>
  );
}