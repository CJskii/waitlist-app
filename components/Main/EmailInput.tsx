const EmailInput = (props: { setEmailAddress: (email: string) => void }) => {
  const { setEmailAddress } = props;

  return (
    <div className="form-control w-full max-w-[90%]">
      <label className="label">
        <span className="label-text">Email*</span>
      </label>
      <input
        type="email"
        placeholder="Type your email"
        className="input input-bordered w-full bg-base-200"
        onChange={(e) => {
          setEmailAddress(e.target.value);
        }}
      />
    </div>
  );
};

export default EmailInput;
