import { useState } from "react";
import Logo from "./Logo";
import EmailInput from "./EmailInput";
import WalletInput from "./WalletInput";
import JoinButton from "../Buttons/JoinButton";
import TermsConditions from "./Terms&Conditions";
import Header from "./Header";

const Main = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  return (
    <div className="flex flex-col justify-betweeen items-center min-w-full">
      <section className="bg-base card card-side bg-base-200 shadow-xl bg rounded-xl">
        <div className="flex flex-col justify-start items-center gap-4 bg-base max-w-[500px]">
          <Logo />
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
            />
            <TermsConditions />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
