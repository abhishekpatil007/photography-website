import PropTypes from "prop-types";

const FrameComponent6 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1874px] left-[calc(50%_-_720px)] bg-gray-200 w-[1440px] h-[1148px] overflow-hidden text-left text-lg text-springgreen font-lexend ${className}`}
    >
      <div className="absolute top-[120px] left-[98px] w-[1242px] flex flex-col items-end justify-start gap-12">
        <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
          Core Values
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-12 text-37xl text-white font-bebas-neue">
          <div className="flex-1 relative tracking-[0.01em] leading-[100%] uppercase">
            <span>{`We make sure to `}</span>
            <span className="text-springgreen">Deliver photogrpahy with:</span>
          </div>
          <div className="flex-1 relative text-lg leading-[145%] font-lexend text-gray-1200">
            At The Moments, we believe that photography is more than just taking
            pictures—it’s about capturing the heart and soul of life’s most
            meaningful moments. Our core values reflect our commitment to
            creating an experience that’s as special as the memories we capture.
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative gap-3 text-center text-gray-100">
          <div className="rounded-980xl bg-white flex flex-row items-center justify-center py-3 px-6 z-[0]">
            <div className="relative leading-[145%]">Work with us</div>
          </div>
          <div className="!m-[0] absolute top-[5px] left-[1150px] flex flex-row items-center justify-start gap-3 z-[1]">
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
      <div className="absolute top-[484px] left-[108px] flex flex-row items-center justify-start gap-6 text-13xl text-white font-bebas-neue">
        <div className="w-[497px] rounded-2xl bg-gray-300 h-[544px] flex flex-row items-center justify-start p-3 box-border">
          <div className="self-stretch flex-1 relative rounded-xl overflow-hidden bg-[url('/public/frame-30440383@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[40px] left-[24px] tracking-[0.01em] leading-[140%]">
              Authenticity
            </div>
            <div className="absolute top-[355px] left-[24px] text-lg tracking-[0.01em] leading-[140%] font-lexend text-gray-1200 flex items-center w-[425px]">
              We believe in capturing the true essence of every moment. Whether
              it’s a joyful celebration or a quiet, intimate glance, we focus on
              bringing out the genuine emotions and connections that make your
              moments unique
            </div>
          </div>
        </div>
        <div className="w-[497px] rounded-2xl bg-gray-300 h-[544px] flex flex-row items-center justify-start p-3 box-border">
          <div className="self-stretch flex-1 relative rounded-xl overflow-hidden bg-[url('/public/frame-30440384@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[40px] left-[24px] tracking-[0.01em] leading-[140%]">
              Creativity
            </div>
            <div className="absolute top-[355px] left-[24px] text-lg tracking-[0.01em] leading-[140%] font-lexend text-gray-1200 flex items-center w-[425px]">
              Every session is a new opportunity for us to tell a story through
              the lens. We approach each project with fresh ideas and artistic
              vision, ensuring your photos are not only beautiful but also
              one-of-a-kind.
            </div>
          </div>
        </div>
        <div className="w-[497px] rounded-2xl bg-gray-300 h-[544px] flex flex-row items-center justify-start p-3 box-border">
          <div className="self-stretch flex-1 relative rounded-xl overflow-hidden bg-[url('/public/frame-30440385@3x.png')] bg-cover bg-no-repeat bg-[top]">
            <div className="absolute top-[40px] left-[24px] tracking-[0.01em] leading-[140%]">
              Connection
            </div>
            <div className="absolute top-[355px] left-[24px] text-lg tracking-[0.01em] leading-[140%] font-lexend text-gray-1200 flex items-center w-[425px]">
              Building a strong relationship with our clients is at the heart of
              what we do. We take the time to get to know you, ensuring that
              every photo reflects your personality and the special moments that
              matter most to you.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
