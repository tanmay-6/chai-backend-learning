//require('dotenv').config({path: './.env'}); //do work normally
import dotenv from 'dotenv';
import connectDB from './db/index.js';

dotenv.config({ path: './.env' });

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log("Server is listening on port : ", process.env.PORT);

        })
    })
    .catch((error) => {
        console.log("MongoDb Connection failed : ", error);
    })






/*
import express from 'express';
const app = express();

; (async () => {
    try {
        mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        app.on("errror", (error) => {
            console.log("ERRR : ", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log("Server is listening on port : ", process.env.PORT);
        })
    }
    catch (error) {
        console.error(error);
        throw error;
    }
})()
*/