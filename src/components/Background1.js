import PropTypes from "prop-types";

const Background1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_+_2250.5px)] left-[calc(50%_-_720px)] rounded-13xl bg-gray-400 w-[1440px] h-[509px] overflow-hidden text-left text-61xl text-gray-1200 font-lexend ${className}`}
    >
      <div className="absolute top-[160px] left-[calc(50%_-_277px)] leading-[100%] uppercase font-bebas-neue text-white text-center">
        Capture the moment!
      </div>
      <div className="absolute h-[28.45%] w-[70.69%] top-[29.86%] right-[14.65%] bottom-[41.69%] left-[14.65%] border-darkslategray border-b-[0.7px] border-solid box-border" />
      <div className="absolute top-[332px] left-[211px] text-lg-8 leading-[145%] flex items-center w-[237px] h-[26px]">
        themoments@gmail.com
      </div>
      <div className="absolute top-[328px] left-[calc(50%_-_158px)] w-[392px] h-9 overflow-hidden text-base-9">
        <div className="absolute top-[5px] left-[12px] leading-[145%] flex items-center w-[63px] h-[23px]">
          Twitter
        </div>
        <div className="absolute top-[5px] left-[99px] text-base-5 leading-[145%] flex items-center w-[94px] h-[23px]">
          Instagram
        </div>
        <div className="absolute top-[5px] left-[216px] leading-[145%] flex items-center w-[59px] h-[23px]">
          TikTok
        </div>
        <div className="absolute top-[5px] left-[299px] text-base-6 leading-[145%] flex items-center w-[93px] h-[23px]">
          Facebook
        </div>
        <img
          className="absolute h-[calc(100%_-_16px)] w-[calc(100%_-_372px)] top-[7.6px] right-[530px] bottom-[8.4px] left-[-158px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/svg.svg"
        />
      </div>
      <div className="absolute h-[calc(100%_-_473px)] top-[328.1px] bottom-[144.9px] left-[1079px] w-[150px] overflow-hidden text-lg-3">
        <div className="absolute top-[3.9px] left-[0px] leading-[145%] flex items-center w-[149px] h-[26px]">
          (123) 456 789
        </div>
        <img
          className="absolute h-[calc(100%_-_16px)] w-[calc(100%_-_130px)] top-[7.5px] right-[0px] bottom-[8.5px] left-[130px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/svg1.svg"
        />
      </div>
    </div>
  );
};

Background1.propTypes = {
  className: PropTypes.string,
};

export default Background1;
