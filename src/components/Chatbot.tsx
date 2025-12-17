"use client";

import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isNew?: boolean;
}

// Genera un ID único para la sesión
const generateSessionId = () => {
  return `session_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
};

// Páginas donde NO se muestra el chatbot
const HIDDEN_PATHS = ["/agenda-web", "/onboarding"];

export default function Chatbot() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId] = useState(() => generateSessionId());
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "¡Hola! Soy el Asistente de Growing. ¿En qué puedo ayudarte?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // No mostrar en páginas específicas
  if (HIDDEN_PATHS.includes(pathname)) {
    return null;
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
      isNew: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    const messageText = inputValue;
    setInputValue("");
    setIsTyping(true);

    // Quitar la animación después de que termine
    setTimeout(() => {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === userMessage.id ? { ...msg, isNew: false } : msg
        )
      );
    }, 400);

    try {
      // Enviar mensaje a n8n webhook
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

      if (webhookUrl) {
        const response = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sessionId: sessionId,
            message: messageText,
            timestamp: new Date().toISOString(),
          }),
        });

        const data = await response.json();

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response || data.message || "Gracias por tu mensaje. Te responderemos pronto.",
          sender: "bot",
          timestamp: new Date(),
          isNew: true,
        };
        setMessages((prev) => [...prev, botMessage]);

        // Quitar la animación después de que termine
        setTimeout(() => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessage.id ? { ...msg, isNew: false } : msg
            )
          );
        }, 400);
      } else {
        // Fallback si no hay webhook configurado
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "El asistente no está configurado todavía. Por favor, contacta con soporte.",
          sender: "bot",
          timestamp: new Date(),
          isNew: true,
        };
        setMessages((prev) => [...prev, botMessage]);

        setTimeout(() => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === botMessage.id ? { ...msg, isNew: false } : msg
            )
          );
        }, 400);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Lo siento, ha ocurrido un error. Por favor, inténtalo de nuevo más tarde.",
        sender: "bot",
        timestamp: new Date(),
        isNew: true,
      };
      setMessages((prev) => [...prev, botMessage]);

      setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMessage.id ? { ...msg, isNew: false } : msg
          )
        );
      }, 400);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat bubble button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#0a2540] shadow-lg flex items-center gap-2 sm:gap-3 px-3 sm:pl-4 sm:pr-5 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Abrir chat"
      >
        <span className="text-white text-xs sm:text-sm font-medium">¿Tienes dudas?</span>
        <Image
          src="/Logo_03b.svg"
          alt="Growing"
          width={28}
          height={28}
          className="w-6 h-6 sm:w-7 sm:h-7 brightness-0 invert"
        />
      </button>

      {/* Chat window */}
      <div
        className={`fixed z-50 bg-white shadow-2xl flex flex-col overflow-hidden transition-all duration-300 origin-bottom-right
          bottom-0 right-0 w-full h-full sm:bottom-6 sm:right-6 sm:w-[380px] sm:h-[520px] sm:rounded-2xl ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-0 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-[#0a2540] px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/Logo_03b.svg"
              alt="Growing"
              width={32}
              height={32}
              className="w-8 h-8 brightness-0 invert"
            />
            <div>
              <h3 className="text-white font-semibold text-sm">
                Asistente de Growing
              </h3>
              <p className="text-white/60 text-xs">Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/60 hover:text-white transition-colors"
            aria-label="Cerrar chat"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex transition-all duration-300 ease-out ${
                message.sender === "user" ? "justify-end" : "justify-start"
              } ${
                message.isNew
                  ? message.sender === "user"
                    ? "animate-slide-in-right"
                    : "animate-slide-in-left"
                  : ""
              }`}
            >
              <div
                className={`max-w-[80%] px-4 py-2.5 rounded-2xl transition-all duration-200 ${
                  message.sender === "user"
                    ? "bg-[#00abc8] text-white rounded-br-md"
                    : "bg-white text-gray-800 shadow-sm rounded-bl-md"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p
                  className={`text-[10px] mt-1 ${
                    message.sender === "user"
                      ? "text-white/60"
                      : "text-gray-400"
                  }`}
                >
                  {message.timestamp.toLocaleTimeString("es-ES", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start animate-slide-in-left">
              <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-[#00abc8] rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                  <span className="w-2 h-2 bg-[#00abc8] rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                  <span className="w-2 h-2 bg-[#00abc8] rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu mensaje..."
              className="flex-1 px-4 py-2.5 bg-gray-100 rounded-full text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00abc8]/50"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="w-10 h-10 bg-[#00abc8] rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 active:scale-90"
              aria-label="Enviar mensaje"
            >
              <svg
                className="w-5 h-5 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
