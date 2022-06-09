const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');

//connected to mongo
connectToMongo();

const app = express();
const port = process.env.PORT || 5000;

//middleware functions
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//route
app.get('/',(req,res)=>{
    res.send("hello")
})
app.use('/', require('./loanRoute'));

if (process.env.NODE_ENV== "production")
{ 
    app.use(express.static("build"));
    const path=require("path");
    // app.get("*", (req, res) =>{ 
    //     res.sendFile(path.resolve(dirname, 'client", "build", "index.html'));
    // })
}

// listening the express app
app.listen(
    port,
    () => {
        console.log('express app listening');
    }
);