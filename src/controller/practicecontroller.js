export const userLogin = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    try {
        let user = await Practice.findOne({ email: email }); // Fix: Wrap email: email in curly braces
        if (user === null) {
            res.json({
                success: false,
                message: "Email or password does not match",
            });
        } else {
            let hashpassword = user.password;
            let isValidpassword = await bcrypt.compare(password, hashpassword); // Fix: Add 'await' before bcrypt.compare
            if (isValidpassword) {
                res.json({
                    success: true,
                    message: "User Logged in successfully",
                });
            } else {
                res.json({
                    success: false,
                    message: "Email or password does not match",
                });
            }
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};
