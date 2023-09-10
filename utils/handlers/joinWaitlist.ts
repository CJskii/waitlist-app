export async function joinWaitlist({
  walletAddress,
  emailAddress,
  refLink,
}: {
  walletAddress: string;
  emailAddress: string;
  refLink?: string | null;
}) {
  const response = await fetch("/api/createUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ethereumAddress: walletAddress,
      emailAddress: emailAddress,
      refLink: refLink,
    }),
  });
  return response;
}
