import { useState } from 'react';
import AboutNav from '../components/AboutNav';
import AboutContent from '../components/AboutContent';
// import Footer from '../components/Footer';

const About = () => {
  const [active, setActive] = useState('about');

  return (
    <section className="py-2 xl:px-12 lg:px-12 md:px-12 sm:px-10 px-12 ">
      <AboutNav active={active} setActive={setActive} />

      <div className="mt-1">
        <AboutContent active={active} />
      </div>
      {/* <div className="flex items-center justify-center fixed left-0 bottom-0 w-full">
        <Footer />
      </div> */}
    </section>
  );
};

export default About;
