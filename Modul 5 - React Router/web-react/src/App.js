import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import Button from "react";
//import { Button } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import React from "react";

// Tugas
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function NestingAuthExample() {
  return(
    <Router>
      <Navbar variant="light" style={{backgroundColor: "aquamarine"}}>
        <Container>
        <Navbar.Brand href="#home" >Vega's Store</Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/product">Product</Nav.Link>
          {/* <Nav.Item>
            <AuthButton />
          </Nav.Item> */}
          <Nav.Link href="#"><AuthButton /></Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      <div className="bghome">
        <br></br>
        <div class="text-center">
          <h4>Let's Buy The Clothes</h4>
        </div>
      </div>
      <hr />

      <Switch>
        <Route  path="/home">
          <Home />
        </Route>
        <Route  path="/login">
          <LoginPage />
        </Route>
        <Route  path="/product">
          <Product />
        </Route>
        <PrivateRoute path="/private">
          <ProtectedPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

const fakeAuth={
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100);
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

function AuthButton() {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: {pathname: "/"}};

  return fakeAuth.isAuthenticated ? (
      <p
        onClick={() => {
          fakeAuth.signout(() => history.push(from));
        }}
      >
        Sign out
      </p>
  ) : (
    <p>You are not logged in.</p>
  );
}

function PrivateRoute({children, ...rest}){
  return (
    <Route
    {...rest}
    render={({ location }) =>
    fakeAuth.isAuthenticated ? (
      children
    ) : (
      <Redirect
      to={{
        pathname: "/login",
        state: {from:location}
      }}
      />
    )
    }
    />
  );
}

function ProtectedPage() {
  return <h3>Private</h3>;
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: {pathname: "/product"}};
  let login = () => {
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <center>
      <p>Login to see our products {from.pathname}</p>
      <button type="button" class="btn btn-primary" onClick={login}>Log in</button>
      </center>
    </div>
  );
}

function Home(){
  const isLoggedIn = fakeAuth.isAuthenticated;
  return(
    <div>
      <center>
          <div class="container">
          <h1> WELCOME ! </h1>
            <img src="https://cdn.shopify.com/s/files/1/0028/6132/files/pic_1_of_11_1440x.jpg?v=1611176847" width="650px"
          alt="content"/>
          <br></br><p>BUY YOUR FASHION</p>
        </div>
      </center>
    </div>
  );
}

function Product(){
  let { path, url } = useRouteMatch();
  const isLoggedIn = fakeAuth.isAuthenticated;
  if (isLoggedIn == true) {
    return(
      <div>
        <center>
          <h4>All Product</h4>
          <div class="card card-group">
            <div class="card">
            <Link to={`${url}/Kemeja Rp. 350.000`}>
              <img src="https://cdn.shopify.com/s/files/1/0028/6132/products/20201215-3sixteen-flannel-bw-1_540x.jpg?v=1610556256" width="350px"
              alt="product1" /><br></br>
              <h5>SHIRT</h5>

            </Link>
            </div>

            <div class="card">
            <Link to={`${url}/Bucket Hat Premium Rp. 150.000`}>
              <img src="https://cdn.shopify.com/s/files/1/0028/6132/products/CamoBucket-1_330x.jpg?v=1607813757"
              alt="Product2" /><br></br>
              <h5>BUCKET HAT</h5>
              </Link>
            </div>

            <div class="card">
            <Link to={`${url}/Blue Jeans Rp. 650.000`}>
              <img src="https://cdn.shopify.com/s/files/1/0028/6132/products/20201015-3sixteen-fatiguepant-model-blue-1_720x960_crop_center.jpg?v=1605551462" width="250px"
              alt="Product3" /><br></br>
              <h5>PANTS</h5>
              </Link>
              <br></br>
              <br/>
            </div>
          </div>
          <br></br>

          <div className="bgLink">
          <Switch>
            <Route exact path="{path}">
              <h3>Buy your Fashion!</h3>
            </Route>

            <Route path={`${path}/:productId`}>
                <Products />
            </Route>
          </Switch>
          </div>
        </center>
      </div>
    );
  }
  return (
    <div>
      <center>
        <h2>FASHION STORE</h2>
      <Link to="/login">
      <button className="btn btn-warning">Go to login page</button>
      </Link>
      </center>
    </div>
  );
}

function Products(){
  let {product} = useParams();

  return (
    <div>
      <h3>{product}</h3>
    </div>
  );
}

// PRAKTIKUM
//Basic Router
// import React from "react";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
//   useParams
//   // useRouteMatch,
//   // useLocation,
//   // Redirect,
//   // useHistory,
//   // withRouter
// } from "react-router-dom";


// export default function BasicExample()
// {
//   return(
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/dashboard">Dashboard</Link>
//         </li>
//       </ul>
//     <hr />
//     <Switch>
//       <Route exact path="/">
//         <Home />
//       </Route>
//       <Route exact path="/about">
//         <About />
//       </Route>
//       <Route exact path="/dashboard">
//         <Dashboard />
//       </Route>
//     </Switch>
//     </div>
//   </Router>
//   );
// }

// function Home(){
//   return(
//     <div>
//       <h2>
//         Home
//       </h2>
//     </div>
//   );
// }

// function About(){
//   return(
//     <div>
//       <h2>
//         About
//       </h2>
//     </div>
//   );
// }

// function Dashboard(){
//   return(
//     <div>
//       <h2>
//         Dashboard
//       </h2>
//     </div>
//   );
// }

//

//URL Parameters
// import React from "react";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams
//   } from "react-router-dom";

// export default function ParamsExample(){
//   return(
//     <Router>
//         <div>
//           <h2>Accounts</h2>
//           <ul>
//             <li>
//               <Link to="/netflix">Netflix</Link>
//             </li>
//            <li>
//               <Link to="/gmail">Gmail</Link>
//             </li>
//             <li>
//              <Link to="/yahoo">Yahoo</Link>
//             </li>
//             <li>
//              <Link to="/amazon">Amazon</Link>
//             </li>
//           </ul>
//         <hr />
//           <Switch>
//             <Route path="/:id" children={<Child />} />
//           </Switch>
//         </div>
//       </Router>
//   );
// }

// function Child(){
//   let { id } = useParams();

//   return(
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

// Nesting Router
// import React from "react";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams
//   } from "react-router-dom";

// import { useRouteMatch } from 'react-router-dom';
//   export default function () {
//     return(
//     <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/topics">Topics</Link>
//         </li>
//       </ul>
//     <hr />
//     <Switch>
//       <Route exact path="/">
//         <Home />
//       </Route>
//       <Route path="/topics">
//         <Topics />
//       </Route>
//     </Switch>
//     </div>
//   </Router>
//     );
//   }

// function Home()
// {
//   return(
//     <div>
//       <h2>Home</h2>
//     </div>
//   );
// }

// function Topics(){
//   let { path, url } = useRouteMatch();
//   return(
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi Goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>

//       <Switch>
//         <Route exact path={path}>
//           <h3>Please Select a topic</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//     </Switch>
//     </div>
//   );
// }

// function Topic(){
//   let {topicId} = useParams();

//   return(
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }

//Use Redirects (AUTH)
// import React from "react";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   Redirect,
//   useLocation,
//   useHistory,
//   withRouter
// } from "react-router-dom";

// export default function AuthExample() {
//   return (
//     <Router>
//       <div>
//         <AuthButton />

//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/private">Private Page</Link>
//           </li>
//         </ul>

//         <Switch>
//           <Route path="/public">
//             <PublicPage/>
//           </Route>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <PrivateRoute path="/private">
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb) {
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
//   signout(cb) {
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };

// // function AuthButton(){
// //   let history = useHistory();

// //   return fakeAuth.isAuthenticated ? (
// //     <p>
// //       Welcome!{" "}
// //       <button
// //         onClick={() => {
// //           fakeAuth.signout(() => history.push("/"));
// //         }}
// //       >
// //         Sign out
// //       </button>
// //     </p>
// //   ) : (
// //     <p>You are not logged in.</p>
// //   );
// // }

// const AuthButton = withRouter(({ history }) =>
//   fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button
//       onClick={() => {
//         fakeAuth.signot(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p>You are not logged in.</p>
//   )
// );

// function PrivateRoute({ children, ...rest}){
//   return (
//     <Route
//       {...rest}
//       render={({ location }) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from:location }
//             }}
//           />
//         )
//       }
//      />
//   );
// }

// function PublicPage() {
//   return <h3>Public</h3>;
// }

// function ProtectedPage() {
//   return <h3>Private</h3>;
// }

// function LoginPage() {
//   let history = useHistory();
//   let location = useLocation();

//   let { from } = location.state || { from: {pathname: "/"} };
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };

//   return (
//     <div>
//       <p>You must log in to view the page at {from.pathname}</p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }
