import Image from 'next/image'

export default function Home() {
  const teamMembers = [
    {
      name: '박민영',
      studentId: '92410756',
      image: '/images/min2.png',
      github: 'https://github.com/minyeong0125',
    },
    {
      name: '송미강',
      studentId: '92410794',
      image: '/images/gang22.png',
      github: 'https://github.com/JunByung2',
    },
    {
      name: '원종은',
      studentId: '92410823',
      image: '/images/eun2.png',
      github: 'https://github.com/euniii0224',
    },
    {
      name: '이성혜',
      studentId: '92415548',
      image: '/images/sung.png',
      github: 'https://github.com/SuNghYe414',
    },
    {
      name: '허다현',
      studentId: '92410990',
      image: '/images/da.png',
      github: 'https://github.com/chick127',
    },
  ]

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-[#f9f9f9]">
      <h1 className="text-3xl font-extrabold text-[#666699] mb-10">
        Team 미정
      </h1>
      <p
        className="mt-2 text-center font-bold text-sm"
        style={{ color: '#666699' }}
      >
        사진 클릭시 GitHub로 이동
      </p>

      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <a href={member.github} target="_blank" rel="noopener noreferrer">
              <Image
                src={member.image}
                alt={member.name}
                width={180}
                height={180}
                className="rounded-full shadow-md object-cover hover:scale-105 transition-transform"
              />
            </a>
            <h2 className="text-base font-bold mt-4 text-[#666699] text-center">
              {member.studentId} <br /> {member.name}
            </h2>
          </div>
        ))}
      </div>
    </main>
  )
}
