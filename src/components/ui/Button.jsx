// src/components/ui/button.js
import React from 'react';

export function Button({ children, className = "", onClick }) {
  return (
    <button
      className={`bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-500 transition-colors duration-300 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
