import { User} from "../../smodel/model.js";
import bcrypt from "bcrypt";
import { sendemail } from "../utils/sendemail.js";
import jwt from "jsonwebtoken";
import { secretkey } from "../../constant.js";

export let createUser =  async(req,res)=>{
        let userData= req.body
        let password= userData.password
        console.log(password)
       try {
        let hashpassword= await bcrypt.hash(password,10);
        userData.password= hashpassword;
           let result= await User.create(userData);
           
          await sendemail({
            from: "keyrankhadka9@gmail.com",
            to:[req.body.email],
            subject:"email verification",
            html:`<h1>Dear ${req.body.name}, You have Successfully registered</h1>`
           })
           
           res.status(201).json({
               success: true,
               message: "User Data is created successfully",
               result: result
       
           })
       } catch (error) {
    
           res.status(409).json({
               success: false,
               message: error.message,
           }) }
    
}


        //let result = await User.find({name:/kiran/}) This will get the output of those whose name "includes" kiran.
        //let result = await User.find({name:/kiran/i}) This will get the output of those whose name "includes" kiran but is case "insensitive".
        //i.e. uppercase and lowercase doesn't matter. 'i' stands for insensitive.
        //let result = await User.find({name:"kiran"}) //This will give the output of data which "is" exact kiran.
        //let result = await User.find({name:/kiran/}) This will give the output of data which "contains" exact "kiran"
        //let result =await User.find({age:"22"}) //This will find the data whose age is 22.
       // let result =await User.find({age:"92",isMarried:true}) //This will find the data whose age is 22 and is Married is false.
        //let result =await User.find({age:"22",name:"kiran"}) //This will find the data whose age is 22 and name is exactly kiran.
        //let result =await User.find({age:{$gt:"22"}}) //This will find the data whose age is greater than 22. gt is greater than.
        //let result =await User.find({age:{$lt:"30"}}) //This will find the data whose age is greater than 22. gt is greater than.
        //let result =await User.find({age:{$lt:"90"}}) //This will find the data whose age is greater than 22. gt is greater than.
        
        //To sort : 
        // For ascending :
        //let res= await User.find({}).sort("name")
        //For descending:
        //let res= await User.find({}).sort("-name")

        //Incase name is same, i will check age also
        // let res= await User.find({}).sort("name age")
        //let res= await User.find({}).sort("name -age")//This will sort name in asc order and age in des order



        //SKIP::
       // .find({}).skip("3")
       // .find({}).limit("3")
       // .find({}).skip("3").limit("5")
       // .find({}).limit("3").skip("5") ❎❎ skip will done and then limit

       //find,sort,select,skip,limit
       //let result=req.query
//        export let getUser =async (_req,res)=>{
//         try {
//         let result = await User.find({})//.select("name age -_id") //To read data of all the users
//         res.json({
//             success:true,
//             message: "Users read successfully",
//             result: result
//         })
//     } catch (error) {
//         res.json({
//         success:false,   
//         message: error.message
//         })
//     }
// }


  export let getUser=async (req,res)=>{
    let query=req.query
    try {
    let result= await User.find(query)
  res.status(201).json({
      success:true,
      message: "Users read successfully",
      result: result
  })
} catch (error) {
  res.json({
  success:false,
  message: error.message
  })
}
}
  
export let getByuserID = async(req,res)=>{
    let userId =req.params.userId
  try {
    let result = await User.findById(userId)
    res.json({
      success:true,
      message:"User read successfully",
      result:result
    })
  } catch (error) {
    res.json({
      success:false,
      message:error.message
  })
}
}
export let updateUser = async (req, res) =>{       //To update a specific ID
  let userId = req.params.userId;
  try{
      let result = await User.findByIdAndUpdate(userId,data)
      res.status(200).json({
          success: true,
          message: "user updated successfully.",
          result: result
      });
  }catch(error){
      res.status(409).json({
          success: false,
          message: error.message,
      });
  }
}

export let deleteUser = async(req,res)=>{
    let userId = req.params.userId;
    try {
        let result = await User.findByIdAndDelete(userId)
        res.json({
            success: true,
            message:"User deleted successfully",
            result: result
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
  }

export let userlogin=async(req,res)=>{

  let email =req.body.email;
  let password= req.body.password;

  try {
    let user = await User.findOne({email:email});
    let hashpassword = user.password
   
    if (user=== null){
      res.json({
        success:false,
        message:"Email or password does not match"
      })
    }
    
   else{
    let isValidpassword= await bcrypt.compare(password,hashpassword);
    if(isValidpassword)
    {
      let infoObj={
        id:user._id,
      };
     
      let expiryInfo={
        expiresIn:"365d",
      };
      let token= jwt.sign(infoObj,secretkey,expiryInfo);
      res.status(409).json({
        success:true,
        message: "User logged in successfully",
        result:token,
      });
    }
    else{
      res.json({
        success:false,
        message:"Email or password does not match",
      })
    }
  }
}
   catch (error) {

    res.json({
      success:false,
      message:"Email or password does not match",
    })
   }
  };

  export let myProfile=async(req,res)=>{
  let id=req.id;
  try{
      let result= await User.findById(id);
    res.json({
      success:true,
      message:"profile read successfully",
      result:result,
    });
    }
    catch(error)
    {
      res.json({
        success: false,
        message: error.message,
      });
    }
  };

export let updateMyProfile=async(req,res)=>{
      let id= req.id
      let data= req.body
    try{
      let result = await User.findByIdAndUpdate(id,data);
    res.json({
      success:true,
      message:"profile updated successfully.",
      result:result,
    })
    }
    catch(error){
      res.json({
          success: false,
          message: error.message,
        });
    }
    };

export let deleteMYProfile= async(req,res)=>{
     let id=req.id
    try{
      let result= await User.findByIdAndDelete(id);
      res.json({
        success: true,
        message: "Deleted successfully",
        result: result,
      });
    }
catch(error){
  res.json({
    success: true,
    message: error.message,
  })
}
}
//validate user, only if login credentials are correct which is sent through postman.

// if email didn't match => success: false, message:"email or password is not matched".
//if email exist :
//          check password match (using bcrypt comparison)
//          if password does not match  => success: false, message:"email or password is not matched".




//STATUS CODE
 //SUCCESS=> 2XXXX;
 // post,patch=>201
// get,delete=>200



// conflict=>409
// remaining errors=>400