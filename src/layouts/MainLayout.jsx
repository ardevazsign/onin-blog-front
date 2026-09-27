import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="px-0 md:px-12 lg:px-16 xl:px-24 2xl:px-48">
      {/* px-4 md:px-8 */}
      <Navbar />
      <div className=" pl-2 xl:pl-16">
        <Outlet />
      </div>
      <div className="flex items-center justify-center fixed left-0 bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
