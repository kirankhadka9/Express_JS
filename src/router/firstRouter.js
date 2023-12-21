import { Router } from "express";

// Create an instance of the Express Router
let firstRouter = Router();


// Define a route for the path "/"
firstRouter.route("/") // This represents the route for localhost:8000
  .post((req, res,next) => {
    // Handle the POST request for the specified route
     // Respond with a JSON message "home post"
    req.name="This is Data";
    req.age=23;
    req.address="sankhamul";
    next();
  },
  (req,res)=>{
    console.log(req.name)
    console.log(req.age)
    console.log(req.address)
    res.json("home post")
  }
  );
  export default firstRouter;
    //A request must have one and only response.

//localhost:8000/name



// url=localhost:8000,post at response "home post"
// url=localhost:8000,get at response "home get"
// url=localhost:8000,patch at response "home patch"
// url=localhost:8000,delete at response "home delete"

// url=localhost:8000/name,post at response "name post"
// 			url=localhost:8000/name,get at response "name get"
// 			url=localhost:8000/name,patch at response "name patch"
// 			url=localhost:8000/name,delete at response "name delete"

// making api
// defining task for each request is called making api

//ctr+E
//Ctr+D

//send data from postman
// get data
//req.body
//req.query
// req.param

// route parameter
