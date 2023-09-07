const EmailInput = () => {
  return (
    <div className="form-control w-full max-w-[90%]">
      <label className="label">
        <span className="label-text">Email*</span>
      </label>
      <input
        type="text"
        placeholder="Type your email"
        className="input input-bordered w-full bg-base-200"
      />
    </div>
  );
};

export default EmailInput;
