import { useState } from "react";
import { isValidEmail } from "../../utils/isValidEmailAddress";
import { isValidEthereumAddress } from "../../utils/isValidEthereumAddress";
import Toast from "../Toast";
import { joinWaitlist } from "../../utils/handlers/joinWaitlist";

const JoinButton = (props: {
  walletAddress: string;
  emailAddress: string;
  setJoined: (value: boolean) => void;
  joined: boolean;
}) => {
  const { walletAddress, emailAddress, setJoined, joined } = props;

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [refLink, setRefLink] = useState("");

  const handleJoining = async () => {
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
      const response =
        refLink != ""
          ? await joinWaitlist({ emailAddress, walletAddress, refLink })
          : await joinWaitlist({ emailAddress, walletAddress });

      if (response.ok) {
        response.json().then((data) => {
          if (data.message) {
            triggerToast(data.message);
            setJoined(true);
          }
        });
      }
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
        disabled={joined}
        onClick={handleJoining}
        className="w-full max-w-[90%] mt-4 bg-base-300 text-base-content text-xl rounded-lg p-4 border-2 border-transparent hover:border-accent"
      >
        {!joined ? "Join now" : "Already subscribed"}
      </button>

      {showToast && (
        <Toast message={feedbackMessage} onClose={() => setShowToast(false)} />
      )}
    </>
  );
};

export default JoinButton;
