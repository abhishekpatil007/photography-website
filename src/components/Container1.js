import PropTypes from "prop-types";

const Container1 = ({ className = "" }) => {
  return (
    <div
      className={`fixed inset-0 w-full h-full flex flex-col items-start justify-start p-6 box-border gap-2.5 text-left text-61xl text-white font-bebas-neue ${className}`}
    >
      <div className="flex-1 w-full h-full rounded-2xl overflow-hidden flex flex-col items-start justify-start relative gap-2.5 z-[0]">
        <img
          className="w-full h-full object-cover z-[0]"
          alt=""
          src="/image-251@2x.png"
        />
        <div className="absolute inset-0 bg-gray-500 z-[1]" />
      </div>
      <div className="absolute top-[30%] left-[7%] flex flex-col items-start justify-center gap-16 z-[1]">
        <div className="flex flex-col items-start justify-center gap-4">
          <div className="relative tracking-[0.01em] leading-[100%] uppercase text-4xl">
            <span>{`Our `}</span>
            <span className="text-springgreen">Photo wall</span>
          </div>
          <div className="relative text-lg leading-[145%] font-lexend text-gray-600 flex items-center">
            Here, you can take a look at the work we done so far. Every shoot
            with passion and dedication. You can become part of our photo wall
            now!
          </div>
        </div>
        <div className="rounded-980xl bg-white flex flex-row items-center justify-center py-3 px-6 text-center text-lg text-gray-100 font-lexend">
          <div className="relative leading-[145%]">Capture your moment</div>
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
