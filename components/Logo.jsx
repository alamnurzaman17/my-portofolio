import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/log-logo.svg"
        alt="logo"
        width={54}
        height={54}
        priority
        className="rounded"
      />
    </Link>
  );
};

export default Logo;
