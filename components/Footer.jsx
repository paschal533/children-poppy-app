import Link from 'next/link';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <div className="absolute h-6 w-6 text-white arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
          <Link href="/">
            <BsTwitter />
          </Link>
        </div>
        <div className="absolute h-6 w-6 text-white arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
          <Link href="/">
            <FaFacebookF />
          </Link>
        </div>
        <div className="absolute h-6 w-6 text-white arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
          <Link href="/">
            <BsInstagram />
          </Link>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white text-sm text-center">Come join us and hear for the unexpected miracle</p>
      <p className="text-white text-sm text-center font-medium mt-2">info@kryptomastery.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs">@Chilren's poppy 2022</p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
