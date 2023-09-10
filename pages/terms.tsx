import Link from "next/link";
import { IoReturnUpBackOutline } from "react-icons/io5";

const TermsPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-24 py-8 gap-4 text-center">
      <h1 className="text-5xl font-bold tracking-wide">Terms of Service</h1>
      <Link href="/" className="flex justify-center items-center gap-4">
        {" "}
        <IoReturnUpBackOutline className="text-2xl" />
        {"Return to Home"}
      </Link>
      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Introduction</h1>
        <p className="text-lg">
          Welcome to Mintly. These are the terms and conditions governing your
          use of the service provided by Mintly.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Use of Mintly</h1>
        <p className="text-lg">
          By accessing the site at Mintly, you are agreeing to be bound by these
          terms of service, all applicable laws, and regulations.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Termination</h1>
        <p className="text-lg">
          We may terminate or suspend access to our service immediately, without
          prior notice or liability, for any reason whatsoever, including
          without limitation if you breach the Terms.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Changes</h1>
        <p className="text-lg">
          We reserve the right, at our sole discretion, to modify or replace
          these Terms at any time.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Disclaimer</h1>
        <p className="text-lg">
          The materials on Mintly&apos;s website are provided on an &lsquo;as
          is&lsquo; basis. Mintly makes no warranties, expressed or implied, and
          hereby disclaims and negates all other warranties including, without
          limitation, implied warranties or conditions of merchantability.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Limitation of Liability</h1>
        <p className="text-lg">
          In no event shall Mintly or its suppliers be liable for any damages
          arising out of the use or inability to use the materials on
          Mintly&apos;s website.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center p-4">
        <h1 className="text-3xl p-4">Governing Law</h1>
        <p className="text-lg">
          These terms and conditions are governed by and construed in accordance
          with the global laws of European Union and you irrevocably submit to
          the exclusive jurisdiction of the courts in that location.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
