import Link from "next/link";

const TermsConditions = () => {
  return (
    <span className="text-sm tracking-wide text-center pt-4 pb-6 px-2">
      I agree to{" "}
      <Link href="terms" className="underline cursor-pointer">
        terms of service
      </Link>{" "}
      &{" "}
      <Link href="privacy" className="underline cursor-pointer">
        privacy policy
      </Link>
    </span>
  );
};

export default TermsConditions;
