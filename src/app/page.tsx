'use client'

import Image from 'next/image'
import { useSession, signIn } from 'next-auth/react'
import { useEffect, useState } from 'react'

interface Message {
  _id: string
  name: string
  message: string
}

export default function Home() {
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

    if (!text.trim()) return

    await fetch('/api/guestbook', {
      method: 'POST',
      body: JSON.stringify({ message: text }),
    })

    setText('')
    loadMessages()
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      {/* 기존 메인 콘텐츠 */}
      <h1
        className="text-3xl font-extrabold mb-16"
        style={{ color: '#666699' }}
      >
        Welcome to SungHye&apos;s Portfolio
      </h1>

      <a
        href="https://github.com/SuNghYe414"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/bingti.png"
          alt="Main Visual"
          width={300}
          height={300}
          className="rounded-full shadow-md object-cover"
        />
      </a>

      <p
        className="mt-4 text-center font-bold text-sm"
        style={{ color: '#666699' }}
      >
        ☝️ 클릭하면 GitHub로 이동
      </p>

      <h2 className="text-xl font-bold mt-8 mb-8" style={{ color: '#666699' }}>
        92415548 이성혜
      </h2>

      <h2 className="text-xl font-bold mb-8" style={{ color: '#666699' }}>
        웹서버 보안 프로그래밍 수업을 듣고 있는 이성혜입니다.
      </h2>

      {/* ---------------------- */}
      {/* 방명록 UI 영역 시작     */}
      {/* ---------------------- */}

      <div className="w-full max-w-2xl mt-20">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#666699' }}>
          방명록 ✍️
        </h2>

        <div className="flex flex-col gap-3 mb-6">
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={
              session
                ? '메시지를 입력하세요...'
                : '로그인 후 작성할 수 있습니다.'
            }
            className="border p-3 rounded min-h-[80px] resize-none"
          />

          <button
            onClick={submitMessage}
            className="bg-[#666699] text-white px-4 py-2 rounded font-bold w-max"
          >
            {session ? '등록하기' : '로그인하고 작성하기'}
          </button>
        </div>

        <ul className="flex flex-col gap-3 mb-20">
          {messages.map((m) => (
            <li
              key={m._id}
              className="bg-white p-4 rounded shadow border border-gray-200"
            >
              <strong className="text-[#666699]">{m.name}</strong>
              <p className="mt-1 text-sm">{m.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
