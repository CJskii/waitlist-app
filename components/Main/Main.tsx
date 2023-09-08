import { useEffect, useState } from "react";
import Logo from "./Logo";
import EmailInput from "./EmailInput";
import WalletInput from "./WalletInput";
import JoinButton from "../Buttons/JoinButton";
import TermsConditions from "./Terms&Conditions";
import Header from "./Header";
import { isValidEmail } from "../../utils/isValidEmailAddress";
import { isValidEthereumAddress } from "../../utils/isValidEthereumAddress";

const Main = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [walletAddress, setWalletAddress] = useState("");

  useEffect(() => {
    if (emailAddress && !isValidEmail(emailAddress)) {
      // Handle invalid email format here, perhaps show an error message to the user
      console.log("Invalid email format");
    }

    if (walletAddress && !isValidEthereumAddress(walletAddress)) {
      // Handle invalid Ethereum address format here, perhaps show an error message to the user
      console.log("Invalid Ethereum address format");
    }
  }, [emailAddress, walletAddress]);

  // pass is connected to the button
  // pass email address to the button
  // pass wallet address to the button

  return (
    <div className="flex flex-col justify-betweeen items-center min-w-full">
      <section className="bg-base card card-side bg-base-200 shadow-xl bg rounded-xl">
        <div className="flex flex-col justify-start items-center gap-4 bg-base max-w-[500px]">
          <Logo />
          <div className="w-full flex flex-col justify-center items-center gap-4">
            {/* Mint Form */}
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
