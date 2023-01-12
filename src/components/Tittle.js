import React from "react";

function Tittle({ tittle, subTittle }) {
  return (
    <div className="section-title">
      <h2>
        {tittle} <span>{subTittle}</span>
      </h2>
    </div>
  );
}

export default Tittle;
