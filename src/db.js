import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://root:root@mern.oslkrvj.mongodb.net/MERN?retryWrites=true&w=majority");
        console.log(">> DB Connect");
    } catch (error) {
        console.log(error);
    }
}
