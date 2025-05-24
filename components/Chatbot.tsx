import React from 'react';

const Chatbot = () => {
  return (
    // The main container for the chatbot.
    // We use fixed positioning to place it relative to the viewport,
    // ensuring it stays in place even when the user scrolls.
    <div
      style={{
        position: 'fixed', // Positions the element relative to the viewport
        bottom: '20px',    // 20px from the bottom edge
        right: '20px',     // 20px from the right edge
        width: '350px',    // Fixed width for the chatbot iframe (adjust as needed)
        height: '500px',   // Fixed height for the chatbot iframe (adjust as needed)
        zIndex: 1000,      // Ensures the chatbot is on top of other content
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Adds a subtle shadow
        borderRadius: '12px', // Rounded corners for a softer look
        overflow: 'hidden', // Hides any overflow content
        backgroundColor: '#f0f2f5', // A light background color
      }}
      className="rounded-xl shadow-lg overflow-hidden bg-gray-100" // Tailwind classes for rounded corners, shadow, overflow, and background
    >
      <iframe
        src="https://your-streamlit-app-url.streamlit.app/?embed=true" // IMPORTANT: Replace with your actual Streamlit app URL
        width="100%" // Make the iframe take the full width of its parent div
        height="100%" // Make the iframe take the full height of its parent div
        title="My Streamlit Chatbot"
        style={{ border: 'none' }} // Removes the default iframe border
      ></iframe>
    </div>
  );
};

export default Chatbot;
