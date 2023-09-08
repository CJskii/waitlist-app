import { useEffect } from "react";

const JoinButton = (props: { walletAddress: string; emailAddress: string }) => {
  const { walletAddress, emailAddress } = props;

  useEffect(() => {
    console.log(walletAddress);
    console.log(emailAddress);
  }, [walletAddress, emailAddress]);

  const handleJoining = () => {
    if (!walletAddress) {
      console.log("Please enter a wallet address");
      return;
    } else if (!emailAddress) {
      console.log("Please enter an email address");
      return;
    } else if (!walletAddress && !emailAddress) {
      console.log("Please enter a wallet address and an email address");
      return;
    } else {
      console.log("Joining");
    }
  };

  return (
    <button
      onClick={handleJoining}
      className="w-full max-w-[90%] mt-4 bg-base-300 text-base-content text-xl rounded-lg p-4 border-2 border-transparent hover:border-accent"
    >
      Join now
    </button>
  );
};

export default JoinButton;
