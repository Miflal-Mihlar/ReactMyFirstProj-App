import React from "react";
import Tittle from "./Tittle";
import { service } from "./data";
import Service from "./Service";

function Services() {
  return (
    <section className="section services" id="services">
      <Tittle tittle={"our"} subTittle={"services"} />
      <div className="section-center services-center">
        {service.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
}

export default Services;
