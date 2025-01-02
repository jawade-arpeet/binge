import mongoose from "mongoose";

async function connectDB() {
  const connectionURL = process.env.MONGODB_URL as string;

  try {
    await mongoose.connect(connectionURL);
    console.log("Connected to the database");
  } catch (err) {
    console.error(err);
  }
}

export default connectDB;
