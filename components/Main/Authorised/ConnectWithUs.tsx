const ConnectWithUs = () => {
  const handleButtonClick = () => {
    window.open(`https://twitter.com/Mintly_lol`, "_blank");
  };

  return (
    <div className="w-full flex flex-col justify-center items-center pt-2 pb-4">
      <div className="flex w-full justify-start items-center">
        <h1 className="text-xl font-bold px-4">Connect with us</h1>{" "}
        <div className="badge badge-primary">Coming soon</div>
      </div>

      <button
        onClick={handleButtonClick}
        className="w-full max-w-[95%] mt-4 bg-success text-base-content text-xl rounded-lg p-4 border-2 border-transparent hover:border-accent"
      >
        Follow us on Twitter / X
      </button>
    </div>
  );
};

export default ConnectWithUs;
