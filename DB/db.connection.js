import mongoose from "mongoose"

export const dbConnection = async () => {
    await mongoose.connect("mongodb+srv://muhammadalansari356:THqY6QQL2siYjWoB@cluster0.ymmfgce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
        console.log("db connect success");
    }).catch((err) => {
        console.log("db connect fail");
    })
}