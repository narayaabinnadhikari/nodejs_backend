import express from "express"
import cors from "cors";
import "dotenv/config.js"


const app = express();
const port = 3000;

import weather from "./weather/index.js"

app.use(express.json());

app.use(cors());

//test route
app.get("/", (req,res) => res.json({success: "Hello !!!!!",
    test: "This is mock json"
}));

//weather route
app.use("/weather", weather);

app.listen(port, ()=> console.log(`App is listening on port ${port}`));