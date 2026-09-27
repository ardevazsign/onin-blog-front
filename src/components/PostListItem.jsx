// import { IKImage } from 'imagekitio-react';
import Image from './Image';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

const PostListItem = ({ post }) => {
  // 2xl:justify-start  xl:w-1/3
  return (
    <div className="w-[412px] sm:w-[600px] md:w-[840px] lg:w-[800px] 2xl:w-[1200px] md:h-auto md:gap-0 sm:ml-16 md:ml-0 md:flex-row flex flex-col  justify-center items-center xl:flex-row gap-2 mb-1  rounded-lg p-2 shadow-lg 2xl:gap-20 2xl:p-4  border border-white ">
      {/* Image */}
      {post.img && (
        <div className=" xl:block mr-2   sm:mr-4 md:mr-6 w-[390px] h-auto sm:w-[480px] md:w-[380px] lg:w-[220px] 2xl:w-[200px] border border-slate-200 rounded-lg shadow-md">
          <Image
            src={post.img}
            className="rounded-2xl  object-cover w-full h-full "
          />
        </div>
      )}
      {/* Details */}
      <div className="flex flex-col items-center p-2 gap-4 xl:w-2/3">
        <Link
          to={`/${post.slug}`}
          className="w-[390px] sm:w-[600px] md:w-[380px] lg:w-[500px] 2xl:w-[800px] 2xl:text-[24px] sm:text-3xl text-2xl font-semibold font-sans italic  xl:text-3xl"
        >
          {post.title}
        </Link>
        <div className="flex items-center justify-center gap-2 text-gray-200 text-sm bg-slate-200 w-[390px] md:w-[380px] lg:w-[500px] 2xl:w-[800px] rounded-sm">
          <span className="text-gray-800 font-medium font-sans">
            Written by
          </span>
          <Link
            className="text-blue-600 font-sans font-medium"
            to={`/posts?author=${post.user?.username}`}
          >
            {post.user?.username}
          </Link>
          <span className="text-gray-800 font-medium font-sans">on</span>
          <Link className="text-blue-600 font-sans font-medium">
            {post.category}
          </Link>
          <span className="text-gray-800 font-medium font-sans">
            {format(post.createdAt)}
          </span>
        </div>
        <p className="text-2xl w-[390px] md:w-[380px] lg:w-[500px] 2xl:w-[800px] 2xl:text-[18px] 2xl:leading-5 font-serif text-justify indent-14 italic text-slate-800 ">
          {post.desc}
        </p>
        <Link
          to={`/${post.slug}`}
          className="underline text-blue-800 text-sm cursor-pointer text-justify hover:bg-slate-300 hover:text-blue-600 w-[105px] py-2 px-4 text-clip rounded-md"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostListItem;
