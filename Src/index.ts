import express, {Application } from "express";


const app: Application = express();

const port: number = 2006

app.use(express.json());

app.listen(port, () => {
    console.log("Server is connected");
});