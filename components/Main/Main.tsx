import { useState } from "react";
import UserDashboard from "./Authorised/UserDashboard";
import JoinCard from "./JoinCard";
import Logo from "./Logo";
import { motion } from "framer-motion";

const Main = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [joined, setJoined] = useState(false);

  const joinProps = {
    walletAddress,
    setWalletAddress,
    emailAddress,
    setEmailAddress,
    setJoined,
    joined,
  };

  const userDashboardProps = {
    walletAddress,
    setJoined,
  };

  const fadeInOut = {
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    visible: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.7,
    },
  };

  return (
    <div className="flex flex-col justify-betweeen items-center min-w-full">
      <section className="bg-base card card-side bg-base-200 shadow-xl bg rounded-xl">
        <div className="flex flex-col justify-start items-center gap-4 bg-base max-w-[500px]">
          <Logo />
          {!joined ? (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeInOut}
              className="w-full"
            >
              <JoinCard joinProps={joinProps} />
            </motion.div>
          ) : (
            <>
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={fadeInOut}
                className="w-full"
              >
                <UserDashboard userDashboardProps={userDashboardProps} />
              </motion.div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Main;
