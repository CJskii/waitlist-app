import { useState } from "react";
import Toast from "../../Toast";

const CopyReflink = (props: { inviteLink: string }) => {
  const { inviteLink } = props;
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(
      `https://www.mintly.lol/?invite=${inviteLink}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex justify-start gap-4 items-center w-full px-4 py-2">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs"
        defaultValue={`https://www.mintly.lol/?invite=${inviteLink}`}
        readOnly
      />
      <button
        onClick={handleCopyClick}
        className="btn bg-base-300 text-base-content text-xl rounded-lg p-2 px-8 border-2 border-transparent hover:border-accent"
      >
        {copied ? "Copied" : "Copy"}
      </button>
      {copied && (
        <Toast
          message="Copied to clipboard!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default CopyReflink;
