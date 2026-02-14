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
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white p-6 rounded-xl shadow-lg flex items-center gap-4 flex-wrap">
        {userData ? (
          <>
            <img
              src={userData.avatar}
              alt="LeetCode Avatar"
              className="w-28 h-28 rounded-full"
            />

            <div className="flex-1">
              <h2 className="text-2xl font-semibold">
                {userData.username}
              </h2>

              <p className="mt-1">
                Ranking: {userData.ranking}
              </p>

              <p className="mt-1">
                Total Solved:{" "}
                {userData.submitStats?.acSubmissionNum[0]?.count}
              </p>

              <p className="text-sm mt-1">
                Easy: {userData.submitStats?.acSubmissionNum[1]?.count} |
                Medium: {userData.submitStats?.acSubmissionNum[2]?.count} |
                Hard: {userData.submitStats?.acSubmissionNum[3]?.count}
              </p>
            </div>
          </>
        ) : (
          <div>Enter username and click Submit</div>
        )}
      </div>

      <div className="mt-4 flex justify-center gap-2">
        <input
          className="px-3 py-2 border rounded-md w-64"
          type="text"
          placeholder="Enter LeetCode Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          className="px-3 py-1 bg-orange-600 text-white rounded-md"
          onClick={fetchUser}
          disabled={loading || !username.trim()}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>

      {error && (
        <div className="text-red-500 mt-3 text-center">{error}</div>
      )}

      {/* Simple Calendar View */}
      {calendar && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold mb-2">
            Submission Activity (Last Days)
          </h3>
          <p>Total Active Days: {Object.keys(calendar).length}</p>
        </div>
      )}
    </div>
  );
}

export default LeetCode;