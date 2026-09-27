import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const query = e.target.value;
      if (location.pathname === '/posts') {
        setSearchParams({ ...Object.fromEntries(searchParams), search: query });
      } else {
        navigate(`/posts?search=${query}`);
      }
    }
  };

  return (
    <div className="pl-4 md:pl-4 md:gap-1 w-[390px] md:w-[220px] xl:w-[240px] 2xl:w-[250px] bg-gray-100 xl:p-2 lg:p-1 rounded-full flex items-center 2xl:gap-1 xl:gap-2 lg:gap-1 lg:text-xs xl:text-sm hover:shadow-md">
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
        className="md:text-[12px] lg:text-[14px] xl:text-[15px] 2xl:text-[15px] md:py-1 bg-transparent border-none outline-none "
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default Search;
