"use client"

import { useState } from "react"
import { MessageSquare, X, Send, Sparkles, Bot } from "lucide-react"

const FAQ_PROMPTS = [
  {
    q: "What is your primary tech stack?",
    a: "My core stack includes Next.js, React, TypeScript, and Tailwind CSS on the frontend, combined with Laravel, Node.js, PostgreSQL/MySQL, and Linux VPS environments on the backend."
  },
  {
    q: "Tell me about SIAKAD Almahir.",
    a: "SIAKAD Almahir is an academic information system I designed for PPQIT Al-Mahir. It features a zero-conflict real-time scheduling algorithm and automated e-Rapor generation, cutting school admin workload by 80%."
  },
  {
    q: "Are you available for freelance or roles?",
    a: "Yes! I am actively open for freelance web development projects, full-stack engineer internships, and junior remote/on-site software engineering roles."
  },
  {
    q: "How can I contact Gaza directly?",
    a: "You can email me at gazaalfath@gmail.com, reach out on WhatsApp at +62 8xx xxxx xxxx, or connect via GitHub (@gazfath12) & LinkedIn!"
  }
]

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Array<{ sender: "bot" | "user"; text: string }>>([
    {
      sender: "bot",
      text: "Halo! 👋 I'm Gaza's virtual portfolio assistant. Feel free to ask anything about his projects, tech stack, or availability!"
    }
  ])
  const [inputText, setInputText] = useState("")

  const handleSelectPrompt = (prompt: { q: string; a: string }) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: prompt.q },
      { sender: "bot", text: prompt.a }
    ])
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputText.trim()) return

    const userText = inputText.trim()
    setInputText("")

    setMessages((prev) => [...prev, { sender: "user", text: userText }])

    // Generate automated response based on user input keyword
    setTimeout(() => {
      let botReply = "Thank you for your message! Gaza will get back to you shortly. You can also drop a direct email at gazaalfath@gmail.com."
      const lower = userText.toLowerCase()
      if (lower.includes("siakad") || lower.includes("school")) {
        botReply = "SIAKAD Almahir is Gaza's flagship academic platform reducing admin workload by 80% with real-time zero-conflict scheduling!"
      } else if (lower.includes("stack") || lower.includes("technol") || lower.includes("skill")) {
        botReply = "Gaza builds with Next.js, React, Laravel, TypeScript, PostgreSQL, and Linux VPS DevOps!"
      } else if (lower.includes("hire") || lower.includes("job") || lower.includes("freelance")) {
        botReply = "Gaza is currently OPEN for freelance projects and junior software engineering roles! Feel free to leave your contact info."
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botReply }])
    }, 600)
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-surface2 border border-line2/80 hover:border-brand/80 text-ink font-medium text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95 group"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
        </span>
        <MessageSquare size={16} className="text-blue-400 group-hover:rotate-12 transition-transform" />
        <span>Chat with Gaza</span>
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-32px)] sm:w-[380px] bg-page border border-line rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-portal max-h-[500px]">
          
          {/* Header */}
          <div className="bg-page border-b border-line p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center text-brand">
                <Bot size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold text-ink flex items-center gap-1.5">
                  Gaza Assistant <Sparkles size={12} className="text-warn" />
                </h4>
                <p className="text-[10px] text-success font-medium">Online • Instant Answers</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-ink3 hover:text-ink rounded-full hover:bg-ghost2 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="p-4 flex-1 overflow-y-auto space-y-3 text-xs max-h-[300px] bg-ghost">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex gap-2.5 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-brand/20 text-brand flex items-center justify-center flex-shrink-0 text-[10px]">
                    GA
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    msg.sender === "user"
                      ? "bg-blue-600 text-white rounded-tr-none"
                      : "bg-surface2 border border-line text-ink2 rounded-tl-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Prompt Chips */}
          <div className="p-2.5 border-t border-line/60 bg-page flex gap-2 overflow-x-auto no-scrollbar">
            {FAQ_PROMPTS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectPrompt(item)}
                className="flex-shrink-0 text-[11px] bg-surface2 hover:bg-surface3 border border-line text-ink2 hover:text-ink px-3 py-1.5 rounded-full transition-colors"
              >
                {item.q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form onSubmit={handleSendMessage} className="p-2.5 bg-page border-t border-line flex gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-surface2 border border-line rounded-xl px-3 py-2 text-xs text-ink placeholder-ink4 focus:outline-none focus:border-brand/60"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 text-white p-2 rounded-xl transition-colors"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
