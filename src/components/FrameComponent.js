import { useMemo } from "react";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "", frameDivTop, frame3043980 }) => {
  const frameDivStyle = useMemo(() => {
    return {
      top: frameDivTop,
    };
  }, [frameDivTop]);

  return (
    <div
      className={`absolute top-[4314px] left-[calc(50%_-_720px)] w-[1440px] flex flex-col items-start justify-start py-20 px-[100px] box-border text-left text-lg text-springgreen font-lexend ${className}`}
      style={frameDivStyle}
    >
      <div className="self-stretch relative rounded-2xl bg-gray-1000 h-[540px] overflow-hidden shrink-0">
        <img
          className="absolute top-[-395px] left-[501px] w-[1166px] h-[1394.6px] object-contain"
          alt=""
          src={frame3043980}
        />
        <div className="absolute top-[calc(50%_-_172px)] left-[48px] w-[501px] flex flex-col items-start justify-center gap-16">
          <div className="self-stretch flex flex-col items-start justify-center gap-6">
            <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
              Book a call
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-4 text-37xl text-white font-bebas-neue">
              <div className="self-stretch relative tracking-[0.01em] leading-[100%] uppercase">
                <span>Let’s</span>
                <span className="text-springgreen">
                  {" "}
                  Capture Your Special Moment
                </span>
              </div>
              <div className="self-stretch relative text-lg leading-[145%] font-lexend text-gray-600">
                Ready to turn your special moments into beautiful memories?
                Reach out today to schedule your session. We’re excited to work
                with you!
              </div>
            </div>
          </div>
          <div className="rounded-980xl bg-white flex flex-row items-center justify-center py-3 px-6 text-center text-gray-100">
            <div className="relative leading-[145%]">Book a call</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  frame3043980: PropTypes.string,

  /** Style props */
  frameDivTop: PropTypes.any,
};

export default FrameComponent;
