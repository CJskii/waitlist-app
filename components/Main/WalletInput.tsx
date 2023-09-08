import CustomButton from "../Buttons/CustomButton";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { isValidEthereumAddress } from "../../utils/isValidEthereumAddress";

const WalletInput = (props: {
  setWalletAddress: (address: string) => void;
  walletAddress: string;
}) => {
  const { setWalletAddress, walletAddress } = props;
  const { address, isConnected } = useAccount();
  const [enterManually, setEnterManually] = useState(false);

  useEffect(() => {
    if (!enterManually && address && isConnected) {
      setWalletAddress(address);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address, isConnected, enterManually]);

  let inputClass = "input input-bordered w-full bg-base-200";

  if (walletAddress) {
    if (isValidEthereumAddress(walletAddress)) {
      inputClass += " input-info";
    } else {
      inputClass += " input-error";
    }
  }

  return (
    <div className="form-control w-full max-w-[90%]">
      <label className="label">
        <span className="label-text">Ethereum wallet address*</span>
        {!enterManually ? (
          <span
            onClick={() => setEnterManually(true)}
            className="text-sm underline tracking-wider cursor-pointer"
          >
            Enter manually?
          </span>
        ) : (
          <span
            onClick={() => setEnterManually(false)}
            className="text-sm underline tracking-wider cursor-pointer"
          >
            Connect wallet?
          </span>
        )}
      </label>
      {enterManually ? (
        <input
          type="text"
          placeholder="Type here"
          className={inputClass}
          onChange={
            enterManually ? (e) => setWalletAddress(e.target.value) : () => {}
          }
        />
      ) : (
        <div className="input input-bordered w-full bg-base-200 flex items-center justify-center cursor-pointer">
          <CustomButton />
        </div>
      )}
    </div>
  );
};

export default WalletInput;
