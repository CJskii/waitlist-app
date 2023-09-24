import { FaSquareXTwitter } from "react-icons/fa6";
const FollowButton = () => {
  const handleButtonClick = () => {
    window.open(`https://twitter.com/Mintly_lol`, "_blank");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pt-2 pb-2">
      <p className="text-lg font-bold align-left w-full">Step 1: Follow us</p>

      <button
        onClick={(e) => {
          e.preventDefault();
          handleButtonClick();
        }}
        className="flex justify-center items-center gap-2 w-full mt-2 bg-base-200 text-base-content text-xl rounded-lg p-2 border-2 border-transparent hover:border-accent"
      >
        <FaSquareXTwitter /> Mintly
      </button>
    </div>
  );
};

export default FollowButton;
