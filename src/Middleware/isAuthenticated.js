import { secretkey } from "../../constant";
import jwt from "jsonwebtoken";


export let isAuthenticated = (req, res, next) => {
let bearerToken = req.headers.authorization;
let token = bearerToken.split(" ")[1];

try {

let infoObj = jwt.verify(token, secretkey);
let id = infoObj.id;
req.id = id;
next();
}
catch(error){
    res.json({
        success: false,
        message: error.message,
    })
}
}