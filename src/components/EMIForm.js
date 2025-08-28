import React, { useState } from "react";

function EMIForm() {
  const [clientName, setClientName] = useState("");
  const [mobile, setMobile] = useState("");
  const [totalDue, setTotalDue] = useState("");
  const [emi, setEmi] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [messages, setMessages] = useState([]);

  const API_URL = "https://<your-api-id>.execute-api.ap-south-1.amazonaws.com/prod";

  const playAudio = (base64Audio) => {
    const audio = new Audio("data:audio/mp3;base64," + base64Audio);
    audio.play();
  };

  const handleStartCall = async () => {
    try {
      const res = await fetch(`${API_URL}/emi-call`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ clientName, mobile, totalDue, emi, dueDate })
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { from: "ai", text: data.reply, lang: data.lang }
      ]);

      if (data.audio) playAudio(data.audio);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>📌 EMI Reminder</h2>
      <input placeholder="Client Name" value={clientName} onChange={(e) => setClientName(e.target.value)} />
      <input placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <input placeholder="Total Due Amount (₹)" value={totalDue} onChange={(e) => setTotalDue(e.target.value)} />
      <input placeholder="EMI Amount (₹)" value={emi} onChange={(e) => setEmi(e.target.value)} />
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button onClick={handleStartCall}>Start AI Call</button>

      <div className="chat-box">
        {messages.map((m, i) => (
          <div key={i} className={m.from === "user" ? "msg-user" : "msg-ai"}>
            <b>{m.from === "user" ? "You" : "AI"}:</b> {m.text}
            {m.lang && <small> ({m.lang})</small>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default EMIForm;
