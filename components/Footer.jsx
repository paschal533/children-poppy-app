import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <p className="text-white text-bold text-center border-b">Contact Us</p>
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <div className="h-10 p-3 w-10 text-white text-center cursor-pointer bg-pink-600 rounded-full">
          <a target="_blank" href="https://twitter.com/Kosi_Okwuosah" rel="noopener noreferrer">
            <BsTwitter />
          </a>
        </div>
        <div className="h-10 p-3 w-10 text-white text-centercursor-pointer bg-pink-600 rounded-full">
          <a  target="_blank" href="https://www.facebook.com/reine.victoria.714" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
        </div>
        <div className="h-10 p-3 w-10 text-white text-center cursor-pointer bg-pink-600 rounded-full">
          <a target="_blank" href="https://www.linkedin.com/in/victoria-okwuosah-1736b0206" rel="noopener noreferrer">
            <BsLinkedin />
          </a>
        </div>
         <div className="h-10 p-3 w-10 text-white text-center cursor-pointer bg-pink-600 rounded-full" rel="noopener noreferrer">
          <a target="_blank" href="mailto:childrenspoppy@gmail.com">
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-white md:text-xl text-lg text-center">Come join us and learn more about children</p>
      <p className="text-white md:text-xl text-lg sstext-center font-medium mt-2">childrenspoppy@gmail.com</p>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-white-400 mt-5 " />

    <div className="sm:w-[90%] w-4/5 flex justify-between items-center mt-3">
      <p className="text-white text-left md:text-xl text-lg">@Chilren's poppy 2022</p>

      <p className="text-white text-right md:text-xl text-lg">All rights reserved</p>
    </div>
  </div>
);

export default Footer;
