import VuesaxlineararrowLeftIcon from "../components/VuesaxlineararrowLeftIcon";

const Frame2 = () => {
  return (
    <div className="w-full relative flex flex-row items-center justify-start gap-14 opacity-[0.2] text-center text-lg text-springgreen font-lexend">
      <VuesaxlineararrowLeftIcon vuesaxlineararrowLeft="/vuesaxlineararrowleft.svg" />
      <div className="flex flex-row items-center justify-center gap-[42px]">
        <div className="rounded-3xl border-gray-1100 border-[1px] border-solid flex flex-row items-center justify-start p-2">
          <img
            className="w-[254px] relative rounded-2xl h-[368px] overflow-hidden shrink-0 object-cover"
            alt=""
            src="/frame-3043878@2x.png"
          />
        </div>
        <div className="w-[486px] flex flex-col items-start justify-start gap-8">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="relative tracking-[0.3em] leading-[145%] uppercase">
              Jane Doe
            </div>
          </div>
          <div className="w-[486px] relative rounded-980xl bg-gray-700 h-px overflow-hidden shrink-0" />
          <div className="self-stretch flex flex-col items-start justify-start gap-4 text-left text-5xl text-white font-bebas-neue">
            <div className="self-stretch relative tracking-[1px] leading-[120%]">
              “Took some amazing photos of my child’s first birthday. They
              create memories we can look back to“
            </div>
            <div className="self-stretch relative text-lg leading-[145%] font-lexend text-gray-1200">
              “Working with The Moments was such an incredible experience! The
              photographers were so friendly and made us feel comfortable the
              entire time. The final photos were absolutely stunning, capturing
              every special moment beautifully. We’ll definitely be coming back
              for more photos in the future”
            </div>
          </div>
        </div>
      </div>
      <VuesaxlineararrowLeftIcon vuesaxlineararrowLeft="/vuesaxlineararrowleft1@2x.png" />
    </div>
  );
};

export default Frame2;
