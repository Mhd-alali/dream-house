import React from "react";
import { ReactComponent as People } from '../assets/icons/people.svg';

import { Link } from "react-router-dom";

export function Card({ ID = "", imgSrc, name, area, type, description, occupancy }) {
  
  return (
    <div className={'bg-white rounded overflow-hidden shadow-lg relative md:hover:-translate-y-[2px] transition'}>
      <Link to={`/${ID}`}>
        <div className="w-full h-2/3">
          <img src={imgSrc} alt="" className={"w-full h-full sm:aspect-auto object-cover"} />
        </div>
        <div className="m-4">
          <span className="font-bold whitespace-nowrap">{name} - {area}</span>
          <div className="">
            {description}
          </div>
        </div>
        <div className="bg-secondary-100 text-secondary-200 text-xs font-bold rounded p-1 absolute top-2 left-2">
          <span className="flex items-center gap-1">
            <People />
            <time className="whitespace-nowrap">{occupancy}</time>
          </span>
        </div>
      </Link>
    </div>
  );
}