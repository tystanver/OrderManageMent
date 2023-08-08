import { useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useRouter } from "next/router";
import MobileDrawer from "./LandingMobileDrawer";

import { FormControlLabel, Switch, TextField } from "@mui/material";
import { useTheme } from "next-themes";

// const change = () => {
//   setTheme(true);
// };

export const Searchbar = () => {
  return (
    <div className="">
      <button>
        {/* <BiSearch className="text-xl mt-1" /> */}
      </button>
    </div>
  );
};

export const AddToCart = () => {
  return (
    <div className="">
      <Link href="/cart">
        <BsCart3 className="text-xl" />
      </Link>
    </div>
  );
};

export const UsersInfo = () => {
  return (
    <div className="">
      <Link href="/login">
        <FaRegUser className="text-xl" />
      </Link>
    </div>
  );
};

const TopNavbar = () => {
  return (
    <>
      <nav className="top-0 w-full bg-gray-100 border-gray-200 ">
        <div className="px-3 py-3 lg:px-5 lg:pl-3 ">
          <div className="flex justify-between">
            <div className="ml-3 flex items-center">
              <MobileDrawer />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export const NevagationLink = ({ url, text }) => {
  return <Link href={url}>{text}</Link>;
};

const Navbar = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const { theme, setTheme } = useTheme();

  const change = () => {
    setTheme(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-10 ${
        isScrolled ? "shadow-lg bg-zinc-100" : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="">
          <div className="lg:hidden flex pt-5 lg:pb-7 pb-3 justify-between items-center w-full">
            <div className="pl-2">
              <Link href="/">
                {/* <Image src={LOGO} alt="" /> */}
                <p className="text-4xl font-bold ">Logo</p>
              </Link>
            </div>
            <div className="text-3xl">
              <TopNavbar />
            </div>
          </div>

          <div className="hidden lg:block lg:px-2 xl:px-0 py-5 container justify-between w-full top-0 z-10">
            <div className="flex items-center justify-between">
              <Link href="/">
                {/* <Image src={LOGO} alt="" /> */}
                <p className="text-4xl font-bold ">Logo</p>
              </Link>

              <div className="">
                <ul className="lg:flex gap-[30px]">
                  <li
                    className={
                      router.pathname === "/"
                        ? "text-[18px] font-medium"
                        : "text-[18px] font-medium"
                    }
                  >
                    <NevagationLink url="/" text="Order" />
                  </li>
                  <li
                    className={
                      router.pathname === "/"
                        ? "text-[18px] font-medium "
                        : "text-[18px] font-medium "
                    }
                  >
                    <NevagationLink url="/" text="Order" />
                  </li>
                  <li
                    className={
                      router.pathname === "/orderListPage"
                        ? "text-[18px] font-medium "
                        : "text-[18px] font-medium"
                    }
                  >
                    <NevagationLink url="/orderListPage" text=" Order List" />
                  </li>
                </ul>
              </div>
              <div className="flex gap-[30px] items-center">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search"
                    className="py-2 px-4  border border-gray-300 rounded-[30px] focus:outline-none  focus:border-black  "
                  />

                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-2 mr-2"
                  >
                    <BiSearch className="text-xl mt-1" />
                  </button>
                </div>
                <div>
                  <FormControlLabel
                    control={<Switch name="gilad" />}
                    onChange={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    label="Dark"
                  />
                  
                </div>
                {/* <div className="">
                  <AddToCart />
                </div>
                <div>
                  <UsersInfo />
                </div> */}
                <div>
                <button
                  className=" text-[#4C8488]
          text-[18px] lg:px-8 px-4 lg:py-4 py-2 rounded-[30px] border 
           border-[#4C8488]
          font-medium hover:bg-[#4C8488] hover:text-white"
                >
                  Login
                </button>
                </div>
                <div>
                <button
                  className=" text-[#4C8488]
          text-[18px] lg:px-8 px-4 lg:py-4 py-2 rounded-[30px] border 
           border-[#4C8488]
          font-medium hover:bg-[#4C8488] hover:text-white"
                >
                  Sign up
                </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
