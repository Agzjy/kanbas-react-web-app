// 2.1.2
import Nav from "../Nav";
import Assignment3 from "./a3";
import Assignment4 from "./a4";
import {Routes, Route, Navigate} from "react-router";
import React from 'react';
import store from "./store";
import { Provider } from "react-redux";

function Labs() {
 return (
  <Provider store={store}>
   <div>
     <Nav/>
     <Routes>
       <Route path="/"
        element={<Navigate
                  to="a3"/>}/>
       <Route path="a3"
        element={<Assignment3/>}/>
       <Route path="a4"
        element={<Assignment4/>}/>
     </Routes>
   </div>
   </Provider>
 );
}

export default Labs;

// function Labs() {
//  return (
//    <div className="container">
//     <Nav/>
//      {/* <h1>Assignment 3</h1> */}
//      <Link to="/hello">Hello</Link> |
//     <Link to="/Labs/a3">A3</Link> |
//     <Link to="/Kanbas">Kanbas</Link>
//      <Assignment3/>
//    </div>
//  );
// }
// export default Labs;