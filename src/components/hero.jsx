import React from "react";
import { Button } from "./button"

import { ReactComponent as Arrow } from '../assets/icons/arrow.svg'
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="container min-h-[70vh] grid sm:grid-cols-2 grid-cols-1 grid-rows-1">
      <div className="w-full max-w-lg flex flex-col justify-center space-y-5">
        <h1 className="text-6xl font-bold">Find Your Dream Home Today</h1>
        <p className="font-bold text-md w-4/5">Explore and discover beautiful houses that match your lifestyle and budget. From cozy apartments to luxurious estates, we have something for everyone.</p>
        <Button type="primary" className="w-fit group hover:text-white">
          <Link to="/about">
            <span className="inline-block transition-all ease-in-out duration-300 translate-x-4 group-hover:translate-x-0">Know more</span>
            <span className="inline-block transition-all ease-out duration-300 translate-y-1 -translate-x-full group-hover:delay-200 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
              <Arrow />
            </span>
          </Link>
        </Button>
      </div>
      <div className="invisible sm:visible h-0 sm:h-auto relative flex items-center justify-center">
        <img src="./img/building-2.jpg" alt="" className="aspect-[1.2/1] rounded-2xl object-cover" />
      </div>
    </div>
  );
}
