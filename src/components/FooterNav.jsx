const FooterNav = ({ setActive }) => {
  return (
    <div className=" font-serif justify-center fixed top-14 gap-5 flex z-10 bg-white shadow-md w-[380px] sm:w-[380px] md:w-[400px] lg:w-[400px] xl:w-[430px] rounded-full sm:mt-5 mt-2">
      <div className="max-w-7xl mx-auto flex justify-center gap-1 sm:gap-1 md:gap-2 lg:gap-2 xl:gap-2 py-1 sm:py-1 md:py-1 lg:py-1 xl:py-2">
        <button
          className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4 rounded-full hover:shadow-lg border border-1 border-white text-[14px] xl:text-[16px]"
          onClick={() => setActive('policy')}
        >
          Privacy Policy
        </button>

        <button
          className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4 rounded-full hover:shadow-lg border border-1 border-white text-[14px] xl:text-[16px]"
          onClick={() => setActive('terms')}
        >
          Terms & Conditions
        </button>

        <button
          className="hover:text-blue-600 hover:bg-slate-200 p-1 px-4 rounded-full hover:shadow-lg border border-1 border-white text-[14px] xl:text-[16px]"
          onClick={() => setActive('contact')}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default FooterNav;

// const FooterNav = ({ policyRef, termsRef, contactRef }) => {
//   const scrollTo = (ref) => {
//     ref.current?.scrollIntoView({
//       behavior: 'smooth',
//     });
//   };

//   return (
//     <nav className="sticky flex top-14 z-20 bg-white shadow-md w-[500px] rounded-md">
//
//         <button onClick={() => scrollTo(policyRef)}>Privacy Policy</button>

//         <button onClick={() => scrollTo(termsRef)}>Terms & Conditions</button>

//         <button onClick={() => scrollTo(contactRef)}>Contact Us</button>
//       </div>
//     </nav>
//   );
// };

// export default FooterNav;
