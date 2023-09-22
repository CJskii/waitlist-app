const HandleInput = (props: {
  twitterHandle: string;
  setTwitterHandle: (twitterHandle: string) => void;
}) => {
  const { twitterHandle, setTwitterHandle } = props;

  return (
    <div className="w-full flex flex-col justify-center items-center pt-2 pb-2">
      <label
        className="text-lg font-bold align-left w-full pb-2"
        htmlFor="twitterHandle"
      >
        Step 2: Enter your X handle
      </label>
      <input
        id="twitterHandle"
        type="text"
        value={twitterHandle}
        onChange={(e) => setTwitterHandle(e.target.value)}
        placeholder="@username"
        className="input input-bordered w-full"
      />
    </div>
  );
};

export default HandleInput;
