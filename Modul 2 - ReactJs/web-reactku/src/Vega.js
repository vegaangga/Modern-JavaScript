//import React, { useState } from "react";
import "./Vega.css";
import jogja from "./image/jogja.jpg"


function Vega() {
  return (
    // <div style={{
    //     backgroundImage: "url(/jogja.jpg)",
    //     backgroundRepeat: 'no-repeat',
    //     }}>
    //        <h1>Hello</h1>
    // </div>
     <div className="App">
           <h1>Hallo Selamat Siang</h1>
           <p>Nama: Vega Anggaresta</p>
           <div>
               <img src={jogja} className="jogja" alt="jogja"/>
           </div>

    </div>
  );

}

export default Vega;