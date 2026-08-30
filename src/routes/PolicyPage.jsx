import { useState } from 'react';
import FooterContent from '../components/FooterContent';
// import Footer from '../components/Footer';
import FooterNav from '../components/FooterNav';
const PolicyPage = () => {
  const [active, setActive] = useState('policy');

  return (
    <section className="py-2 sm:px-10 px-12">
      <FooterNav active={active} setActive={setActive} />

      <div className="mt-1">
        <FooterContent active={active} />
      </div>
      {/* <div className="flex items-center justify-center fixed left-0 bottom-0 w-full">
        <Footer />
      </div> */}
    </section>
  );
};

export default PolicyPage;

// import { useRef } from 'react';
// import PrivacyPolicy from '../pages/PrivacyPolicy';
// import Contact from '../pages/Contact';
// import FooterNav from '../components/FooterNav';
// import TermsConditions from '../pages/TermsConditions';
// import Footer from '../components/Footer';

// const PolicyPage = () => {
//   const policyRef = useRef(null);
//   const termsRef = useRef(null);
//   const contactRef = useRef(null);
//   return (
//     <>
//       <FooterNav
//         policyRef={policyRef}
//         termsRef={termsRef}
//         contactRef={contactRef}
//       />

//       <div className="mt-8" ref={policyRef}>
//         <PrivacyPolicy />
//       </div>
//       <div className="mt-8" ref={termsRef}>
//         <TermsConditions />
//       </div>
//       <div className="mt-8" ref={contactRef}>
//         <Contact />
//       </div>
//       <div className="flex items-center justify-center left-0 fixed bottom-0 w-full">
//         <Footer />
//       </div>
//     </>
//   );
// };

// export default PolicyPage;
