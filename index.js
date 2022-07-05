const express = require('express');

const index = express();
const port = 3000;

const usersRouter = require("./routes/users");

index.use(express.json());
index.use(express.urlencoded({extended: true}));

index.get("/",(req, res) => {res.json({message:"ok"});});

index.use("/Users",usersRouter);
index.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({message:err.message});
    return;
});

index.listen(port,()=> {
    console.log("App Listening at: http://localhost:3000");
});