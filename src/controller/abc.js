export let Createuser= async (req,res)=>{
    let data= req.data;
    let password= data.password;
    try {
        let hashpassword= await bcrypt.hash(password,10);
        let data.password=hashpassword;
        let result: await User.Create(data);
        res.json({
            success: true,
            message:" password has been hashed",
            result:result
        })  
    } 
 
    catch (error) {
        
    }
    

}