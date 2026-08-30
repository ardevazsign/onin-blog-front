import { Link } from 'react-router-dom';
import Search from './Search';

const MainCategories = () => {
  return (
    <div className="w-[560px] md:w-[860px] lg:w-[1100px] xl:w-[1340px] 2xl:w-[1480px] md:ml-0 sm:ml-16 md:flex md:gap-0 bg-green-300  rounded-3xl xl:rounded-full p-2 shadow-lg items-center justify-center lg:gap-2 xl:gap-2  2xl:gap-6 pt-4 md:pt-2 ">
      {/* {links} */}
      <div className="flex-1 flex flex-col gap-y-1 md:flex-row md:gap-x-1 lg:gap-x-4 ">
        <Link
          to="/posts"
          className="w-[260px] md:w-[80px] lg:w-[150px] xl:w-[160px] 2xl:w-[180px] lg:text-[16px]  text-[14px] md:text-[12px] text-center hover:bg-blue-800 bg-white hover:text-white py-1 text-black  rounded-full xl:px-4 xl:py-2 lg:text-xs  xl:text-sm lg:px-2 lg:py-1 border border-1 border-white"
        >
          All Posts
        </Link>
        <Link
          to="/posts?cat=web-design"
          className=" w-[300px] md:w-[100px] lg:w-[120px] xl:w-[160px] 2xl:w-[180px] lg:text-[16px] text-[14px] md:text-[12px] text-center text-white bg-slate-400 md:bg-slate-700 hover:bg-blue-700 hover:text-white py-1  rounded-full xl:px-4 xl:py-2 lg:px-2 lg:py-1 border border-1 border-white lg:text-xs xl:text-sm"
        >
          Web Design
        </Link>
        <Link
          to="/posts?cat=development"
          className="w-[340px] md:w-[110px] lg:w-[120px] xl:w-[160px] 2xl:w-[180px] lg:text-[16px] text-[14px] md:text-[12px] text-center text-white py-1 bg-slate-500 md:bg-slate-700 hover:bg-blue-700 hover:text-white  rounded-full xl:px-4 xl:py-2 lg:px-2 lg:py-1 border border-1 border-white lg:text-xs xl:text-sm"
        >
          Development
        </Link>
        <Link
          to="/posts?cat=databases"
          className="w-[380px] md:w-[100px] lg:w-[120px] xl:w-[160px] 2xl:w-[180px] lg:text-[16px] text-[14px] md:text-[12px] text-center text-white py-1 bg-slate-600 md:bg-slate-700 hover:bg-blue-600  hover:text-white  rounded-full xl:px-4 xl:py-2 lg:px-2 lg:py-1 border border-1 border-white lg:text-xs xl:text-sm"
        >
          Databases
        </Link>
        <Link
          to="/posts?cat=seo"
          className="w-[420px] md:w-[110px] lg:w-[120px] xl:w-[160px] 2xl:w-[180px] lg:text-[16px] text-[14px] md:text-[12px] text-center text-white py-1 bg-slate-700 hover:bg-blue-600 hover:text-black 2xl:hover:text-white  rounded-full xl:px-4 xl:py-2 lg:px-2 lg:py-1 border border-1 border-white lg:text-xs xl:text-sm"
        >
          Search Engines
        </Link>
        <Link
          to="/posts?cat=marketing"
          className="w-[460px] md:w-[100px] lg:w-[120px] xl:w-[160px] 2xl:w-[180px] lg:text-[16px] text-[14px] md:text-[12px] text-center text-white py-1 bg-slate-800 hover:bg-blue-500 hover:text-black 2xl:hover:text-white  rounded-full xl:px-4 xl:py-2 lg:px-2 lg:py-1 border border-1 border-white lg:text-xs xl:text-sm"
        >
          Marketing
        </Link>
      </div>
      <hr className="bg-slate-900 border border-slate-800 w-[500px] mt-2 mb-2 md:hidden" />
      <span className="  text-xl font-medium text-black hidden md:block md:text-[14px] md:mr-2 md:ml-2">
        |
      </span>
      {/* search */}
      <Search />
      {/* <div className="bg-gray-100 p-2 rounded-full flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="none"
          stroke="gray"
        >
          <circle cx="10.5" cy="10.5" r="7.5" />
          <line x1="16.5" y1="16.5" x2="22" y2="22" />
        </svg>
        <input
          type="text"
          placeholder="search a post..."
          className="bg-transparent"
        />
      </div> */}
    </div>
  );
};

export default MainCategories;
