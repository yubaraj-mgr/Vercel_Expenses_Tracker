import mongoose from "mongoose";

export const connectDB = () => {
  try {
    console.log("Hello "+process.env.MONGO_CLIENT)
    const conn = mongoose.connect("mongodb+srv://expensesTrackerdb:Lfy9oel8A1cXJ556@cluster0.ce1pwku.mongodb.net/?retryWrites=true&w=majority");
    if (conn) {
      console.log("MongoDB connected");
    }
  } catch (error) {
    console.log(error);
  }
};
