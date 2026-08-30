import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [open, setOpen] = useState(false);

  return (
    <footer className="border-1 border-t-white  bg-black py-3 footer w-full flex items-center justify-center  ">
      <div className="mx-auto max-w-7xl flex items-center justify-center flex-col gap-2 sm:flex-row sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10 px-6 text-center text-sm  text-gray-600 md:flex-row ">
        {/* Copyright */}
        <p className="text-[10px] sm:text-[12px]  xl:text-[14px]">
          © {currentYear} ArdevazSign. All rights reserved.
        </p>

        {/* Footer Links */}
        <div className="flex  items-center justify-center gap-4 sm:gap-4 md:gap-8 lg:gap-8 xl:gap-8">
          <Link
            className="cursor-pointer transition hover:bg-slate-200 text-[10px] sm:text-[12px] xl:text-[14px] text-blue-600 py-1 px-2  rounded-md"
            to="/policy"
            onClick={() => setOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link
            className="cursor-pointer transition hover:bg-slate-200 text-[10px] sm:text-[12px] xl:text-[14px] text-blue-600  py-1 px-2 rounded-md"
            to="/policy"
            onClick={() => setOpen(false)}
          >
            Terms & Conditions
          </Link>
          <Link
            className="cursor-pointer transition hover:bg-slate-200 text-[10px] sm:text-[12px] xl:text-[14px] text-blue-600 py-1 px-2 rounded-md  "
            to="/policy"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
