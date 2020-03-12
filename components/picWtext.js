const PicwText = props => {
  if (props.circle) {
    return (
      <div className=" h-auto flex flex-col text-gray-700 xl:text-white hover:text-gray-700 xl:transition duration-500 ease-in-out xl:transform hover:scale-110  items-center my-20 border-b-4 xl-border-none xl:border-0">
        <div className="flex border-2 min-w-10 xl:h-56 xl:w-56 w-64 h-64  rounded-full shadow-md xl:hover:border-blue-900 justify-center items-center p-2">
          <img className="w-3/4" src={props.src} />
        </div>
        <h1 className=" text-3xl my-10 font-medium ">{props.text}</h1>
      </div>
    );
  } else {
    return (
      <div className="flex xl:transition duration-500 ease-in-out xl:transform hover:scale-110 border-b-4 xl:border-0 flex-col items-center text-center h-auto py-10 m-5">
        <img className="w-1/4 xl:w-2/5" src={props.src} />
        <h1 className=" text-3xl my-10 font-medium text-gray-700">
          {props.text}
        </h1>
      </div>
    );
  }
};

export default PicwText;
