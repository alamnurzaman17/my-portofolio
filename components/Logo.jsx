import Link from "next/link";
import Image from "next/image";
import ThemeToggler from "./ThemeToggler";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme(ThemeToggler);

  return (
    <Link href="/">
      <Image
        src={theme === "dark" ? "/log-logowhite.svg" : "/log-logo.svg"}
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
