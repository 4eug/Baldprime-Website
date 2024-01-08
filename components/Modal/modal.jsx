import React from 'react';

export default function Modal({ open, onClose, title, children }) {
  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center transition-colors
        ${open ? 'visible bg-black/20' : 'invisible'}
      `}
    >
      {/* modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          bg-white rounded-xl lg:w-[480px] w-[300px] shadow transition-all
          ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}
        `}
      >
        <div className="flex items-center justify-between m-4">
        <div
            className="p-2 rounded-lg text-gray-400 bg-white"
          />
          <h3 className="text-lg  font-semibold text-gray-800">Taxes Services</h3>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 6L6 14M6 6L14 14" stroke="#6C737F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="border-b border-gray-200 mb-4"></div>
        {children}
      </div>
    </div>
  );
}
