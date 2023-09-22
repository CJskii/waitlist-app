import { useEffect, useRef } from "react";
import FollowButton from "../../Buttons/FollowButton";
import HandleInput from "./HandleInput";
import VerifyTwitterButton from "../../Buttons/VerifyButton";

interface TwitterModalProps {
  showTwitterModal: boolean;
  setShowTwitterModal: (showTwitterModal: boolean) => void;
  twitterHandle: string;
  setTwitterHandle: (twitterHandle: string) => void;
}

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

  return (
    <div>
      <dialog ref={dialogRef} id="my_mint_modal" className="modal">
        <form
          method="dialog"
          className="modal-box p-0 flex justify-center items-center"
        >
          <div className="card card-compact w-full max-w-xl bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Earn extra XP by joining our socials!
              </h2>

              <FollowButton />

              <HandleInput
                twitterHandle={twitterHandle}
                setTwitterHandle={setTwitterHandle}
              />

              <VerifyTwitterButton twitterHandle={twitterHandle} />

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
