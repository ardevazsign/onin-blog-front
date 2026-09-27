import { useState } from 'react';
import { IKImage } from 'imagekitio-react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, useUser } from '@clerk/clerk-react';
// import { useEffect } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  const isAdmin = user?.publicMetadata?.role === 'admin';

  // console.log('URL ENDPOINT:', import.meta.env.VITE_IK_URL_ENDPOINT);

  // const { getToken } = useAuth();

  // useEffect(() => {
  //   getToken().then((token) => console.log(token));
  // }, []);

  return (
    <div className="w-[412px] sm:w-[767px] md:w-[920px] lg:w-[1140px] xl:w-[1420px] 2xl:w-[1580px] xl:p-4 h-14  xl:h-16 md:h-14 flex items-center justify-between fixed top-0 z-20 navmain rounded-md">
      {/* {LOGO} */}
      <Link
        to="/"
        className=" flex justify-center items-center gap-4 text-2xl font-bold pl-6 "
      >
        <IKImage
          urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
          path="/onin-profile.jpg"
          alt=""
          className=" w-10 h-10 rounded-full shadow-xl hover:border-[3px] hover:border-solid border-white  border-[.5px]"
        />

        <span className=" font-serif md:text-[20px] xl:text-[24px] ">
          Niños Blog
        </span>
      </Link>
      {isAdmin && (
        <Link
          to="/admin/dashboard"
          className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4 rounded-full hover:shadow-lg border border-1 border-white text-center"
        >
          Dashboard
        </Link>
      )}

      {/* {MOBILE MENU} */}
      <div className="md:hidden relative pt-4 pb-4 ">
        {/* {Mobile Button} */}
        <div
          className="cursor-pointer flex text-center items-center justify-center text-2xl w-8 h-8 fixed top-4 right-4 z-40 rounded-md bg-slate-100 hover:bg-blue-600 hover:text-white shadow-md"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? 'X' : '≡'}
        </div>
        {/* {Mobile Link List} */}
        {/* <div
          className={` w-full h-screen flex flex-col items-center justify-center  gap-8 font-medium text-lg absolute top-16 z-40  bg-yellow-600 overflow-hidden transition-all ease-in-out ${open ? '-right-0' : '-right-[220%]'}`}
        > */}
        <div
          className={`fixed inset-0 top-14
                     flex flex-col items-center justify-center gap-8
                   bg-yellow-400 z-50
                     transition-transform duration-300 ease-in-out
                     ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <Link
            to="/"
            className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4 rounded-full hover:shadow-lg text-[18px] font-serif semibold italic"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/posts?sort=trending"
            className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4 rounded-full hover:shadow-lg text-[18px] font-serif semibold italic"
            onClick={() => setOpen(false)}
          >
            Trending
          </Link>
          <Link
            to="/posts?sort=popular"
            className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4 rounded-full hover:shadow-lg text-[18px] font-serif semibold italic"
            onClick={() => setOpen(false)}
          >
            Most Popular
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4 rounded-full hover:shadow-lg text-[18px] font-serif semibold italic"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <SignedOut>
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="py-2 px-8 rounded-2xl bg-blue-700 text-white">
                Login 👋
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      {/* {DESKTOP MENU} */}
      <div className="hidden 2xl:flex md:flex items-center justify-center gap-6 md:gap-8 lg:gap-4 xl:gap-4  xl:mt-4 2xl:mt-0 2xl:gap-8 font-medium ">
        <Link
          to="/"
          className="hover:text-blue-600 hover:bg-slate-200 p-1  px-4 2xl:px-4 xl:px-4 lg:px-4 md:px-1 rounded-full hover:shadow-lg border border-1 border-white md:text-[14px] xl:text-[16px]"
        >
          Home
        </Link>
        <Link
          to="/posts?sort=trending"
          className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4  2xl:px-4 xl:px-4 lg:px-4 md:px-1 rounded-full hover:shadow-lg border border-1 border-white md:text-[14px] xl:text-[16px]"
        >
          Trending
        </Link>
        <Link
          className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4  2xl:px-4 xl:px-4 lg:px-4 md:px-1 rounded-full hover:shadow-lg border border-1 border-white md:text-[14px] xl:text-[16px]"
          to="/posts?sort=popular"
        >
          Most Popular
        </Link>
        <Link
          className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4  2xl:px-4 xl:px-4 lg:px-4 md:px-1 rounded-full hover:shadow-lg border border-1 border-white md:text-[14px] xl:text-[16px]"
          to="/about"
        >
          About
        </Link>

        <SignedOut>
          <Link to="/login">
            <button className="py-2 px-4 md:px-2 xl:px-4 xl:rounded-2xl lg:rounded-2xl md:rounded-md bg-blue-700 text-white">
              Login 👋
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;

// import { useState, useEffect } from 'react';
// import Image from './Image';
// import { Link } from 'react-router-dom';
// import { SignedIn, SignedOut, useAuth, UserButton } from '@clerk/clerk-react';

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   const { getToken } = useAuth();

//   useEffect(() => {
//     // getToken().then((token) => console.log(token));
//   }, []);

//   return (
//     <div className="w-full h-16 md:h-20 flex items-center justify-between">
//       {/* {LOGO} */}
//       <Link to="/" className="flex items-center gap-4 text-2xl font-bold ">
//         <Image
//           src="onin-profile.jpg"
//           alt="logo"
//           w={60}
//           h={60}
//           className="rounded-full shadow-xl hover:border-[3px] hover:border-solid border-white  border-[.5px]"
//         />

//         <span>Niño S. Manaog</span>
//       </Link>
//       {/* {MOBILE MENU} */}
//       <div className="md:hidden">
//         {/* {Mobile Button} */}
//         <div
//           className="cursur-pointer text-4xl"
//           onClick={() => setOpen((prev) => !prev)}
//         >
//           {open ? 'x' : '≡'}
//         </div>
//         {/* {Mobile Link List} */}
//         <div
//           className={`w-full h-screen flex flex-col items-center justify-center  gap-8 font-medium text-lg absolute top-16 bg-blue-600 transition-all ease-in-out ${open ? '-right-0' : '-right-[100%]'}`}
//         >
//           <Link to="/">Home</Link>
//           <Link to="/trend">Trending</Link>
//           <Link to="/popular">Most Popular</Link>
//           <Link to="/about">About</Link>
//           <Link to="">
//             <button className="py-2 px-4 rounded-2xl bg-blue-700 text-white">
//               Login 👋
//             </button>
//           </Link>
//         </div>
//       </div>
//       {/* {DESKTOP MENU} */}
//       <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
//         <Link to="/">Home</Link>
//         <Link to="/trend">Trending</Link>
//         <Link to="/popular">Most Popular</Link>
//         <Link to="/about">About</Link>

//         <SignedOut>
//           <Link to="/login">
//             <button className="py-2 px-4 rounded-2xl bg-blue-700 text-white">
//               Login 👋
//             </button>
//           </Link>
//         </SignedOut>
//         <SignedIn>
//           <UserButton />
//         </SignedIn>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
