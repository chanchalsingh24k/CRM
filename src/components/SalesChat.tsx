import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SalesChat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Ready to chat software? I'm an AI bot that's here to help!" },
    { sender: "bot", text: "Ask me a question, or select an option below:" },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    // Optionally, add a bot reply after a delay
    setTimeout(() => {
      setMessages(msgs => [...msgs, { sender: "bot", text: "Thank you for your message! A sales representative will be with you shortly." }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg flex flex-col" style={{ minHeight: 500 }}>
        <div className="flex items-center gap-2 px-6 py-4 border-b bg-blue-900 rounded-t-xl">
          <span className="bg-orange-200 rounded-full p-2"><svg width="32" height="32" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fbbf24" /></svg></span>
          <span className="text-white font-bold text-lg">CVK</span>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3" style={{ maxHeight: 350 }}>
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`rounded-lg px-4 py-2 text-sm ${msg.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100"}`}>
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
        <form onSubmit={handleSend} className="flex items-center border-t px-4 py-3 gap-2">
          <input
            className="flex-1 border rounded px-3 py-2 focus:outline-none"
            placeholder="Write a message"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50" disabled={!input.trim()}>
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M2 21l21-9-21-9v7l15 2-15 2v7z" fill="currentColor"/></svg>
          </button>
        </form>
        <button className="bg-green-600 text-white px-4 py-2 rounded m-4" onClick={() => navigate("/crm-info")}>View CRM Info</button>
      </div>
    </div>
  );
};

export default SalesChat; 