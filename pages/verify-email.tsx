import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function VerifyEmail() {
  const router = useRouter();
  const { token } = router.query;

  const [message, setMessage] = useState("Verifying...");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) return;
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
        }
      } catch (error) {
        setMessage("An error occurred during verification.");
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default VerifyEmail;
