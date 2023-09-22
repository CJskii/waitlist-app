import { BsFillPersonCheckFill } from "react-icons/bs";
import { useAccount } from "wagmi";
import { useState } from "react";

const VerifyTwitterButton = (props: { twitterHandle: string }) => {
  const { address } = useAccount();
  const { twitterHandle } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = () => {
    setIsLoading(true);

    // make an api call to verify twitter handle

    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pt-2 pb-2">
      <p className="text-lg font-bold align-left w-full">Step 3: Verify</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleButtonClick();
        }}
        className="flex justify-center items-center gap-2 w-full mt-2 mb-4 bg-base-200 text-base-content text-xl rounded-lg p-2 border-2 border-transparent hover:border-accent"
      >
        <BsFillPersonCheckFill /> Verify
      </button>
    </div>
  );
};

export default VerifyTwitterButton;
