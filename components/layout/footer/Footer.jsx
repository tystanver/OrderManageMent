import { BsArrowRightShort } from "react-icons/bs";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import Image from "next/image";
// import LOGO from "/public/Images/LOGO (4).png";
// import bkash from "/public/Images/bkash.png";
// import visa from "/public/Images/visa.png";
// import mastercard from "/public/Images/mastercard.png";
import Link from "next/link";
const Footer = () => {
  let date = new Date().getFullYear();
  return (
    <footer className=" text-lg lg:py-20 py-10 top-[100vh] sticky">
      <div
        className="container mx-auto lg:flex text-center lg:text-left
       justify-between px-2  xl:px-0 space-y-10 lg:space-y-0
      border-b pb-[50px]"
      >
        <div className="lg:w-1/3">
          <div className="flex justify-center lg:justify-start">
            {/* <Image src={LOGO} alt="tanver" /> */}
            <p className="text-4xl font-bold ">Logo</p>

          </div>
          <div className=" lg:text-left text-center">
            <p className="text-lg  lg:mt-[30px] mt-3 text-justify ">
              One of the standout features of this ecommerce website was its
              attention to detail when it came to product descriptions and
              images. Each item had a comprehensive and accurate description,
              including specifications, dimensions, and materials. The
              high-resolution images provided a clear
            </p>
          </div>
        </div>
        <div className="text-lg">
          <h3 className="font-medium text-[18px] ">UseFul Links</h3>
          <p className="lg:mt-[30px] mt-3">
            <Link href="/about">About Studio 12</Link>
          </p>
          <p className="lg:mt-5 mt-3">
            <a href="">Contact Us</a>
          </p>
          <p className="lg:mt-5 mt-3">
            <a href="">FAQ</a>
          </p>
          <p className="lg:mt-5 mt-3">
            <a href="">Terms & Conditions</a>
          </p>
          <p className="lg:mt-5] mt-3">
            <a href="">Privacy Policy</a>
          </p>
        </div>
        <div className="text-lg">
          <h3 className="font-medium text-[18px]">Contact Info</h3>
          <p className="lg:mt-[30px] mt-3">
            <a href="">Phone Number</a>
          </p>
          <p className="lg:mt-5 mt-3">
            <a href="">Email</a>
          </p>

          <p className="lg:mt-5 mt-3">
            <a href="">Social Link</a>
          </p>
          <div
            className="flex gap-2 lg:justify-start 
          mt-3 justify-center"
          >
            {/* <Image src={bkash} alt="tan" />
            <Image src={visa} alt="tan" />
            <Image src={mastercard} alt="tan" /> */}
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <p className="text-center font-medium">
          © Copyright {date}, All Rights Reserved by Studio 12
        </p>
      </div>
    </footer>
  );
};

export default Footer;
