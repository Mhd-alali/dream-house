import React from "react";
import { Card } from "./card";

export function Section({ section, properties }) {


  return (
    <>
      <section>
        <div className='border-gray-300 border-b-2'>
          <h4 className="text-3xl container font-bold py-2">{section}</h4>
        </div>
        <div className="container mt-8 grid md:grid-cols-3 gap-5">
          {properties && properties.map((property) => <Card ID={property.id} key={property.id} area={property.area} description={property.description} name={property.name} type={property.type} occupancy={property.occupancy} imgSrc={`${process.env.REACT_APP_PROPERTY_API}/${property.image.image}`} />)}
          {/* <div className='flex justify-center my-5 md:col-span-3'>
          <Button onClick={()=>console.log(section)} className="px-10 py-3" type="primary">Load More</Button>
        </div> */}
        </div>
      </section>
    </>
  );
}