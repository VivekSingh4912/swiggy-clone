import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import Restaurant from "./Components/Restaurants";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantMenu from "./Components/RestaurantMenu";
import SearchFood from "./Components/RestaurantMenu";
import SearchFood from "./Components/SearchFood";
import SecondaryHome from "./Components/SecondaryHome";
import { store } from "./Stored/stores";
import {Provider} from "react-redux"
import Checkout from "./Components/Checkout";


function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<SecondaryHome></SecondaryHome>}>
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/city/delhi/:id" element={<RestaurantMenu></RestaurantMenu>}></Route>
          <Route path="/city/delhi/:id/search" element={<SearchFood></SearchFood>}></Route> 
          </Route>
          <Route path="/Checkout" element={<Checkout></Checkout>}></Route>
          </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);


// import React,{ useState }from "react";
// import ReactDOM from "react-dom/client";
// import Home from "./Components/Home";

// import Restaurant from "./Components/Restaurants";
// import { BrowserRouter, Routes, Route } from "react-router";




// function App() {

//   return (
//     <>
//      <BrowserRouter>
//      <Routes>
//       <Route path="/" element={<Home></Home>}></Route>
//       <Route path="/restaurant" element={<Restaurant></Restaurant>}></Route>
//      </Routes>
//      </BrowserRouter>
//     </>
//   );
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);



// "https://cors-anywhere.herokuapp.com/";





// import React, {useState } from "react";
// import ReactDOM from "react-dom/client"

// function App(){

//     return(
//         <>
//         <div className="flex flex-wrap justify-center gap-10">
//          <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-4">
//              <div>
//                 <img className="w-full h-48 object-cover rounded-2xl"src="https://cdn.dnaindia.com/sites/default/files/2023/05/09/2588863-untitled-design-2023-05-09t173334.095.jpg?im=FitAndFill=(1200,900)"></img>
//             </div>
//                 <div className="mt-2 font-bold text-2xl text-gray-600">
//                     <h1>Biography</h1>
//                 </div>
//                 <div className="text-gray-500 mt-2">
//                     <p>Rohit Negi is very good boy, He is very poor because he operates Oppo</p>
//                 </div>
//                 <div className="mt-3 flex justify-center">
//                     <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800 ">Know More</button>
//                 </div>
//          </div> 

//           <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-4">
//              <div>
//                 <img className="w-full h-48 object-cover rounded-2xl"src="https://cdn.dnaindia.com/sites/default/files/2023/05/09/2588863-untitled-design-2023-05-09t173334.095.jpg?im=FitAndFill=(1200,900)"></img>
//             </div>
//                 <div className="mt-2 font-bold text-2xl text-gray-600">
//                     <h1>Biography</h1>
//                 </div>
//                 <div className="text-gray-500 mt-2">
//                     <p>Rohit Negi is very good boy, He is very poor because he operates Oppo</p>
//                 </div>
//                 <div className="mt-3 flex justify-center">
//                     <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800 ">Know More</button>
//                 </div>
//          </div> 

//           <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-4">
//              <div>
//                 <img className="w-full h-48 object-cover rounded-2xl"src="https://cdn.dnaindia.com/sites/default/files/2023/05/09/2588863-untitled-design-2023-05-09t173334.095.jpg?im=FitAndFill=(1200,900)"></img>
//             </div>
//                 <div className="mt-2 font-bold text-2xl text-gray-600">
//                     <h1>Biography</h1>
//                 </div>
//                 <div className="text-gray-500 mt-2">
//                     <p>Rohit Negi is very good boy, He is very poor because he operates Oppo</p>
//                 </div>
//                 <div className="mt-3 flex justify-center">
//                     <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800 ">Know More</button>
//                 </div>
//          </div> 

//           <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-4">
//              <div>
//                 <img className="w-full h-48 object-cover rounded-2xl"src="https://cdn.dnaindia.com/sites/default/files/2023/05/09/2588863-untitled-design-2023-05-09t173334.095.jpg?im=FitAndFill=(1200,900)"></img>
//             </div>
//                 <div className="mt-2 font-bold text-2xl text-gray-600">
//                     <h1>Biography</h1>
//                 </div>
//                 <div className="text-gray-500 mt-2">
//                     <p>Rohit Negi is very good boy, He is very poor because he operates Oppo</p>
//                 </div>
//                 <div className="mt-3 flex justify-center">
//                     <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800 ">Know More</button>
//                 </div>
//          </div> 

//           <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-4">
//              <div>
//                 <img className="w-full h-48 object-cover rounded-2xl"src="https://cdn.dnaindia.com/sites/default/files/2023/05/09/2588863-untitled-design-2023-05-09t173334.095.jpg?im=FitAndFill=(1200,900)"></img>
//             </div>
//                 <div className="mt-2 font-bold text-2xl text-gray-600">
//                     <h1>Biography</h1>
//                 </div>
//                 <div className="text-gray-500 mt-2">
//                     <p>Rohit Negi is very good boy, He is very poor because he operates Oppo</p>
//                 </div>
//                 <div className="mt-3 flex justify-center">
//                     <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800 ">Know More</button>
//                 </div>
//          </div> 

//           <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-4">
//              <div>
//                 <img className="w-full h-48 object-cover rounded-2xl"src="https://cdn.dnaindia.com/sites/default/files/2023/05/09/2588863-untitled-design-2023-05-09t173334.095.jpg?im=FitAndFill=(1200,900)"></img>
//             </div>
//                 <div className="mt-2 font-bold text-2xl text-gray-600">
//                     <h1>Biography</h1>
//                 </div>
//                 <div className="text-gray-500 mt-2">
//                     <p>Rohit Negi is very good boy, He is very poor because he operates Oppo</p>
//                 </div>
//                 <div className="mt-3 flex justify-center">
//                     <button className="bg-sky-500 p-1 rounded-xl text-white text-2xl hover:bg-sky-800 ">Know More</button>
//                 </div>
//          </div> 
//          </div>
//             </>
//     )
// }

// ReactDOM.createRoot(document.getElementById('root')).render(<App /> )
// 