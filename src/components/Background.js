import { useMemo } from "react";
import PropTypes from "prop-types";

const Background = ({ className = "", propTop }) => {
  const backgroundStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[calc(50%_+_1621px)] left-[calc(50%_-_629px)] rounded-13xl bg-gray-400 w-[1258px] h-[508.8px] overflow-hidden text-left text-61xl text-gray-1200 font-lexend ${className}`}
      style={backgroundStyle}
    >
      <div className="absolute top-[160px] left-[calc(50%_-_277px)] leading-[100%] uppercase font-bebas-neue text-white text-center">
        Capture the moment!
      </div>
      <div className="absolute h-[28.46%] w-[80.92%] top-[29.89%] right-[9.54%] bottom-[41.65%] left-[9.54%] border-darkslategray border-b-[0.7px] border-solid box-border" />
      <div className="absolute h-[calc(100%_-_472.8px)] top-[328.1px] bottom-[144.7px] left-[120px] w-[173.5px] overflow-hidden text-lg-8">
        <div className="absolute top-[3.9px] left-[0px] leading-[145%] flex items-center w-[177px] h-[26px]">
          alex@gmail.com
        </div>
        <img
          className="absolute h-[calc(100%_-_16px)] w-[calc(100%_-_153.5px)] top-[7.5px] right-[0px] bottom-[8.5px] left-[153.5px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/svg2.svg"
        />
      </div>
      <div className="absolute top-[328.1px] left-[calc(50%_-_311.5px)] w-[646.5px] h-9 overflow-hidden text-base-9">
        <div className="absolute top-[4.9px] left-[165.5px] leading-[145%] flex items-center w-[63px] h-[23px]">
          Twitter
        </div>
        <div className="absolute top-[4.9px] left-[252.5px] text-base-5 leading-[145%] flex items-center w-[94px] h-[23px]">
          Instagram
        </div>
        <div className="absolute top-[4.9px] left-[369.5px] leading-[145%] flex items-center w-[59px] h-[23px]">
          TikTok
        </div>
        <div className="absolute top-[4.9px] left-[452.5px] text-base-6 leading-[145%] flex items-center w-[93px] h-[23px]">
          Facebook
        </div>
      </div>
      <div className="absolute h-[calc(100%_-_472.8px)] top-[328.1px] bottom-[144.7px] left-[988px] w-[150px] overflow-hidden text-lg-3">
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

Background.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default Background;
