import { useState } from "react";

function AIAssistant() {

  const [messages, setMessages] = useState([
    { role: "assistant", text: "Hello! Ask me anything about this paper." }
  ]);

  const [input, setInput] = useState("");

  function sendMessage() {

    if (!input) return;

    const newMessages = [
      ...messages,
      { role: "user", text: input }
    ];

    setMessages(newMessages);
    setInput("");
  }

  return (
    <div className="h-full flex flex-col">

      <div className="p-4 border-b border-greyBlue">

        <h2 className="text-lg font-semibold text-primary">
          AI Research Assistant
        </h2>

      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {messages.map((msg, index) => (

          <div
            key={index}
            className={`p-3 rounded-lg max-w-xs ${
              msg.role === "user"
                ? "bg-primary text-white ml-auto"
                : "bg-bgSoft text-textPrimary"
            }`}
          >
            {msg.text}
          </div>

        ))}

      </div>

      <div className="p-4 border-t border-greyBlue flex gap-2">

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about the paper..."
          className="flex-1 border border-greyBlue rounded-lg px-3 py-2 outline-none focus:border-primary"
        />

        <button
          onClick={sendMessage}
          className="bg-primary text-white px-4 rounded-lg hover:bg-primaryHover"
        >
          Send
        </button>

      </div>

    </div>
  );
}

export default AIAssistant;