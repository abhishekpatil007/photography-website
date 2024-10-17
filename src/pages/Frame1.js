const Frame1 = () => {
  return (
    <div className="w-full relative flex flex-col items-start justify-start gap-3 opacity-[0.2] text-left text-lg text-springgreen font-lexend">
      <div className="self-stretch relative tracking-[0.3em] leading-[145%] uppercase">
        About us
      </div>
      <div className="self-stretch flex flex-row items-center justify-start gap-[186px] text-37xl text-white font-bebas-neue">
        <div className="w-[342px] flex flex-col items-start justify-start gap-12">
          <div className="self-stretch relative leading-[100%] uppercase">
            Meet The moments
          </div>
          <div className="rounded-980xl bg-white flex flex-row items-center justify-center py-3 px-6 text-center text-lg text-gray-100 font-lexend">
            <div className="relative leading-[145%]">Work with us</div>
          </div>
        </div>
        <div className="w-[714px] relative text-lg leading-[145%] font-lexend text-gray-1200 flex items-center shrink-0">
          Welcome to The Moments! We're a passionate group of photographers
          dedicated to freezing time through our lenses. Whether it's a wedding,
          family portrait, or just everyday life, we believe every moment
          deserves to be captured. Our friendly and experienced team loves
          making you feel comfortable in front of the camera so that your
          natural beauty shines through. Let us be a part of your story and help
          you hold on to your most precious memories forever.
        </div>
      </div>
    </div>
  );
};

export default Frame1;
