import PicwText from './picWtext';
const Services = () => {
  return (
    <div id="services" className="xl:h-screen pt-40">
      <div className=" flex flex-col items-center">
        <h1 className="text-gray-800 text-5xl xl:text-7xl font-bold">
          Our Services
        </h1>
        <div className="flex flex-col xl:flex-row justify-around w-11/12">
          <PicwText src="/imgs/gear.png" text="Installation" />
          <PicwText src="/imgs/paper.png" text="Project Management" />
          <PicwText src="/imgs/hat.png" text="Maintenance" />
        </div>
      </div>
    </div>
  );
};
export default Services;
