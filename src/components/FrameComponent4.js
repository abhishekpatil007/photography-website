import PropTypes from "prop-types";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2995px] left-[-5px] [background:linear-gradient(180deg,_#171717,_#121212)] w-[1440px] h-[1319px] overflow-hidden text-center text-lg text-springgreen font-bebas-neue ${className}`}
    >
      <div className="absolute top-[120px] left-[442px] w-[544px] flex flex-col items-center justify-start gap-6 font-lexend">
        <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
          Services
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-4 text-37xl text-white font-bebas-neue">
          <div className="self-stretch relative tracking-[0.01em] leading-[100%] uppercase">
            <span>{`Photography `}</span>
            <span className="text-springgreen">Services Tailored to You</span>
          </div>
          <div className="w-[505px] relative text-lg leading-[145%] font-lexend text-gray-1200 flex items-center justify-center">
            Every moment is unique, and so are our photography sessions. We
            offer a range of services to suit your needs:
          </div>
        </div>
      </div>
      <div className="absolute top-[414px] left-[105px] w-[1234px] h-[103px] flex flex-col items-start justify-center p-6 box-border text-5xl text-gray-900">
        <div className="self-stretch flex flex-row items-center justify-between">
          <div className="w-60 rounded-lg bg-gray-1000 flex flex-row items-center justify-center py-2.5 px-6 box-border text-springgreen">
            <div className="relative tracking-[0.06em] leading-[145%]">
              Wedding
            </div>
          </div>
          <div className="w-60 rounded-lg flex flex-row items-center justify-center py-2.5 px-6 box-border">
            <div className="relative tracking-[0.06em] leading-[145%]">
              Family Portraits
            </div>
          </div>
          <div className="w-60 rounded-lg flex flex-row items-center justify-center py-2.5 px-6 box-border">
            <div className="relative tracking-[0.06em] leading-[145%]">
              Events
            </div>
          </div>
          <div className="w-60 rounded-lg flex flex-row items-center justify-center py-2.5 px-6 box-border">
            <div className="relative tracking-[0.06em] leading-[145%]">
              Lifestyles
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[549px] left-[105px] w-[603px] overflow-hidden flex flex-col items-start justify-start p-6 box-border">
        <div className="self-stretch relative rounded-3xl h-[623px] overflow-hidden shrink-0 bg-[url('/public/frame-3043984@3x.png')] bg-cover bg-no-repeat bg-[top]">
          <div className="absolute top-[548px] left-[436px] flex flex-row items-center justify-start gap-3">
            <img
              className="w-10 rounded-lg h-10 object-contain"
              alt=""
              src="/frame-3043995@2x.png"
            />
            <div className="shadow-[0px_4px_14px_rgba(0,_0,_0,_0.15)] [backdrop-filter:blur(14px)] rounded-lg bg-gray-1300 flex flex-row items-center justify-start p-1">
              <img
                className="w-8 relative h-8 overflow-hidden shrink-0"
                alt=""
                src="/caretright.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[604px] left-[781px] w-[558px] overflow-hidden flex flex-col items-start justify-start gap-16 text-left text-37xl text-white">
        <div className="self-stretch flex flex-col items-start justify-start gap-10">
          <div className="w-[499px] flex flex-col items-start justify-start gap-4">
            <div className="self-stretch relative tracking-[0.01em] leading-[100%] uppercase">
              Wedding PHotgraphy
            </div>
            <div className="self-stretch relative text-lg leading-[145%] font-lexend text-gray-1200">
              Every moment is unique, and so are our photography sessions. We
              offer a range of services to suit your needs:
            </div>
          </div>
          <div className="self-stretch relative rounded-980xl bg-gray-1100 h-0.5 overflow-hidden shrink-0" />
          <div className="self-stretch flex flex-col items-start justify-start gap-8 text-center text-lg text-springgreen font-lexend">
            <div className="self-stretch flex flex-row items-start justify-start gap-4">
              <div className="w-10 rounded-980xl bg-gray-1000 h-10 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[145%]">01</div>
              </div>
              <div className="w-[499px] flex flex-col items-start justify-start gap-2 text-left text-white">
                <b className="self-stretch relative leading-[145%]">
                  Capturing Every Detail
                </b>
                <div className="self-stretch relative leading-[145%] text-gray-1200">
                  From the first look to the last dance, we’ll be there to
                  preserve every special moment of your big day.
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-4">
              <div className="w-10 rounded-980xl bg-gray-1000 h-10 flex flex-col items-center justify-center">
                <div className="self-stretch relative leading-[145%]">02</div>
              </div>
              <div className="w-[499px] flex flex-col items-start justify-start gap-2 text-left text-white">
                <b className="self-stretch relative leading-[145%]">
                  Personalized Storytelling
                </b>
                <div className="self-stretch relative leading-[145%] text-gray-1200">
                  We capture the unique love story of each couple, highlighting
                  your personalities and the emotions of the day.
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch relative rounded-980xl bg-gray-1100 h-0.5 overflow-hidden shrink-0" />
        </div>
        <div className="rounded-980xl bg-white flex flex-row items-center justify-center py-3 px-6 text-center text-lg text-gray-100 font-lexend">
          <div className="relative leading-[145%]">Capture the moment</div>
        </div>
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
