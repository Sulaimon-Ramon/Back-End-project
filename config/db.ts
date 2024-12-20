import mongoose from "mongoose";


const uri = "mongodb://127.0.0.1/eventdb"

const dbconnect = () => {
    try {
        const connect = mongoose.connect(uri);

        console.log("Db is connected successfully");
    } catch (error) {
        console.log(error);
    }
};

export default dbconnect;