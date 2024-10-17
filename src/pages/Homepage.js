import FrameComponent from "../components/FrameComponent";
import Container from "../components/Container";
import FrameComponent1 from "../components/FrameComponent1";
import Background1 from "../components/Background1";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";

const Homepage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-400 overflow-hidden text-left text-lg text-springgreen font-lexend">
      <div className="relative w-full max-w-[1440px] h-[5519px]">
        <div className="absolute top-[1162px] left-[732px] rounded-t-2xl rounded-b-none w-[608px] h-[684px] overflow-hidden flex flex-col items-start justify-start">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[865px] shrink-0 object-cover"
            alt=""
            src="/image-26@2x.png"
          />
        </div>
        <FrameComponent frame3043980="/frame-3043980@2x.png" />
        <Container />
        <div className="absolute top-[1190px] left-[98px] w-[505px] flex flex-col items-start justify-start gap-16">
          <div className="self-stretch flex flex-col items-start justify-start gap-8">
            <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
              About us
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-8 text-37xl text-white font-bebas-neue">
              <div className="self-stretch relative leading-[100%] uppercase">
                Meet The moments
              </div>
              <div className="self-stretch relative text-lg leading-[145%] font-lexend text-gray-1200">
                <p className="m-0">{`Welcome to The Moments! `}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">{`We're a passionate group of photographers dedicated to freezing time through our lenses. Whether it's a wedding, family portrait, or just everyday life, we believe every moment deserves to be captured. `}</p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Our friendly and experienced team loves making you feel
                  comfortable in front of the camera so that your natural beauty
                  shines through. Let us be a part of your story and help you hold
                  on to your most precious memories forever.
                </p>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-3 text-center text-gray-100">
            <div className="rounded-980xl bg-white flex flex-row items-center justify-center py-3 px-6">
              <div className="relative leading-[145%]">Work with us</div>
            </div>
            <div className="rounded-980xl flex flex-row items-center justify-center py-3 px-6 text-white">
              <div className="relative [text-decoration:underline] leading-[145%]">
                More about us
              </div>
            </div>
          </div>
        </div>
        <FrameComponent1 />
        <Background1 />
        <FrameComponent4 />
        <FrameComponent3 />
      </div>
    </div>
  );
};

export default Homepage;
