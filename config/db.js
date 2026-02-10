import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.set("runValidators", true); // 🔥 always validate updates

    await mongoose.connect(process.env.DATABASE_URL);

    console.log("✅ MongoDB connected");
  } catch (error) {
    console.error("❌ MongoDB connection failed", error.message);
    process.exit(1);
  }
};

export default connectDB;
