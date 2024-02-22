import mongoose from "mongoose";

mongoose.connect("mongodb+srv://litterisinventum02:litterisinventum_02@cluster0.ogworrq.mongodb.net/livraria?retryWrites=true&w=majority" );
const db = mongoose.connection;

export default db;



