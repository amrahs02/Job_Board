<<<<<<< HEAD
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
//CONNECT TO DATABASE
import connectDB from "./utils/db.js";
//ROUTES
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config({});

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

const corsOptions = {
    origin: 'https://jobboardwebapp.onrender.com',
    // origin: "http://localhost:5173",
    credentials:true
}
app.use(cors(corsOptions));


//PORT
const PORT = process.env.PORT || 3000;


// api's
app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);



//LISTEN TO PORT
app.listen(PORT,()=>{
    connectDB();
    console.log(`Server running at port ${PORT}`);
})
=======
// index.js
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import app from "./app.js";

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
>>>>>>> 74b4927 (initialize frontend and backend structure with essential configurations and components)
