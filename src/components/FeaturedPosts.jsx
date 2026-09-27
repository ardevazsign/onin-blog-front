import { Link } from 'react-router-dom';
import Image from './Image';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { format } from 'timeago.js';

const fetchPost = async () => {
  const res = await axios.get(
    `${import.meta.env.VITE_API_URL}/posts?isFeatured=true&limit=4&sort=newest`,
  );
  console.log(res.data);

  return res.data;
};

const FeaturedPosts = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['featuredPosts'],
    queryFn: () => fetchPost(),
  });

  if (isPending) return 'loading...';
  if (error) return 'Something went wrong!' + error.message;

  const posts = data.posts;
  if (!posts || posts.length === 0) {
    // return <h1>No featured posts found.</h1>;
    return;
  }

  return (
    <div className="w-[400px] md:w-[850px] lg:w-[1100px] xl:w-[1300px] 2xl:w-[1500px] 2xl:gap-10 sm:ml-16 md:ml-0 md:gap-4  gap-8 xl:flex h-[765px] flex flex-col md:flex-row justify-center mt-[550px] sm:mt-[600px] md:mt-[20px]">
      {/* First lg:w-1/2 */}
      <div className="2xl:w-[600px] 2xl:h-auto xl:w-[600px] w-[400px] md:w-[500px] lg:w-[450px] h-auto  flex flex-col gap-1 ">
        {/* image */}
        {posts[0].img && (
          <Image
            src={posts[0].img}
            className="rounded-3xl object-cover w-full h-full border-2 border-slate-50"
          />
        )}
        {/* details */}
        <div className="flex items-center gap-4 bg-yellow-300 p-1 rounded-md ">
          <h1 className="font-medium lg:text-[16px] lg:pl-28 text-sm pl-10 2xl:pl-48">
            01.
          </h1>
          <Link className="text-blue-600 lg:text-[16px] text-sm">
            {posts[0].category}
          </Link>
          <span className="text-gray-500 text-sm lg:text-[16px]">
            {format(posts[0].createdAt)}
          </span>
        </div>
        {/* title */}
        <Link
          to={posts[0].slug}
          className="2xl:p-2 text-xl sm:text-[20px] md:text-[18px] lg:text-[22px] 2xl:text-[20px] lg:text-center bg-white font-semibold lg:font-bold h-auto p-2 font-serif indent-4 text-slate-700 rounded-md border-b-2 border-slate-400 italic"
        >
          {posts[0].title}
        </Link>
        <Link
          to={posts[0].slug}
          className="text-md sm:text-[16px] md:text-[14px] lg:text-[18px] leading-5 2xl:leading-6 2xl:text-[18px] bg-white font-serif h-auto p-4 2xl:p-6 indent-20 text-slate-700 rounded-md text-justify  border-b-2 border-slate-400"
        >
          {posts[0].desc}
        </Link>
      </div>
      {/* 3-blogs */}
      {/* Others */}
      <div className="xl:w-[750px] w-[400px] md:w-[400px] lg:w-[550px] 2xl:w-[700px] h-auto flex flex-col gap-3 ">
        {posts[1] && (
          <div className="2xl:gap-4 2xl:p-4 flex justify-between gap-4 p-4 md:gap-2 md:p-2  xl:gap-2 bg-white shadow-sm rounded-md border-b-2 border-slate-400 ">
            {posts[1].img && (
              <div className="2xl:h-auto xl:w-[360px] xl:h-[245px] w-[300px] h-[220px] md:w-[200px] lg:w-[260px] overflow-hidden aspect-video ">
                <Image
                  src={posts[1].img}
                  className="rounded-xl object-cover shadow-lg border border-slate-200 w-full h-full "
                />
              </div>
            )}
            {/* details and title */}
            <div className="w-[370px] rounded-md p-2">
              {/* details */}
              <div className="flex items-center gap-4 md:gap-2 md:pl-4 lg:pl-14 text-sm mb-4 bg-yellow-300 pl-10">
                <h1 className="font-medium lg:text-[14px]">02.</h1>
                <Link className="text-blue-600 lg:text-[14px]">
                  {posts[1].category}
                </Link>
                <span className="text-gray-500 text-sm lg:text-[14px]">
                  {format(posts[1].createdAt)}
                </span>
              </div>
              {/* title */}
              <div className="flex flex-col">
                <Link
                  // to={posts[1].slug}
                  to={`/${posts[1].slug}`}
                  className="text-base sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[22px] font-serif font-medium text-left text-slate-900  italic mb-1"
                >
                  {posts[1].title}
                </Link>
                <Link
                  to={`/${posts[1].slug}`}
                  // to={posts[1].slug}
                  className="text-[12px] sm:text-[14px] md:text-[12px] lg:text-[16px] xl:text-[18px] 2xl:text-[18px] font-medium indent-10 text-justify text-slate-700 font-serif leading-5 2xl:leading-5"
                >
                  {posts[1].desc}
                </Link>
              </div>
            </div>
          </div>
        )}

        {posts[2] && (
          <div className=" 2xl:gap-4 2xl:p-4 flex justify-between gap-4 p-4 md:gap-2 md:p-2  xl:gap-2 bg-white shadow-sm rounded-md border-b-2 border-slate-400 ">
            {posts[2].img && (
              <div className="2xl:h-auto xl:w-[360px] xl:h-[245px] w-[300px] h-[220px] md:w-[180px] lg:w-[260px] overflow-hidden aspect-video">
                <Image
                  src={posts[2].img}
                  className="rounded-xl w-full h-full object-cover shadow-lg border border-slate-200"
                />
              </div>
            )}
            {/* details and title */}
            <div className="w-[370px] rounded-md p-2">
              {/* details */}
              <div className="flex items-center gap-4 md:gap-2 md:pl-4 lg:pl-14 text-sm mb-4 bg-yellow-300 pl-10">
                <h1 className="font-medium lg:text-[14px]">03.</h1>
                <Link className="text-blue-600 lg:text-[14px]">
                  {posts[2].category}
                </Link>
                <span className="text-gray-500 text-sm lg:text-[14px]">
                  {format(posts[2].createdAt)}
                </span>
              </div>
              {/* title */}
              <div className="flex flex-col">
                <Link
                  // to={posts[2].slug}
                  to={`/${posts[2].slug}`}
                  className="text-base sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-xl 2xl:text-[22px] font-serif font-medium text-left text-slate-900  italic mb-1"
                >
                  {posts[2].title}
                </Link>
                <Link
                  to={`/${posts[2].slug}`}
                  // to={posts[2].slug}
                  className="text-[12px] sm:text-[14px] md:text-[12px] lg:text-[16px] leading-5 2xl:text-[18px] 2xl:leading-5 xl:text-xl font-serif font-medium indent-10 text-justify text-slate-700 "
                >
                  {posts[2].desc}
                </Link>
              </div>
            </div>
          </div>
        )}

        {posts[3] && (
          <div className="2xl:gap-4 2xl:p-4 flex justify-between gap-4 p-4 md:gap-2 md:p-2  xl:gap-2 bg-white shadow-sm rounded-md border-b-2 border-slate-400 ">
            {posts[3].img && (
              <div className="2xl:h-auto xl:w-[360px] xl:h-[245px] w-[300px] h-[220px] md:w-[180px] lg:w-[260px] overflow-hidden aspect-video">
                <Image
                  src={posts[3].img}
                  className="rounded-xl w-full h-full object-cover shadow-lg "
                />
              </div>
            )}
            {/* details and title */}
            <div className="w-[370px]  rounded-md p-2 ">
              {/* details */}
              <div className="flex items-center gap-4 md:gap-2 md:pl-4 text-sm lg:pl-14 mb-4 bg-yellow-300 pl-10">
                <h1 className="font-medium lg:text-[14px]">04.</h1>
                <Link className="text-blue-600 lg:text-[14px]">
                  {posts[3].category}
                </Link>
                <span className="text-gray-500 text-sm lg:text-[14px]">
                  {format(posts[3].createdAt)}
                </span>
              </div>
              {/* title */}
              <div className="flex flex-col">
                <Link
                  // to={posts[3].slug}
                  to={`/${posts[3].slug}`}
                  className="text-base sm:text-[18px] md:text-[18px] lg:text-[20px] xl:text-xl 2xl:text-[22px] font-serif font-medium text-left text-slate-900  italic mb-1"
                >
                  {posts[3].title}
                </Link>
                <Link
                  // to={posts[3].slug}
                  to={`/${posts[3].slug}`}
                  className="text-[12px] sm:text-[14px] md:text-[12px] leading-5 2xl:leading-5 lg:text-[16px] xl:text-xl 2xl:text-[18px] font-serif font-medium indent-10 text-justify text-slate-700"
                >
                  {posts[3].desc}
                </Link>
              </div>
            </div>
          </div>
        )}
        <hr className="bg-slate-200  w-full md:hidden" />
      </div>
    </div>
  );
};

export default FeaturedPosts;
