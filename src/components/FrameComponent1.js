import { useMemo } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const FrameComponent1 = ({
  className = "",
  propColor,
  propFontWeight,
  propColor1,
  propFontWeight1,
  propColor2,
  propFontWeight2,
}) => {
  const homeStyle = useMemo(() => {
    return {
      color: propColor,
      fontWeight: propFontWeight,
    };
  }, [propColor, propFontWeight]);

  const galleryStyle = useMemo(() => {
    return {
      color: propColor1,
      fontWeight: propFontWeight1,
    };
  }, [propColor1, propFontWeight1]);

  const aboutUsStyle = useMemo(() => {
    return {
      color: propColor2,
      fontWeight: propFontWeight2,
    };
  }, [propColor2, propFontWeight2]);

  return (
    <div
      className={`absolute top-[53px] left-[calc(50%_-_620px)] rounded-980xl border-gray-800 border-[1px] border-solid box-border w-[1240px] flex flex-col items-start justify-start p-1 text-center text-lg text-white font-lexend ${className}`}
    >
      <div className="self-stretch [backdrop-filter:blur(6px)] rounded-980xl bg-gray-1000 h-[72px] flex flex-col items-center justify-center py-0 px-2 box-border">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-start py-0 pl-[22px] pr-0 gap-[7.5px]">
            <div className="w-10 rounded-lg [background:linear-gradient(90deg,_#98fa74,_#00f674)] h-10 flex flex-row items-center justify-center">
              <img className="w-4 relative h-[22px]" alt="" src="/p.svg" />
            </div>
            <b className="relative tracking-[-0.75px] leading-[145%]">
              The Moments
            </b>
          </div>
          <div className="flex flex-row items-center justify-start text-gray-1200">
            <Link
              to="/"
              className="w-[88px] flex flex-row items-center justify-center py-1 px-3 box-border text-white"
              style={{ textDecoration: "none" }}
            >
              <b
                className="relative tracking-[-0.75px] leading-[145%]"
                style={homeStyle}
              >
                Home
              </b>
            </Link>
            <Link
              to="/gallery"
              className="w-[88px] flex flex-row items-center justify-center py-1 px-3 box-border"
              style={{ textDecoration: "none" }}
            >
              <div
                className="relative tracking-[-0.75px] leading-[145%]"
                style={galleryStyle}
              >
                Gallery
              </div>
            </Link>
            <Link
              to="/about"
              className="w-[88px] flex flex-row items-center justify-center py-1 px-3 box-border"
              style={{ textDecoration: "none" }}
            >
              <div
                className="relative tracking-[-0.75px] leading-[145%]"
                style={aboutUsStyle}
              >
                About us
              </div>
            </Link>
          </div>
          <div className="w-[180px] rounded-980xl border-gray-700 border-[1px] border-solid box-border flex flex-col items-start justify-start p-1">
            <div className="self-stretch rounded-980xl bg-gray-1000 h-12 flex flex-row items-center justify-center py-3 px-6 box-border">
              <div className="relative leading-[100%]">{`Book a call `}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propColor: PropTypes.any,
  propFontWeight: PropTypes.any,
  propColor1: PropTypes.any,
  propFontWeight1: PropTypes.any,
  propColor2: PropTypes.any,
  propFontWeight2: PropTypes.any,
};

export default FrameComponent1;
