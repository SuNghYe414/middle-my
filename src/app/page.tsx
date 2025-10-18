import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
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
        Tel.010-0526-1107
      </h2>
    </main>
  )
}
