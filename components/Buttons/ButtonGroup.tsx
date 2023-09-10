const ButtonGroup = () => {
  return (
    <div className="flex justify-between items-center w-full p-4 gap-4">
      <button className="w-full bg-base-300 text-base-content text-xl rounded-lg p-2 border-2 border-transparent hover:border-accent">
        Tweet
      </button>
      <button className="w-full  bg-base-300 text-base-content text-xl rounded-lg p-2 border-2 border-transparent hover:border-accent">
        Share
      </button>
      <button className="w-full bg-base-300 text-base-content text-xl rounded-lg p-2 border-2 border-transparent hover:border-accent">
        Get XP
      </button>
    </div>
  );
};

export default ButtonGroup;
