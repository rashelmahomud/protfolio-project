const Line = ({small,lg}) => {
  return (
    <div className="flex items-center justify-center my-3">
      <div className="w-3 h-3 bg-[#12F7D6] rounded-full"></div>
      <div className={`${small ? 'w-24' : "w-36"} h-1 bg-[#12F7D6]`}></div>
      <div className="w-3 h-3 bg-[#12F7D6] rounded-full"></div>
    </div>
  );
};

export default Line;
