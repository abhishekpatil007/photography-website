import PropTypes from "prop-types";

const Container2 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[calc(50%_-_2821px)] left-[calc(50%_-_717px)] rounded-xl w-[1440px] h-[720px] overflow-hidden flex flex-col items-start justify-start p-6 box-border gap-2.5 text-left text-61xl text-white font-bebas-neue ${className}`}
    >
      <div className="self-stretch flex-1 rounded-2xl overflow-hidden flex flex-col items-start justify-start relative gap-2.5 z-[0]">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[930px] shrink-0 object-cover z-[0]"
          alt=""
          src="/image-251@2x.png"
        />
        <div className="w-[1416px] absolute !m-[0] top-[calc(50%_-_465px)] left-[calc(50%_-_708px)] bg-gray-500 h-[930px] z-[1]" />
      </div>
      <div className="w-[712px] !m-[0] absolute top-[256px] left-[101px] flex flex-col items-start justify-center gap-16 z-[1]">
        <div className="self-stretch flex flex-col items-start justify-center gap-4">
          <div className="self-stretch relative tracking-[0.01em] leading-[100%] uppercase">
            <span>{`We `}</span>
            <span className="text-springgreen">capture special moments</span>
            <span> For you</span>
          </div>
          <div className="w-[694px] relative text-lg leading-[145%] font-lexend text-gray-600 flex items-center">
            We're a passionate group of photographers dedicated to freezing time
            through our lenses. Whether it's a wedding, family portrait, or just
            everyday life, we believe every moment deserves to be captured.
          </div>
        </div>
        <div className="rounded-980xl bg-white flex flex-row items-center justify-center py-3 px-6 text-center text-lg text-gray-100 font-lexend">
          <div className="relative leading-[145%]">Work with us</div>
        </div>
      </div>
    </div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
