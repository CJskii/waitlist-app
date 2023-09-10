import { useState } from "react";
import Logo from "./Logo";
import EmailInput from "./EmailInput";
import WalletInput from "./WalletInput";
import JoinButton from "../Buttons/JoinButton";
import TermsConditions from "./Terms&Conditions";
import Header from "./Header";

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
        />
        <TermsConditions />
      </div>
    </>
  );
};

export default JoinCard;
