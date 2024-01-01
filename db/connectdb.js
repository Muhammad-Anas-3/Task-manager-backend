import mongoose from "mongoose";

const connectDb = (url) => {
    return mongoose
        .connect(url)
        .then(() => console.log("COnnected to mongo-Db..."))
        .catch((err) => console.log(err, "Not connected"))
}

export default connectDb 