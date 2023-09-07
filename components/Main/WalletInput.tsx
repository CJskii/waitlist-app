const WalletInput = () => {
  return (
    <div className="form-control w-full max-w-[90%]">
      <label className="label">
        <span className="label-text">Ethereum wallet address</span>
        <span className="text-sm underline tracking-wider cursor-pointer">
          Enter manually?
        </span>
      </label>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full bg-base-200"
      />
    </div>
  );
};

export default WalletInput;
