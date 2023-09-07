import CustomButton from "../Buttons/CustomButton";
import { useState } from "react";

const WalletInput = (props: {
  setWalletAddress: (address: string) => void;
}) => {
  const { setWalletAddress } = props;

  const [enterManually, setEnterManually] = useState(false);

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
          className="input input-bordered w-full bg-base-200"
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
