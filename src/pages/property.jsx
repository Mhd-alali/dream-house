import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { pageFade } from "../animation";
import { useEffect } from "react";
import { useState } from "react";
import { ReactComponent as House } from "../assets/icons/house-solid.svg";
import { ReactComponent as People } from "../assets/icons/people.svg";
import { ReactComponent as Dollar } from "../assets/icons/dollar-sign-solid.svg";
import { getPropertyInfo } from '../api/properties';
function Property() {
  const { id } = useParams();
  const [property, setProperty] = useState();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    (async () => {
      setProperty(await getPropertyInfo(id));
    })();

  }, [id]);

  useEffect(() => {
    console.log(property);
  }, [property]);

  return (
    <motion.div variants={pageFade} initial="from" animate="to" exit="exit" className="bg-white min-h-screen mb-10 container ">
      {property && <><div className="mb-5 flex items-center space-x-3">
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold text-4xl">{property.name} - {property.area}</h1>
          <div className="flex space-x-1">
            <div className="bg-secondary-100 text-secondary-200 text-xs font-bold rounded p-1 translate-y-1 w-max">
              <p className="flex items-center gap-1"><House />Property Type : {property.type}</p>
            </div>
            <div className="bg-secondary-100 text-secondary-200 text-xs font-bold rounded p-1 translate-y-1 w-max">
              <p className="flex items-center  gap-1"><People />Occupancy : {property.occupancy}</p>
            </div>
            <div className="bg-secondary-100 text-secondary-200 text-xs font-bold rounded p-1 translate-y-1 w-max">
              <p className="flex items-center gap-1"><Dollar />Price : {property.price}</p>
            </div>
          </div>
        </div>
      </div>

        <img src={`${process.env.REACT_APP_PROPERTY_API}/${property.image.image}`} alt="" className="h-96 object-cover rounded-lg mb-10 w-full" />

        <h3 className="text-3xl my-5 pb-3 border-b border-b-slate-500">Description</h3>
        <div className="text-md font-medium">
          <p style={{ letterSpacing: "0.005em", lineHeight: "1.25", wordSpacing: ".75px", width: "100%" }}>
            {property.description}
          </p>
        </div>
      </>}
    </motion.div>
  );
}

export default Property;
