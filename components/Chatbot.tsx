"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"

const ExpandableIframeChatbot = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleChat = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Collapsed State - Fully Rounded Button */}
      {!isExpanded && (
        <button
          onClick={toggleChat}
          className="w-16 h-16 bg-blue-900 hover:bg-blue-700 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 flex items-center justify-center"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Expanded State - Chat Interface with Iframe */}
      {isExpanded && (
        <div
          className="w-80 h-96 bg-white rounded-lg shadow-xl transition-all duration-300 ease-in-out transform animate-in slide-in-from-bottom-4 overflow-hidden"
          style={{
            animation: isExpanded ? "expandChat 0.3s ease-out" : "collapseChat 0.3s ease-in",
          }}
        >
          {/* Header */}
          <div className="bg-blue-900 text-white p-3 flex items-center justify-between">
            <h3 className="font-medium text-sm">AI Assistant</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-blue-700 rounded-full p-1 transition-colors duration-200"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Iframe Container */}
          <div className="h-full">
            <iframe
              src="https://medwebsitechatbot.streamlit.app/?embed=true"
              width="100%"
              height="100%"
              title="Medical Website Chatbot"
              style={{
                border: "none",
                height: "calc(100% - 48px)", // Subtract header height
              }}
              allow="camera; microphone"
            />
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes expandChat {
          0% {
            width: 64px;
            height: 64px;
            border-radius: 50%;
          }
          100% {
            width: 320px;
            height: 384px;
            border-radius: 8px;
          }
        }

        @keyframes collapseChat {
          0% {
            width: 320px;
            height: 384px;
            border-radius: 8px;
          }
          100% {
            width: 64px;
            height: 64px;
            border-radius: 50%;
          }
        }
      `}</style>
    </div>
  )
}

export default ExpandableIframeChatbot
