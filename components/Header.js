import { Link } from 'react-scroll';
import ButtonMenu from './buttonMenu';
const Header = props => {
  return (
    <header className="w-full realtive">
      <div className=" w-full fixed h-auto bg-white shadow-md z-20 top-0 flex justify-center">
        <div className="hidden w-5/6 lg:flex xl:w-9/12 h-6 lg:h-16 bg-blue-900 my-12 rounded-full flex justify-around items-center">
          <ul className="font-semibold text-white w-1/2 xl:text-lg flex justify-around">
            <Link
              to="home"
              smooth={true}
              className="cursor-pointer xl:transition duration-500 ease-in-out xl:transform hover:scale-110"
            >
              HOME
            </Link>
            <Link
              to="about"
              smooth={true}
              className="cursor-pointer xl:transition duration-500 ease-in-out xl:transform hover:scale-110"
            >
              ABOUT US
            </Link>
            <Link
              to="services"
              smooth={true}
              className="cursor-pointer xl:transition duration-500 ease-in-out xl:transform hover:scale-110"
            >
              PRODUCTS
            </Link>
          </ul>
          <Link to="home" smooth={true}>
            <div className="cursor-pointer flex items-center justify-center h-25 w-25  bg-blue-900 border border-black rounded-full shadow-md">
              <img className="w-3/4" src="/imgs/logoHeader.png" alt="logo" />
            </div>
          </Link>
          <ul className="font-semibold text-white xl:text-lg w-1/2 flex justify-around">
            <Link
              to="services"
              smooth={true}
              className="xl:transition duration-500 ease-in-out xl:transform hover:scale-110 cursor-pointer"
            >
              Solutions & Services
            </Link>
            <Link
              to="partners"
              smooth={true}
              className="xl:transition duration-500 ease-in-out xl:transform hover:scale-110 cursor-pointer"
            >
              Partners
            </Link>
            <Link
              to="footer"
              smooth={true}
              className="xl:transition duration-500 ease-in-out xl:transform hover:scale-110 cursor-pointer "
            >
              Contact us
            </Link>
          </ul>
        </div>
        {/* Mobile Responsive Header */}
        <div className="w-full p-5 lg:hidden bg-gray-0 flex flex-row items-center justify-between">
          <Link to="home" smooth={true}>
            <div className="flex items-center justify-center h-16 w-16 md:w-20 md:h-20  bg-blue-900 border border-black rounded-full shadow-md">
              <img
                className="w-3/4"
                src="https://d.top4top.io/p_1525ofpb31.png"
                alt="logo"
              />
            </div>
          </Link>

          {props.clicked && <MobileMenu close={props.close} />}
        </div>
      </div>
    </header>
  );
};

const MobileMenu = props => {
  return (
    <div className="w-full flex md:w-3/4 h-auto lg:hidden justify-end pt-4 pr-4 z-30 w-full fixed top-0 right-0 shadow-xl ">
      <ul className="font-semibold bg-blue-900 w-full pt-12 text-white flex flex-col p-4 ">
        <Link
          onClick={props.close}
          to="home"
          smooth={true}
          className="cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4"
        >
          HOME
        </Link>
        <Link
          onClick={props.close}
          to="about"
          smooth={true}
          className="cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4"
        >
          ABOUT US
        </Link>
        <Link
          onClick={props.close}
          to="services"
          smooth={true}
          className="cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4"
        >
          PRODUCTS
        </Link>
        <Link
          onClick={props.close}
          to="services"
          smooth={true}
          className="cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4"
        >
          Solutions & Services
        </Link>
        <Link
          onClick={props.close}
          to="partners"
          smooth={true}
          className="cursor-pointer ml-4 py-4 border-gray-600 border-b w-3/4"
        >
          Partners
        </Link>
        <Link
          onClick={props.close}
          to="footer"
          smooth={true}
          className="cursor-pointer ml-4 py-4"
        >
          Contact us
        </Link>
      </ul>
    </div>
  );
};

export default Header;
