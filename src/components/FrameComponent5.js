import PropTypes from "prop-types";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[3032px] left-[100px] rounded-2xl bg-gray-1000 w-[1240px] h-[540px] overflow-hidden text-left text-lg text-springgreen font-lexend ${className}`}
    >
      <img
        className="absolute top-[-395px] left-[501px] w-[1166px] h-[1394.6px] object-contain"
        alt=""
        src="/frame-30439801@2x.png"
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
              Ready to turn your special moments into beautiful memories? Reach
              out today to schedule your session. We’re excited to work with
              you!
            </div>
          </div>
        </div>
        <div className="rounded-980xl bg-white flex flex-row items-center justify-center py-3 px-6 text-center text-gray-100">
          <div className="relative leading-[145%]">Book a call</div>
        </div>
      </div>
      <div className="absolute top-[0px] left-[551px] [background:linear-gradient(180deg,_#1b1b1b,_rgba(27,_27,_27,_0))] w-[842px] h-[122px]" />
      <div className="absolute top-[672px] left-[1392px] [background:linear-gradient(180deg,_#1b1b1b,_rgba(27,_27,_27,_0))] w-[786px] h-[122px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
    </div>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
