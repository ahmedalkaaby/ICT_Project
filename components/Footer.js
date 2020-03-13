import { Link } from 'react-scroll';
const Footer = () => {
  return (
    <div className="flex flex-col md:flex">
      <div
        id="footer"
        className="flex flex-col md:flex-row w-full h-auot md:h-64 text-white text-sm lg:text-base xl:text-xl py-10 m-auto items-center md:justify-around bg-blue-900"
      >
        <div className="w-full md:w-4/12 flex flex-col md:flex-row md:items-center  ml-20 md:ml-4 md:justify-start">
          <div className="w-1/3">
            <img className="w-3/4 mr-5" src="/imgs/network.png" />
          </div>
          <ul>
            <li>IRAQ - BAGHDAD - B 103</li>
            <li>IRAQ - ERBIL - B 103</li>
            <li>IRAQ - BASRA - B 103</li>
          </ul>
        </div>
        <div className="flex w-full md:w-4/12 items-center ml-10 md:ml-0 md:justify-center">
          <ul className="flex flex-col m-5 cursor-pointer">
            <Link
              to="home"
              smooth={true}
              className="mb-3 xl:transition duration-300 ease-in-out xl:hover:text-gray-600"
            >
              HOME
            </Link>
            <Link
              to="about"
              smooth={true}
              className="mb-3 xl:transition duration-300 ease-in-out xl:hover:text-gray-600"
            >
              ABOUT US
            </Link>
            <Link
              to="services"
              smooth={true}
              className="xl:transition duration-300 ease-in-out xl:hover:text-gray-600"
            >
              PRODUCTS
            </Link>
          </ul>

          <ul className="flex flex-col m-5 cursor-pointer">
            <Link
              to="services"
              smooth={true}
              className="mb-3 xl:transition duration-300 ease-in-out xl:hover:text-gray-600"
            >
              Solutions & Services
            </Link>
            <Link
              to="partners"
              smooth={true}
              className="mb-3 xl:transition duration-300 ease-in-out xl:hover:text-gray-600"
            >
              Partners
            </Link>
            <Link
              to="footer"
              smooth={true}
              className="xl:transition duration-300 ease-in-out xl:hover:text-gray-600"
            >
              Contact Us
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-4/12 md:mr-4 ml-20 md:ml-0 md:justify-end">
          <img
            className="w-3/4 h-auto"
            src="http://getdrawings.com/vectors/spotify-logo-vector-6.png"
          />
        </div>
      </div>
      <div className="w-full bg-darkblue h-16 text-white text-xs md:text-base font-semibold flex justify-center items-center text-center m-auto">
        <h1>
          {'\u00A9'} Copyright {new Date().getFullYear()} by Iraq Crescent. All
          Rights Reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
