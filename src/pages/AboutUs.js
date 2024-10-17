import Container2 from "../components/Container2";
import FrameComponent1 from "../components/FrameComponent1";
import Background from "../components/Background";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent from "../components/FrameComponent";
import FrameComponent6 from "../components/FrameComponent6";

const AboutUs = () => {
  return (
    <div className="w-full relative bg-gray-400 h-[5642px] overflow-hidden text-center text-lg text-springgreen font-lexend">
      <Container2 />
      <FrameComponent1
        propColor="rgba(255, 255, 255, 0.7)"
        propFontWeight="unset"
        propColor1="rgba(255, 255, 255, 0.7)"
        propFontWeight1="unset"
        propColor2="#fff"
        propFontWeight2="bold"
      />
      <Background propTop="calc(50% + 2392px)" />
      <img
        className="absolute top-[1351.5px] left-[1011.4px] rounded-2xl w-[674.1px] h-[702.5px] overflow-hidden object-contain"
        alt=""
        src="/frame-3043974@2x.png"
      />
      <img
        className="absolute top-[1430px] left-[582.3px] rounded-2xl w-[652.8px] h-[627.2px] overflow-hidden object-contain"
        alt=""
        src="/frame-1000001812@2x.png"
      />
      <div className="absolute top-[800px] left-[378px] w-[634px] flex flex-col items-center justify-center gap-16">
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
        <div className="self-stretch flex flex-row items-center justify-center text-gray-100">
          <div className="rounded-980xl bg-white flex flex-row items-center justify-center py-3 px-6">
            <div className="relative leading-[145%]">Work with us</div>
          </div>
        </div>
      </div>
      <FrameComponent7 />
      <FrameComponent
        frameDivTop="4515px"
        frame3043980="/frame-30439802@2x.png"
      />
      <div className="absolute top-[1515.4px] left-[339px] rounded-2xl w-[459px] h-[426px] overflow-hidden flex flex-col items-start justify-start">
        <img
          className="self-stretch relative max-w-full overflow-hidden h-[865px] shrink-0 object-cover"
          alt=""
          src="/image-261@2x.png"
        />
      </div>
      <img
        className="absolute top-[1326.4px] left-[-234.4px] rounded-2xl w-[654.1px] h-[624.6px] overflow-hidden object-contain"
        alt=""
        src="/frame-1000001810@2x.png"
      />
      <FrameComponent6 />
    </div>
  );
};

export default AboutUs;
