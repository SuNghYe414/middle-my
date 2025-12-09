'use client'

import React, { useEffect, useState } from 'react'
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa'

type Repo = {
  id: number
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  watchers_count: number
  html_url: string
}

const username = 'SuNghYe414'

export default function GitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRepos = async () => {
      const res = await fetch(`https://api.github.com/users/${username}/repos`)
      const data = await res.json()
      setRepos(data)
      setLoading(false)
    }
    fetchRepos()
  }, [])

  if (loading) return <p>Loading repositories...</p>

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-[#666699]">
        GitHub Repos of {username}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-lg font-bold mb-1">{repo.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{repo.description}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <FaStar /> {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaCodeBranch /> {repo.forks_count}
                </span>
                <span className="flex items-center gap-1">
                  <FaEye /> {repo.watchers_count}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
