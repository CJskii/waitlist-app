import { IoReturnUpBackOutline } from "react-icons/io5";
import UserStats from "./UserStats";
import ButtonGroup from "../../Buttons/ButtonGroup";
import CopyReflink from "./CopyReflink";
import ConnectWithUs from "./ConnectWithUs";

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
      <ButtonGroup />

      <CopyReflink />

      <ConnectWithUs />
    </div>
  );
};

export default UserDashboard;
