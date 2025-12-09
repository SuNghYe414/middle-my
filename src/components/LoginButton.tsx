'use client'

import { signIn, signOut, useSession } from 'next-auth/react'

interface LoginButtonProps {
  className?: string
}

export default function LoginButton({ className }: LoginButtonProps) {
  const { data: session } = useSession()

  return session ? (
    <button className={className} onClick={() => signOut()}>
      Logout
    </button>
  ) : (
    <button className={className} onClick={() => signIn()}>
      Login
    </button>
  )
}
