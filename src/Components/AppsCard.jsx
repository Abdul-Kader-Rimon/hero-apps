import React from 'react';
import { IoMdDownload } from 'react-icons/io';
import { IoStar } from "react-icons/io5";
const AppsCard = ({ apps }) => {
    const {title,image,downloads,ratingAvg} = apps
    console.log(apps)
    return (
      <div className="card bg-base-100   shadow-sm hover:scale-105 transition ease-in-out rounded-xl">
        <figure className="h-52  flex items-center justify-center overflow-hidden">
          <img src={image} alt={title} />
        </figure>
        <div className="card-body flex flex-col flex-1">
          <h2 className="card-title">{title}</h2>
          <div className="card-actions justify-between">
            <div className="badge   p-4 text-lg font-semibold text-green-600 bg-green-200 ">
              <IoMdDownload />
              {downloads}
            </div>
            <div className="badge  p-4 text-lg font-semibold text-amber-600 bg-amber-200">
              <IoStar /> {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    );
};

export default AppsCard;