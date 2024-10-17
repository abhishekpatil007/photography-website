import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1846px] left-[0px] bg-gray-200 w-[1440px] h-[1148px] overflow-hidden text-left text-lg text-springgreen font-lexend ${className}`}
    >
      <div className="absolute top-[120px] left-[98px] w-[1242px] flex flex-col items-end justify-start gap-12">
        <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
          Portfolio
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-12 text-37xl text-white font-bebas-neue">
          <div className="flex-1 relative tracking-[0.01em] leading-[100%] uppercase">
            <span>{`See the `}</span>
            <span className="text-springgreen">Moments We’ve Captured</span>
          </div>
          <div className="flex-1 relative text-lg leading-[145%] font-lexend text-gray-1200">
            Take a look at some of our favorite work. Each photo tells its own
            story, and we can’t wait to help you tell yours. Whether it’s the
            joy of a wedding, the excitement of a graduation, or the warmth of
            family time, we capture it all with care and creativity.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative gap-3 text-center text-gray-100">
          <div className="rounded-980xl bg-white flex flex-row items-center justify-center py-3 px-6 z-[0]">
            <div className="relative leading-[145%]">Work with us</div>
          </div>
          <div className="rounded-980xl flex flex-row items-center justify-center py-3 px-6 z-[1] text-white">
            <div className="relative [text-decoration:underline] leading-[145%]">
              View portfolio
            </div>
          </div>
          <div className="!m-[0] absolute top-[5px] left-[1150px] flex flex-row items-center justify-start gap-3 z-[2]">
            <img
              className="w-10 rounded-lg h-10 object-contain"
              alt=""
              src="/frame-30439951@2x.png"
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
      <div className="absolute top-[484px] left-[108px] flex flex-row items-center justify-start gap-6 text-white">
        <FrameComponent2
          heading4TimelessElegance={`Emma & Patrick`}
          weddingPhotography="Wedding Photography"
          prop="2022"
        />
        <FrameComponent2
          propBackgroundImage="url('/frame-30440381@3x.png')"
          heading4TimelessElegance="Coop Corporated"
          weddingPhotography="Corporate Photography"
          prop="2024"
        />
        <FrameComponent2
          propBackgroundImage="url('/frame-30440382@3x.png')"
          heading4TimelessElegance="Sana B"
          weddingPhotography="Birthday Photography"
          prop="2022"
        />
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
