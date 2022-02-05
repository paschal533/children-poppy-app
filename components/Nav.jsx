import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import Image from 'next/image';

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  const dropdown = `${openCat? 'nav-dropdown' : ''} md:ml-8 text-xl ${openCat? "mb-7" : "my-7"}`;
  return (
    <div className="shadow-md w-full fixed z-100 top-0 left-0">
      <div className="md:flex nav items-center justify-between bg-white py-4 md:px-10 px-7">
        <Link href="/">
          <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
            <span className="logo" /> 
            Children&apos;s Poppy
          </div>
        </Link>
        <div className="text-3x1 absolute bar right-8 center cursor-pointer md:hidden">
          <ion-icon size="large" onClick={() => setOpen(!open)} name={open ? 'close' : 'menu'} />
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white left-0 list
          md:pl-0 pl-9 transition-all-duration-500 ease-in ${open ? 'top-15 opacity-100' : 'top-[-490px] hidden md:opacity-100 opacity-0'}`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <div onClick={() => setOpen(!open)}><Link href="/" className="text-gray-800 hover:text-gray-400 duration-500">HOME</Link></div>
          </li>
          <li className={dropdown}>
            <div onClick={() => setOpenCat(!openCat)} className="flex">
              <div className=" flex-col text-gray-800 cursor-pointer hover:text-gray-400 duration-500">CATEGORIES</div>
              //<ion-icon name={openCat ? 'chevron-up-outline' : 'chevron-down-outline'} className="ic flex-col ml-2" />
            </div>
            <div className={openCat ? 'block md:mt-[20px] mt-0' : 'hidden'}>
              {categories.map((category, index) => (
                <div onClick={() => setOpen(!open)}><Link key={index} href={`/category/${category.slug}`}><span className="flex border-b transition-all-duration-500 ease-in md:mt-4 mt-2 align-middle ml-4 font-normal cursor-pointer">{category.name}</span></Link></div>
              ))}
            </div>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <div onClick={() => setOpen(!open)}><Link href="/about" className="text-gray-800 hover:text-gray-400 duration-500">ABOUT</Link></div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
