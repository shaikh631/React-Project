import React, { useState } from "react";

function LeetCode() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    const uname = username.trim();
    if (!uname) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://alfa-leetcode-api.onrender.com/${uname}`
      );

      if (!res.ok) throw new Error("User not found");

      const json = await res.json();

      setUserData(json);

      // Parse calendar JSON
      if (json.submissionCalendar) {
        const parsedCalendar = JSON.parse(json.submissionCalendar);
        setCalendar(parsedCalendar);
      }
    } catch (err) {
      setUserData(null);
      setCalendar(null);
      setError(err.message || "Error fetching user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-8">

        {/* Header */}
        <h1 className="text-3xl font-bold text-center text-orange-600 mb-6">
          LeetCode Profile Viewer
        </h1>

        {/* Input Section */}
        <div className="flex justify-center gap-3 mb-6">
          <input
            className="px-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-orange-400"
            type="text"
            placeholder="Enter LeetCode Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <button
            className="px-5 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition duration-200 disabled:opacity-60"
            onClick={fetchUser}
            disabled={loading || !username.trim()}
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        {error && (
          <div className="text-red-500 text-center mb-4">{error}</div>
        )}

        {/* Profile Card */}
        {userData && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl p-6 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-6">

              <img
                src={userData.avatar}
                alt="LeetCode Avatar"
                className="w-32 h-32 rounded-full border-4 border-white shadow-md"
              />

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold">
                  {userData.username}
                </h2>

                <p className="mt-2 text-sm">
                  🌍 Global Ranking: {userData.ranking}
                </p>

                <p className="mt-3 text-lg font-semibold">
                  Total Solved: {userData.submitStats?.acSubmissionNum[0]?.count}
                </p>

                <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
                  <span className="bg-white text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Easy: {userData.submitStats?.acSubmissionNum[1]?.count}
                  </span>

                  <span className="bg-white text-yellow-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Medium: {userData.submitStats?.acSubmissionNum[2]?.count}
                  </span>

                  <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Hard: {userData.submitStats?.acSubmissionNum[3]?.count}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Calendar Section */}
        {calendar && (
          <div className="mt-8 bg-gray-50 rounded-xl p-5 shadow-inner text-center">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">
              Submission Activity
            </h3>
            <p className="text-gray-600">
              Active Days: {Object.keys(calendar).length}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LeetCode;