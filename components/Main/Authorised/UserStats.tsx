const UserStats = () => {
  return (
    <div className="grid grid-cols-3 stats my-4 bg-transparent w-full ">
      <div className="stat">
        <div className="stat-title w-full flex justify-center items-center">
          Position
        </div>
        <div className="stat-value w-full flex justify-center items-center">
          31768
        </div>
      </div>

      <div className="stat">
        <div className="stat-title flex justify-center items-center">
          XP points
        </div>
        <div className="stat-value flex justify-center items-center">4200</div>
      </div>

      <div className="stat">
        <div className="stat-title flex justify-center items-center">
          Invited friends
        </div>
        <div className="stat-value flex justify-center items-center">55</div>
      </div>
    </div>
  );
};

export default UserStats;
