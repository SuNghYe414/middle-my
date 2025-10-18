import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center px-8 py-4"
      style={{ backgroundColor: '#666699' }}
    >
      <Link href="/" className="text-white text-lg font-extrabold">
        SungHye&apos;s Portfolio
      </Link>

      <div className="flex gap-4">
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
      </div>
    </nav>
  )
}
