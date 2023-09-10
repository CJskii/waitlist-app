import { FaSquareXTwitter } from "react-icons/fa6";
import { BiShareAlt } from "react-icons/bi";
import { MdShowChart } from "react-icons/md";
import { useState } from "react";
import Toast from "../Toast";

const ButtonGroup = (props: { inviteLink: string }) => {
  const { inviteLink } = props;
  const [copied, setCopied] = useState(false);
  const handleTwitterShare = () => {
    const text = encodeURIComponent(
      "🚀 I'm earning rewards on #Mintly and you can too! 🎉 \n Get extra XP when you join from my invite link 🫂\n\n Don't miss out on the fun. 👇 \n"
    );
    const url = encodeURIComponent(
      `https://www.mintly.lol/?invite=${inviteLink}`
    );
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  const handleShareButtonClick = () => {
    const shareMessage = `🚀 Hey! I'm climbing up the leaderboard on Mintly and you can too! Join me and we can both earn rewards and bonuses. 🎉 \nDon't miss out on this awesome experience. \nUse my invite link and let's rise to the top together! \n👉 https://www.mintly.lol/?invite=${inviteLink}`;
    navigator.clipboard.writeText(shareMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex justify-between items-center w-full p-4 gap-4">
      <button
        onClick={handleTwitterShare}
        className="flex justify-center items-center gap-2 w-full bg-base-300 text-base-content text-xl rounded-lg p-2 border-2 border-transparent hover:border-accent"
      >
        <FaSquareXTwitter /> Tweet
      </button>
      <button
        onClick={handleShareButtonClick}
        className="flex justify-center items-center gap-2 w-full  bg-base-300 text-base-content text-xl rounded-lg p-2 border-2 border-transparent hover:border-accent"
      >
        <BiShareAlt />
        Share
      </button>
      <a
        className="flex justify-center items-center gap-2 w-full"
        href="https://mintly.lol"
        target="_blank"
      >
        {" "}
        <button className="flex justify-center items-center gap-2 w-full bg-base-300 text-base-content text-xl rounded-lg p-2 border-2 border-transparent hover:border-accent">
          <MdShowChart />
          More
        </button>
      </a>

      {copied && (
        <Toast
          message="Copied to clipboard!"
          onClose={() => setCopied(false)}
        />
      )}
    </div>
  );
};

export default ButtonGroup;
