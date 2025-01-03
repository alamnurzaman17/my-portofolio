import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  return (
    <Link href="/">
      <Image
        src={
          resolvedTheme === "dark"
            ? "/light-log-logo.svg"
            : "/dark-log-logo.svg"
        }
        alt="logo"
        width={54}
        height={54}
        priority
        className="rounded"
        style={{ visibility: mounted ? "visible" : "hidden" }}
      />
    </Link>
  );
};

export default Logo;
