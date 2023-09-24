import { useEffect, useRef } from "react";
import FollowButton from "../../Buttons/FollowButton";
import HandleInput from "./HandleInput";
import VerifyTwitterButton from "../../Buttons/VerifyButton";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
              <div className="flex justify-between items-center">
                <h2 className="card-title pb-0">
                  Earn extra XP by joining our socials!
                </h2>
                <AiOutlineCloseCircle
                  className="text-2xl cursor-pointer"
                  onClick={() => {
                    if (dialogRef.current) {
                      dialogRef.current.close();
                    }
                    setShowTwitterModal(false);
                  }}
                />
              </div>

              <span className="text-md">
                Hint: this is required for a valid entry
              </span>

              <FollowButton />

              <HandleInput
                twitterHandle={twitterHandle}
                setTwitterHandle={setTwitterHandle}
              />

              <VerifyTwitterButton twitterHandle={twitterHandle} />
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
