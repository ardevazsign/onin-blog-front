// import { Link } from 'react-router-dom';
// import { ArrowRight, BookOpen, FolderGit2, Code2, Laptop } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="max-h-screen flex items-center justify-center ">
      <div className="text-center items-center justify-center flex md:flex-row xl:flex-row lg:flex-row sm:flex-col flex-col xl:gap-12 lg:gap-12 xl:py-6 md:gap-8 md:py-1 sm:mt-4 xl:mt-4 lg:mt-4 md:mt-4 mt-40 ">
        <div className="mt-80 flex justify-center items-center md:flex md:px-0 sm:flex sm:justify-center sm:items-center sm:mt-64 xl:mt-0 lg:mt-0 md:mt-0">
          <img
            className="rounded-md shadow-lg w-[380px] h-[400px] xl:h-[560px] lg:h-[480px] md:h-[400px] sm:h-[400px] "
            src="../../public/onin-profile.jpg"
            alt=""
          />
        </div>
        <div className="bg-transparent px-8 xl:px-4 md:px-2 rounded-md sm:mb-12 xl:mb-2 lg:mb-2 md:mb-2 mb-20">
          <h2 className="font-semibold text-[18px] sm:text-[20px] xl:text-[26px] lg:text-[22px] md:text-[20px] text-left m-4 xl:m-2 md:m-0 lg:m-0 font-serif italic">
            About the Author
          </h2>
          <h3 className="font-bold text-[16px]  xl:text-[20px] lg:text-[18px] md:text-[16px] sm:text-[20px] m-2">
            Niño Saavedra Manaog
          </h3>
          <p className="w-[400px] sm:w-[500px] xl:w-[580px] lg:w-[540px] md:w-[480px] text-[12px] sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[18px]   text-justify indent-20 font-serif italic  2xl:leading-6 xl:leading-6 lg:leading-5 md:leading-4 ">
            Nino Saavedra Manaog is a professor of literature at one of the
            countrys leading universities, where he has spent over two decades
            guiding students through the written word. To him, education is not
            just a profession — it is the single greatest ladder anyone can
            climb, the one tool capable of lifting a person beyond the
            circumstances they were born into. His love for literature began
            long before the lecture halls. Growing up surrounded by stories,
            poems, and the quiet discipline of reading, he came to believe that
            words carry the power to shape how people see themselves and the
            world around them. That belief has stayed with him through every
            class he has taught and every essay he has graded. Today, Nino
            channels that same passion into this blog. Here, he shares
            reflections on literature, teaching, and the everyday lessons found
            in books — written not for critics or scholars, but for anyone
            willing to learn. He believes that knowledge loses its value the
            moment it stops being shared, which is why every post on this page
            is dedicated, first and foremost, to you, the reader. Whether you
            are a student, a fellow educator, or simply someone who loves to
            read, Nino hopes this space becomes a small but meaningful step on
            your own ladder — one page, one idea, one story at a time.
          </p>
          <p className="w-[400px] sm:w-[500px] xl:w-[580px] md:w-[480px] text-[12px] lg:text-[16px] md:text-[14px] text-justify indent-20 font-serif italic lg:leading-5 md:leading-4 xl:text-[18px]">
            Education is the tallest ladder we are given. Literature is how we
            learn to climb it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
