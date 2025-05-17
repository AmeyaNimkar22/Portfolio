// src/components/ui/card.js
import React from 'react';

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white shadow-lg rounded-2xl p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="text-gray-800">{children}</div>;
}
