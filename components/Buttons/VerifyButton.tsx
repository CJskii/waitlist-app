import { BsFillPersonCheckFill } from "react-icons/bs";
import { useAccount } from "wagmi";
import { useState } from "react";
import Toast from "../Toast";

const VerifyTwitterButton = (props: { twitterHandle: string }) => {
  const { address } = useAccount();
  const { twitterHandle } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleButtonClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          address,
          twitterHandle,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setToastMessage("Twitter handle updated successfully.");
        setShowToast(true);
      } else {
        setToastMessage(data.error);
        setShowToast(true);
      }
    } catch (error) {
      setToastMessage("Failed to sign up.");
      setShowToast(true);
    }

    setTimeout(() => {
      setShowToast(false);
    }, 5000);

    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pt-2 pb-2">
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
      <p className="text-lg font-bold align-left w-full">Step 3: Verify</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          handleButtonClick();
        }}
        className="w-full mt-2 mb-2 bg-base-200 text-base-content text-xl rounded-lg p-2 border-2 border-transparent hover:border-accent"
      >
        {isLoading ? (
          <span className="loading loading-infinity loading-md"></span>
        ) : (
          <span className="flex justify-center items-center gap-2">
            <BsFillPersonCheckFill /> Submit
          </span>
        )}
      </button>
    </div>
  );
};

export default VerifyTwitterButton;
