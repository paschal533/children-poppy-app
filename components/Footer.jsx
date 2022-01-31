import Link from 'next/link';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => (
  <div>
    <div className="absolute h-6 w-6 text-white arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <Link href="">
        <BsTwitter />
      </Link>
    </div>
    <div className="absolute h-6 w-6 text-white arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <Link href="">
        <FaFacebookF />
      </Link>
    </div>
    <div className="absolute h-6 w-6 text-white arrow-btn bottom-5 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
      <Link href="">
        <BsInstagram />
      </Link>
    </div>
  </div>
)


export default Footer;
