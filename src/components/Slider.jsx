import PropTypes from "prop-types";

const Slider = ({ title1st, title2nd, desc, photo }) => {
  return (
    <header className="rounded-lg overflow-hidden">
      <div
        className="w-full bg-center bg-cover h-[32rem]"
        style={{
          backgroundImage: `url('${photo}')`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
          <div className="text-center">
            <h1 className="text-white font-extrabold tracking-wide text-[clamp(32px,5vw,60px)] mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-purple-600 from-pink-400">
                {title1st}
              </span>{" "}
              {title2nd}
            </h1>
            <p className="text-neutral-50 md:text-lg max-w-2xl">{desc}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

Slider.propTypes = {
  title1st: PropTypes.string,
  title2nd: PropTypes.string,
  desc: PropTypes.string,
  photo: PropTypes.string,
};

export default Slider;
