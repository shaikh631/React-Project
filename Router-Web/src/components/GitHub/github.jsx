import React, { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import "react-github-calendar/tooltips.css";

function GitHub() {
  const [username, setUsername] = useState("")
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [submittedUsername, setSubmittedUsername] = useState("")

  const fetchUser = async () => {
    const uname = username.trim()
    if (!uname) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`https://api.github.com/users/${uname}`)
      if (!res.ok) throw new Error('User not found')
      const json = await res.json()
      setUserData(json)
      setSubmittedUsername(uname)
    } catch (err) {
      setUserData(null)
      setError(err.message ?? 'Error fetching user')
      setSubmittedUsername("")
    } finally {
      setLoading(false)
    }
  }
 

  return (
    <div className="container mx-auto px-4  m-t-10 max-w-4xl">
      <div className="bg-linear-to-r from-slate-900 to-slate-800 text-white p-6 rounded-xl shadow-lg flex items-center gap-4 flex-wrap">
        {userData ? (
          <>
            <img src={userData.avatar_url} alt="Git avatar" className="w-28 h-28 rounded-full object-cover border-2 border-white/20" />
            <div className="flex-1">
              <div className="text-2xl font-semibold">{userData.login}</div>
              <div className="text-sm mt-1">Followers: {userData.followers} • Public repos: {userData.public_repos}</div>
              <div className="text-xs mt-2 text-gray-300">{userData.bio}</div>
            </div>
          </>
        ) : (
          <div className="flex-1 text-slate-300">Enter a username and click Load to view avatar and followers.</div>
        )}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        <input
          className="px-3 py-2 rounded-md border border-slate-300 w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button className="px-3 py-1 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-60 disabled:cursor-not-allowed" onClick={fetchUser} disabled={loading || !username.trim()}>
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </div>

      {error && <div className="text-red-500 mt-2 text-center">{error}</div>}

      <div className="mt-6 flex justify-center">
        {submittedUsername ? (
          <GitHubCalendar username={submittedUsername} />
        ) : (
          <p className="text-slate-400 mt-3">Click Submit to view the contributions calendar.</p>
        )}
      </div>
    </div>
  );
}

export default GitHub;