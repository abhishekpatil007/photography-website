import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent2 = ({
  className = "",
  propBackgroundImage,
  heading4TimelessElegance,
  weddingPhotography,
  prop,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className={`w-[497px] rounded-2xl bg-gray-300 h-[544px] flex flex-row items-center justify-start p-3 box-border text-left text-lg text-white font-lexend ${className}`}
    >
      <div
        className="self-stretch flex-1 relative rounded-xl overflow-hidden bg-[url('/public/frame-3044038@3x.png')] bg-cover bg-no-repeat bg-[top]"
        style={frameDiv1Style}
      >
        <div className="absolute top-[434px] left-[16px] [backdrop-filter:blur(14px)] rounded-xl bg-gray-1400 w-[441px] flex flex-row items-center justify-between p-3 box-border">
          <div className="flex flex-col items-start justify-center">
            <b className="relative leading-[145%]">
              {heading4TimelessElegance}
            </b>
            <div className="relative text-sm leading-[145%]">
              {weddingPhotography}
            </div>
          </div>
          <div className="w-[35px] relative text-sm leading-[25.2px] flex items-center h-[23px] shrink-0">
            {prop}
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  heading4TimelessElegance: PropTypes.string,
  weddingPhotography: PropTypes.string,
  prop: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default FrameComponent2;
