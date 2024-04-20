import React from "react";
import m1 from './../Assets/6.jpg';
import m2 from './../Assets/4.jpg';
import m3 from './../Assets/5.jpg';
import m4 from './../Assets/7.jpg';
import "./DestinationStyles.css"
function Destination() {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>here is popular Destination</p>
      <div className="first-des">
        <div className="dest-text">
          <h2>Taal Volcano</h2>
          <p>
            In CSS, "transform" is a property that allows you to modify the
            appearance of an element by applying various transformations like
            scaling, rotating, skewing, or translating it in 2D or 3D space. The
            "transform" property doesn't affect the layout of the document; it
            only changes the visual presentation of the element. Here are some
            common transformations you can apply using the "transform" property:
          </p>
        </div>
        <div className="image1">
          <img alt="img" src={m1}></img>
          <img alt="img" src={m3}></img>
        </div>
      </div>
      <div className="first-des-reverse">
        <div className="dest-text">
          <h2>Taal Volcano</h2>
          <p>
            In CSS, "transform" is a property that allows you to modify the
            appearance of an element by applying various transformations like
            scaling, rotating, skewing, or translating it in 2D or 3D space. The
            "transform" property doesn't affect the layout of the document; it
            only changes the visual presentation of the element. Here are some
            common transformations you can apply using the "transform" property:
          </p>
        </div>
        <div className="image1">
          <img alt="img" src={m1}></img>
          <img alt="img" src={m3}></img>
        </div>
      </div>
    </div>
  );
}

export default Destination;
