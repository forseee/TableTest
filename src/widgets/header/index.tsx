"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { paths } from "@/shared/constants";

import { HeaderProps } from "./type";

const Header: React.FC<HeaderProps> = ({ className }) => {
  const pathname = usePathname();

  return (
    <header className={classNames("w-full bg-white mb-10", className)}>
      <div className="flex container m-auto p-10 justify-center">
        <ul className="flex gap-10">
          {paths.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className={classNames({
                  "text-red-500": item.path === pathname,
                })}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
