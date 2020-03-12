import { useState } from 'react';
const About = () => {
  const [isCut, SetIsCut] = useState(false);

  const text1 = isCut
    ? 'We employ some of the best IT professionals and have partnerships with the leading solution provides around the world'
    : '';
  const text2 = isCut
    ? 'Completing a wide range of integrated business solutions in the areas of Infrastructure Solutions'
    : '';
  const text3 = isCut
    ? 'Knowledge Managment Systems. Electronic Business Systems and much more'
    : '';

  return (
    <div
      id="about"
      className=" pt-40 lg:pt-0 flex flex-col items-center justify-center w-full md:h-screen"
    >
      <div className="w-20 h-10 object-top z-10">
        <img src="/imgs/question.png" />
      </div>
      <div className="w-11/12 h-auto bg-gray-0 rounded-xxl border-2 px-12 pt-12 pb-6 justify-start flex flex-col">
        <h1 className="text-center md:text-left text-gray-800 font-bold text-5xl">
          About Us
        </h1>
        <ul className="my-5 text-center md:text-left text-gray-900 text-lg font-semibold">
          <li>ICT Is an IT firm with futuristic vision.</li>
          <li>
            ICT provides world-class solution and professional services in
            Jordan and all over the Middle East.
          </li>
          <li>
            ICT is a privately held company. registered in iraq-baghdad. From
            the Outest
          </li>
          <li>
            ICT has focused around the networking. Security. Web Services. Web
            design by teaming up with partners of choice.
          </li>
        </ul>

        <ul className=" text-center md:text-left text-gray-900 text-lg font-semibold">
          <li>{text1}</li>
          <li>{text2}</li>
          <li>{text3}</li>
        </ul>
        <button
          className="w-1/2 xl:w-1/4 m-auto mt-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={e => SetIsCut(!isCut)}
        >
          {!isCut ? 'Read More' : 'Read Less'}
        </button>
      </div>
    </div>
  );
};

export default About;
