import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEffect } from "react";
import { useAccount } from "wagmi";

export const CustomButton = () => {
  const { address, isConnected } = useAccount();

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            className="play-btn px-4 py-3 animate-text text-2xl"
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button onClick={openConnectModal} className="text-xl w-full">
                    Connect Wallet
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong Network
                  </button>
                );
              }
              return (
                <div>
                  <button onClick={openAccountModal} type="button">
                    {/* {account.displayName} */}

                    {/* ? ` (${account.displayBalance})`
                      : ""} */}
                    {account.address.slice(0, 6) +
                      "..." +
                      account.address.slice(account.address.length - 4)}
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
export default CustomButton;
