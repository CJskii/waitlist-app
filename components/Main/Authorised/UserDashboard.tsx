import { IoReturnUpBackOutline } from "react-icons/io5";
import UserStats from "./UserStats";

interface UserDashboardProps {
  userDashboardProps: {
    walletAddress: string;
    setJoined: (value: boolean) => void;
  };
}

const UserDashboard = (props: UserDashboardProps) => {
  const { walletAddress, setJoined } = props.userDashboardProps;
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex px-2 justify-center items-center w-full">
        <button className="btn" onClick={() => setJoined(false)}>
          <IoReturnUpBackOutline className="text-2xl" />{" "}
        </button>
        <h1 className="text-3xl font-bold py-2 px-4 w-full">
          🎉 You&apos;re on the waitlist!
        </h1>
      </div>

      <UserStats />

      <h1 className="w-full px-4 text-xl font-bold italic">
        Want to get ahead in line?
      </h1>
      <span className="w-full px-4">
        Invite your friends and be active at{" "}
        <a href="mintly.lol" target="_blank" className="underline">
          Mintly.lol
        </a>
      </span>
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

      <div className="flex justify-start gap-4 items-center w-full px-4 py-2">
        <input
          type="text"
          placeholder="Type here"
          className="input w-full max-w-xs"
        />
        <button className="btn bg-base-300 text-base-content text-xl rounded-lg p-2 px-8 border-2 border-transparent hover:border-accent">
          Copy
        </button>
      </div>

      <div className="w-full flex flex-col justify-center items-center py-2">
        <h1 className="w-full text-xl font-bold px-4">Connect with us</h1>
        <button className="w-full max-w-[95%] mt-4 bg-base-300 text-base-content text-xl rounded-lg p-4 border-2 border-transparent hover:border-accent">
          Follow us on Twitter
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
