import PropTypes from "prop-types";

const Container = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_2759.5px)] left-[calc(50%_-_720px)] rounded-xl w-[1440px] h-[1080px] overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-2.5 text-left text-61xl text-white font-bebas-neue ${className}`}
    >
      <div className="self-stretch flex-1 rounded-2xl overflow-hidden flex flex-col items-start justify-start relative gap-2.5 z-[0]">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[0]"
          alt=""
          src="/image-25@2x.png"
        />
        <div className="w-full absolute !m-[0] h-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-500 z-[1]" />
      </div>
      <div className="w-[712px] !m-[0] absolute top-[594px] left-[101px] flex flex-col items-start justify-center gap-16 z-[1]">
        <div className="self-stretch flex flex-col items-start justify-center gap-4">
          <div className="self-stretch relative tracking-[0.01em] leading-[100%] uppercase">
            <span>
              <span className="text-white">{`We `}</span>
              <span className="text-springgreen">Capture MOments</span>
              <span> with amazing photography</span>
            </span>
          </div>
          <div className="w-[694px] relative text-lg leading-[145%] font-lexend text-gray-600 flex items-center">
            At The Moments, we turn your special memories into timeless
            photographs that you’ll cherish forever with our team of trained and
            experience photographers.
          </div>
        </div>
        <div className="rounded-980xl bg-white flex flex-row items-center justify-center py-3 px-6 text-center text-lg text-gray-100 font-lexend">
          <div className="relative leading-[145%]">Capture your moment</div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
