import { isValidEmail } from "../../utils/isValidEmailAddress";

const EmailInput = (props: {
  setEmailAddress: (email: string) => void;
  emailAddress: string;
}) => {
  const { setEmailAddress, emailAddress } = props;

  let inputClass = "input input-bordered w-full bg-base-200";

  if (emailAddress) {
    if (isValidEmail(emailAddress)) {
      inputClass += " input-info";
    } else {
      inputClass += " input-error";
    }
  }

  return (
    <div className="form-control w-full max-w-[90%]">
      <label className="label">
        <span className="label-text">Email*</span>
      </label>
      <input
        type="email"
        placeholder="Type your email"
        className={inputClass}
        onChange={(e) => {
          setEmailAddress(e.target.value);
        }}
      />
    </div>
  );
};

export default EmailInput;
