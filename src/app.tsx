import type { Message } from "@ai-sdk/react";
import "./styles.css";
import { useAgent } from "agents/react";
import { useAgentChat } from "agents/ai-react";

export default function Chat() {
  const agent = useAgent({
    agent: "chat",
    name: "agent",
  });

  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    clearHistory,
  } = useAgentChat({
    agent,
    maxSteps: 5,
  });

  return (
    <>
      <div className="controls-container">
        <button type="button" onClick={clearHistory} className="clear-history">
          🗑️ Clear History
        </button>
      </div>

      <div className="chat-container">
        <div className="messages-wrapper">
          {messages?.map((m: Message) => (
            <div key={m.id} className="message">
              <strong>{`${m.role}: `}</strong>
              {m.parts?.map((part, i) => {
                switch (part.type) {
                  case "text":
                    return (
                      // biome-ignore lint/suspicious/noArrayIndexKey: vibes
                      <div key={i} className="message-content">
                        {part.text}
                      </div>
                    );
                }
              })}
              <br />
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          <input
            className="chat-input"
            value={input}
            placeholder="Say something..."
            onChange={handleInputChange}
          />
        </form>
      </div>
    </>
  );
}
