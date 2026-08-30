import { Link, useParams } from 'react-router-dom';
import Image from '../components/Image';
import PostMenuActions from '../components/PostMenuActions';
import Search from '../components/Search';
import Comments from '../components/Comments';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { format } from 'timeago.js';

const fetchPost = async (slug) => {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts/${slug}`);

  return res.data;
};

const SinglePostPage = () => {
  const { slug } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ['post', slug],
    queryFn: () => fetchPost(slug),
  });

  if (isPending) return 'loading...';
  if (error) return 'Something went wrong...' + error.message;
  if (!data) return 'Post not found!';

  return (
    //
    <div className="flex flex-col gap-6 2xl:mt-16 ">
      {/* detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-2 pt-10">
          <h1 className="text-xl md:text-3xl xl:text-3xl 1xl:text-5xl text-center font-semibold italic font-sans text-gray-800 ">
            {data.title}
          </h1>
          <div className="flex items-center justify-center gap-2 text-gray-400 text-sm  font-inter">
            <span>Written by</span>
            <Link className="text-blue-800">{data.user.username}</Link>
            <span>on</span>
            <Link className="text-blue-800">{data.category}</Link>
            <span>{format(data.createdAt)}</span>
          </div>
          <p className="text-gray-600  bg-white font-medium rounded-md indent-12 text-justify italic font-sans w-[900px] p-10 shadow-md ">
            {data.desc}
          </p>
        </div>

        {data.img && (
          <div className="flex items-center pl-20 pt-10">
            <Image
              src={data.img}
              className="h-[300px] w-[480px] rounded-2xl"
              alt={data.title}
            />
          </div>
        )}
      </div>
      {/* content */}
      <div className="flex md:flex-row gap-40 ">
        {/* Text */}
        <div className="lg:text-lg flex flex-col gap-6 ">
          {/* lg:text-lg */}
          <div
            className="
          shadow-md
          font-sans
          text-gray-800
          italic p-12
          bg-white
          w-[900px]

          [&_p]:leading-5
          [&_p]:text-gray-600
          [&_h1]:font-semibold
          [&_h1]:text-3xl
          [&_h1]:text-slate-600
          [&_h1]:mb-4
          [&_h1]:text-center
          [&_h1]:w-[650px]
          [&_h1]:ml-14
           
          [&_h2]:text-2xl
          [&_h2]:mt-4
          [&_h2]:mb-4
          [&_h2]:w-[800px]

          [&_h3]:text-1xl
          [&_h3]:mt-4
          [&_h3]:mb-4
          [&_h3]:w-[800px]


          [&_h4]:text-xl
          [&_h4]:mt-4
          [&_h4]:mb-4
          [&_h4]:w-[800px]


          [&_img]:rounded-xl
          [&_img]:mx-auto
          [&_img]:my-8
          [&_img]:max-w-full

          [&_ul]:list-disc
          [&_ul]:pl-6

        [&_a]:text-blue-600
          [&_a]:underline blog-content rounded-md "
            //  [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-xl  [&_img]:mx-auto [&_img]:my-6 [&_iframe]:w-full [&_iframe]:aspect-video [_iframe]:rounded-xl"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
        {/* Menu */}
        <div className="p-6 w-55 bg-slate-200 rounded-md shadow-md h-[680px] ">
          <h1 className="mb-4 text-md text-center font-semibold font-sans">
            Author
          </h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <img
                src={data.user.img}
                className="w-12 h-12 rounded-full object-cover"
                alt=""
              />
              <Link className="text-blue-800">{data.user.username}</Link>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm w-[280px] text-center text-green-600">
                {data.category} category
              </p>
              <span className="text-sm text-green-600">
                created {format(data.createdAt)}
              </span>
            </div>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>

          <PostMenuActions post={data} />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments postId={data._id} />
    </div>
  );
};

export default SinglePostPage;
