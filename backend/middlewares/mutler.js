import multer from "multer";

const storage = multer.memoryStorage(); // Here we are using local storage to store the file in memory  
export const singleUpload = multer({storage}).single("file"); // Here we are using single upload to upload the file and the name of the file is file
