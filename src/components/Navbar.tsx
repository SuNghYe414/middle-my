'use client'

import Link from 'next/link'
import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Navbar() {
  const { data: session } = useSession()
  const username = session?.user?.name || session?.user?.email

  return (
    <nav
      className="flex justify-between items-center px-8 py-4"
      style={{ backgroundColor: '#666699' }}
    >
      <Link href="/" className="text-white text-lg font-extrabold">
        SungHye&apos;s Portfolio
      </Link>

      <div className="flex gap-4 items-center">
        <Link
          href="/about"
          style={{ color: 'white' }}
          className="text-base font-extrabold cursor-pointer"
        >
          About
        </Link>
        <Link
          href="/task"
          style={{ color: 'white' }}
          className="text-base font-extrabold cursor-pointer"
        >
          Task
        </Link>
        <Link
          href="/team"
          style={{ color: 'white' }}
          className="text-base font-extrabold cursor-pointer"
        >
          Team
        </Link>

        {/* 로그인 상태 표시 */}
        {session ? (
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">{username}</span>
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm"
            >
              로그아웃
            </button>
          </div>
        ) : (
          <button
            onClick={() => signIn('github')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
          >
            로그인
          </button>
        )}
      </div>
    </nav>
  )
}
