interface UserStatsProps {
  data: {
    ethereumAddress: string;
    leaderboardPosition: number;
    totalPoints: number;
    inviteLink: number;
    inviteCount: number;
  };
}

const UserStats = (props: UserStatsProps) => {
  const { leaderboardPosition, totalPoints, inviteCount } = props.data;
  return (
    <div className="grid grid-cols-3 stats my-4 bg-transparent w-full ">
      <div className="stat">
        <div className="stat-title w-full flex justify-center items-center">
          Position
        </div>
        <div className="stat-value w-full flex justify-center items-center">
          {leaderboardPosition ? leaderboardPosition : "N/A"}
        </div>
      </div>

      <div className="stat">
        <div className="stat-title flex justify-center items-center">
          XP points
        </div>
        <div className="stat-value flex justify-center items-center">
          {totalPoints ? totalPoints : "N/A"}
        </div>
      </div>

      <div className="stat">
        <div className="stat-title flex justify-center items-center">
          Invited friends
        </div>
        <div className="stat-value flex justify-center items-center">
          {inviteCount ? inviteCount : "N/A"}
        </div>
      </div>
    </div>
  );
};

export default UserStats;
