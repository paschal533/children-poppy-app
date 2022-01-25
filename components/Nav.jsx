import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  const [open, setOpen] = useState(false);
  const [openCat, setOpenCat] = useState(false);
  return (
    <div className="shadow-md w-full fixed z-100 top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="logo" />
          Children&apos;s Poppy
        </div>
        <div className="text-3x1 absolute bar right-8 center cursor-pointer md:hidden">
          <ion-icon size="large" onClick={() => setOpen(!open)} name={open ? 'close' : 'menu'} />
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white left-0 w-full md:w-auto
          md:pl-0 pl-9 transition-all-duration-500 ease-in ${open ? 'top-15 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}
        >
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link href="/" className="text-gray-800 hover:text-gray-400 duration-500">HOME</Link>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <div onClick={() => setOpenCat(!openCat)} className="text-gray-800 cursor-pointer hover:text-gray-400 duration-500">CATEGORIES</div>
            <div className={openCat ? 'block' : 'hidden'}>
              {categories.map((category, index) => (
                <Link key={index} href={`/category/${category.slug}`}><span className="flex-col transition-all-duration-500 ease-in mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
              ))}
            </div>
          </li>
          <li className="md:ml-8 text-xl md:my-0 my-7">
            <Link href="/about" className="text-gray-800 hover:text-gray-400 duration-500">ABOUT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
