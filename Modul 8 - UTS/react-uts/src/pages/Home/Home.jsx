import React from "react";
import { Carousel, Image } from "react-bootstrap";
import Productlist from "../../components/ProductList";
import { Link } from "react-router-dom";
import room from "../../assets/room.jpg";


const styles = {
  container: {
      backgroundImage: `url(${room})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
  }
};

const Home = () => {
  return (
    <>
    <div style={styles}>
      <h1 align="center">Welcome To Our Shop</h1>
    </div>

    <Image src={room} className="img-cover w-100" />
     
      <div className="col-md-8">
        <h2>Wind Free AC</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et est vitae sapien hendrerit mattis sit amet sed purus.
            Nunc commodo sapien risus, eget commodo libero molestie vel.Donec a tortor tincidunt, lacinia orci eget, feugiat leo.
            Etiam volutpat molestie tempor. Mauris id eros porttitor, hendrerit odio
            eget, laoreet mi. Vestibulum diam erat, scelerisque id eros nec, iaculis
            pulvinar arcu. Mauris vestibulum magna vitae molestie egestas. Vestibulum
            lobortis diam vel mauris rutrum, eget maximus purus lacinia. Sed et tellus
            vel nibh vestibulum pretium non sit amet tortor. Nulla in mattis ligula.
            Curabitur feugiat eros nec odio pretium ullamcorper.</p>
      </div>
      <div className="col-md-8">
        <Link className="nav-link" to="/product">
          <button className="btn btn-dark">Go to shop</button>
        </Link>
      </div>
      {/* <div className="my-5">
        <h1>Top Products</h1>
        <hr />
        <Productlist limit={4} />
      </div> */}
    </>
  );
};

export default Home;
