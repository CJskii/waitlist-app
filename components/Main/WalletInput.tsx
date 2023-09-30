import CustomButton from "../Buttons/CustomButton";
import { useEffect } from "react";
import { useAccount } from "wagmi";

const WalletInput = (props: {
  setWalletAddress: (address: string) => void;
  walletAddress: string;
}) => {
  const { setWalletAddress, walletAddress } = props;
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if (address && isConnected) {
      setWalletAddress(address);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, isConnected]);

  return (
    <div className="form-control w-full max-w-[90%]">
      <label className="label">
        <span className="label-text">Ethereum wallet address*</span>
      </label>
      <div className="input input-bordered w-full bg-base-200 flex items-center justify-center cursor-pointer">
        <CustomButton />
      </div>
    </div>
  );
};

export default WalletInput;
