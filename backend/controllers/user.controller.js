import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;

<<<<<<< HEAD
    if (!fullname || !email || !phoneNumber || !password || !role) {
=======
    if (!fullname || !email || !phoneNumber || !password) {
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
<<<<<<< HEAD
    const file = req.file;
    // console.log(req.file);
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

=======
    // image upload
    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);

    // check if user already exist
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exist with this email.",
        success: false,
      });
    }
<<<<<<< HEAD
=======
    // bcrypt password or hash password
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      fullname,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {
        profilePhoto: cloudResponse.secure_url,
      },
    });

    return res.status(201).json({
      message: "Account created successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password.",
        success: false,
      });
    }
    // check role is correct or not
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with current role.",
        success: false,
      });
    }

    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
<<<<<<< HEAD
      expiresIn: "1d",
=======
      expiresIn: "5d",
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "None",
        secure: true,
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
  }
};
export const logout = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;

    const file = req.file;
    // cloudinary ka code
<<<<<<< HEAD
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
=======
    const fileUri = getDataUri(file); // Here we are using datauri to convert the file to base64 and get the content of the file
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content); // Here we are uploading the file to cloudinary and getting the response as cloudResponse
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)

    let skillsArray;
    if (skills) {
      skillsArray = skills.split(",");
    }
    const userId = req.id; // middleware authentication
    let user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "User not found.",
        success: false,
      });
    }
<<<<<<< HEAD
    // updating data
=======
    // Here we are updating the user profile with the data we got from the request body
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;

    // resume comes later here...
    if (cloudResponse) {
      user.profile.resume = cloudResponse.secure_url; // save the cloudinary url
      user.profile.resumeOriginalName = file.originalname; // Save the original file name
    }

<<<<<<< HEAD
    await user.save();

=======
    // here we are saving the user data to the database
    await user.save();

    // Here we are sending the user data back to the client
    // after updating the profile
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res.status(200).json({
      message: "Profile updated successfully.",
      user,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
