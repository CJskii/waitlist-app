interface TwitterModalProps {
  showTwitterModal: boolean;
  setShowTwitterModal: (showTwitterModal: boolean) => void;
  twitterHandle: string;
  setTwitterHandle: (twitterHandle: string) => void;
}

import { useEffect, useRef } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsFillPersonCheckFill } from "react-icons/bs";

const TwitterModal = (props: TwitterModalProps) => {
  const {
    showTwitterModal,
    setShowTwitterModal,
    twitterHandle,
    setTwitterHandle,
  } = props;
  const dialogRef = useRef<null | HTMLDialogElement>(null);

  useEffect(() => {
    if (showTwitterModal && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (!showTwitterModal && dialogRef.current) {
      dialogRef.current.close();
    }
  }, [showTwitterModal]);

  const handleButtonClick = () => {
    // window.open(`https://twitter.com/Mintly_lol`, "_blank");
  };

  const SuccessDisplay = () => {
    if (!showTwitterModal) return null;
    return (
      <div className="card card-compact w-full max-w-xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            Earn extra points by joining our socials!
          </h2>

          <div className="w-full flex flex-col justify-center items-center pt-2 pb-2">
            <p className="text-lg font-bold align-left w-full">
              Step 1: Follow us
            </p>

            <button
              onClick={(e) => {
                e.preventDefault();
                handleButtonClick();
              }}
              className="flex justify-center items-center gap-2 w-full mt-2 bg-base-200 text-base-content text-xl rounded-lg p-2 border-2 border-transparent hover:border-accent"
            >
              <FaSquareXTwitter /> Mintly
            </button>
          </div>

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

          <div className="w-full flex flex-col justify-center items-center pt-2 pb-2">
            <p className="text-lg font-bold align-left w-full">
              Step 3: Verify
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                handleButtonClick();
              }}
              className="flex justify-center items-center gap-2 w-full mt-2 mb-4 bg-base-200 text-base-content text-xl rounded-lg p-2 border-2 border-transparent hover:border-accent"
            >
              <BsFillPersonCheckFill /> Verify
            </button>
          </div>

          <div className="card-actions justify-end">
            <button
              onClick={() => {
                if (dialogRef.current) {
                  dialogRef.current.close();
                }
                setShowTwitterModal(false);
              }}
              className="relative inline-flex items-center justify-center w-full px-4 py-4 text-primary-focus text-xl font-semibold transition-all duration-200 border-[1px] border-base-200 hover:opacity-80 focus:opacity-80 focus:bg-gradient-to-l from-primary to-secondary hover:text-content focus:text-success-content focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <dialog ref={dialogRef} id="my_mint_modal" className="modal">
        <form
          method="dialog"
          className="modal-box p-0 flex justify-center items-center"
        >
          <SuccessDisplay />
        </form>
        <form
          method="dialog"
          className="modal-backdrop"
          onClick={() => {
            if (dialogRef.current) {
              dialogRef.current.close();
            }
            setShowTwitterModal(false);
          }}
        />
      </dialog>
    </div>
  );
};

export default TwitterModal;
