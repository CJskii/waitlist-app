import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { isValidEmail } from "../utils/isValidEmailAddress";

function VerifyEmail() {
  const router = useRouter();
  const { token } = router.query;

  const [message, setMessage] = useState("Verifying...");
  const [loading, setLoading] = useState(false);
  const [showResend, setShowResend] = useState(false);
  const [email, setEmail] = useState("");

  let inputClass = "input input-bordered w-full";
  if (email) {
    if (isValidEmail(email)) {
      inputClass += " input-success";
    } else {
      inputClass += " input-error";
    }
  }

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) return;
      setLoading(true);
      try {
        const response = await fetch("/api/waitlist/verify-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (data.success) {
          setMessage("Your email has been verified successfully.");
        } else {
          setMessage(data.message || "Verification failed.");
          setShowResend(true);
        }
        setLoading(false);
      } catch (error) {
        setMessage("An error occurred during verification.");
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token]);

  const handleResendEmail = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/waitlist/resend-verification-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ emailAddress: email }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setMessage(
          "If the email provided is correct, please check your inbox for the verification email."
        );
      } else if (response.status === 429) {
        setMessage(data.message);
      } else {
        setMessage(
          "An error occurred while trying to resend the email. Please try again later."
        );
      }
    } catch (error) {
      setMessage("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[100vh] min-w-[100vw] card bg-base-200 gap-4">
      {loading ? (
        <div className="flex text-xl">
          <span className="loading loading-ring"> </span>
          <span className="loading loading-ring"> </span>
          <span className="loading loading-ring"> </span>
        </div>
      ) : (
        <>
          {" "}
          <p className="text-xl">{message}</p>
          {showResend && (
            <div className="flex flex-col justify-center items-center gap-4">
              <p>Enter your email to receive a new verification link:</p>
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputClass}
              />
              <button
                className="btn"
                disabled={!isValidEmail(email)}
                onClick={handleResendEmail}
              >
                Resend Verification Email
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default VerifyEmail;
