import { useState } from "react";

export default function AIChatWidget() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setInput("");
    // TODO: Integrate OpenAI API here
    setTimeout(() => {
      setMessages(msgs => [...msgs, { sender: "bot", text: "Thanks for your question! (AI response here)" }]);
    }, 1200);
  };

  return (
    <div style={{
      position: "fixed",
      bottom: "2rem",
      right: "2rem",
      width: "340px",
      background: "#fff",
      boxShadow: "0 2px 16px #0002",
      borderRadius: "16px",
      overflow: "hidden",
      zIndex: 999
    }}>
      <div style={{ background: "#184932", color: "#fff", padding: "1rem", fontWeight: "bold" }}>
        AI Chat
      </div>
      <div style={{ padding: "1rem", height: "220px", overflowY: "auto", fontSize: "1rem" }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: "0.5rem 0", textAlign: msg.sender === "user" ? "right" : "left" }}>
            <span style={{ background: "#f7f7f7", borderRadius: "8px", padding: "0.5rem 1rem", display: "inline-block" }}>
              {msg.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", borderTop: "1px solid #eee" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your question..."
          style={{ flex: 1, border: "none", padding: "1rem", fontSize: "1rem" }}
        />
        <button
          onClick={sendMessage}
          style={{
            background: "#184932",
            color: "#fff",
            border: "none",
            padding: "0 1.5rem",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}