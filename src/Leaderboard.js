import React, { useState, useEffect } from 'react';
import database from './database.json'; // Make sure database.json is in the same folder
import './Leaderboard.css';
import Header from './components/Header'

const Leaderboard = () => {
    const [leaderboardData, setLeaderboardData] = useState([]);

    useEffect(() => {
        const calculateReferrals = () => {
            const users = Object.keys(database).map(id => {
                const user = database[id];
                const totalReferrals = user.referrals.length;

                // Calculate active referrals (referrals who have referred at least one person)
                const activeReferrals = user.referrals.filter(
                    referralId => database[referralId].referrals.length > 0
                ).length;

                return {
                    id,
                    name: user.name,
                    totalReferrals,
                    activeReferrals
                };
            });

            // Sort by activeReferrals, and if tied, by id
            const sortedUsers = users.sort((a, b) => {
                if (b.activeReferrals === a.activeReferrals) {
                    return a.id.localeCompare(b.id);
                }
                return b.activeReferrals - a.activeReferrals;
            });

            // Add rank to each user
            const rankedUsers = sortedUsers.map((user, index) => ({
                ...user,
                rank: index + 1
            }));

            setLeaderboardData(rankedUsers);
        };

        calculateReferrals();
    }, []);

    return (


        <div className="leaderboard-container flex flex-col justify-start items-center batukbg min-h-screen">

            <Header />
            <div className="space mb-10"></div>
            <h2 className="text-black text-8xl text-center mb-10 adi">BATUK LEADERBOARD</h2>
            {/* <p className="leaderboard-subtitled adi text-xl font-light !text-black mb-5">
                Track the referrals and active engagement of top users.
            </p> */}

            {/* <div className="podium">
                {leaderboardData.slice(0, 3).map((user, index) => (
                    <div
                        key={user.id}
                        className={`podium-player ${index === 0 ? 'podium-first' : index === 1 ? 'podium-second' : 'podium-third'} bg-[#ea3859]`}
                    >
                        <div className="avatar"></div>  
                        <p className="player-name adi tebl">{user.name}</p>
                        <p className="player-volume">Total Referrals: {user.totalReferrals}</p>
                        <p className="player-volume adi text-white">Active Referrals: {user.activeReferrals}</p>
                    </div>
                ))}
            </div> */}

            <table className="leaderboard-table ">
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Total Referrals</th>
                        <th>Active Referrals</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.map((user, index) => (
                        <tr key={user.id}>
                            <td>{user.rank}</td>
                            <td>{user.name}</td>
                            <td>{user.totalReferrals}</td>
                            <td>{user.activeReferrals}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default Leaderboard;
