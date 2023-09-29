import EmailInput from "./EmailInput";
import WalletInput from "./WalletInput";
import JoinButton from "../Buttons/JoinButton";
import TermsConditions from "./Terms&Conditions";
import Header from "./Header";
import { useState } from "react";

interface JoinCardProps {
  joinProps: {
    walletAddress: string;
    setWalletAddress: (value: string) => void;
    emailAddress: string;
    setEmailAddress: (value: string) => void;
    setJoined: (value: boolean) => void;
    joined: boolean;
  };
}

const JoinCard = (props: JoinCardProps) => {
  const {
    walletAddress,
    emailAddress,
    setJoined,
    joined,
    setEmailAddress,
    setWalletAddress,
  } = props.joinProps;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <Header />
        <EmailInput
          setEmailAddress={setEmailAddress}
          emailAddress={emailAddress}
        />
        <WalletInput
          setWalletAddress={setWalletAddress}
          walletAddress={walletAddress}
        />
        <JoinButton
          walletAddress={walletAddress}
          emailAddress={emailAddress}
          setJoined={setJoined}
          joined={joined}
          isTermsChecked={isChecked}
        />
        <div className="p-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <TermsConditions />
        </div>
      </div>
    </>
  );
};

export default JoinCard;
