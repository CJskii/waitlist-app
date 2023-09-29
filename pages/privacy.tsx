import Link from "next/link";
import { IoReturnUpBackOutline } from "react-icons/io5";

const PrivacyPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-24 py-8 gap-4 text-center">
      <h1 className="text-5xl font-bold tracking-wide">Privacy Policy</h1>
      <Link href="/" className="flex justify-center items-center gap-4">
        {" "}
        <IoReturnUpBackOutline className="text-2xl" />
        {"Return to Home"}
      </Link>
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Introduction</h1>
        <p className="text-lg">
          Welcome to Mintly&apos;s Privacy Policy. Your privacy is critically
          important to us. This policy outlines the types of personal
          information we receive and collect when you use Mintly, as well as our
          methods of safeguarding your information.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Collection of Personal Information</h1>
        <p className="text-lg">
          When visiting Mintly, we may ask you to provide us with certain
          personal information that can be used to contact or identify you. This
          information may include, but is not limited to, your name, email
          address, and ethereum address.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Use of Personal Information</h1>
        <p className="text-lg">
          The information we collect is used to improve the content of our
          platform, customize the content and/or layout of our page for each
          individual visitor, and notify consumers about updates to our
          products.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Sharing of Personal Information</h1>
        <p className="text-lg">
          Your personal information will not be sold, exchanged, transferred, or
          given to any other company for any reason whatsoever, without your
          consent, other than for the express purpose of delivering the service
          requested.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Changes to Privacy Policy</h1>
        <p className="text-lg">
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPage;
