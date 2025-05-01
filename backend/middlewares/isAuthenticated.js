import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
<<<<<<< HEAD
    const token = req.cookies.token;
    console.log(token);
=======
    const token = req.cookies.token; // Here we are getting the token from the cookies or from 
    // agar token nahi hai to user ko unauthorized kar do
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
    if (!token) {
      return res.status(401).json({
        message: "User not authenticated",
        success: false,
      });
    }
<<<<<<< HEAD
    const decode = await jwt.verify(token, process.env.SECRET_KEY);
    console.log(decode);
=======
    // token milne ke baad verify karte hain 
    // jwt.verity hame result me decode karega 
    const decode = await jwt.verify(token, process.env.SECRET_KEY);   
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
    if (!decode) {
      return res.status(401).json({
        message: "Invalid token",
        success: false,
      });
    }
<<<<<<< HEAD
    req.id = decode.userId;
=======
    req.id = decode.userId; // Hamne decode kiya hua token ko req.id me store kar diya
    // taaki ham is id ko aage use kar sake 
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
    next();
  } catch (error) {
    console.log(error);
  }
};
export default isAuthenticated;
