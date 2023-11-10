import mongoose from "mongoose";

const connectDB = async (uri) => {
  return mongoose
    .connect(uri)
    .then((connection) => {
      console.log("CONNECTED TO DB... ");
    })
    .catch((error) => {
      console.error("ERROR IN DB CONNECTION: ", error);
    });
};

export default connectDB;
