'use client'

import Image from 'next/image'
import Link from 'next/link'
import GitHubRepos from '@/components/GitHubRepos'
import { useSession, signIn } from 'next-auth/react'

const projects = [
  {
    title: 'Ably-Mall',
    description: '그동안 배운 기술들을 이용해 만든 최종 웹 페이지',
    image: '/images/ably.png',
    link: 'https://ably-mall-sigma.vercel.app/',
  },
  {
    title: 'Crud',
    description: 'MongoDB를 이용해 DB를 구축한 페이지',
    image: '/images/crud.png',
    link: 'https://crud-five-lemon.vercel.app/',
  },
  {
    title: 'Clerk-app',
    description: 'Next.js 기반으로 만든 예제 서비스',
    image: '/images/clerk.png',
    link: 'https://clerk-app-iota.vercel.app/',
  },
  {
    title: 'Next.js Test',
    description: 'Next.js를 이용해 만든 첫 웹 페이지',
    image: '/images/test.png',
    link: 'https://test-xi-nine-79.vercel.app/',
  },
  {
    title: '중간고사 개인 포트폴리오',
    description: 'HTML을 이용한 1학기 중간고사 프로젝트',
    image: '/images/middle.png',
    link: 'https://middle-ind.vercel.app/',
  },
  {
    title: '기말고사 개인 포트폴리오',
    description: 'HTML을 이용한 1학기 기말고사 프로젝트',
    image: '/images/final.png',
    link: 'https://final-my.vercel.app/',
  },
]

export default function TaskPage() {
  const { data: session, status } = useSession()

  // 세션 로딩 중일 때
  if (status === 'loading') {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <p>Loading...</p>
      </main>
    )
  }

  // 로그인하지 않은 경우
  if (!session) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen bg-[#fdf3ec] p-8">
        <h1 className="text-2xl font-bold mb-4 text-[#666699]">
          로그인 후 이용해주세요
        </h1>
        <button
          onClick={() => signIn('github')}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded"
        >
          GitHub 로그인
        </button>
      </main>
    )
  }

  // 로그인한 경우
  return (
    <main className="min-h-screen bg-[#fdf3ec] p-8 flex flex-col items-center">
      {/* 과제물 카드 섹션 */}
      <h1 className="text-3xl font-extrabold text-[#666699] mb-10">
        📁 과제물 모음
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mb-16">
        {projects.map((project, idx) => (
          <Link
            href={project.link}
            key={idx}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <div className="w-full h-52 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold text-[#333]">{project.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* GitHub 리포지토리 섹션 */}
      <section className="w-full max-w-4xl">
        <GitHubRepos />
      </section>
    </main>
  )
}
