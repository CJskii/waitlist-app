const CopyReflink = () => {
  return (
    <div className="flex justify-start gap-4 items-center w-full px-4 py-2">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs"
      />
      <button className="btn bg-base-300 text-base-content text-xl rounded-lg p-2 px-8 border-2 border-transparent hover:border-accent">
        Copy
      </button>
    </div>
  );
};

export default CopyReflink;
