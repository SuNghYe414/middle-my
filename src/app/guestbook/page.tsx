'use client'

import { useEffect, useState } from 'react'
import { useSession, signIn } from 'next-auth/react'

interface Message {
  _id: string
  name: string
  message: string
}

export default function Guestbook() {
  const { data: session } = useSession()
  const [messages, setMessages] = useState<Message[]>([])
  const [text, setText] = useState('')

  async function loadMessages() {
    const res = await fetch('/api/guestbook')
    const data = await res.json()
    setMessages(data)
  }

  useEffect(() => {
    loadMessages()
  }, [])

  async function submitMessage() {
    if (!session) return signIn()

    await fetch('/api/guestbook', {
      method: 'POST',
      body: JSON.stringify({ message: text }),
    })

    setText('')
    loadMessages()
  }

  return (
    <div>
      <h1>방명록</h1>

      <textarea
        placeholder="메시지를 입력하세요..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={submitMessage}>
        {session ? '등록' : '로그인 후 작성'}
      </button>

      <ul>
        {messages.map((m) => (
          <li key={m._id}>
            <strong>{m.name}</strong>: {m.message}
          </li>
        ))}
      </ul>
    </div>
  )
}
