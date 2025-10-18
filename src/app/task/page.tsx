'use client'

import Image from 'next/image'
import Link from 'next/link'

const projects = [
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

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f9f9f9] p-8 flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-[#666699] mb-10">
        📁 과제물 모음
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
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
    </main>
  )
}
