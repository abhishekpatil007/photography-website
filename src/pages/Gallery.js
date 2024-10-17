import Container1 from "../components/Container1";
import FrameComponent1 from "../components/FrameComponent1";
import Background from "../components/Background";
import FrameComponent5 from "../components/FrameComponent5";

const Gallery = () => {
  return (
    <div className="w-full relative bg-gray-400 h-[4142px] overflow-hidden text-left text-39xl text-white font-bebas-neue">
      <div className="absolute top-[772px] left-[416px] rounded-2xl w-[924px] overflow-hidden flex flex-col items-center justify-center p-6 box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-8">
          <div className="self-stretch relative tracking-[0.01em] leading-[100%] uppercase">{`Emma & Patrick’s Wedding`}</div>
          <div className="self-stretch flex flex-row items-center justify-start flex-wrap content-center gap-6">
            <img
              className="w-[876px] relative rounded-2xl h-[465px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-3044012@2x.png"
            />
            <img
              className="w-[426px] relative rounded-2xl h-[500px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-3044013@2x.png"
            />
            <img
              className="w-[426px] relative rounded-2xl h-[500px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-3044014@2x.png"
            />
            <img
              className="w-[876px] relative rounded-2xl h-[465px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-3044015@2x.png"
            />
            <img
              className="w-[426px] relative rounded-2xl h-[500px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-30440131@2x.png"
            />
            <img
              className="w-[426px] relative rounded-2xl h-[500px] overflow-hidden shrink-0 object-cover"
              alt=""
              src="/frame-30440141@2x.png"
            />
          </div>
        </div>
      </div>
      <Container1 />
      <FrameComponent1
        propColor="rgba(255, 255, 255, 0.7)"
        propFontWeight="unset"
        propColor1="#fff"
        propFontWeight1="bold"
        propColor2="rgba(255, 255, 255, 0.7)"
        propFontWeight2="unset"
      />
      <Background />
      <div className="absolute top-[772px] left-[103px] rounded-2xl bg-gray-1000 flex flex-col items-start justify-start py-10 px-6 text-5xl">
        <div className="self-stretch flex flex-col items-start justify-start gap-12">
          <div className="flex flex-col items-start justify-start gap-6">
            <div className="self-stretch flex flex-row items-center justify-center gap-3">
              <div className="flex-1 relative rounded-980xl bg-gray-1100 h-0.5 overflow-hidden" />
              <div className="relative tracking-[0.06em] leading-[100%]">
                Weddings
              </div>
              <div className="flex-1 relative rounded-980xl bg-gray-1100 h-0.5 overflow-hidden" />
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-gray-900">
              <div className="w-60 rounded-lg bg-gray-1000 flex flex-row items-center justify-start py-2.5 px-6 box-border text-springgreen">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%]">{`Emma & Patrick`}</div>
              </div>
              <div className="w-60 rounded-lg flex flex-row items-center justify-start py-2.5 px-6 box-border">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%]">
                  Family Portraits
                </div>
              </div>
              <div className="w-60 rounded-lg flex flex-row items-center justify-start py-2.5 px-6 box-border">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%]">
                  Events
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6">
            <div className="self-stretch flex flex-row items-center justify-center gap-3">
              <div className="flex-1 relative rounded-980xl bg-gray-1100 h-0.5 overflow-hidden" />
              <div className="relative tracking-[0.06em] leading-[100%]">{`Family `}</div>
              <div className="flex-1 relative rounded-980xl bg-gray-1100 h-0.5 overflow-hidden" />
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-gray-900">
              <div className="w-60 rounded-lg flex flex-row items-center justify-start py-2.5 px-6 box-border">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%]">
                  Sharmas
                </div>
              </div>
              <div className="w-60 rounded-lg flex flex-row items-center justify-start py-2.5 px-6 box-border">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%]">
                  Kumar and family
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6">
            <div className="self-stretch flex flex-row items-center justify-center gap-3">
              <div className="flex-1 relative rounded-980xl bg-gray-1100 h-0.5 overflow-hidden" />
              <div className="relative tracking-[0.06em] leading-[100%]">{`Events `}</div>
              <div className="flex-1 relative rounded-980xl bg-gray-1100 h-0.5 overflow-hidden" />
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-gray-900">
              <div className="w-60 rounded-lg flex flex-row items-center justify-start py-2.5 px-6 box-border">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%]">
                  Viraj Birthday
                </div>
              </div>
              <div className="w-60 rounded-lg flex flex-row items-center justify-start py-2.5 px-6 box-border">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%]">
                  DigiFest
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-6">
            <div className="self-stretch flex flex-row items-center justify-center gap-3">
              <div className="flex-1 relative rounded-980xl bg-gray-1100 h-0.5 overflow-hidden" />
              <div className="relative tracking-[0.06em] leading-[100%]">
                LIfestyle
              </div>
              <div className="flex-1 relative rounded-980xl bg-gray-1100 h-0.5 overflow-hidden" />
            </div>
            <div className="flex flex-col items-start justify-start gap-2 text-gray-900">
              <div className="w-60 rounded-lg flex flex-row items-center justify-start py-2.5 px-6 box-border">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%]">
                  Landscapes
                </div>
              </div>
              <div className="w-60 rounded-lg flex flex-row items-center justify-start py-2.5 px-6 box-border">
                <div className="flex-1 relative tracking-[0.06em] leading-[145%]">
                  Cityscapes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent5 />
    </div>
  );
};

export default Gallery;
