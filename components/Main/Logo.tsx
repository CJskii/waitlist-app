import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/mintly.jpg"
      width={500}
      height={500}
      alt="mintly"
      className="rounded-t-2xl"
    />
  );
};

export default Logo;
