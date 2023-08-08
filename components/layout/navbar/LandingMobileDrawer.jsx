import { Drawer } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/router";
// import { AddToCart, Searchbar, UsersInfo } from "./Navbar";

export const MenuData = () => {
  const router = useRouter();
  return (
    <div>
      <ul className="mt-4">
        <li className="mb-2">
          <Link
            href="/shop"
            className={
              router.pathname === "/"
                ? "text-[18px] font-medium"
                : "text-[18px] font-medium"
            }
          >
            Men
          </Link>
        </li>

        <li className="mb-2">
          <Link
            href="/shop"
            className={
              router.pathname === "/"
                ? "text-[18px] font-medium"
                : "text-[18px] font-medium"
            }
          >
            Women
          </Link>
        </li>

        <li className="mb-2">
          <Link
            href="/bulk"
            className={
              router.pathname === "/"
                ? "text-[18px] font-medium"
                : "text-[18px] font-medium"
            }
          >
            Bulk Order
          </Link>
        </li>
      </ul>
    </div>
  );
};

/** main component */
const MobileDrawer = () => {
  const [open, setOpen] = useState(false);
  const date = new Date().getFullYear();

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <div className="w-72 p-5">
          <div className="flex justify-between items-center pb-2 border-b">
            {/* <Image className="w-24" src={LOGO} alt="" priority /> */}
            <p className="text-4xl font-bold ">Logo</p>

            {/* <CloseIcon
              className="cursor-pointer"
              onClick={() => setOpen(false)}
            /> */}
          </div>
          <ul onClick={() => setOpen(false)}>
            <div className="flex justify-between mt-2">
              {/* <Searchbar />
              <AddToCart />
              <UsersInfo /> */}
            </div>
            <MenuData />
          </ul>
          <div>
            <p className="text-[#14511D] text-left pb-[22px] absolute bottom-0">
              © {date}, All Rights Reserved by Studio12
            </p>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;
