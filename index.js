// make an express application
// attach port to that application
import express, { json } from "express";
import firstRouter from "./src/router/firstRouter.js";

let expressApp = express();
expressApp.use(json());

expressApp.listen(8000, () => {
  console.log("express application is listening at port 8000");
});

expressApp.use(firstRouter);

// url = localhost:8000/product?address=gagalphedi
// url = route?query
// route = localhost:8000/product/a/b
// route = baserUrl/routeParameter1/routeParameter2
