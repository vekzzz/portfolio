import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { sendMessage as geminiSend, resetChat } from '@/lib/gemini'

type Message = {
  id: string
  role: 'bot' | 'user'
  text: string
}

const QUICK_PROMPTS = [
  { label: 'About Veks', value: 'Tell me about Veks' },
  { label: 'Projects', value: 'What projects has Veks built?' },
  { label: 'Tech stack', value: "What's the tech stack?" },
  { label: 'Get in touch', value: 'How can I contact Veks?' },
]

const GREETING: Message = {
  id: 'greeting',
  role: 'bot',
  text: "Hello. I'm VEKS.AI — your guide through this portfolio. Ask me anything or pick a topic below.",
}

function BotIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2" />
      <circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none" />
      <path d="M9 18h6" strokeLinecap="round" />
      <path d="M12 3v3" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
    </svg>
  )
}

export function ChatBot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([GREETING])
  const [input, setInput] = useState('')
  const [showQuick, setShowQuick] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 250)
  }, [open])

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return
    setShowQuick(false)
    const userMsg: Message = { id: Date.now().toString(), role: 'user', text: text.trim() }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsTyping(true)
    try {
      const reply = await geminiSend(text.trim())
      setMessages(prev => [
        ...prev,
        { id: Date.now().toString() + '_bot', role: 'bot', text: reply },
      ])
    } catch {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now().toString() + '_err',
          role: 'bot',
          text: 'Something went wrong. Check your API key or try again.',
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  const handleReset = () => {
    resetChat()
    setMessages([GREETING])
    setShowQuick(true)
    setInput('')
  }

  const inputActive = input.trim().length > 0

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '28px',
        right: '28px',
        zIndex: 9999,
      }}
    >
      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              bottom: '68px',
              right: 0,
              width: 'min(360px, calc(100vw - 40px))',
              background: 'var(--surface)',
              border: '1px solid var(--line-2)',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 8px 48px rgba(0,0,0,0.55), 0 0 0 1px rgba(0,200,212,0.06)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Header */}
            <div
              style={{
                background: 'var(--bg-2)',
                borderBottom: '1px solid var(--line-2)',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '9px',
                  background: 'rgba(0,200,212,0.08)',
                  border: '1px solid rgba(0,200,212,0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  flexShrink: 0,
                }}
              >
                <BotIcon size={17} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: 'var(--ink)',
                    textTransform: 'uppercase',
                  }}
                >
                  VEKS.AI
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                  <span
                    style={{
                      display: 'block',
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      background: '#31c48d',
                      animation: 'status-pulse 2s infinite',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      color: 'var(--muted)',
                      letterSpacing: '0.04em',
                    }}
                  >
                    online · portfolio guide
                  </span>
                </div>
              </div>

              {/* Reset conversation */}
              <button
                onClick={handleReset}
                title="Reset conversation"
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '7px',
                  border: '1px solid var(--line-2)',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted)',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--ink)'
                  e.currentTarget.style.background = 'var(--surface)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--muted)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                </svg>
              </button>

              <button
                onClick={() => setOpen(false)}
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '7px',
                  border: '1px solid var(--line-2)',
                  background: 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--muted)',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'color 0.15s, background 0.15s, border-color 0.15s',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.color = 'var(--ink)'
                  el.style.background = 'var(--surface)'
                  el.style.borderColor = 'var(--line-2)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.color = 'var(--muted)'
                  el.style.background = 'transparent'
                }}
              >
                <CloseIcon />
              </button>
            </div>

            {/* Messages */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '14px 14px 10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                maxHeight: '300px',
                minHeight: '180px',
                scrollbarWidth: 'none',
              }}
            >
              {messages.map(msg => (
                <div
                  key={msg.id}
                  style={{
                    display: 'flex',
                    flexDirection: msg.role === 'user' ? 'row-reverse' : 'row',
                    gap: '7px',
                    alignItems: 'flex-start',
                  }}
                >
                  {msg.role === 'bot' && (
                    <div
                      style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '6px',
                        background: 'rgba(0,200,212,0.08)',
                        border: '1px solid rgba(0,200,212,0.14)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent)',
                        flexShrink: 0,
                        marginTop: '2px',
                      }}
                    >
                      <BotIcon size={11} />
                    </div>
                  )}
                  <div
                    style={{
                      maxWidth: '82%',
                      padding: '8px 11px',
                      borderRadius:
                        msg.role === 'user' ? '10px 10px 3px 10px' : '10px 10px 10px 3px',
                      background: msg.role === 'user' ? 'var(--accent)' : 'var(--bg-2)',
                      border: msg.role === 'bot' ? '1px solid var(--line-2)' : 'none',
                      color: msg.role === 'user' ? 'var(--accent-ink)' : 'var(--ink)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '12px',
                      lineHeight: '1.65',
                      letterSpacing: '0.01em',
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div style={{ display: 'flex', gap: '7px', alignItems: 'flex-start' }}>
                  <div
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '6px',
                      background: 'rgba(0,200,212,0.08)',
                      border: '1px solid rgba(0,200,212,0.14)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <BotIcon size={11} />
                  </div>
                  <div
                    style={{
                      padding: '10px 14px',
                      borderRadius: '10px 10px 10px 3px',
                      background: 'var(--bg-2)',
                      border: '1px solid var(--line-2)',
                      display: 'flex',
                      gap: '4px',
                      alignItems: 'center',
                    }}
                  >
                    {[0, 1, 2].map(i => (
                      <span
                        key={i}
                        style={{
                          display: 'block',
                          width: '5px',
                          height: '5px',
                          borderRadius: '50%',
                          background: 'var(--muted)',
                          animation: `status-pulse 1.2s ${i * 0.2}s infinite`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Quick prompts */}
              {showQuick && !isTyping && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px',
                    marginTop: '2px',
                    paddingLeft: '29px',
                  }}
                >
                  {QUICK_PROMPTS.map(p => (
                    <button
                      key={p.value}
                      onClick={() => sendMessage(p.value)}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        letterSpacing: '0.05em',
                        padding: '4px 10px',
                        borderRadius: '100px',
                        border: '1px solid var(--line-2)',
                        background: 'var(--chip)',
                        color: 'var(--ink-2)',
                        cursor: 'pointer',
                        transition: 'border-color 0.15s, color 0.15s',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.borderColor = 'var(--accent)'
                        e.currentTarget.style.color = 'var(--accent)'
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.borderColor = 'var(--line-2)'
                        e.currentTarget.style.color = 'var(--ink-2)'
                      }}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Divider */}
            <div style={{ height: '1px', background: 'var(--line-2)' }} />

            {/* Input */}
            <div
              style={{
                background: 'var(--bg-2)',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
                placeholder="Ask anything..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--ink)',
                  letterSpacing: '0.02em',
                  minWidth: 0,
                }}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!inputActive || isTyping}
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '8px',
                  background: inputActive && !isTyping ? 'var(--accent)' : 'var(--chip)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: inputActive && !isTyping ? 'var(--accent-ink)' : 'var(--muted)',
                  cursor: inputActive && !isTyping ? 'pointer' : 'default',
                  transition: 'background 0.18s, color 0.18s',
                  flexShrink: 0,
                }}
              >
                <SendIcon />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pulse ring */}
      {!open && (
        <span
          style={{
            position: 'absolute',
            inset: '-5px',
            borderRadius: '50%',
            border: '1px solid rgba(0,200,212,0.25)',
            animation: 'status-pulse 2.5s infinite',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Trigger button */}
      <motion.button
        onClick={() => setOpen(v => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        style={{
          position: 'relative',
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: open ? 'var(--accent)' : 'var(--surface)',
          border: `1px solid ${open ? 'transparent' : 'var(--line-2)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: open ? 'var(--accent-ink)' : 'var(--accent)',
          cursor: 'pointer',
          boxShadow: open
            ? '0 0 24px rgba(0,200,212,0.4)'
            : '0 2px 12px rgba(0,0,0,0.4)',
          transition: 'background 0.2s, border-color 0.2s, color 0.2s, box-shadow 0.2s',
          zIndex: 1,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={open ? 'close' : 'bot'}
            initial={{ opacity: 0, rotate: -10, scale: 0.8 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 10, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {open ? <CloseIcon /> : <BotIcon size={22} />}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
