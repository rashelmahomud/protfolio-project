const Util = () => {
  return (
    <div className="lg:flex items-center flex-col p-10 mx-auto hidden">
      <div className="my-2">
          <p className="w-5 h-6 border-2 border-teal-300 rounded-full relative -ml-2 "></p>
          <p className="w-1 h-2 border-2 border-teal-300 rounded-full absolute -mt-5 "></p>
      </div>
      <ul className="flex flex-col gap-2">
        <li className="w-1 h-2 bg-gray-400 rounded"></li>
        <li className="w-1 h-3 bg-gray-400 rounded"></li>
        <li className="w-1 h-3 bg-gray-400 rounded"></li>
        <li className="w-1 h-3 bg-gray-400 rounded"></li>
        <li className="w-1 h-3 bg-gray-400 rounded"></li>
        <li className="w-4 h-4 rotate-45 bg-gray-400 -ml-1"></li>
      </ul>
    </div>
  );
};

export default Util;
