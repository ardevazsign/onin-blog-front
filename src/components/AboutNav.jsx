const AboutNav = ({ setActive }) => {
  return (
    <div className="flex justify-center items-center gap-5 lg:gap-5 font-serif bg-white shadow-md w-[240px] sm:w-[260px] xl:w-[300px] lg:w-[300px] md:w-[260px] rounded-full z-10 top-14 relative ">
      <div className="max-w-7xl mx-auto flex justify-center gap-2 py-1 sm:py-1 md:py-1 lg:py-2 xl:py-2 sm:gap-4 md:gap-2 lg:gap-4 xl:gap-4 ">
        <button
          className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4 rounded-full hover:shadow-lg border border-1 border-white xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px] "
          onClick={() => setActive('about')}
        >
          About
        </button>

        <button
          className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4 rounded-full hover:shadow-lg border border-1 border-white  xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px]"
          onClick={() => setActive('mission')}
        >
          Mission
        </button>

        <button
          className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4 rounded-full hover:shadow-lg border border-1 border-white  xl:text-[16px] lg:text-[16px] md:text-[14px] sm:text-[14px] text-[12px]"
          onClick={() => setActive('team')}
        >
          Team
        </button>
      </div>
    </div>
  );
};

export default AboutNav;

// const AboutNav = ({ aboutRef, missionRef, teamRef }) => {
//   const scrollTo = (ref) => {
//     ref.current?.scrollIntoView({
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <nav className="sticky top-20 z-20 bg-white shadow-md w-[400px] rounded-md">
//       <div className="max-w-7xl mx-auto flex justify-center gap-10 py-4">
//         <button onClick={() => scrollTo(aboutRef)}>About</button>

//         <button onClick={() => scrollTo(missionRef)}>Mission</button>

//         <button onClick={() => scrollTo(teamRef)}>Team</button>
//       </div>
//     </nav>
//   );
// };

// export default AboutNav;

// const AboutNav = () => {
//   return (
//     <nav className="sticky top-20 z-20 bg-white shadow-md w-[400px] rounded-md">
//       <div className="max-w-7xl mx-auto flex justify-center gap-10 py-4">
//         <a href="#about" className="hover:text-blue-600 font-medium">
//           About
//         </a>

//         <a href="#mission" className="hover:text-blue-600 font-medium">
//           Mission
//         </a>

//         <a href="#team" className="hover:text-blue-600 font-medium">
//           Our Team
//         </a>
//       </div>
//     </nav>
//   );
// };

// export default AboutNav;
