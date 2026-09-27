import { Link } from 'react-router-dom';
import MainCategories from '../components/MainCategories';
import FeaturedPosts from '../components/FeaturedPosts';
import PostList from '../components/PostList';
// import img from '../../public/hand-pen-icon-outline-color-fill-design-vector-illustration.webp';
import penIcon from '../../public/hand-pen-icon-outline-color-fill-design-vector-illustration.webp';
// new code below
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Homepage = () => {
  //
  const { data, isLoading, error } = useQuery({
    queryKey: ['latestPost'],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/latest`,
      );

      return res.data;
    },
  });

  return (
    <div className=" flex flex-col gap-4 mt-16 ">
      {/* {BREADCRUMB} */}
      <div className="flex gap-4 ml-4">
        <Link to="/">Home</Link>
        <span>⦿</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* {INTRODUCTION} */}
      <div className="flex flex-col gap-y-10 md:gap-y-0 2xl:gap-x-0 items-center justify-between md:flex-row">
        {/* {title} */}
        <div className="">
          {isLoading ? (
            <>
              <div className="h-10 w-full bg-gray-200 animate-pulse rounded"></div>
              <div className="h-5 w-2/3 bg-gray-200 animate-pulse rounded mt-6"></div>
            </>
          ) : error ? (
            <p>Something went wrong.</p>
          ) : (
            <>
              <h1 className=" w-[380px] lg:w-[800px] xl:w-[900px] 2xl:text-[24px] 2xl:w-[1100px] text-gray-800 text-1xl md:text-[20px] lg:text-2xl font-bold indent-28 font-serif italic">
                {data?.title}
              </h1>

              <p className=" w-[380px] lg:w-[780px] xl:w-[900px] 2xl:w-[1100px] 2xl:mr-0 mt-6 md:mr-0 md:leading-5 text-md md:text-[16px] 2xl:text-[18px] text-gray-600 indent-16 text-justify mr-0 xl:mr-52 italic font-serif 2xl:text-m leading-none">
                {data?.desc}
              </p>
            </>
          )}
          {/* <h1 className="text-gray-800 text-2xl md:text-5xl lg:text-6xl font-bold">
            Last Save Title: Hope is stronger than fear when people stand
            together peacefully.
          </h1> */}
          {/* <p className="mt-8 text-md md:text-xl">
            Last save desc: The strength of a nation is measured by the
            character of its people.
          </p> */}
        </div>
        {/* animated button */}
        <Link to="write" className=" md:block relative">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            // className="text-lg tracking-widest animate-spin animatedButton"
            className="text-lg tracking-widest"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your article ⦿
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea ⦿
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0  left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center">
            <img
              className=" rounded-full border border-blue-600 shadow-xl"
              src={penIcon}
              alt="Pen"
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6  18  6 18 15" />
            </svg> */}
          </button>
        </Link>
      </div>
      {/* {CATEGORIES} */}
      <MainCategories />
      {/* {FEATURED POSTS} */}
      <FeaturedPosts />
      {/* {POST LIST} */}
      <div className="mb-20 mt-[500px] sm:mt-[600px] md:mt-[40px] lg:mt-[140px] xl:mt-[340px] 2xl:mt-[300px] w-[390px] sm:w-[600px] md:w-[800px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px] flex flex-col items-center justify-center gap-4 ">
        <h1 className="my-8 text-2xl text-gray-600 italic">Recent Posts</h1>
        <PostList />
      </div>
    </div>
  );
};

export default Homepage;
