export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#f9f9f9] gap-6 p-4">
      <section className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        <span className="text-3xl mr-3">👩‍💻</span>
        <h1 className="text-2xl font-bold text-[#666699] mb-4">Lee SungHye</h1>
        <p className="text-gray-800 leading-relaxed">생년월일 : 2005.04.14</p>
        <p className="text-gray-800 leading-relaxed">거주지 : 서울</p>
        <p className="text-gray-800 leading-relaxed">
          Instagram : @castle_hyye
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        <span className="text-3xl mr-3">🎓</span>
        <h1 className="text-2xl font-bold text-[#666699] mb-4">학력</h1>
        <p className="text-gray-800 leading-relaxed">
          초등학교 졸업 [ 2012~2018 ]
        </p>
        <p className="text-gray-800 leading-relaxed">
          중학교 졸업 [ 2018~2021 ]
        </p>
        <p className="text-gray-800 leading-relaxed">
          고등학교 졸업 [ 2021~2024 ]
        </p>
        <p className="text-gray-800 leading-relaxed">
          중부대학교 재학 중 [ 2024~ ]
        </p>
      </section>

      <section className="bg-white rounded-xl shadow-lg p-8 max-w-xl w-full">
        <span className="text-3xl mr-3">🛠️</span>
        <h1 className="text-2xl font-bold text-[#666699] mb-4">능력</h1>
        <ul className="list-disc list-inside text-gray-800 leading-relaxed">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>React & Next.js</li>
        </ul>
      </section>
    </main>
  )
}
