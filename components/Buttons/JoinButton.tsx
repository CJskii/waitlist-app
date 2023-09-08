import { useState } from "react";
import { isValidEmail } from "../../utils/isValidEmailAddress";
import { isValidEthereumAddress } from "../../utils/isValidEthereumAddress";
import Toast from "../Toast";

const JoinButton = (props: { walletAddress: string; emailAddress: string }) => {
  const { walletAddress, emailAddress } = props;

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleJoining = () => {
    if (!isValidEthereumAddress(walletAddress) && !isValidEmail(emailAddress)) {
      triggerToast("Please enter a wallet address and an email address");
      return;
    } else if (!isValidEthereumAddress(walletAddress)) {
      triggerToast("Please enter valid wallet address");
      return;
    } else if (!isValidEmail(emailAddress)) {
      triggerToast("Please enter valid email address");
      return;
    } else {
      console.log("Joining");
    }
  };

  const triggerToast = (message: string) => {
    setFeedbackMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  return (
    <>
      <button
        onClick={handleJoining}
        className="w-full max-w-[90%] mt-4 bg-base-300 text-base-content text-xl rounded-lg p-4 border-2 border-transparent hover:border-accent"
      >
        Join now
      </button>

      {showToast && (
        <Toast message={feedbackMessage} onClose={() => setShowToast(false)} />
      )}
    </>
  );
};

export default JoinButton;
