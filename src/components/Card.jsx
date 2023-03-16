import React from "react";

export const Card = () => {
  return (
    <div>
      <div className="card mt-3" style={{width: "18rem"}}>
        <img src="https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/6:4/w_3756,h_2504,c_limit/Smashburger-recipe-120219.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to </p>
          <div className="container w-100 ">
            <select className="m-2 h-100 bg-success rounded">
                {
                    Array.from(Array(6),(e,i)=>{
                        return (
                            <option key = {i+1} value = {i+1} >{i+1}</option>
                        )
                    })
                }
            </select>
            <select className="m-2 h-100 bg-success rounded">
                <option value = "half">half</option>
                <option value = "full">full</option>
            </select>
            <div className="d-inline h-100 fs-5">
                Total Price
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
