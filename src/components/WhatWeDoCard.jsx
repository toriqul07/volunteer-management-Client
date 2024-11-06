const WhatWeDoCard = ({ title, desc, img }) => {
  return (
    <div className=" p-6 bg-slate-50   dark:bg-gray-700 ">
      <figure className="mb-5">
        <img className="size-14" src={img} />
      </figure>
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {desc}
      </p>
    </div>
  );
};

export default WhatWeDoCard;
