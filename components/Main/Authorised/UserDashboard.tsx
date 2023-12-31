import { IoReturnUpBackOutline } from "react-icons/io5";
import UserStats from "./UserStats";
import ButtonGroup from "../../Buttons/ButtonGroup";
import CopyReflink from "./CopyReflink";
import ConnectWithUs from "./ConnectWithUs";
import { useEffect, useState } from "react";

interface UserDashboardProps {
  userDashboardProps: {
    walletAddress: string;
    setJoined: (value: boolean) => void;
  };
}

const UserDashboard = (props: UserDashboardProps) => {
  const { walletAddress, setJoined } = props.userDashboardProps;
  const [userData, setUserData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/getUserDetails`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ethereumAddress: walletAddress }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setUserData(data.user);
        setIsLoading(false);
      } catch (err) {
        setError((err as any).message || "An error occurred.");
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [walletAddress]);

  if (isLoading) {
    return <span className="loading loading-ball  w-full"></span>;
  }

  if (error) {
    return (
      <div className="text-error w-full text-center text-3xl">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center max-w-[95vw]">
      <div className="flex px-2 justify-center items-center w-full">
        <button className="btn" onClick={() => setJoined(false)}>
          <IoReturnUpBackOutline className="text-2xl" />{" "}
        </button>
        <h1 className="text-3xl font-bold py-2 px-4 w-full">
          🎉 You&apos;re on the waitlist!
        </h1>
      </div>

      <UserStats data={userData ? userData : {}} />
      <div className="w-full flex justify-start items-center max-sm:grid max-sm:grid-row-2 max-sm:pb-2">
        <h1 className="px-4 text-xl font-bold italic">
          Want to get ahead in line?
        </h1>
        <div className="badge badge-primary max-sm:justify-self-start max-sm:ml-4">
          Earn extra XP
        </div>
      </div>

      {/* <span className="w-full px-4">
        Invite your friends and be active at{" "}
        <a href="https://www.mintly.lol" target="_blank" className="underline">
          Mintly.lol
        </a>
      </span> */}
      <ButtonGroup
        inviteLink={userData.inviteLink ? userData.inviteLink : ""}
      />

      <CopyReflink
        inviteLink={userData.inviteLink ? userData.inviteLink : ""}
      />

      <ConnectWithUs />
    </div>
  );
};

export default UserDashboard;
