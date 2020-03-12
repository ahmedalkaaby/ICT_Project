import PicwText from './picWtext';
const Partners = () => {
  return (
    <div id="partners" className="xl:h-screen pt-40">
      <div className="flex flex-col items-center ">
        <h1 className="text-gray-800 text-5xl xl:text-7xl font-bold">
          Our Partners
        </h1>
        <div className="flex flex-col xl:flex-row justify-around w-11/12">
          <PicwText
            circle="true"
            // src=""
            // text=""
          />
          <PicwText circle="true" src="/imgs/part2.jpg" text="Kerio" />
          <PicwText circle="true" src="/imgs/part3.jpg" text="Microsoft" />
          <PicwText circle="true" src="/imgs/part4.jpg" text="Micronet" />
          <PicwText circle="true" src="/imgs/part5.jpg" text="Bit9" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
