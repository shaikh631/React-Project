import React, { useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import "react-github-calendar/tooltips.css";
import "./github.css";

function GitHub() {
  const [username, setUsername] = useState("")
  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUser = async () => {
    if (!username) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`https://api.github.com/users/${username}`)
      if (!res.ok) throw new Error('User not found')
      const json = await res.json()
      setUserData(json)
    } catch (err) {
      setUserData(null)
      setError(err.message ?? 'Error fetching user')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="gh-container">
      <div className="gh-card">
        {userData ? (
          <>
            <img src={userData.avatar_url} alt="Git avatar" className="gh-avatar" />
            <div className="gh-info">
              <div className="text-2xl font-semibold">{userData.login}</div>
              <div className="text-sm mt-1">Followers: {userData.followers} • Public repos: {userData.public_repos}</div>
              <div className="text-xs mt-2 text-gray-300">{userData.bio}</div>
            </div>
          </>
        ) : (
          <div className="gh-info">Enter a username and click Load to view avatar and followers.</div>
        )}
      </div>

      <div className="gh-input-row">
        <input
          className="gh-input"
          type="text"
          placeholder="Enter GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') fetchUser() }}
        />

        <button className="gh-button" onClick={fetchUser} disabled={loading || !username}>
          {loading ? 'Loading...' : 'Load'}
        </button>
      </div>

      {error && <div style={{ color: 'red', marginTop: 8, textAlign: 'center' }}>{error}</div>}

      <div className="gh-calendar">
        {username ? (
          <GitHubCalendar username={username} />
        ) : (
          <p className="gh-hint">Enter a username to view the contributions calendar.</p>
        )}
      </div>
    </div>
  );
}

export default GitHub
export const githubInfoLoader = async ({params}) => {
    const response = await fetch(`https://api.github.com/users/${params.username}`)
    return response.json()
}