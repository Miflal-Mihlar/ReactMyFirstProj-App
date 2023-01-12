import React from "react";
import Tittle from "./Tittle";
import { tours } from "./data";
import Tour from "./Tour";

function Tours() {
  return (
    <section className="section" id="tours">
      <Tittle tittle={"featured"} subTittle={"tours"} />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
}

export default Tours;
