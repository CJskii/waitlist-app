import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="/mintly.jpg"
      width={650}
      height={500}
      alt="mintly"
      className="rounded-t-xl"
    />
  );
};

export default Logo;
